import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Verify Razorpay signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    // Update payment status
    const { data: payment, error: updateError } = await supabase
      .from('payments')
      .update({
        razorpay_payment_id,
        razorpay_signature,
        status: 'paid',
        paid_at: new Date().toISOString()
      })
      .eq('razorpay_order_id', razorpay_order_id)
      .select()
      .single();

    if (updateError) throw updateError;

    // Send email with plan PDF
    await sendPlanEmail(payment);

    return res.status(200).json({ success: true, message: 'Payment verified, plan sent!' });
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({ error: 'Failed to verify payment' });
  }
}

async function sendPlanEmail(payment) {
  // Map plan types to PDF filenames
  const planPDFs = {
    'veg': 'veg-plan.pdf',
    'non-veg': 'non-veg-plan.pdf',
    'keto': 'keto-plan.pdf',
    '8-week': '8-week-plan.pdf',
    '12-week': '12-week-plan.pdf',
    '24-week': '24-week-plan.pdf',
    'annual': 'annual-plan.pdf'
  };

  const pdfFilename = planPDFs[payment.plan_type];
  const pdfPath = path.join(process.cwd(), 'public', 'plans', pdfFilename);

  // Read PDF file
  const pdfBuffer = fs.readFileSync(pdfPath);

  // Send email via Resend with your GoDaddy email
  await resend.emails.send({
    from: 'URS Kings Nutrition <diet@urs-kingsnutrition.com>',
    to: payment.customer_email,
    subject: `Your ${payment.plan_type.toUpperCase()} Plan - Welcome to Your Transformation!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #22c55e;">Welcome to Your Transformation Journey!</h1>
        
        <p>Hi <strong>${payment.customer_name}</strong>,</p>
        
        <p>🎉 Thank you for choosing URS Kings Nutrition! Your payment of <strong>₹${payment.amount}</strong> has been successfully received.</p>
        
        <p>Your personalized <strong>${payment.plan_type.toUpperCase()}</strong> plan is attached to this email as a PDF.</p>
        
        <h2 style="color: #f97316;">📋 Next Steps:</h2>
        <ol>
          <li>Download and review your plan PDF</li>
          <li>Join our WhatsApp group for daily support and tips</li>
          <li>Schedule your first check-in call</li>
          <li>Start your transformation today!</li>
        </ol>
        
        <h2 style="color: #22c55e;">💪 What's Included:</h2>
        <ul>
          <li>Complete meal plans with recipes</li>
          <li>Shopping lists</li>
          <li>Macro breakdowns</li>
          <li>Progress tracking sheets</li>
          <li>24/7 WhatsApp support</li>
        </ul>
        
        <p><strong>Questions?</strong> Reply to this email or WhatsApp us at <a href="https://wa.me/917090000877">+91 7090000877</a></p>
        
        <p>Let's achieve your goals together! 🚀</p>
        
        <p>Best regards,<br/>
        <strong>URS Kings Nutrition Team</strong><br/>
        📧 diet@urs-kingsnutrition.com<br/>
        📱 +91 7090000877</p>
      </div>
    `,
    attachments: [
      {
        filename: `${payment.plan_type}-nutrition-plan.pdf`,
        content: pdfBuffer
      }
    ]
  });

  // Log successful delivery
  await supabase.from('plan_deliveries').insert([{
    payment_id: payment.id,
    email_sent: true,
    email_sent_at: new Date().toISOString(),
    pdf_generated: true
  }]);
}

