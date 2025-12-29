import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const planType = searchParams.get('plan') || 'veg';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Plan prices in rupees
  const planPrices = {
    'veg': 4999,
    'non-veg': 5499,
    'keto': 6499,
    '8-week': 12999,
    '12-week': 18999,
    '24-week': 34999,
    'annual': 99999
  };

  const planNames = {
    'veg': 'Vegetarian Nutrition Plan',
    'non-veg': 'Non-Vegetarian Nutrition Plan',
    'keto': 'Keto Nutrition Plan',
    '8-week': '8-Week Transformation Program',
    '12-week': '12-Week Transformation Program',
    '24-week': '24-Week Transformation Program',
    'annual': 'Annual Transformation Program'
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.payment-hero-title', {
        y: 100,
        duration: 0.8,
        ease: 'power4.out',
      });

      gsap.from('.payment-form', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power4.out',
      });
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create order
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: planPrices[planType],
          planType: planType,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone
        })
      });

      if (!orderRes.ok) {
        throw new Error('Failed to create order');
      }

      const { orderId, amount, currency } = await orderRes.json();

      // Step 2: Initialize Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount,
        currency: currency,
        order_id: orderId,
        name: 'URS Kings Nutrition',
        description: planNames[planType],
        image: '/logo10.png',
        handler: async function (response) {
          try {
            // Step 3: Verify payment
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            if (verifyRes.ok) {
              alert('Payment successful! Check your email for your plan PDF.');
              navigate('/');
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please contact support.');
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#22c55e'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to process payment. Please try again or contact support.');
      setIsProcessing(false);
    }
  };

  const currentPrice = planPrices[planType] || 4999;
  const currentPlanName = planNames[planType] || 'Nutrition Plan';

  return (
    <div className="pt-20 bg-bg-primary">
      {/* Hero Section */}
      <section className="relative pt-28 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 max-w-2xl">
          <div className="payment-hero-title text-center mb-12">
            <div className="inline-block px-6 py-3 bg-primary border-2 border-white mb-6">
              <span className="text-txt-primary font-heading font-black text-lg uppercase tracking-wider">Secure Payment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-txt-primary mb-6 leading-tight">
              COMPLETE YOUR
              <span className="block text-primary neon-text">TRANSFORMATION</span>
            </h1>
            
            <p className="text-lg md:text-xl text-txt-secondary max-w-2xl mx-auto mb-8">
              Secure payment powered by Razorpay. All major payment methods accepted.
            </p>

            {/* Plan Details */}
            <div className="bg-bg-secondary border-2 border-gray-300 p-6 mb-8">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-2">
                {currentPlanName}
              </h3>
              <div className="text-5xl font-heading font-black text-primary">
                ₹{currentPrice.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment} className="payment-form bg-bg-secondary border-2 border-gray-300 shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-black text-txt-primary mb-6">
              YOUR <span className="text-primary">DETAILS</span>
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-txt-secondary font-bold mb-3 text-sm tracking-wider">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-primary border-2 border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-txt-secondary font-bold mb-3 text-sm tracking-wider">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-primary border-2 border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-txt-secondary font-bold mb-3 text-sm tracking-wider">
                  PHONE *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9+\s\-()]+"
                  className="w-full bg-bg-primary border-2 border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`btn-primary w-full text-xl py-6 uppercase tracking-wider ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? 'PROCESSING...' : `PAY ₹${currentPrice.toLocaleString('en-IN')}`}
              </button>
            </div>
          </form>

          {/* Money Back Guarantee */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-900/20 to-transparent border-2 border-green-500/50 p-6 mb-8">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-2xl font-heading font-black text-txt-primary mb-2">
              100% MONEY-BACK GUARANTEE
            </h3>
            <p className="text-sm text-txt-secondary">
              Not satisfied? Get a full refund within 30 days. No questions asked.
            </p>
          </div>

          {/* Help Section */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-txt-muted mb-4 text-center">Need help with payment?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-base px-8 py-3 text-center">
                Contact Support
              </Link>
              <a 
                href="https://wa.me/917090000877" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-3 transition-all text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
