import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { nutritionData } from '../../data/programs';

const NutritionPlan = () => {
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
    <div className="pt-0 bg-[#0f0f0f]">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/70 to-[#0f0f0f]"></div>
        </div>

        <div className="container-custom relative z-10 flex items-center justify-center">
          <div className="program-hero-title text-center px-4 w-full max-w-full overflow-hidden">
            <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-primary mb-6 md:mb-8">
              <span className="text-white font-heading font-black text-xs md:text-sm lg:text-base uppercase tracking-widest break-words">{nutritionData.hero.badge}</span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-heading font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words hyphens-auto">
              <span className="block text-white">{nutritionData.hero.title.split(' ')[0]}</span>
              <span className="block text-primary neon-text">{nutritionData.hero.title.split(' ')[1]}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2 break-words">
              {nutritionData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/payment?plan=nutrition" className="btn-primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">
                START NOW → {nutritionData.hero.price}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full px-4 mt-8 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
              {nutritionData.stats.map((stat, idx) => (
                <div key={idx} className="bg-bg-secondary border border-gray-700 md:border-2 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-primary mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300 break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            WHAT YOU <span className="text-primary">GET</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {nutritionData.included.map((feature, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary backdrop-blur-sm border-2 border-gray-700 hover:border-primary rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {feature.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-3 border-primary flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl md:text-2xl font-heading font-black text-primary">{feature.num}</span>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-2 md:mb-3 break-words leading-tight">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed break-words">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-16 uppercase">
            SAMPLE <span className="text-primary">DAY</span>
          </h2>

          <div className="max-w-4xl space-y-6">
            {nutritionData.sampleDay.map((meal, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border-l-4 border-primary p-6 hover:translate-x-2 transition-transform">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-heading font-black text-primary">{meal.meal}</span>
                      <span className="text-sm text-gray-400">{meal.time}</span>
                    </div>
                    <p className="text-lg text-white mb-1">{meal.food}</p>
                    <p className="text-sm text-gray-400 font-mono">{meal.macros}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 uppercase leading-tight">
              {nutritionData.cta.heading.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{nutritionData.cta.heading.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              {nutritionData.cta.description}
            </p>
            <Link to={nutritionData.cta.buttonLink} className="btn-primary text-2xl px-16 py-8">
              {nutritionData.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionPlan;
