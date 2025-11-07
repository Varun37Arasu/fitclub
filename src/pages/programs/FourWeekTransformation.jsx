import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FourWeekTransformation = () => {
  useEffect(() => {
    gsap.from('.program-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });

    gsap.from('.program-feature', {
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section with Blob Shape */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Blob Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="program-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8 transform -rotate-1">
              <span className="text-white font-heading font-black text-lg uppercase tracking-widest">4 WEEKS</span>
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-heading font-black leading-[0.9] tracking-tighter mb-8">
              <span className="block text-white">KICKSTART</span>
              <span className="block text-[#ff4500] neon-text">TRANSFORMATION</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ignite your fitness journey with our intensive 4-week program designed to build momentum and create lasting habits.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-xl px-12 py-6">
                START NOW → ₹24,999
              </Link>
              <a href="#details" className="btn-secondary text-xl px-12 py-6">
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Hard Shadow Stats */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'SESSIONS', value: '16' },
              { label: 'DURATION', value: '4W' },
              { label: 'INTENSITY', value: 'HIGH' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-6 text-center transform hover:translate-y-[-4px] transition-transform">
                <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Bento Grid */}
      <section id="details" className="features-section section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            WHAT'S <span className="text-[#ff4500]">INCLUDED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '16 TRAINING SESSIONS',
                description: '4 sessions per week with certified personal trainer',
                icon: '🔥',
                size: 'md:col-span-2',
              },
              {
                title: 'CUSTOM WORKOUT PLAN',
                description: 'Tailored to your goals and fitness level',
                icon: '💪',
                size: '',
              },
              {
                title: 'NUTRITION GUIDELINES',
                description: 'Basic meal planning and macro guidance',
                icon: '🥗',
                size: '',
              },
              {
                title: 'WEEKLY CHECK-INS',
                description: 'Progress tracking and plan adjustments',
                icon: '📊',
                size: 'md:col-span-2',
              },
              {
                title: 'WHATSAPP SUPPORT',
                description: 'Direct access to your coach during business hours',
                icon: '💬',
                size: 'md:col-span-3',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`program-feature ${feature.size} bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 transition-all group`}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule - Card Stack */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            WEEKLY <span className="text-[#ff4500]">SCHEDULE</span>
          </h2>

          <div className="space-y-6 max-w-4xl">
            {[
              { day: 'MONDAY', focus: 'Upper Body Strength', intensity: 'High' },
              { day: 'WEDNESDAY', focus: 'Lower Body Power', intensity: 'High' },
              { day: 'FRIDAY', focus: 'Full Body Conditioning', intensity: 'Medium' },
              { day: 'SATURDAY', focus: 'Core & Mobility', intensity: 'Low-Medium' },
            ].map((session, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border-l-8 border-[#ff4500] p-8 hover:translate-x-4 transition-transform"
                style={{ transform: `translateY(${idx * -10}px)` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-[#ff4500] font-bold mb-2">{session.day}</div>
                    <h3 className="text-3xl font-heading font-black text-white uppercase">{session.focus}</h3>
                  </div>
                  <div className="px-6 py-3 bg-[#ff4500] border-4 border-black">
                    <span className="font-heading font-black text-black uppercase text-sm">{session.intensity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results - Split Screen */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
                EXPECTED <span className="text-[#ff4500]">RESULTS</span>
              </h2>
              <div className="space-y-6">
                {[
                  { metric: '5-10 LBS', label: 'Fat Loss Potential' },
                  { metric: '15-20%', label: 'Strength Increase' },
                  { metric: '100%', label: 'Habit Formation' },
                  { metric: 'UNLIMITED', label: 'Confidence Boost' },
                ].map((result, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-[#ff4500] flex items-center justify-center transform -rotate-3">
                      <span className="text-3xl font-heading font-black text-white">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <div className="text-4xl font-heading font-black text-[#ff4500] mb-1">{result.metric}</div>
                      <div className="text-lg text-gray-300 uppercase">{result.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 h-full flex items-end">
                  <div className="bg-black/70 backdrop-blur-xl p-8 rounded-2xl">
                    <p className="text-2xl font-heading font-black text-white uppercase leading-tight">
                      "Lost 8 lbs and gained serious strength in just 4 weeks!"
                    </p>
                    <p className="text-gray-300 mt-4">— Raj M., Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Border */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
              READY TO <span className="text-[#ff4500]">START?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Book your free consultation now and let's build your transformation plan together.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-2xl px-16 py-8">
                BOOK FREE CONSULTATION
              </Link>
              <Link to="/services" className="btn-secondary text-2xl px-16 py-8">
                VIEW ALL PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourWeekTransformation;
