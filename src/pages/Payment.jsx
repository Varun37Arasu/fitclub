import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan') || 'custom';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.payment-hero-title', {
        y: 100,
        duration: 0.8,
        ease: 'power4.out',
      });
    });
    return () => ctx.revert();
  }, []);

  // TODO: Integrate Razorpay here
  const handlePayment = () => {
    // Razorpay integration will go here
    console.log('Processing payment for plan:', plan);
    alert('Razorpay integration pending. Plan: ' + plan);
  };

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative pt-28 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f] to-[#0f0f0f]"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#ff4500] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="payment-hero-title">
            <div className="inline-block px-6 py-3 bg-[#ff4500] border-2 border-white mb-6">
              <span className="text-white font-heading font-black text-lg uppercase tracking-wider">Secure Payment</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 leading-tight">
              COMPLETE YOUR
              <span className="block text-[#ff4500] neon-text">TRANSFORMATION</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Secure payment powered by Razorpay. All major payment methods accepted.
            </p>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className="btn-primary text-xl px-16 py-6 mb-12"
            >
              PROCEED TO PAYMENT
            </button>

            {/* Money Back Guarantee */}
            <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-green-900/20 to-transparent border-2 border-green-500/50 p-6">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-2xl font-heading font-black text-white mb-2">
                100% MONEY-BACK GUARANTEE
              </h3>
              <p className="text-sm text-gray-300">
                Not satisfied? Get a full refund within 30 days. No questions asked.
              </p>
            </div>

            {/* Help Section */}
            <div className="mt-12 mb-10 pt-8 border-t border-gray-800 max-w-2xl mx-auto">
              <p className="text-gray-400 mb-4">Need help with payment?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-base px-8 py-3">
                  Contact Support
                </Link>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-3 transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;

