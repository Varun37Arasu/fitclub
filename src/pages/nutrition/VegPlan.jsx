import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vegPlanData } from '../../data/nutrition-plans';
import MoneyBackBadge from '../../components/MoneyBackBadge';

gsap.registerPlugin(ScrollTrigger);

const VegPlan = () => {
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
            alt="Vegetarian Nutrition"
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
              <Link to="/payment?plan=veg" className="btn-primary text-sm md:text-lg lg:text-xl px-8 md:px-12 py-3 md:py-6 text-center w-full sm:w-auto">
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

      {/* Science-Based Approach */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            SCIENCE-BACKED <span className="text-orange-500">NUTRITION</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Protein Optimization</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Plant-based proteins combined strategically to provide all 9 essential amino acids. Each meal designed to maximize muscle protein synthesis through proper timing and combinations.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">150g+ Daily Protein</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Complete Amino Profile</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Nutrient Density Focus</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every meal provides maximum micronutrients per calorie. Strategic supplementation fills gaps ensuring optimal hormone production, recovery, and performance.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Vitamin B12 Optimized</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Iron Absorption</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Metabolic Adaptation</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Periodized carbohydrate intake aligned with training intensity. Higher carbs on training days, moderate on rest days to optimize body composition without metabolic slowdown.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Carb Cycling</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Metabolic Flexibility</span>
              </div>
            </div>

            <div className="bg-black/60 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-heading font-black text-white mb-4">Gut Health Priority</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Fiber-rich whole foods support microbiome diversity. Fermented foods and targeted probiotics enhance nutrient absorption and immune function.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">35g+ Daily Fiber</span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50">Probiotic Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Structure System */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            DAILY MEAL <span className="text-orange-500">STRUCTURE</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { time: "06:00 AM", meal: "Pre-Workout", focus: "Quick-digesting carbs + amino acids", calories: "200-250 kcal" },
              { time: "08:00 AM", meal: "Post-Workout", focus: "High protein + glycogen replenishment", calories: "500-600 kcal" },
              { time: "11:30 AM", meal: "Mid-Morning", focus: "Balanced macros + micronutrient density", calories: "400-500 kcal" },
              { time: "02:30 PM", meal: "Lunch", focus: "Primary protein + complex carbs + fats", calories: "600-700 kcal" },
              { time: "05:30 PM", meal: "Pre-Evening Snack", focus: "Sustained energy + protein", calories: "300-400 kcal" },
              { time: "08:00 PM", meal: "Dinner", focus: "Protein + vegetables + healthy fats", calories: "500-600 kcal" }
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
              <span className="text-white font-bold">Total Daily Intake:</span> 2500-3050 calories across 6 strategically timed meals. Macros adjust based on training schedule and individual metabolic response.
            </p>
          </div>
        </div>
      </section>

      {/* Nutrient Breakdown */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            MACRO & MICRO <span className="text-orange-500">TARGETS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Macronutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-orange-500 mb-6 border-b-2 border-orange-500 pb-3">MACRONUTRIENTS</h3>
              
              <div className="space-y-4">
                <div className="bg-black/40 p-6 border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">PROTEIN</span>
                    <span className="text-2xl font-heading font-black text-orange-500">150-180g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Paneer, Tofu, Lentils, Chickpeas, Greek Yogurt, Protein Powder</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">Muscle Preservation</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">Satiety</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-xs">Recovery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 p-6 border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">CARBOHYDRATES</span>
                    <span className="text-2xl font-heading font-black text-blue-500">250-350g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Brown Rice, Quinoa, Oats, Sweet Potato, Fruits, Vegetables</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Energy</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Performance</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-xs">Recovery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 p-6 border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-white">FATS</span>
                    <span className="text-2xl font-heading font-black text-green-500">60-80g</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Nuts, Seeds, Avocado, Olive Oil, Coconut, Ghee</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Hormones</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Absorption</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Satiety</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micronutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-orange-500 mb-6 border-b-2 border-orange-500 pb-3">KEY MICRONUTRIENTS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { nutrient: "Vitamin B12", amount: "2.4mcg", source: "Fortified + Supplement" },
                  { nutrient: "Iron", amount: "18mg", source: "Lentils + Vitamin C" },
                  { nutrient: "Calcium", amount: "1000mg", source: "Dairy + Greens" },
                  { nutrient: "Omega-3", amount: "250mg DHA", source: "Algae Oil" },
                  { nutrient: "Vitamin D", amount: "1000 IU", source: "Fortified + Sun" },
                  { nutrient: "Zinc", amount: "11mg", source: "Seeds + Legumes" },
                  { nutrient: "Magnesium", amount: "400mg", source: "Nuts + Whole Grains" },
                  { nutrient: "Fiber", amount: "35g+", source: "Whole Foods" }
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

      {/* Progress Timeline */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            YOUR <span className="text-orange-500">TRANSFORMATION</span> JOURNEY
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { week: "Week 1-2", title: "Foundation & Adaptation", description: "Body adjusts to new eating patterns. Initial water weight changes. Energy levels stabilize. Digestive system adapts to increased fiber." },
              { week: "Week 3-4", title: "Metabolic Shift", description: "Improved insulin sensitivity. Enhanced nutrient partitioning. Better workout performance. Visible reduction in bloating." },
              { week: "Week 5-8", title: "Body Recomposition", description: "Measurable fat loss while maintaining muscle. Strength improvements. Better recovery between workouts. Stable hunger signals." },
              { week: "Week 9-12", title: "Optimized Performance", description: "Peak metabolic efficiency. Noticeable body composition changes. Established sustainable habits. Enhanced energy throughout day." },
              { week: "Month 4+", title: "Sustained Results", description: "Long-term lifestyle integration. Continued progressive improvements. Metabolic flexibility. Permanent habit formation." }
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

      {/* Professional Support */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">
            PROFESSIONAL <span className="text-orange-500">GUIDANCE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Weekly Check-Ins", points: ["Progress photos analysis", "Weight & measurements tracking", "Plan adjustments based on results", "Macro modifications if needed"] },
              { title: "24/7 Expert Access", points: ["WhatsApp support group", "Quick response to questions", "Recipe modifications help", "Supplement guidance"] },
              { title: "Custom Resources", points: ["200+ vegetarian recipes", "Meal prep video guides", "Shopping list templates", "Restaurant eating strategies"] }
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
              START YOUR <span className="text-orange-500">TRANSFORMATION</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Monthly subscription includes everything you need for sustainable results
            </p>

            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border-2 border-orange-500 p-12 mb-8">
              <div className="text-4xl md:text-6xl font-heading font-black text-orange-500 mb-4">{vegPlanData.hero.price}</div>
              <p className="text-gray-300 mb-8">Cancel anytime. No contracts. Results guaranteed.</p>
              
              <Link to="/payment?plan=veg" className="btn-primary text-xl px-16 py-6 inline-block mb-8">
                GET STARTED NOW
              </Link>

              <div className="grid md:grid-cols-2 gap-4 text-left mt-8 pt-8 border-t border-gray-700">
                {[
                  "Personalized meal plans updated weekly",
                  "24/7 nutritionist support via WhatsApp",
                  "Complete recipe database access",
                  "Progress tracking & adjustments",
                  "Supplement protocol guidance",
                  "Meal prep guides & shopping lists"
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
              <p className="text-gray-300">Not satisfied with your results? Get a full refund. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VegPlan;
