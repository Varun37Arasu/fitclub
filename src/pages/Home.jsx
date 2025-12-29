import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  heroData, 
  heroStatsData, 
  whyChooseUsData, 
  programsData, 
  transformationShowcaseData, 
  clientReviewsData, 
  finalCtaData 
} from '../data/home';
import MoneyBackBadge from '../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Animated counter state - extract target values from data
  const counterTargets = heroStatsData.reduce((acc, stat) => {
    acc[stat.key] = stat.value;
    return acc;
  }, {});

  const [counter, setCounter] = useState({ clients: 0, success: 0, years: 0 });

  useEffect(() => {
    // Animated counter
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounter(prev => ({
        clients: Math.min(prev.clients + Math.ceil(counterTargets.clients / steps), counterTargets.clients),
        success: Math.min(prev.success + Math.ceil(counterTargets.success / steps), counterTargets.success),
        years: Math.min(prev.years + Math.ceil(counterTargets.years / steps), counterTargets.years),
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
          scrub: true,
        },
      });

      // Testimonial carousel
      gsap.from('.testimonial-slide', {
        // xPercent: 15,
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
      {/* <div className="fixed top-20 -left-32 w-[700px] h-[700px] bg-primary rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none z-0"></div> */}
      <div className="fixed bottom-20 -right-32 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl opacity-15 animate-pulse pointer-events-none z-0" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '3s'}}></div>

       {/* HERO SECTION */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
         {/* Background Image */}
         <div className="absolute inset-0">
           <img 
             src={heroData.backgroundImage}
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
         </div>

        <div className="container-custom relative z-10 text-center px-4">
           <div className="hero-main-title mb-8 md:mb-12">
             <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-primary/20 border border-primary rounded mb-4 md:mb-6">
               <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider">{heroData.badge}</span>
             </div>
             <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-heading font-black leading-[0.95] tracking-tight mb-4 md:mb-6 px-2">
               <span className="block text-white">{heroData.title.line1}</span>
               <span className="block text-primary neon-text">{heroData.title.line2}</span>
             </h1>
           </div>

           <p className="hero-subtitle text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
             {heroData.description}
           </p>

           <div className="flex flex-wrap gap-6 justify-center mb-8">
             <Link to={heroData.buttons.primary.link} className="btn-primary text-lg px-10 py-4">
               {heroData.buttons.primary.text}
             </Link>
             <Link to={heroData.buttons.secondary.link} className="btn-secondary text-lg px-10 py-4">
               {heroData.buttons.secondary.text}
             </Link>
           </div>

           {/* Animated Stats */}
           <div className="hero-stats grid grid-cols-3 gap-4 max-w-3xl mx-auto">
             {heroStatsData.map((stat, idx) => (
               <div key={idx} className="bg-[#1a1a1a] border-2 border-primary p-4 text-center">
                 <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-1">
                   {counter[stat.key]}{stat.suffix}
                 </div>
                 <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Scroll Indicator */}
        <div className="block absolute bottom-12 -translate-x-1/2 z-10 animate-bounce mb-[-3rem]">
          <div className="w-8 h-12 border-4 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

       {/* WHY CHOOSE US - Bento Grid */}
       <section className="bento-section section-padding bg-[#1a1a1a] relative">
         <div className="container-custom">
           <div className="text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               {whyChooseUsData.heading.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{whyChooseUsData.heading.split(' ').slice(2).join(' ')}</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               {whyChooseUsData.subheading}
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
             {/* Large Feature Card */}
             <div className="bento-card md:col-span-8 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-10 transition-all">
               <div className="mb-6">
                 <div className="text-sm text-primary font-bold uppercase mb-2">{whyChooseUsData.mainFeature.badge}</div>
                 <h3 className="text-4xl font-heading font-black text-white mb-4">
                   {whyChooseUsData.mainFeature.title}
                 </h3>
                 <p className="text-lg text-gray-300 leading-relaxed mb-6">
                   {whyChooseUsData.mainFeature.description}
                 </p>
               </div>
               <div className="grid grid-cols-3 gap-4">
                 {whyChooseUsData.mainFeature.stats.map((stat, idx) => (
                   <div key={idx} className="text-center p-4 bg-black/60 border border-primary/30">
                     <div className="text-3xl font-heading font-black text-primary mb-1">{stat.value}</div>
                     <div className="text-xs text-gray-400 uppercase">{stat.label}</div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Progress Tracking */}
             <div className="bento-card md:col-span-4 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-8 transition-all">
               <div className="text-sm text-primary font-bold uppercase mb-2">{whyChooseUsData.progressTracking.badge}</div>
               <h3 className="text-2xl font-heading font-black text-white mb-6">
                 {whyChooseUsData.progressTracking.title}
               </h3>
               <div className="space-y-4">
                 {whyChooseUsData.progressTracking.metrics.map((metric, i) => (
                   <div key={i}>
                     <div className="flex justify-between text-sm text-gray-400 mb-2">
                       <span>{metric.label}</span>
                       <span>{metric.value}%</span>
                     </div>
                     <div className="w-full bg-gray-700 rounded-full h-2">
                       <div className="bg-primary h-2 rounded-full transition-all" style={{width: `${metric.value}%`}}></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Nutrition Plans */}
             <div className="bento-card md:col-span-6 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-8 transition-all">
               <div className="text-sm text-primary font-bold uppercase mb-2">{whyChooseUsData.nutrition.badge}</div>
               <h3 className="text-3xl font-heading font-black text-white mb-4">
                 {whyChooseUsData.nutrition.title}
               </h3>
               <p className="text-gray-300 leading-relaxed mb-6">
                 {whyChooseUsData.nutrition.description}
               </p>
               <ul className="space-y-2">
                 {whyChooseUsData.nutrition.features.map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* 24/7 Support */}
             <div className="bento-card md:col-span-3 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-8 transition-all text-center flex flex-col justify-center">
               <div className="text-sm text-primary font-bold uppercase mb-2">{whyChooseUsData.support.badge}</div>
               <h3 className="text-2xl font-heading font-black text-white mb-2">
                 {whyChooseUsData.support.title}
               </h3>
               <p className="text-sm text-gray-400">
                 {whyChooseUsData.support.description}
               </p>
             </div>

             {/* Proven Results */}
             <div className="bento-card md:col-span-3 bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-8 transition-all text-center flex flex-col justify-center">
               <div className="text-sm text-primary font-bold uppercase mb-2">{whyChooseUsData.methods.badge}</div>
               <h3 className="text-2xl font-heading font-black text-white mb-2">
                 {whyChooseUsData.methods.title}
               </h3>
               <p className="text-sm text-gray-400">
                 {whyChooseUsData.methods.description}
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
               {programsData.heading.split(' ')[0]} <span className="text-primary">{programsData.heading.split(' ')[1]}</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               {programsData.subheading}
             </p>
           </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {programsData.programs.map((program, idx) => (
              <div key={idx} className="stack-card relative">
                 <div className="absolute -top-8 right-6 z-20 flex items-center gap-4">
                   {program.popular && (
                     <div className={`px-4 py-2 bg-primary ${program.moneyBack ? 'relative -top-6' : ''} text-white text-xs font-bold uppercase`}>
                       Most Popular
                     </div>
                   )}
                   {program.moneyBack && (
                     <MoneyBackBadge className="h-28 w-28 relative left-20" />
                   )}
                 </div>

                 <div className={`bg-[#1a1a1a] border-2 ${program.popular ? 'border-primary' : 'border-gray-700'} p-8 md:p-12 hover:border-primary transition-all`}>
                   <div className="grid md:grid-cols-3 gap-8 items-center">
                     <div className="md:col-span-2">
                       <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-3">{program.title}</h3>
                       <p className="text-lg text-gray-300 mb-6 leading-relaxed">{program.description}</p>
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
                       <div className="bg-black/60 border-2 border-primary p-6">
                         <div className="text-4xl font-heading font-black text-primary mb-1">{program.price}</div>
                         <div className="text-xs text-gray-400">Starting From</div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

           <div className="text-center mt-12">
             <Link to={programsData.viewAllButton.link} className="btn-secondary text-base px-10 py-4">
               {programsData.viewAllButton.text}
             </Link>
           </div>
        </div>
      </section>

       {/* TRANSFORMATION SHOWCASE */}
       <section className="split-section pb-20 md:section-padding bg-[#1a1a1a] relative overflow-hidden">
         <div className="container-custom">
           <div className="text-center mb-16 lg:mb-32">
             <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
               {transformationShowcaseData.heading.split(' ')[0]} <span className="text-primary">{transformationShowcaseData.heading.split(' ')[1]}</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               {transformationShowcaseData.subheading}
             </p>
           </div>

           <div className="grid lg:grid-cols-2 lg:gap-12 md:items-center lg:items-start max-w-6xl mx-auto">
             <div className="parallax-left">
               <div className="relative aspect-[3/4] overflow-hidden border-4 border-primary">
                 <img 
                   src={transformationShowcaseData.featured.image}
                   alt="Transformation"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-3xl font-heading font-black text-white mb-3">{transformationShowcaseData.featured.name}</h3>
                   <div className="flex gap-3 text-sm font-bold">
                     {transformationShowcaseData.featured.results.map((result, idx) => (
                       <span key={idx} className="px-4 py-2 bg-primary text-white">{result.text}</span>
                     ))}
                   </div>
                 </div>
               </div>
             </div>

             <div className="parallax-right space-y-6">
               {transformationShowcaseData.stats.map((stat, idx) => (
                 <div key={idx} className="bg-black/40 backdrop-blur-sm border-l-4 border-primary p-6">
                   <div className="text-5xl font-heading font-black text-primary mb-2">{stat.value}</div>
                   <div className="text-lg text-gray-300">{stat.label}</div>
                 </div>
               ))}

               <Link to={transformationShowcaseData.button.link} className="inline-block btn-primary text-base px-8 py-3 mt-4">
                 {transformationShowcaseData.button.text}
               </Link>
             </div>
           </div>
        </div>
      </section>

       {/* CLIENT TESTIMONIALS */}
       <section className="testimonials-section section-padding bg-[#0f0f0f]">
         <div className="container-custom px-4">
           <div className="text-center mb-8 md:mb-12">
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-3 md:mb-4">
               {clientReviewsData.heading.split(' ')[0]} <span className="text-primary">{clientReviewsData.heading.split(' ')[1]}</span>
             </h2>
             <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
               {clientReviewsData.subheading}
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
             {clientReviewsData.reviews.map((testimonial, idx) => (
               <div key={idx} className="testimonial-slide will-change-transform bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-primary p-4 md:p-6 transition-all">
                 <div className="flex gap-1 mb-3 md:mb-4">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <span key={i} className="text-lg md:text-xl text-primary">★</span>
                   ))}
                 </div>
                 <p className="text-sm md:text-base text-gray-300 italic mb-3 md:mb-4 leading-relaxed">"{testimonial.text}"</p>
                 <p className="font-heading font-bold text-white text-sm md:text-base">— {testimonial.name}</p>
               </div>
             ))}
           </div>

           <div className="text-center mt-8 md:mt-12">
             <Link to={clientReviewsData.button.link} className="btn-secondary text-sm md:text-base px-8 md:px-10 py-3 md:py-4 inline-block">
               {clientReviewsData.button.text}
             </Link>
           </div>
         </div>
       </section>

       {/* FINAL CTA */}
       <section className="section-padding bg-[#1a1a1a] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_primary_0%,_transparent_50%)]"></div>
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_secondary_0%,_transparent_50%)]"></div>
         </div>

         <div className="container-custom relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
               {finalCtaData.heading.line1}<br />{finalCtaData.heading.line2.split(' ')[0]} <span className="text-primary">{finalCtaData.heading.line2.split(' ')[1]}</span>
             </h2>
             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
               {finalCtaData.description}
             </p>
             <div className="flex flex-wrap gap-6 justify-center">
               <Link to={finalCtaData.buttons.primary.link} className="btn-primary text-lg px-12 py-4">
                 {finalCtaData.buttons.primary.text}
               </Link>
               <Link to={finalCtaData.buttons.secondary.link} className="btn-secondary text-lg px-12 py-4">
                 {finalCtaData.buttons.secondary.text}
               </Link>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Home;
