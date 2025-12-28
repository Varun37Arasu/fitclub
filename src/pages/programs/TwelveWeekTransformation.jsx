import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { twelveWeekData } from '../../data/programs';
import MoneyBackBadge from '../../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const TwelveWeekTransformation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-hero-title', {
        y: 150,
        duration: 0.8,
        ease: 'power4.out',
      });
    });
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 border-2 md:border-4 border-black">
                <span className="text-white font-heading font-black text-sm md:text-2xl tracking-wider break-words">{twelveWeekData.hero.badge}</span>
              </div>
              {twelveWeekData.hero.moneyBackGuarantee && (
                <MoneyBackBadge className="h-20 md:h-28 w-20 md:w-28" />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words px-2 max-w-full">
              <span className="block text-white">{twelveWeekData.hero.title.split(' ')[0]}</span>
              <span className="block text-[#ff4500] neon-text">{twelveWeekData.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              {twelveWeekData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4">
              <Link to="/contact" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
                START NOW → {twelveWeekData.hero.price}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats at bottom */}
        <div className="w-full px-4 mt-8 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              {twelveWeekData.stats.map((stat, idx) => (
                <div key={idx} className="bg-black/60 border border-gray-700 md:border-2 lg:border-4 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-[#ff4500] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300 break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Package */}
      <section id="details" className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            WHAT'S <span className="text-[#ff4500]">INCLUDED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {twelveWeekData.premiumPackage.map((feature, idx) => (
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
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-8 md:mb-16 text-center">
            TRAINING <span className="text-[#ff4500]">PHASES</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-6">
            {twelveWeekData.trainingPhases.map((phase, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border md:border-2 border-gray-700 hover:border-[#ff4500] p-3 md:p-6 transition-all">
                <div className="flex items-start gap-3 md:gap-6">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 md:border-4 flex-shrink-0"
                    style={{ borderColor: phase.color }}
                  >
                    <span className="text-lg md:text-2xl font-heading font-black" style={{ color: phase.color }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs md:text-sm text-gray-500 font-bold mb-1 break-words">{phase.phase}</div>
                    <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-1 md:mb-2 break-words">{phase.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 break-words">{phase.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-16 text-center">
            PROVEN <span className="text-[#ff4500]">RESULTS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {twelveWeekData.beforeAfter.map((client, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border-2 border-gray-700 hover:border-[#ff4500] p-4 md:p-6 transition-all group">
                <div className="aspect-square bg-black/40 mb-4 overflow-hidden border border-gray-700">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-3">{client.name}</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-black/60 p-2 md:p-3 border border-[#ff4500]">
                    <div className="text-base md:text-xl font-bold text-[#ff4500]">{client.lost}</div>
                    <div className="text-xs text-gray-400">Fat Lost</div>
                  </div>
                  <div className="bg-black/60 p-2 md:p-3 border border-[#ff4500]">
                    <div className="text-base md:text-xl font-bold text-[#ff4500]">{client.gained}</div>
                    <div className="text-xs text-gray-400">Muscle Gain</div>
                  </div>
                  <div className="bg-black/60 p-2 md:p-3 border border-[#ff4500]">
                    <div className="text-base md:text-xl font-bold text-[#ff4500]">{client.weeks}W</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-4 md:mb-6 leading-tight break-words px-2">
              {twelveWeekData.cta.heading.split(' ').slice(0, 2).join(' ')} <span className="text-[#ff4500]">{twelveWeekData.cta.heading.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 px-2">
              {twelveWeekData.cta.description}
            </p>
            <Link to={twelveWeekData.cta.buttonLink} className="btn-primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 inline-block">
              {twelveWeekData.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwelveWeekTransformation;
