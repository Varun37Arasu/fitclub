import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [counter, setCounter] = useState({ clients: 0, success: 0, years: 0 });

  useEffect(() => {
    // Animated counter
    const targets = { clients: 500, success: 95, years: 10 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounter(prev => ({
        clients: Math.min(prev.clients + Math.ceil(targets.clients / steps), targets.clients),
        success: Math.min(prev.success + Math.ceil(targets.success / steps), targets.success),
        years: Math.min(prev.years + Math.ceil(targets.years / steps), targets.years),
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-main-title', {
        y: 80,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Bento grid stagger
      gsap.from('.bento-card', {
        y: 40,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power2.out',
        },
        duration: 0.6,
        scrollTrigger: {
          trigger: '.bento-section',
          start: 'top 80%',
        },
      });

      // Card stack effect
      gsap.from('.stack-card', {
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stack-section',
          start: 'top 75%',
        },
      });

      // Split screen parallax
      gsap.to('.parallax-left', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.split-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.parallax-right', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.split-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Testimonial carousel
      gsap.from('.testimonial-slide', {
        x: 40,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Radial Glow Orbs - Always visible */}
      <div className="fixed top-20 -left-32 w-[700px] h-[700px] bg-[#ff4500] rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none z-0"></div>
      <div className="fixed bottom-20 -right-32 w-[600px] h-[600px] bg-[#ff8c00] rounded-full blur-3xl opacity-15 animate-pulse pointer-events-none z-0" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b00] rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '3s'}}></div>

       {/* HERO SECTION - Full Viewport Background */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Background Image/Video */}
         <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
           {/* Gradient glow effect */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 via-transparent to-[#ff8c00]/20"></div>
         </div>

        <div className="container-custom relative z-10 text-center">
           <div className="hero-main-title mb-12">
             <div className="inline-block px-6 py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-6">
               <span className="text-[#ff4500] font-bold text-sm uppercase tracking-wider">Elite Personal Training</span>
             </div>
             <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-black leading-[0.95] tracking-tight mb-6">
               <span className="block text-white">Transform Your Body</span>
               <span className="block text-[#ff4500] neon-text">Transform Your Life</span>
             </h1>
           </div>

           <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
             Expert coaching, personalized nutrition, and proven results. Join 500+ successful transformations.
           </p>

           <div className="flex flex-wrap gap-6 justify-center mb-16">
             <Link to="/services" className="btn-primary text-lg px-10 py-4">
               View Programs
             </Link>
             <Link to="/contact" className="btn-secondary text-lg px-10 py-4">
               Book Consultation
             </Link>
           </div>

           {/* Animated Stats */}
           <div className="hero-stats grid grid-cols-3 gap-4 max-w-3xl mx-auto">
             {[
               { value: counter.clients, label: 'Clients Trained', suffix: '+' },
               { value: counter.success, label: 'Success Rate', suffix: '%' },
               { value: counter.years, label: 'Years Experience', suffix: '+' },
             ].map((stat, idx) => (
               <div key={idx} className="bg-[#1a1a1a] border-2 border-[#ff4500] p-6 text-center">
                 <div className="text-4xl md:text-5xl font-heading font-black text-[#ff4500] mb-1">
                   {stat.value}{stat.suffix}
                 </div>
                 <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-4 border-[#ff4500] rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

       {/* WHY CHOOSE US - Bento Grid */}
       <section className="bento-section section-padding bg-[#1a1a1a] relative">
         <div className="container-custom">
           <div className="mb-16 text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               Why Choose <span className="text-[#ff4500]">FitClub</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Everything you need for a successful transformation
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
             {/* Large Feature Card */}
             <div className="bento-card md:col-span-8 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-10 transition-all">
               <div className="mb-6">
                 <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">Personalized Approach</div>
                 <h3 className="text-4xl font-heading font-black text-white mb-4">
                   One-on-One Expert Coaching
                 </h3>
                 <p className="text-lg text-gray-300 leading-relaxed mb-6">
                   Every session is tailored to your unique goals, fitness level, and progress. Our certified trainers provide hands-on guidance, form correction, and motivation to help you achieve maximum results safely and effectively.
                 </p>
               </div>
               <div className="grid grid-cols-3 gap-4">
                 <div className="text-center p-4 bg-black/60 border border-[#ff4500]/30">
                   <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">500+</div>
                   <div className="text-xs text-gray-400 uppercase">Clients</div>
                 </div>
                 <div className="text-center p-4 bg-black/60 border border-[#ff4500]/30">
                   <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">95%</div>
                   <div className="text-xs text-gray-400 uppercase">Success</div>
                 </div>
                 <div className="text-center p-4 bg-black/60 border border-[#ff4500]/30">
                   <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">10Y</div>
                   <div className="text-xs text-gray-400 uppercase">Experience</div>
                 </div>
               </div>
             </div>

             {/* Progress Tracking */}
             <div className="bento-card md:col-span-4 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-8 transition-all">
               <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">Track Everything</div>
               <h3 className="text-2xl font-heading font-black text-white mb-6">
                 Monitor Your Progress
               </h3>
               <div className="space-y-4">
                 {[
                   { label: 'Strength Gains', value: 85 },
                   { label: 'Endurance', value: 70 },
                   { label: 'Body Composition', value: 90 },
                 ].map((metric, i) => (
                   <div key={i}>
                     <div className="flex justify-between text-sm text-gray-400 mb-2">
                       <span>{metric.label}</span>
                       <span>{metric.value}%</span>
                     </div>
                     <div className="w-full bg-gray-700 rounded-full h-2">
                       <div className="bg-[#ff4500] h-2 rounded-full transition-all" style={{width: `${metric.value}%`}}></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Nutrition Plans */}
             <div className="bento-card md:col-span-6 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-8 transition-all">
               <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">Nutrition Guidance</div>
               <h3 className="text-3xl font-heading font-black text-white mb-4">
                 Custom Meal Plans
               </h3>
               <p className="text-gray-300 leading-relaxed mb-6">
                 Personalized nutrition plans designed for your goals, lifestyle, and preferences. Includes macro calculations, recipe database, and ongoing adjustments.
               </p>
               <ul className="space-y-2">
                 {['Macro & Calorie Tracking', 'Recipe Database Access', 'Weekly Adjustments'].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-[#ff4500] rounded-full"></div>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* 24/7 Support */}
             <div className="bento-card md:col-span-3 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-8 transition-all text-center flex flex-col justify-center">
               <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">Always Available</div>
               <h3 className="text-2xl font-heading font-black text-white mb-2">
                 24/7 Support
               </h3>
               <p className="text-sm text-gray-400">
                 Coach access whenever you need
               </p>
             </div>

             {/* Proven Results */}
             <div className="bento-card md:col-span-3 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-8 transition-all text-center flex flex-col justify-center">
               <div className="text-sm text-[#ff4500] font-bold uppercase mb-2">Science-Based</div>
               <h3 className="text-2xl font-heading font-black text-white mb-2">
                 Proven Methods
               </h3>
               <p className="text-sm text-gray-400">
                 Research-backed protocols
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* PROGRAMS SECTION */}
       <section className="stack-section section-padding bg-[#0f0f0f] relative overflow-hidden">
         <div className="container-custom">
           <div className="text-center mb-16">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               Our <span className="text-[#ff4500]">Programs</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Choose the program that fits your goals and commitment level
             </p>
           </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {[
              {
                title: '4-WEEK KICKSTART',
                price: '₹24,999',
                desc: 'Perfect for beginners. Build momentum and create lasting habits.',
                features: ['16 Sessions', 'Nutrition Guide', 'Weekly Check-ins'],
                link: '/services/4-week-transformation',
              },
              {
                title: '8-WEEK TRANSFORM',
                price: '₹44,999',
                desc: 'Complete transformation. Build muscle, burn fat, reshape your life.',
                features: ['32 Sessions', 'Meal Plans', '24/7 Access'],
                popular: true,
                link: '/services/8-week-transformation',
              },
              {
                title: 'NUTRITION COACHING',
                price: '₹6,999/mo',
                desc: 'Personalized meal plans and nutrition guidance.',
                features: ['Custom Plans', 'Recipe Access', 'Monthly Calls'],
                link: '/services/nutrition-plan',
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="stack-card relative"
              >
                 {program.popular && (
                   <div className="absolute -top-4 right-6 z-20 px-4 py-2 bg-[#ff4500] text-white text-xs font-bold uppercase">
                     Most Popular
                   </div>
                 )}

                 <div className={`bg-[#1a1a1a] border-2 ${program.popular ? 'border-[#ff4500]' : 'border-gray-700'} p-8 md:p-12 hover:border-[#ff4500] transition-all`}>
                   <div className="grid md:grid-cols-3 gap-8 items-center">
                     <div className="md:col-span-2">
                       <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-3">{program.title}</h3>
                       <p className="text-lg text-gray-300 mb-6 leading-relaxed">{program.desc}</p>
                       <div className="flex flex-wrap gap-3 mb-6">
                         {program.features.map((feature, i) => (
                           <div key={i} className="px-4 py-2 bg-black/60 border border-gray-800 text-sm">
                             <span className="text-gray-300">{feature}</span>
                           </div>
                         ))}
                       </div>
                       <Link to={program.link} className="btn-primary text-base px-8 py-3">
                         Learn More
                       </Link>
                     </div>

                     <div className="text-center">
                       <div className="bg-black/60 border-2 border-[#ff4500] p-6">
                         <div className="text-4xl font-heading font-black text-[#ff4500] mb-1">{program.price}</div>
                         <div className="text-xs text-gray-400">Starting From</div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

           <div className="text-center mt-12">
             <Link to="/services" className="btn-secondary text-base px-10 py-4">
               View All Programs
             </Link>
           </div>
        </div>
      </section>

       {/* TRANSFORMATION SHOWCASE */}
       <section className="split-section section-padding bg-[#1a1a1a] relative overflow-hidden">
         <div className="container-custom">
           <div className="text-center mb-16">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               Real <span className="text-[#ff4500]">Transformations</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               See the incredible results our clients have achieved
             </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
             <div className="parallax-left">
               <div className="relative aspect-[3/4] overflow-hidden border-4 border-[#ff4500]">
                 <img 
                   src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800" 
                   alt="Transformation"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-3xl font-heading font-black text-white mb-3">Arjun K.</h3>
                   <div className="flex gap-3 text-sm font-bold">
                     <span className="px-4 py-2 bg-[#ff4500] text-white">Lost 12 kg</span>
                     <span className="px-4 py-2 bg-[#ff4500] text-white">Gained 8 kg Muscle</span>
                   </div>
                 </div>
               </div>
             </div>

             <div className="parallax-right space-y-6">
               {[
                 { value: '500+', label: 'Successful Transformations' },
                 { value: '95%', label: 'Client Success Rate' },
                 { value: '2500+', label: 'Total Kilograms Lost' },
               ].map((stat, idx) => (
                 <div key={idx} className="bg-black/40 backdrop-blur-sm border-l-4 border-[#ff4500] p-6">
                   <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">{stat.value}</div>
                   <div className="text-lg text-gray-300">{stat.label}</div>
                 </div>
               ))}

               <Link to="/testimonials" className="inline-block btn-primary text-base px-8 py-3 mt-4">
                 View All Results
               </Link>
             </div>
           </div>
        </div>
      </section>

       {/* CLIENT TESTIMONIALS */}
       <section className="testimonials-section section-padding bg-[#0f0f0f]">
         <div className="container-custom">
           <div className="text-center mb-12">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               Client <span className="text-[#ff4500]">Reviews</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Hear what our clients have to say about their experience
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { name: 'Priya Sharma', text: 'Lost 10 kg in 8 weeks. Best decision of my life! The trainers are incredibly supportive.', rating: 5 },
               { name: 'Vikram Patel', text: 'Gained 12 kg muscle at age 40. The personalized approach really works.', rating: 5 },
               { name: 'Ananya Reddy', text: 'Professional, motivating, and result-oriented. Couldn\'t ask for more.', rating: 5 },
             ].map((testimonial, idx) => (
               <div key={idx} className="testimonial-slide bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] p-6 transition-all">
                 <div className="flex gap-1 mb-4">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <span key={i} className="text-xl text-[#ff4500]">★</span>
                   ))}
                 </div>
                 <p className="text-base text-gray-300 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                 <p className="font-heading font-bold text-white">— {testimonial.name}</p>
               </div>
             ))}
           </div>

           <div className="text-center mt-12">
             <Link to="/testimonials" className="btn-secondary text-base px-10 py-4">
               Read More Reviews
             </Link>
           </div>
         </div>
       </section>

       {/* FINAL CTA */}
       <section className="section-padding bg-[#1a1a1a] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_50%)]"></div>
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_50%)]"></div>
         </div>

         <div className="container-custom relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
               Ready to Transform<br />Your <span className="text-[#ff4500]">Life?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
               Book your free consultation today and take the first step towards achieving your fitness goals.
             </p>
             <div className="flex flex-wrap gap-6 justify-center">
               <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                 Book Free Consultation
               </Link>
               <Link to="/services" className="btn-secondary text-lg px-12 py-4">
                 View Programs
               </Link>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Home;
