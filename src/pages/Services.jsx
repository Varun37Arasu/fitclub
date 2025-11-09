import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  heroData,
  quickStatsData,
  programsData,
  comparisonData,
  whyUsData,
  ctaData,
} from '../data/services';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
    // Hero animations
    gsap.from('.services-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });

    // Staggered card animations
gsap.from('.program-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: {
        trigger: '.programs-section',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        markers: false, // set to true to debug
      },
    });


    // Comparison table animation
    gsap.from('.comparison-row', {
      x: -20,
      stagger: 0.08,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.comparison-section',
        start: 'top 80%',
      },
    });
  })
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section - Brutalist Typography */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container-custom relative z-10">
           <div className="services-hero-title text-center">
             <div className="inline-block px-6 py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-6">
               <span className="text-[#ff4500] font-bold text-sm uppercase tracking-wider">{heroData.badge}</span>
             </div>
             <h1 className="text-6xl md:text-7xl font-heading font-black leading-tight mb-6 px-4 w-full max-w-full overflow-hidden">
               <span className="block text-white break-words hyphens-auto">{heroData.title.split(' ').slice(0, 2).join(' ')}</span>
               <span className="block text-[#ff4500] neon-text break-words hyphens-auto">{heroData.title.split(' ').slice(2).join(' ')}</span>
             </h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
               {heroData.description}
             </p>
           </div>

           {/* Quick Stats */}
           <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
             {quickStatsData.map((stat, idx) => (
               <div key={idx} className="bg-[#1a1a1a] border-2 border-[#ff4500] p-4 text-center">
                 <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">{stat.value}</div>
                 <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Programs Section - Card Stack Layout */}
      <section className="programs-section section-padding bg-[#1a1a1a] relative overflow-hidden">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>

        <div className="container-custom relative z-10">
           <div className="mb-16 text-center">
             <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4">
               Our <span className="text-[#ff4500]">Programs</span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Each program is designed to deliver maximum results based on your goals and commitment level.
             </p>
           </div>

          {/* Program Cards with Overlapping Layout */}
          <div className="space-y-12">
            {programsData.map((program, idx) => (
              <div
                key={program.id}
                className="program-card relative"
                // style={{ transform: `translateX(${idx * 20}px)` }}
              >
                 {/* Popular Badge */}
                 {program.popular && (
                   <div className="absolute -top-4 right-6 z-20 px-4 py-2 bg-[#ff4500] text-white text-xs font-bold uppercase">
                     Most Popular
                   </div>
                 )}

                 <div className={`relative bg-black/40 backdrop-blur-sm border-2 ${program.popular ? 'border-[#ff4500]' : 'border-gray-800'} p-8 md:p-12 hover:border-[#ff4500] transition-all`}>
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4500] via-[#ff8c00] to-[#ff4500] opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="grid md:grid-cols-3 gap-12">
                       {/* Left: Title & Description */}
                       <div className="md:col-span-2">
                         <div className="mb-6">
                           <div className="text-sm text-[#ff4500] font-bold mb-2 uppercase">{program.tagline}</div>
                           <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-3">
                             {program.title}
                           </h3>
                           <p className="text-lg text-gray-300 leading-relaxed mb-6">
                             {program.description}
                           </p>
                         </div>

                         {/* Features List */}
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                           {program.features.map((feature, i) => (
                             <div key={i} className="flex items-start gap-2">
                               <div className="w-5 h-5 bg-[#ff4500] flex items-center justify-center flex-shrink-0 mt-0.5">
                                 <span className="text-white text-xs font-bold">✓</span>
                               </div>
                               <span className="text-gray-300 text-sm">{feature}</span>
                             </div>
                           ))}
                         </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          {program.highlights.map((highlight, i) => (
                            <div key={i} className="border-2 border-[#ff4500] px-4 py-2">
                              <div className="text-2xl font-heading font-black text-[#ff4500] mb-1">{highlight.metric}</div>
                              <div className="text-xs text-gray-400">{highlight.label}</div>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={program.link}
                          className="inline-block btn-primary text-base px-8 py-3"
                        >
                          View Details
                        </Link>
                      </div>

                       {/* Right: Pricing & Stats */}
                      <div className="space-y-4">
                        {/* Price Card */}
                        <div className="bg-black/60 border-2 border-[#ff4500] p-6 text-center">
                          <div className="text-4xl font-heading font-black text-[#ff4500] mb-1">
                            {program.price}
                          </div>
                          <div className="text-gray-400 text-sm">{program.duration}</div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-2">
                          <div className="bg-[#1a1a1a] border border-gray-700 p-3 flex justify-between items-center">
                            <span className="text-gray-400 text-xs font-bold">Sessions</span>
                            <span className="text-xl font-heading font-black text-[#ff4500]">{program.sessions}</span>
                          </div>
                          <div className="bg-[#1a1a1a] border border-gray-700 p-3 flex justify-between items-center">
                            <span className="text-gray-400 text-xs font-bold">Duration</span>
                            <span className="text-xl font-heading font-black text-[#ff4500]">{program.duration}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <Link
                          to="/contact"
                          className="block text-center btn-secondary text-sm py-3"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Modern Grid */}
      <section className="comparison-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-16 uppercase text-center">
            {comparisonData.heading.split(' ')[0]} <span className="text-[#ff4500]">{comparisonData.heading.split(' ')[1]}</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b-4 border-[#ff4500]">
                  {comparisonData.headers.map((header, idx) => (
                    <th 
                      key={idx}
                      className={`text-${idx === 0 ? 'left' : 'center'} p-8 text-2xl font-heading font-black text-white uppercase ${idx === 2 ? 'bg-black/60 border-x-4 border-[#ff4500]' : 'bg-[#1a1a1a]'}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#1a1a1a]">
                {comparisonData.rows.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`comparison-row ${idx < comparisonData.rows.length - 1 ? 'border-b-2 border-gray-700' : ''} hover:bg-[#242424] transition-colors`}
                  >
                    <td className="p-8 font-bold text-white text-lg">{row.feature}</td>
                    <td className="p-8 text-center text-gray-200 text-lg">{row.fourWeek}</td>
                    <td className={`p-8 text-center text-[#ff4500] font-bold ${row.eightWeek === '✓' ? 'text-2xl' : 'text-lg'} bg-[#242424]`}>{row.eightWeek}</td>
                    <td className={`p-8 text-center text-gray-200 ${row.nutrition === '✓' ? 'text-2xl' : 'text-lg'}`}>{row.nutrition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-5xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            WHY <span className="text-[#ff4500]">US?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {whyUsData.map((reason, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-[#ff4500] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all group relative overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl lg:text-8xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">
                  {reason.num}
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-3 border-[#ff4500] flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl md:text-2xl font-heading font-black text-[#ff4500]">{reason.num}</span>
                    </div>
                    <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-2 md:mb-3 break-words leading-tight">{reason.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed break-words">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient Borders + Glow */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_60%)] opacity-10"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_60%)] opacity-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-8 uppercase leading-none">
              {ctaData.heading.line1}<br />
              <span className="text-[#ff4500]">{ctaData.heading.line2}</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              {ctaData.description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {ctaData.buttons.map((button, idx) => (
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

export default Services;
