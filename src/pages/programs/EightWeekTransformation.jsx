import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EightWeekTransformation = () => {
  useEffect(() => {
    gsap.from('.program-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[700px] h-[700px] bg-[#ff4500] opacity-25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#ff8c00] opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="program-hero-title text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#ff4500] mb-8 transform rotate-1 border-4 border-black">
              <span className="text-white font-heading font-black text-2xl uppercase tracking-widest">8 WEEKS</span>
              <span className="px-4 py-2 bg-black text-[#ff4500] font-bold text-sm">MOST POPULAR</span>
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-heading font-black leading-[0.9] tracking-tighter mb-8">
              <span className="block text-white">COMPLETE</span>
              <span className="block text-[#ff4500] neon-text">TRANSFORMATION</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our flagship program designed for serious transformations. Build muscle, burn fat, and transform your life in 8 weeks.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-xl px-12 py-6">
                START NOW → ₹44,999
              </Link>
              <a href="#details" className="btn-secondary text-xl px-12 py-6">
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'SESSIONS', value: '32' },
              { label: 'DURATION', value: '8W' },
              { label: 'MEAL PLANS', value: 'FULL' },
              { label: 'SUPPORT', value: '24/7' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-4 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-heading font-black text-[#ff4500] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="details" className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            PREMIUM <span className="text-[#ff4500]">PACKAGE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {[
              { title: '32 TRAINING SESSIONS', desc: 'Intensive 4x/week personal training', icon: '💪', span: 'md:col-span-2 md:row-span-2' },
              { title: 'ADVANCED PROTOCOLS', desc: 'Progressive overload system', icon: '⚡', span: '' },
              { title: 'DETAILED MEAL PLANS', desc: 'Weekly customized nutrition', icon: '🍱', span: '' },
              { title: 'BI-WEEKLY ASSESSMENTS', desc: 'Body composition tracking', icon: '📊', span: '' },
              { title: '24/7 COACH ACCESS', desc: 'Unlimited WhatsApp support', icon: '💬', span: 'md:col-span-2' },
              { title: 'SUPPLEMENT GUIDE', desc: 'Personalized recommendations', icon: '💊', span: '' },
              { title: 'WORKOUT VIDEOS', desc: 'Form check recordings', icon: '🎥', span: 'md:row-span-2' },
              { title: 'RECIPE DATABASE', desc: '100+ healthy recipes', icon: '📖', span: '' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.span} bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex flex-col justify-between transition-all group`}
              >
                <div>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-heading font-black text-white mb-3 uppercase">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Phases */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            TRAINING <span className="text-[#ff4500]">PHASES</span>
          </h2>

          <div className="space-y-8">
            {[
              { phase: 'WEEKS 1-2', title: 'FOUNDATION BUILDING', focus: 'Form mastery & base conditioning', color: '#ff4500' },
              { phase: 'WEEKS 3-4', title: 'STRENGTH DEVELOPMENT', focus: 'Progressive overload begins', color: '#ff6b00' },
              { phase: 'WEEKS 5-6', title: 'HYPERTROPHY FOCUS', focus: 'Muscle building intensifies', color: '#ff8c00' },
              { phase: 'WEEKS 7-8', title: 'PEAK PERFORMANCE', focus: 'Maximum output & definition', color: '#ffa500' },
            ].map((phase, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-[#ff4500] group-hover:w-4 transition-all"></div>
                <div className="bg-[#1a1a1a] border-2 border-gray-700 group-hover:border-[#ff4500] p-8 md:p-12 ml-8 transition-all">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="w-32 h-32 bg-[#ff4500] flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                      <span className="text-5xl font-heading font-black text-white">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#ff4500] font-bold mb-2">{phase.phase}</div>
                      <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-3 uppercase">{phase.title}</h3>
                      <p className="text-xl text-gray-300">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            REAL <span className="text-[#ff4500]">RESULTS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Arjun K.', lost: '12 kg', gained: '8 kg muscle', weeks: '8' },
              { name: 'Priya S.', lost: '10 kg', gained: '5 kg muscle', weeks: '8' },
            ].map((result, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-3xl p-4 transform hover:scale-105 transition-transform">
                  <div className="h-full bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800')] bg-cover bg-center rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-heading font-black text-white mb-2">{result.name}</h3>
                      <div className="flex gap-4 text-sm font-bold">
                        <span className="px-4 py-2 bg-[#ff4500] text-white rounded-full">-{result.lost} FAT</span>
                        <span className="px-4 py-2 bg-[#ff4500] text-white rounded-full">+{result.gained}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                      <span className="font-heading font-black text-2xl">{result.weeks}W</span>
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
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase leading-tight">
              YOUR TRANSFORMATION <span className="text-[#ff4500]">STARTS NOW</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Join hundreds of successful transformations. Book your free consultation today.
            </p>
            <Link to="/contact" className="btn-primary text-2xl px-16 py-8">
              BOOK FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EightWeekTransformation;
