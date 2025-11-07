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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        <div className="container-custom relative z-10">
          <div className="contact-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8 transform rotate-1 border-4 border-black">
              <span className="text-white font-heading font-black text-xl uppercase tracking-widest">GET IN TOUCH</span>
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-heading font-black leading-[0.9] tracking-tighter mb-8">
              <span className="block text-white">START YOUR</span>
              <span className="block text-[#ff4500] neon-text">JOURNEY</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Book your free consultation now. Let's discuss your goals and create your personalized transformation plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form - Modern Design */}
            <div className="contact-card">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 uppercase">
                  BOOK YOUR FREE<br />
                  <span className="text-[#ff4500]">CONSULTATION</span>
                </h2>
                <p className="text-xl text-gray-300">
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
                    className="w-full bg-[#242424] border-2 border-gray-700 focus:border-[#ff4500] px-6 py-5 text-white text-lg transition-all outline-none"
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
                      className="w-full bg-[#242424] border-2 border-gray-700 focus:border-[#ff4500] px-6 py-5 text-white text-lg transition-all outline-none"
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
                      className="w-full bg-[#242424] border-2 border-gray-700 focus:border-[#ff4500] px-6 py-5 text-white text-lg transition-all outline-none"
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
                    className="w-full bg-[#242424] border-2 border-gray-700 focus:border-[#ff4500] px-6 py-5 text-white text-lg transition-all outline-none cursor-pointer"
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
                    className="w-full bg-[#242424] border-2 border-gray-700 focus:border-[#ff4500] px-6 py-5 text-white text-lg transition-all outline-none resize-none"
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

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards - Bento Style */}
              <div className="contact-card space-y-6">
                <h3 className="text-4xl font-heading font-black text-white uppercase mb-8">
                  CONTACT <span className="text-[#ff4500]">INFO</span>
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
                    className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] p-6 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-[#ff4500] flex items-center justify-center text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">{item.title}</div>
                        {item.info.map((line, i) => (
                          <p key={i} className="text-lg text-gray-300 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="contact-card">
                <h3 className="text-4xl font-heading font-black text-white uppercase mb-6">
                  VISIT <span className="text-[#ff4500]">US</span>
                </h3>
                <div className="relative h-[400px] bg-[#242424] border-4 border-gray-700 overflow-hidden group">
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
                  <div className="absolute inset-0 bg-[#ff4500] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                </div>
                <a
                  href="https://maps.google.com/?q=Bandra+West+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block btn-secondary px-8 py-4"
                >
                  GET DIRECTIONS →
                </a>
              </div>

              {/* Social Links - Outline Style */}
              <div className="contact-card">
                <h3 className="text-4xl font-heading font-black text-white uppercase mb-6">
                  FOLLOW <span className="text-[#ff4500]">US</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Instagram', handle: '@fitclub', icon: '📷' },
                    { name: 'Facebook', handle: '/fitclubgym', icon: '👍' },
                    { name: 'YouTube', handle: '/fitclubtv', icon: '🎥' },
                    { name: 'Twitter', handle: '@fitclub', icon: '🐦' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] p-6 text-center transition-all group"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                        {social.icon}
                      </div>
                      <div className="font-heading font-black text-white text-lg uppercase mb-1">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            FAQ <span className="text-[#ff4500]">.</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
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
                className="bg-[#1a1a1a] border-l-4 border-[#ff4500] p-8 hover:bg-[#242424] transition-colors"
              >
                <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase">
                  {faq.q}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ff4500_0%,_transparent_60%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
              READY TO<br />
              <span className="text-[#ff4500]">TRANSFORM?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Don't wait. Your transformation starts with a single step. Contact us today.
            </p>
            <a href="#" className="btn-primary text-2xl px-16 py-8">
              START NOW →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
