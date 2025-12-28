import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { eightWeekData } from '../../data/programs';

gsap.registerPlugin(ScrollTrigger);

const EightWeekTransformation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
    gsap.from('.program-hero-title', {
      y: 150,
      duration: 0.8,
      ease: 'power4.out',
    });
  })
  return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[700px] h-[700px] bg-[#ff4500] opacity-25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#ff8c00] opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
          <div className="program-hero-title text-center max-w-full w-full">
            <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mb-6 md:mb-8 border-2 md:border-4 border-black inline-block">
              <span className="text-white font-heading font-black text-sm md:text-2xl tracking-wider break-words">{eightWeekData.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words px-2 max-w-full">
              <span className="block text-white">{eightWeekData.hero.title.split(' ')[0]}</span>
              <span className="block text-[#ff4500] neon-text">{eightWeekData.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              {eightWeekData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4">
              <Link to="/contact" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
                START NOW → {eightWeekData.hero.price}
              </Link>
              <a href="#details" className="btn-secondary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Stats at bottom */}
        <div className="w-full px-4 mt-8 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              {eightWeekData.stats.map((stat, idx) => (
                <div key={idx} className="bg-black/60 border border-gray-700 md:border-2 lg:border-4 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-[#ff4500] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300 break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="details" className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            PREMIUM <span className="text-[#ff4500]">PACKAGE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {eightWeekData.premiumPackage.map((feature, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-[#ff4500] rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">
                  {feature.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-[#ff4500] flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-heading font-black text-[#ff4500]">{feature.num}</span>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-2 break-words">{feature.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed break-words">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Phases */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6 md:mb-12 text-center break-words">
            TRAINING <span className="text-[#ff4500]">PHASES</span>
          </h2>

          <div className="space-y-3 md:space-y-6 max-w-3xl mx-auto">
            {eightWeekData.trainingPhases.map((phase, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-gray-700 md:border-2 hover:border-[#ff4500] p-3 md:p-6 transition-all">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                    <span className="text-lg md:text-2xl font-heading font-black text-white">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#ff4500] font-bold mb-1 break-words">{phase.phase}</div>
                    <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-1 break-words leading-tight">{phase.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 break-words leading-tight">{phase.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            REAL <span className="text-[#ff4500]">RESULTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {eightWeekData.beforeAfter.map((result, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-xl md:rounded-2xl p-2 md:p-3 hover:scale-105 transition-transform">
                <div className={`h-full bg-cover bg-center rounded-lg md:rounded-xl relative overflow-hidden`} 
                  style={{ backgroundImage: `url(${result.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-2 md:mb-3">{result.name}</h3>
                      <div className="flex gap-2 md:gap-3 text-xs md:text-sm font-bold flex-wrap">
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-[#ff4500] text-white rounded-full">-{result.lost} FAT</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-[#ff4500] text-white rounded-full">+{result.gained}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center">
                      <span className="font-heading font-black text-lg md:text-2xl">{result.weeks}W</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-4 md:mb-6 leading-tight break-words px-2">
              {eightWeekData.cta.heading.split(' ').slice(0, 2).join(' ')} <span className="text-[#ff4500]">{eightWeekData.cta.heading.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 px-2">
              {eightWeekData.cta.description}
            </p>
            <Link to={eightWeekData.cta.buttonLink} className="btn-primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 inline-block">
              {eightWeekData.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EightWeekTransformation;
