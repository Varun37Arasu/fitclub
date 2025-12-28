// Payment configuration for Razorpay integration
export const paymentConfig = {
  // TODO: Add your Razorpay API keys here
  razorpayKeyId: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual Razorpay key
  
  // Business details
  businessName: 'URS Kings Nutrition',
  businessLogo: '/logo1.png',
  
  // Support contact
  whatsappNumber: '919876543210', // Update with actual WhatsApp number
  supportEmail: 'support@urskings.com',
  
  // Currency
  currency: 'INR',
  
  // Payment options
  paymentMethods: ['card', 'netbanking', 'wallet', 'upi'],
};

