import { useState, useEffect } from 'react';
import gsap from 'gsap';
import {
  heroData,
  formSectionData,
  formGoalsData,
  contactInfoData,
  mapData,
  faqData,
  ctaData,
} from '../data/contact';

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
    const ctx = gsap.context(() => {
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
  })

  return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          fitnessGoal: formData.goal,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
      } else {
        alert('Failed to submit form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 bg-bg-primary">
      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Full Viewport Background */}
         <div className="absolute inset-0">
           <img 
             src={heroData.backgroundImage}
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
         </div>

        <div className="container-custom relative z-10 px-4">
          <div className="contact-hero-title text-center max-w-full">
            <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-primary/20 border border-primary rounded mb-4 md:mb-6">
              <span className="text-primary font-bold text-xs md:text-sm tracking-wider break-words">{heroData.badge}</span>
            </div>
             <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight mb-4 md:mb-6 break-words px-2">
               <span className="block text-txt-primary">{heroData.title.line1}</span>
               <span className="block text-primary neon-text">{heroData.title.line2}</span>
             </h1>
             <p className="text-base md:text-xl text-txt-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
               {heroData.description}
             </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
             {/* Contact Form - Modern Design */}
             <div className="relative">
               {/* Decorative elements */}
               <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30"></div>
               
               <div className="relative bg-bg-secondary border-[1px] border-gray-300 shadow-md p-8">
                 <div className="mb-6">
                   <h2 className="text-3xl font-heading font-black text-txt-primary mb-2">
                     {formSectionData.heading.line1}<br />
                     <span className="text-primary">{formSectionData.heading.line2}</span>
                   </h2>
                   <p className="text-base text-txt-secondary">
                     {formSectionData.subheading}
                   </p>
                 </div>

              {submitted && (
                <div className="mb-8 bg-primary border-4 border-black p-6 transform -rotate-1 animate-bounce">
                  <p className="text-black font-heading font-black text-xl uppercase text-center">
                    {formSectionData.successMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-txt-secondary font-bold mb-3 text-xs md:text-sm tracking-wider break-words">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg-secondary border-[1px] border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-txt-secondary font-bold mb-3 text-xs md:text-sm tracking-wider break-words">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-secondary border-[1px] border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-txt-secondary font-bold mb-3 text-xs md:text-sm tracking-wider break-words">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-secondary border-[1px] border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-txt-secondary font-bold mb-3 text-xs md:text-sm tracking-wider break-words">
                    FITNESS GOAL *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                      className="w-full bg-bg-secondary border-[1px] border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none cursor-pointer"
                  >
                    {formGoalsData.map((goal, idx) => (
                      <option key={idx} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-txt-secondary font-bold mb-3 text-xs md:text-sm tracking-wider break-words">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-bg-secondary border-[1px] border-gray-300 focus:border-primary px-6 py-4 text-txt-primary transition-all outline-none resize-none"
                    placeholder="Tell us about your current fitness level, any injuries, and your specific goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xl py-6 uppercase tracking-wider"
                >
                  {formSectionData.submitButtonText}
                </button>
              </form>
               </div>
             </div>

             {/* Contact Info & Map */}
             <div className="space-y-6">
               {/* Contact Cards */}
               <div className="contact-card space-y-4">
                 <h3 className="text-2xl font-heading font-black text-txt-primary mb-6">
                   {contactInfoData.heading.split(' ')[0]} <span className="text-primary">{contactInfoData.heading.split(' ')[1]}</span>
                 </h3>

                {contactInfoData.cards.map((item, idx) => (
                   <div
                     key={idx}
                     className="bg-bg-secondary border-[1px] border-gray-300 hover:border-primary hover:shadow-lg p-6 transition-all"
                   >
                     <div className="text-xs text-primary font-bold uppercase mb-2">{item.title}</div>
                     {item.info.map((line, i) => (
                       <p key={i} className="text-sm text-txt-secondary">
                         {line}
                       </p>
                     ))}
                   </div>
                 ))}
              </div>

               {/* Google Maps Embed */}
               <div className="contact-card">
                 <h3 className="text-xl font-heading font-black text-txt-primary mb-4">
                   {mapData.heading.split(' ')[0]} <span className="text-primary">{mapData.heading.split(' ')[1]}</span>
                 </h3>
                 <div className="relative h-[300px] bg-bg-secondary border-2 border-gray-300 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Google Maps iframe */}
                  <iframe
                    src={mapData.embedUrl}
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
                   href={mapData.directionsLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-3 inline-block text-primary hover:text-txt-primary text-sm font-bold transition-colors"
                 >
                   {mapData.directionsText}
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ Section - Move to separate page or simplify */}
       {/* <section className="section-padding bg-bg-secondary">
         <div className="container-custom">
           <h2 className="text-4xl md:text-5xl font-heading font-black text-txt-primary mb-12 text-center">
             {faqData.heading.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{faqData.heading.split(' ').slice(2).join(' ')}</span>
           </h2>

           <div className="max-w-4xl mx-auto space-y-4">
            {faqData.faqs.map((faq, idx) => (
               <div
                 key={idx}
                 className="bg-bg-secondary border-l-4 border-primary p-6 hover:bg-bg-accent transition-colors"
               >
                 <h3 className="text-lg font-heading font-bold text-txt-primary mb-2">
                   {faq.q}
                 </h3>
                 <p className="text-base text-txt-secondary leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section> */}

       {/* Final CTA */}
       <section className="section-padding bg-bg-primary relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_primary_0%,_transparent_60%)]"></div>
         </div>

         <div className="container-custom relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-txt-primary mb-6">
               {ctaData.heading.line1}<br />{ctaData.heading.line2.split(' ')[0]} <span className="text-primary">{ctaData.heading.line2.split(' ').slice(1).join(' ')}</span>
             </h2>
             <p className="text-xl text-txt-secondary mb-10">
               {ctaData.description}
             </p>
             <a href={ctaData.buttonLink} className="btn-primary text-lg px-12 py-4">
               {ctaData.buttonText}
             </a>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Contact;
