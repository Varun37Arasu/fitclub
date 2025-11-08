import { useState, useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.from('.contact-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });

    gsap.from('.contact-card', {
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      delay: 0.2,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Full Viewport Background */}
         <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 via-transparent to-[#ff8c00]/20"></div>
         </div>

        <div className="container-custom relative z-10">
          <div className="contact-hero-title text-center">
            <div className="inline-block px-6 py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-6">
              <span className="text-[#ff4500] font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
             <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight mb-6">
               <span className="block text-white">Start Your</span>
               <span className="block text-[#ff4500] neon-text">Journey</span>
             </h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
               Book your free consultation now. Let's discuss your goals and create your personalized transformation plan.
             </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
             {/* Contact Form - Modern Design */}
             <div className="relative">
               {/* Decorative elements */}
               <div className="absolute -inset-4 bg-gradient-to-r from-[#ff4500]/20 to-[#ff8c00]/20 blur-3xl opacity-30"></div>
               
               <div className="relative bg-black/60 backdrop-blur-xl border-2 border-gray-800 p-8">
                 <div className="mb-6">
                   <h2 className="text-3xl font-heading font-black text-white mb-2">
                     Book Your Free<br />
                     <span className="text-[#ff4500]">Consultation</span>
                   </h2>
                   <p className="text-base text-gray-300">
                     Fill out the form below and we'll get back to you within 24 hours.
                   </p>
                 </div>

              {submitted && (
                <div className="mb-8 bg-[#ff4500] border-4 border-black p-6 transform -rotate-1 animate-bounce">
                  <p className="text-black font-heading font-black text-xl uppercase text-center">
                    ✓ MESSAGE SENT! WE'LL CONTACT YOU SOON.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-3 uppercase text-sm tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/60 border-2 border-gray-800 focus:border-[#ff4500] px-6 py-4 text-white transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-bold mb-3 uppercase text-sm tracking-wider">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/60 border-2 border-gray-800 focus:border-[#ff4500] px-6 py-4 text-white transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold mb-3 uppercase text-sm tracking-wider">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/60 border-2 border-gray-800 focus:border-[#ff4500] px-6 py-4 text-white transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-3 uppercase text-sm tracking-wider">
                    FITNESS GOAL *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                      className="w-full bg-black/60 border-2 border-gray-800 focus:border-[#ff4500] px-6 py-4 text-white transition-all outline-none cursor-pointer"
                  >
                    <option value="">Select your goal...</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="transformation">Complete Transformation</option>
                    <option value="strength">Strength Training</option>
                    <option value="nutrition">Nutrition Coaching Only</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-3 uppercase text-sm tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-black/60 border-2 border-gray-800 focus:border-[#ff4500] px-6 py-4 text-white transition-all outline-none resize-none"
                    placeholder="Tell us about your current fitness level, any injuries, and your specific goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xl py-6 uppercase tracking-wider"
                >
                  BOOK FREE CONSULTATION →
                </button>
              </form>
               </div>
             </div>

             {/* Contact Info & Map */}
             <div className="space-y-6">
               {/* Contact Cards */}
               <div className="contact-card space-y-4">
                 <h3 className="text-2xl font-heading font-black text-white mb-6">
                   Contact <span className="text-[#ff4500]">Info</span>
                 </h3>

                {[
                  {
                    icon: '📍',
                    title: 'LOCATION',
                    info: ['FitClub Gym', 'Bandra West, Mumbai', 'Maharashtra 400050, India'],
                  },
                  {
                    icon: '📧',
                    title: 'EMAIL',
                    info: ['contact@fitclub.com', 'transformations@fitclub.com'],
                  },
                  {
                    icon: '📱',
                    title: 'PHONE',
                    info: ['+91 98765 43210', '+91 98765 43211'],
                  },
                  {
                    icon: '⏰',
                    title: 'HOURS',
                    info: ['Mon-Sat: 6:00 AM - 10:00 PM', 'Sunday: 8:00 AM - 6:00 PM'],
                  },
                 ].map((item, idx) => (
                   <div
                     key={idx}
                     className="bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-[#ff4500] p-4 transition-all"
                   >
                     <div className="text-xs text-[#ff4500] font-bold uppercase mb-2">{item.title}</div>
                     {item.info.map((line, i) => (
                       <p key={i} className="text-sm text-gray-300">
                         {line}
                       </p>
                     ))}
                   </div>
                 ))}
              </div>

               {/* Google Maps Embed */}
               <div className="contact-card">
                 <h3 className="text-xl font-heading font-black text-white mb-4">
                   Visit <span className="text-[#ff4500]">Us</span>
                 </h3>
                 <div className="relative h-[300px] bg-black/40 border-2 border-gray-800 overflow-hidden">
                  {/* Google Maps iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30162.267647!2d72.8261!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c943c92b6e2b%3A0x5a6d1b8f9a77c4d0!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  
                  {/* Overlay on hover */}
                 </div>
                 <a
                   href="https://maps.google.com/?q=Bandra+West+Mumbai"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-3 inline-block text-[#ff4500] hover:text-white text-sm font-bold transition-colors"
                 >
                   Get Directions →
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ Section - Move to separate page or simplify */}
       <section className="section-padding bg-[#1a1a1a]">
         <div className="container-custom">
           <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-12 text-center">
             Frequently Asked <span className="text-[#ff4500]">Questions</span>
           </h2>

           <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'What should I bring to my first consultation?',
                a: 'Just bring yourself and any medical history or injury information. We\'ll discuss your goals, assess your current fitness level, and create a personalized plan.',
              },
              {
                q: 'Do you offer trial sessions?',
                a: 'Yes! Your first consultation is completely free. We\'ll walk you through our facility, introduce you to our trainers, and answer all your questions.',
              },
              {
                q: 'What if I\'m a complete beginner?',
                a: 'Perfect! Most of our clients start as beginners. We\'ll build a foundation-focused program that progresses at your pace with proper form and technique.',
              },
              {
                q: 'Can I switch programs if needed?',
                a: 'Absolutely. We can adjust your program at any time based on your progress, goals, or preferences. Your success is our priority.',
              },
              {
                q: 'Do you provide nutrition guidance?',
                a: 'Yes! All our training programs include nutrition guidelines. Our 8-week program includes detailed meal plans, and we also offer standalone nutrition coaching.',
              },
             ].map((faq, idx) => (
               <div
                 key={idx}
                 className="bg-black/40 backdrop-blur-sm border-l-4 border-[#ff4500] p-6 hover:bg-black/60 transition-colors"
               >
                 <h3 className="text-lg font-heading font-bold text-white mb-2">
                   {faq.q}
                 </h3>
                 <p className="text-base text-gray-300 leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

       {/* Final CTA */}
       <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ff4500_0%,_transparent_60%)]"></div>
         </div>

         <div className="container-custom relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
               Ready to<br />Transform <span className="text-[#ff4500]">Your Life?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-10">
               Don't wait. Your transformation starts with a single step. Contact us today.
             </p>
             <a href="#" className="btn-primary text-lg px-12 py-4">
               Start Now
             </a>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Contact;
