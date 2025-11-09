import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fourWeekData } from '../../data/programs';

gsap.registerPlugin(ScrollTrigger);

const FourWeekTransformation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
    gsap.from('.program-hero-title', {
      y: 150,
      duration: 0.8,
      ease: 'power4.out',
    });

    gsap.from('.program-feature', {
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
    });
  })
  return () => ctx.revert();

  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section with Full Viewport Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden  pb-16">
         {/* Full Viewport Background */}
         <div className="absolute inset-0 ">
           <img 
             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 via-transparent to-[#ff8c00]/20"></div>
         </div>

         <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
           <div className="program-hero-title text-center max-w-full w-full">
             <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-4 md:mb-6">
               <span className="text-[#ff4500] font-bold text-xs md:text-sm uppercase tracking-wider">{fourWeekData.hero.badge}</span>
             </div>
             <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight mb-4 md:mb-6 break-words px-2">
               <span className="block text-white">{fourWeekData.hero.title.split('-')[0].trim()}</span>
               <span className="block text-[#ff4500] neon-text">{fourWeekData.hero.title.split('-')[1].trim()}</span>
             </h1>
             <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
               {fourWeekData.hero.description}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4">
               <Link to="/contact" className="btn-primary text-sm md:text-lg px-8 md:px-12 py-3 md:py-4 text-center w-full sm:w-auto">
                 Start Now - {fourWeekData.hero.price}
               </Link>
               <a href="#details" className="btn-secondary text-sm md:text-lg px-8 md:px-12 py-3 md:py-4 text-center w-full sm:w-auto">
                 View Details
               </a>
             </div>
           </div>
         </div>

         {/* Stats */}
         <div className="w-full px-4 mt-8 absolute bottom-24 md:left-1/2 md:-translate-x-1/2 max-w-4xl z-10">
           <div className="grid grid-cols-3 gap-3 md:gap-6">
             {fourWeekData.stats.map((stat, idx) => (
               <div key={idx} className="bg-black/60 border-2 border-[#ff4500] p-3 md:p-6 text-center hover:scale-105 transition-transform">
                 <div className="text-3xl md:text-5xl font-heading font-black text-[#ff4500] mb-1 md:mb-2">{stat.value}</div>
                 <div className="text-xs text-gray-400 font-bold break-words">{stat.label}</div>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* What's Included - Bento Grid */}
      <section id="details" className="features-section section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            WHAT'S <span className="text-[#ff4500]">INCLUDED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {fourWeekData.included.map((feature, idx) => (
              <div
                key={idx}
                className={`program-feature ${idx === 0 || idx === 4 ? 'md:col-span-2' : ''} bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-[#ff4500] rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group relative overflow-hidden min-h-[160px] md:min-h-[200px]`}
              >
                <div className="absolute top-4 right-4 text-6xl md:text-8xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">
                  {feature.num}
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 border-3 border-[#ff4500] flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl md:text-2xl font-heading font-black text-[#ff4500]">{feature.num}</span>
                    </div>
                    <h3 className="text-base md:text-2xl lg:text-3xl font-heading font-black text-white mb-2 md:mb-3 break-words leading-tight">{feature.title}</h3>
                    <p className="text-xs md:text-base text-gray-300 leading-relaxed break-words">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule - Card Stack */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            WEEKLY <span className="text-[#ff4500]">SCHEDULE</span>
          </h2>

          <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
            {fourWeekData.schedule.map((session, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border-l-4 md:border-l-6 border-[#ff4500] p-4 md:p-6 hover:translate-x-2 md:hover:translate-x-4 transition-transform"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#ff4500] font-bold mb-1">{session.day}</div>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-heading font-black text-white break-words leading-tight">{session.focus}</h3>
                  </div>
                  <div className="px-3 py-2 md:px-4 md:py-2 bg-[#ff4500] border-2 md:border-3 border-black self-start">
                    <span className="font-heading font-black text-black text-xs md:text-sm">{session.intensity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results - Split Screen */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-4 md:mb-8 leading-tight break-words">
                EXPECTED <span className="text-[#ff4500]">RESULTS</span>
              </h2>
              <div className="space-y-3 md:space-y-4">
                {fourWeekData.expectedResults.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff4500] flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-2xl font-heading font-black text-white">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xl md:text-3xl lg:text-4xl font-heading font-black text-[#ff4500] mb-0.5 md:mb-1 break-words leading-tight">{result.metric}</div>
                      <div className="text-xs md:text-sm text-gray-300 break-words">{result.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-xl md:rounded-2xl p-3 md:p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 h-full flex items-end">
                  <div className="bg-black/70 backdrop-blur-xl p-4 md:p-6 rounded-lg md:rounded-xl">
                    <p className="text-sm md:text-lg lg:text-xl font-heading font-black text-white leading-tight break-words">
                      "{fourWeekData.testimonial.quote}"
                    </p>
                    <p className="text-xs md:text-sm text-gray-300 mt-2 md:mt-3 break-words">— {fourWeekData.testimonial.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Border */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
              {fourWeekData.cta.heading.split(' ').slice(0, 2).join(' ')} <span className="text-[#ff4500]">{fourWeekData.cta.heading.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              {fourWeekData.cta.description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {fourWeekData.cta.buttons.map((button, idx) => (
                <Link 
                  key={idx}
                  to={button.link} 
                  className={button.primary ? 'btn-primary text-2xl px-16 py-8' : 'btn-secondary text-2xl px-16 py-8'}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourWeekTransformation;
