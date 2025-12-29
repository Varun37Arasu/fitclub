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
    <div className="bg-bg-primary">
      {/* Hero Section - KEEP AS IS */}
      <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden pb-8 pt-24">
        <div className="absolute inset-0 pt-20 md:pt-24">
          <img 
            src={vegPlanData.hero.image} 
            alt="Keto Nutrition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        <div className="container-custom relative z-10 px-4 flex-1 flex items-center justify-center">
          <div className="program-hero-title text-center max-w-full w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-primary to-secondary border-2 md:border-4 border-black">
                <span className="text-txt-primary font-heading font-black text-sm md:text-2xl tracking-wider break-words">{vegPlanData.hero.badge}</span>
              </div>
              {vegPlanData.hero.moneyBackGuarantee && (
                <MoneyBackBadge className="h-20 md:h-28 w-20 md:w-28" />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words px-2 max-w-full">
              <span className="block text-txt-primary">{vegPlanData.hero.title.split(' ')[0]}</span>
              <span className="block text-primary neon-text">{vegPlanData.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-txt-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
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
                <div key={idx} className="bg-bg-secondary/70 backdrop-blur-sm border border-gray-300 md:border-2 p-3 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-primary mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-txt-secondary break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ketogenic Science */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-16 text-center">
            KETOSIS <span className="text-primary">SCIENCE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-bg-secondary border-l-4 border-primary p-8">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-4">Metabolic State Shift</h3>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Restricting carbs to &lt;20g net per day depletes liver glycogen within 48-72 hours. Body transitions to producing ketone bodies (beta-hydroxybutyrate, acetoacetate, acetone) from fatty acids for primary fuel.
              </p>
              <div className="flex items-center gap-4 text-sm text-txt-muted">
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Fat Oxidation</span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Ketone Production</span>
              </div>
            </div>

            <div className="bg-bg-secondary border-l-4 border-primary p-8">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-4">Appetite Regulation</h3>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Ketones suppress ghrelin (hunger hormone) and stabilize blood sugar. High fat intake increases satiety hormones CCK and PYY. Natural caloric deficit without constant hunger.
              </p>
              <div className="flex items-center gap-4 text-sm text-txt-muted">
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Reduced Hunger</span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Stable Energy</span>
              </div>
                </div>

            <div className="bg-bg-secondary border-l-4 border-primary p-8">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-4">Fat Loss Acceleration</h3>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Elevated glucagon and growth hormone levels promote lipolysis. Increased mitochondrial biogenesis improves fat oxidation capacity. Preserves lean mass while targeting adipose tissue.
              </p>
              <div className="flex items-center gap-4 text-sm text-txt-muted">
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Rapid Fat Loss</span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Muscle Preservation</span>
                  </div>
                </div>

            <div className="bg-bg-secondary border-l-4 border-primary p-8">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-4">Cognitive Enhancement</h3>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Ketones cross blood-brain barrier providing superior fuel for neurons. Increased BDNF production supports neuroplasticity. Reduced brain fog and enhanced mental clarity.
              </p>
              <div className="flex items-center gap-4 text-sm text-txt-muted">
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Mental Clarity</span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/50">Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keto Meal Structure */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-16 text-center">
            KETOGENIC MEAL <span className="text-primary">STRUCTURE</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { time: "07:00 AM", meal: "Keto Breakfast", focus: "Eggs + avocado + MCT coffee", calories: "500-600 kcal" },
              { time: "12:00 PM", meal: "High-Fat Lunch", focus: "Fatty salmon + butter greens + olive oil", calories: "700-800 kcal" },
              { time: "04:00 PM", meal: "Fat Bomb Snack", focus: "Macadamia nuts + coconut oil + dark chocolate", calories: "350-400 kcal" },
              { time: "07:30 PM", meal: "Keto Dinner", focus: "Grass-fed ribeye + cauliflower + cheese sauce", calories: "800-900 kcal" }
            ].map((meal, idx) => (
              <div key={idx} className="bg-bg-secondary border border-gray-200 hover:border-primary transition-all">
                <div className="grid md:grid-cols-12 items-center">
                  <div className="md:col-span-2 bg-primary/10 border-r border-gray-200 p-6">
                    <div className="text-2xl font-heading font-black text-primary">{meal.time}</div>
                  </div>
                  <div className="md:col-span-7 p-6">
                    <h3 className="text-xl font-heading font-black text-txt-primary mb-2">{meal.meal}</h3>
                    <p className="text-txt-muted text-sm">{meal.focus}</p>
                  </div>
                  <div className="md:col-span-3 p-6 text-right">
                    <div className="text-lg font-bold text-txt-secondary">{meal.calories}</div>
          </div>
        </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6">
            <p className="text-txt-secondary leading-relaxed">
              <span className="text-txt-primary font-bold">Total Daily Intake:</span> 2350-2700 calories | 70% Fat, 25% Protein, 5% Carbs. Net carbs kept under 20g to maintain deep ketosis.
            </p>
          </div>
        </div>
      </section>

      {/* Macro Breakdown */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-16 text-center">
            KETOGENIC <span className="text-primary">MACROS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Macronutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-primary mb-6 border-b-2 border-primary pb-3">MACRO TARGETS</h3>
              
                  <div className="space-y-4">
                <div className="bg-bg-secondary p-6 border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-txt-primary">FATS (70%)</span>
                    <span className="text-2xl font-heading font-black text-green-500">180-210g</span>
                  </div>
                  <div className="space-y-2 text-sm text-txt-muted">
                    <p>MCT Oil, Coconut Oil, Grass-Fed Butter, Avocado, Olive Oil, Fatty Fish, Nuts, Cheese</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Primary Fuel</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Ketone Production</span>
                      <span className="px-2 py-1 bg-green-500/20 text-xs">Satiety</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-secondary p-6 border-l-4 border-primary">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-txt-primary">PROTEIN (25%)</span>
                    <span className="text-2xl font-heading font-black text-primary">150-175g</span>
                  </div>
                  <div className="space-y-2 text-sm text-txt-muted">
                    <p>Fatty Fish, Beef, Chicken Thighs, Eggs, Pork, Salmon, Bacon</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-primary/20 text-xs">Muscle Preservation</span>
                      <span className="px-2 py-1 bg-primary/20 text-xs">Moderate Intake</span>
                      <span className="px-2 py-1 bg-primary/20 text-xs">Gluconeogenesis Control</span>
                    </div>
                  </div>
                    </div>

                <div className="bg-bg-secondary p-6 border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-heading font-black text-txt-primary">NET CARBS (5%)</span>
                    <span className="text-2xl font-heading font-black text-red-500">&lt;20g</span>
                      </div>
                  <div className="space-y-2 text-sm text-txt-muted">
                    <p>Leafy Greens, Cruciferous Vegetables, Avocado, Berries (limited)</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-red-500/20 text-xs">Ketosis Maintenance</span>
                      <span className="px-2 py-1 bg-red-500/20 text-xs">Fiber Source</span>
                      <span className="px-2 py-1 bg-red-500/20 text-xs">Micronutrients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keto-Specific Nutrients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black text-primary mb-6 border-b-2 border-primary pb-3">ELECTROLYTE PROTOCOL</h3>
              
              <div className="space-y-4">
                {[
                  { nutrient: "Sodium", amount: "5000mg", source: "Pink salt + broth", why: "Prevents keto flu" },
                  { nutrient: "Potassium", amount: "3500mg", source: "Avocado + spinach", why: "Heart function" },
                  { nutrient: "Magnesium", amount: "400mg", source: "Nuts + supplement", why: "Muscle cramps" },
                  { nutrient: "Calcium", amount: "1000mg", source: "Cheese + greens", why: "Bone health" },
                  { nutrient: "MCT Oil", amount: "15-30g", source: "Pure supplement", why: "Rapid ketones" },
                  { nutrient: "Omega-3", amount: "2000mg", source: "Fish oil", why: "Anti-inflammatory" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-bg-secondary border border-gray-200 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-txt-primary font-heading font-black text-sm">{item.nutrient}</h4>
                      <span className="text-primary font-bold text-lg">{item.amount}</span>
                    </div>
                    <p className="text-txt-muted text-xs mb-1">{item.source}</p>
                    <p className="text-gray-500 text-xs italic">{item.why}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fat Adaptation Timeline */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-16 text-center">
            FAT ADAPTATION <span className="text-primary">JOURNEY</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { week: "Day 1-3", title: "Glycogen Depletion", description: "Liver glycogen depletes. Initial water weight loss (5-10 lbs). Potential fatigue and brain fog. Hunger spikes as body seeks glucose. This is temporary." },
              { week: "Day 4-7", title: "Entering Ketosis", description: "Ketone production begins. Breath acetone detected. Keto flu symptoms may appear (headache, fatigue). Electrolyte supplementation critical. Energy fluctuates." },
              { week: "Week 2-3", title: "Early Adaptation", description: "Mental clarity improves significantly. Hunger naturally decreases. Sustained energy without crashes. Workout performance may still be suboptimal. Fat oxidation increases." },
              { week: "Week 4-6", title: "Fat Adapted", description: "Full metabolic flexibility achieved. Performance returns to baseline. Effortless appetite control. Rapid fat loss visible. Mental sharpness peaks." },
              { week: "Week 8+", title: "Keto Mastery", description: "Maximized fat oxidation capacity. Lean physique maintained effortlessly. Can cycle carbs strategically without losing adaptation. Metabolic optimization complete." }
            ].map((phase, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-[#0f0f0f]"></div>
                
                <div className="bg-bg-secondary border border-gray-200 hover:border-primary transition-all p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-bold text-primary bg-primary/20 px-3 py-1">{phase.week}</span>
                    <h3 className="text-xl font-heading font-black text-txt-primary">{phase.title}</h3>
                  </div>
                  <p className="text-txt-muted leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Keto Support */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-16 text-center">
            KETO EXPERT <span className="text-primary">GUIDANCE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Ketosis Monitoring", points: ["Blood ketone tracking", "Optimal range guidance (1.5-3.0 mmol/L)", "Troubleshooting low readings", "Carb cycling strategies"] },
              { title: "Keto Flu Prevention", points: ["Electrolyte protocols", "Hydration strategies", "Supplement timing", "Symptom management"] },
              { title: "Meal Planning", points: ["200+ keto recipes", "Restaurant ordering guide", "Travel keto strategies", "Social event navigation"] }
            ].map((service, idx) => (
              <div key={idx} className="bg-bg-secondary border-2 border-gray-200 hover:border-primary p-8 transition-all">
                <h3 className="text-2xl font-heading font-black text-primary mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-txt-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
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
      <section className="section-padding bg-bg-primary">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-txt-primary mb-6">
              TRANSFORM YOUR <span className="text-primary">METABOLISM</span>
            </h2>
            <p className="text-xl text-txt-secondary mb-12">
              Enter ketosis and unlock fat-burning mode
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary p-12 mb-8">
              <div className="text-4xl md:text-6xl font-heading font-black text-primary mb-4">{vegPlanData.hero.price}</div>
              <p className="text-txt-secondary mb-8">Monthly plan. Cancel anytime.</p>
              
              <Link to="/payment?plan=keto" className="btn-primary text-xl px-16 py-6 inline-block mb-8">
                START KETO NOW
            </Link>

              <div className="grid md:grid-cols-2 gap-4 text-left mt-8 pt-8 border-t border-gray-300">
                {[
                  "Custom ketogenic meal plans",
                  "Ketone monitoring guidance",
                  "200+ keto recipes",
                  "Electrolyte protocols",
                  "24/7 keto expert support",
                  "Carb cycling strategies"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary flex items-center justify-center mt-0.5">
                      <span className="text-txt-primary text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm text-txt-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border-2 border-green-500/50 p-6">
              <h3 className="text-2xl font-heading font-black text-txt-primary mb-2">30-DAY MONEY-BACK GUARANTEE</h3>
              <p className="text-txt-secondary">Not in ketosis or seeing results? Full refund within 30 days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KetoPlan;
