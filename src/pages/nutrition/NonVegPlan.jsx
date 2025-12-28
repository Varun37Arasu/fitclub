import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nonVegPlanData } from '../../data/nutrition-plans';
import MoneyBackBadge from '../../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const NonVegPlan = () => {
  const vegPlanData = nonVegPlanData;
  
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
    <div className="bg-[#0f0f0f]">
      {/* Hero Section - KEEP AS IS */}
      <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden pb-8 pt-24">
        <div className="absolute inset-0">
          <img 
            src={vegPlanData.hero.image} 
            alt="Non-Vegetarian Nutrition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        </div>

        <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
          <div className="program-hero-title text-center max-w-full w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-amber-600 border-2 md:border-4 border-black">
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
              <Link to="/payment?plan=non-veg" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
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

      {/* Complete Protein Advantage */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            COMPLETE PROTEIN <span className="text-orange-500">ADVANTAGE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Superior Amino Acid Profile</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Animal proteins provide all 9 essential amino acids in optimal ratios. High biological value ensures maximum muscle protein synthesis with lower total volume needed compared to plant sources.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">200g+ Daily Protein</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Complete Amino Profile</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Bioavailable Nutrients</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Animal sources provide heme iron (higher absorption), preformed vitamin A, B12, creatine, and carnosine. These nutrients are either absent or poorly absorbed from plant sources.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Heme Iron</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Natural Creatine</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Lean Muscle Optimization</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                High leucine content in chicken, fish, and eggs triggers mTOR pathway activation. Strategic protein timing around workouts maximizes muscle growth and recovery.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Leucine Rich</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Fast Absorption</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Omega-3 from Marine Sources</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                EPA and DHA from fatty fish support anti-inflammatory response, cognitive function, and cardiovascular health. Superior to plant-based ALA conversion.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">EPA + DHA</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Anti-Inflammatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Meal Protocol */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            DAILY MEAL <span className="text-orange-500">PROTOCOL</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { time: "05:30 AM", meal: "Pre-Workout", focus: "Egg whites + oats for sustained energy", calories: "250-300 kcal" },
              { time: "07:30 AM", meal: "Post-Workout", focus: "Chicken breast + sweet potato + protein shake", calories: "650-750 kcal" },
              { time: "11:00 AM", meal: "Mid-Morning", focus: "Greek yogurt + nuts + berries", calories: "400-450 kcal" },
              { time: "02:00 PM", meal: "Lunch", focus: "Salmon/chicken + brown rice + vegetables", calories: "700-800 kcal" },
              { time: "05:00 PM", meal: "Pre-Evening", focus: "Tuna/eggs + avocado + whole grain", calories: "450-500 kcal" },
              { time: "08:00 PM", meal: "Dinner", focus: "Lean beef/fish + quinoa + greens", calories: "600-700 kcal" }
            ].map((meal, idx) => (
              <div key={idx} className="bg-black/40 border border-gray-800 hover:border-orange-500 transition-all">
                <div className="grid md:grid-cols-12 items-center">
                  <div className="md:col-span-2 bg-orange-500/10 border-r border-gray-800 p-6">
                    <div className="text-2xl font-heading font-black text-orange-500">{meal.time}</div>
                  </div>
                  <div className="md:col-span-7 p-6">
                    <h3 className="text-xl font-heading font-black text-white mb-2">{meal.meal}</h3>
                    <p className="text-gray-400 text-sm">{meal.focus}</p>
                  </div>
                  <div className="md:col-span-3 p-6 text-right">
                    <div className="text-lg font-bold text-gray-300">{meal.calories}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 p-6">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-white font-bold">Total Daily Intake:</span> 3050-3500 calories across 6 protein-rich meals. Macros optimized for maximum muscle growth and fat loss simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Macro & Micro Breakdown */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            MACRO & MICRO <span className="text-orange-500">OPTIMIZATION</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Macronutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-orange-500 mb-6 border-b-2 border-orange-500 pb-3">MACRONUTRIENTS</h3>
              
              <div className="space-y-4">
                <div className="bg-black/40 p-6 border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">PROTEIN</span>
                    <span className="text-2xl font-heading font-black text-orange-500">200-250g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Chicken Breast, Salmon, Eggs, Lean Beef, Turkey, Prawns, Whey</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">Muscle Growth</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">High Leucine</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">Complete Amino Acids</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 p-6 border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">CARBOHYDRATES</span>
                    <span className="text-2xl font-heading font-black text-blue-500">300-400g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Brown Rice, Sweet Potato, Oats, Quinoa, Whole Grains, Fruits</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Performance Fuel</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Glycogen Loading</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Recovery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 p-6 border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">FATS</span>
                    <span className="text-2xl font-heading font-black text-green-500">70-90g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Salmon, Egg Yolks, Avocado, Nuts, Olive Oil, Grass-Fed Butter</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Omega-3 Rich</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Hormone Support</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Nutrient Absorption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animal-Source Nutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-orange-500 mb-6 border-b-2 border-orange-500 pb-3">ANIMAL-SOURCE NUTRIENTS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { nutrient: "Vitamin B12", amount: "2.4mcg", source: "Naturally abundant" },
                  { nutrient: "Heme Iron", amount: "18mg", source: "High absorption" },
                  { nutrient: "Creatine", amount: "5g", source: "Beef + Fish" },
                  { nutrient: "EPA + DHA", amount: "2000mg", source: "Fatty Fish" },
                  { nutrient: "Vitamin D", amount: "1000 IU", source: "Salmon + Eggs" },
                  { nutrient: "Zinc", amount: "11mg", source: "Red Meat" },
                  { nutrient: "Selenium", amount: "55mcg", source: "Fish + Poultry" },
                  { nutrient: "Carnosine", amount: "Natural", source: "Muscle Meats" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black/60 border border-gray-800 p-4">
                    <h4 className="text-white font-heading font-black text-sm mb-1">{item.nutrient}</h4>
                    <div className="text-orange-500 font-bold text-lg mb-2">{item.amount}</div>
                    <p className="text-gray-400 text-xs">{item.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Timeline */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            LEAN MUSCLE <span className="text-orange-500">TRANSFORMATION</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { week: "Week 1-2", title: "Protein Adaptation", description: "Body upregulates protein metabolism enzymes. Increased amino acid oxidation. Improved nitrogen retention. Initial strength gains from neural adaptations." },
              { week: "Week 3-4", title: "Anabolic Response", description: "Enhanced muscle protein synthesis rates. Visible pump and fullness. Improved workout capacity. Better post-workout recovery." },
              { week: "Week 5-8", title: "Lean Mass Gains", description: "Measurable muscle growth while losing fat. Strength increases across all lifts. Enhanced vascularity. Body recomposition visible." },
              { week: "Week 9-12", title: "Physique Transformation", description: "Significant muscle definition. Increased metabolic rate. Sustainable strength gains. Athletic performance peak." },
              { week: "Month 4+", title: "Elite Conditioning", description: "Maintained lean muscle mass. Optimized body composition. Peak athletic performance. Metabolically flexible system." }
            ].map((phase, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent"></div>
                <div className="absolute left-0 top-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0f0f0f]"></div>
                
                <div className="bg-black/40 border border-gray-800 hover:border-orange-500 transition-all p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-bold text-orange-500 bg-orange-500/20 px-3 py-1">{phase.week}</span>
                    <h3 className="text-xl font-heading font-black text-white">{phase.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            PROFESSIONAL <span className="text-orange-500">SUPPORT</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Weekly Assessments", points: ["Body composition analysis", "Strength progression tracking", "Macro adjustments as needed", "Supplement protocol updates"] },
              { title: "Expert Guidance", points: ["WhatsApp support 24/7", "Meal prep strategies", "Restaurant ordering tips", "Travel nutrition planning"] },
              { title: "Premium Resources", points: ["300+ non-veg recipes", "Meal timing guides", "Protein source database", "Supplement stack protocols"] }
            ].map((service, idx) => (
              <div key={idx} className="bg-black/60 border-2 border-gray-800 hover:border-orange-500 p-8 transition-all">
                <h3 className="text-2xl font-heading font-black text-orange-500 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              BUILD YOUR <span className="text-orange-500">BEST PHYSIQUE</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Monthly plan with complete nutrition guidance and support
            </p>

            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border-2 border-orange-500 p-12 mb-8">
              <div className="text-4xl md:text-6xl font-heading font-black text-orange-500 mb-4">{vegPlanData.hero.price}</div>
              <p className="text-gray-300 mb-8">Flexible monthly subscription. Cancel anytime.</p>
              
              <Link to="/payment?plan=non-veg" className="btn-primary text-xl px-16 py-6 inline-block mb-8">
                START NOW
              </Link>

              <div className="grid md:grid-cols-2 gap-4 text-left mt-8 pt-8 border-t border-gray-700">
                {[
                  "Custom meal plans with lean proteins",
                  "24/7 nutritionist support",
                  "300+ non-veg recipe database",
                  "Weekly progress assessments",
                  "Supplement protocol guidance",
                  "Meal prep & timing strategies"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border-2 border-green-500/50 p-6">
              <h3 className="text-2xl font-heading font-black text-white mb-2">30-DAY MONEY-BACK GUARANTEE</h3>
              <p className="text-gray-300">Not satisfied with your progress? Full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonVegPlan;
