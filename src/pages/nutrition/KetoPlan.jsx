import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ketoPlanData } from '../../data/nutrition-plans';
import MoneyBackBadge from '../../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const KetoPlan = () => {
  const vegPlanData = ketoPlanData;
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
    <div className="pt-24 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden pb-8 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={vegPlanData.hero.image} 
            alt="Keto Nutrition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        </div>

        <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
          <div className="program-hero-title text-center max-w-full w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-orange-600 to-amber-700 border-2 md:border-4 border-black">
                <span className="text-white font-heading font-black text-sm md:text-2xl tracking-wider break-words">{vegPlanData.hero.badge}</span>
              </div>
              {vegPlanData.hero.moneyBackGuarantee && (
                <MoneyBackBadge className="h-20 md:h-28 w-20 md:w-28" />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words px-2 max-w-full">
              <span className="block text-white">{vegPlanData.hero.title.split(' ')[0]}</span>
              <span className="block text-orange-500 neon-text">{vegPlanData.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              {vegPlanData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4">
              <Link to="/payment?plan=keto" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
                START NOW → {vegPlanData.hero.price}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full px-4 mt-12 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
              {vegPlanData.stats.map((stat, idx) => (
                <div key={idx} className="bg-black/70 backdrop-blur-sm border border-gray-700 md:border-2 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-orange-500 mb-1 md:mb-2">{stat.value}</div>
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
            WHAT'S <span className="text-orange-500">INCLUDED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {vegPlanData.included.map((feature, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-orange-500 rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-heading font-black text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                  {feature.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-orange-500 flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-heading font-black text-orange-500">{feature.num}</span>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-heading font-black text-white mb-2 break-words">{feature.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed break-words">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Philosophy */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center">
            OUR <span className="text-orange-500">PHILOSOPHY</span>
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-900/20 to-transparent border-2 border-orange-500/50 p-6 md:p-12 rounded-2xl">
            <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">{vegPlanData.philosophy}</p>
          </div>
        </div>
      </section>

      {/* Nutrition Sources - Completely Redesigned */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center">
            NUTRITION <span className="text-orange-500">SOURCES</span>
          </h2>
          
          {/* Simple Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vegPlanData.foodCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="group relative bg-black/60 border-2 border-gray-800 hover:border-orange-500 p-6 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase mb-4 group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h3>

                  {/* Items List - Simple & Clean */}
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simple accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Macro Breakdown */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center">
            MACRO <span className="text-orange-500">BREAKDOWN</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {vegPlanData.macroBreakdown.goals.map((goal, idx) => (
                <div key={idx} className="bg-black/60 border-2 border-gray-700 hover:border-orange-500 p-6 rounded-xl transition-all">
                  <h3 className="text-xl font-heading font-black text-orange-500 mb-6 text-center">{goal.goal}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Protein:</span>
                      <span className="text-white font-bold">{goal.protein}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Carbs:</span>
                      <span className="text-white font-bold">{goal.carbs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Fats:</span>
                      <span className="text-white font-bold">{goal.fats}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Calories:</span>
                        <span className="text-orange-500 font-bold">{goal.calories}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center">
            SUCCESS <span className="text-orange-500">STORIES</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vegPlanData.successStories.map((story, idx) => (
              <div key={idx} className="bg-black/40 border-2 border-gray-700 hover:border-orange-500 p-6 rounded-xl transition-all group">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-2">{story.name}</h3>
                <p className="text-orange-500 font-bold mb-2">{story.result}</p>
                <p className="text-gray-400 text-sm">{story.duration}</p>
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
              {vegPlanData.cta.heading}
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 px-2">
              {vegPlanData.cta.description}
            </p>
            <Link to={vegPlanData.cta.buttonLink} className="btn-primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 inline-block">
              {vegPlanData.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KetoPlan;

