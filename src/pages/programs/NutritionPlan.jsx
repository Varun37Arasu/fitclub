import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';

const NutritionPlan = () => {
  useEffect(() => {
    gsap.from('.program-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="program-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8">
              <span className="text-white font-heading font-black text-lg uppercase tracking-widest">MONTHLY</span>
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-heading font-black leading-[0.9] tracking-tighter mb-8">
              <span className="block text-white">NUTRITION</span>
              <span className="block text-[#ff4500] neon-text">COACHING</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Personalized meal plans and nutrition guidance to fuel your fitness goals and build sustainable habits.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-xl px-12 py-6">
                START NOW → ₹6,999/mo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            WHAT YOU <span className="text-[#ff4500]">GET</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'PERSONALIZED MEAL PLANS', desc: 'Custom plans based on your goals, preferences, and lifestyle', icon: '🍽️' },
              { title: 'MACRO CALCULATIONS', desc: 'Precise protein, carbs, and fat targets optimized for results', icon: '🧮' },
              { title: 'RECIPE DATABASE', desc: 'Access to 200+ healthy, delicious recipes', icon: '📚' },
              { title: 'MONTHLY CALLS', desc: 'One-on-one video consultations with nutritionist', icon: '📞' },
              { title: 'EMAIL SUPPORT', desc: 'Unlimited email support throughout the month', icon: '📧' },
              { title: 'PROGRESS TRACKING', desc: 'Weekly check-ins and plan adjustments', icon: '📊' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 transition-all group"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            SAMPLE <span className="text-[#ff4500]">DAY</span>
          </h2>

          <div className="max-w-4xl space-y-6">
            {[
              { meal: 'BREAKFAST', time: '7:00 AM', food: 'Scrambled eggs, oatmeal, berries', macros: 'P: 30g | C: 45g | F: 15g' },
              { meal: 'SNACK', time: '10:00 AM', food: 'Greek yogurt with almonds', macros: 'P: 20g | C: 15g | F: 10g' },
              { meal: 'LUNCH', time: '1:00 PM', food: 'Grilled chicken, rice, vegetables', macros: 'P: 40g | C: 50g | F: 12g' },
              { meal: 'SNACK', time: '4:00 PM', food: 'Protein shake, banana', macros: 'P: 25g | C: 30g | F: 5g' },
              { meal: 'DINNER', time: '7:00 PM', food: 'Salmon, sweet potato, broccoli', macros: 'P: 35g | C: 40g | F: 18g' },
            ].map((meal, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border-l-4 border-[#ff4500] p-6 hover:translate-x-2 transition-transform">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-heading font-black text-[#ff4500]">{meal.meal}</span>
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
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
              FUEL YOUR <span className="text-[#ff4500]">SUCCESS</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Start your nutrition coaching today and transform your relationship with food.
            </p>
            <Link to="/contact" className="btn-primary text-2xl px-16 py-8">
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionPlan;
