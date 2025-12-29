import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { annualData } from '../../data/programs';
import MoneyBackBadge from '../../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const AnnualTransformation = () => {
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
    <div className="pt-20 bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[700px] h-[700px] bg-primary opacity-25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-secondary opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
          <div className="program-hero-title text-center max-w-full w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 border-2 md:border-4 border-black">
                <span className="text-txt-primary font-heading font-black text-sm md:text-2xl tracking-wider break-words">{annualData.hero.badge}</span>
              </div>
              {annualData.hero.moneyBackGuarantee && (
                <MoneyBackBadge className="h-20 md:h-28 w-20 md:w-28" />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words px-2 max-w-full">
              <span className="block text-txt-primary">{annualData.hero.title.split(' ')[0]}</span>
              <span className="block text-primary neon-text">{annualData.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-txt-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              {annualData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4">
              <Link to="/payment?plan=annual" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
                START NOW → {annualData.hero.price}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats at bottom */}
        <div className="w-full px-4 mt-8 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              {annualData.stats.map((stat, idx) => (
                <div key={idx} className="bg-bg-secondary border border-gray-300 md:border-2 lg:border-4 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-primary mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-txt-secondary break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Package */}
      <section id="details" className="section-padding bg-bg-primary">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-txt-primary mb-8 md:mb-12 text-center break-words">
            WHAT'S <span className="text-primary">INCLUDED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {annualData.premiumPackage.map((feature, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary backdrop-blur-sm border-2 border-gray-300 hover:border-primary rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {feature.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-heading font-black text-primary">{feature.num}</span>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-txt-primary mb-2 break-words">{feature.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base text-txt-muted leading-relaxed break-words">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Phases */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-txt-primary mb-8 md:mb-16 text-center">
            TRAINING <span className="text-primary">PHASES</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-6">
            {annualData.trainingPhases.map((phase, idx) => {
              const getColorClass = (colorName) => {
                const colorMap = {
                  'primary-light': { border: 'border-primary-light', text: 'text-primary-light' },
                  'primary': { border: 'border-primary', text: 'text-primary' },
                  'primary-hover': { border: 'border-primary-hover', text: 'text-primary-hover' },
                  'secondary': { border: 'border-secondary', text: 'text-secondary' },
                  'secondary-hover': { border: 'border-secondary-hover', text: 'text-secondary-hover' },
                };
                return colorMap[colorName] || { border: 'border-primary', text: 'text-primary' };
              };
              const colors = getColorClass(phase.color);
              
              return (
              <div key={idx} className="bg-bg-secondary backdrop-blur-sm border md:border-2 border-gray-300 hover:border-primary p-3 md:p-6 transition-all">
                <div className="flex items-start gap-3 md:gap-6">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 md:border-4 flex-shrink-0 ${colors.border}`}
                  >
                    <span className={`text-lg md:text-2xl font-heading font-black ${colors.text}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs md:text-sm text-gray-500 font-bold mb-1 break-words">{phase.phase}</div>
                    <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-txt-primary mb-1 md:mb-2 break-words">{phase.title}</h3>
                    <p className="text-xs md:text-sm text-txt-muted break-words">{phase.focus}</p>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-txt-primary mb-8 md:mb-16 text-center">
            PROVEN <span className="text-primary">RESULTS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {annualData.beforeAfter.map((client, idx) => (
              <div key={idx} className="bg-bg-secondary border-2 border-gray-300 hover:border-primary p-4 md:p-6 transition-all group">
                <div className="aspect-square bg-bg-secondary mb-4 overflow-hidden border border-gray-300">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-black text-txt-primary mb-3">{client.name}</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-bg-secondary p-2 md:p-3 border border-primary">
                    <div className="text-base md:text-xl font-bold text-primary">{client.lost}</div>
                    <div className="text-xs text-txt-muted">Fat Lost</div>
                  </div>
                  <div className="bg-bg-secondary p-2 md:p-3 border border-primary">
                    <div className="text-base md:text-xl font-bold text-primary">{client.gained}</div>
                    <div className="text-xs text-txt-muted">Muscle Gain</div>
                  </div>
                  <div className="bg-bg-secondary p-2 md:p-3 border border-primary">
                    <div className="text-base md:text-xl font-bold text-primary">{client.weeks}W</div>
                    <div className="text-xs text-txt-muted">Duration</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-txt-primary mb-4 md:mb-6 leading-tight break-words px-2">
              {annualData.cta.heading.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{annualData.cta.heading.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-base md:text-xl text-txt-secondary mb-8 md:mb-12 px-2">
              {annualData.cta.description}
            </p>
            <Link to={annualData.cta.buttonLink} className="btn-primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 inline-block">
              {annualData.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualTransformation;
