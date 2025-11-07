import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [counter, setCounter] = useState({ clients: 0, success: 0, years: 0 });

  useEffect(() => {
    // Animated counter
    const targets = { clients: 500, success: 95, years: 10 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounter(prev => ({
        clients: Math.min(prev.clients + Math.ceil(targets.clients / steps), targets.clients),
        success: Math.min(prev.success + Math.ceil(targets.success / steps), targets.success),
        years: Math.min(prev.years + Math.ceil(targets.years / steps), targets.years),
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-main-title', {
        y: 80,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Bento grid stagger
      gsap.from('.bento-card', {
        y: 40,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power2.out',
        },
        duration: 0.6,
        scrollTrigger: {
          trigger: '.bento-section',
          start: 'top 80%',
        },
      });

      // Card stack effect
      gsap.from('.stack-card', {
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stack-section',
          start: 'top 75%',
        },
      });

      // Split screen parallax
      gsap.to('.parallax-left', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.split-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.parallax-right', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.split-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Testimonial carousel
      gsap.from('.testimonial-slide', {
        x: 40,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Radial Glow Orbs - Always visible */}
      <div className="fixed top-20 -left-32 w-[700px] h-[700px] bg-[#ff4500] rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none z-0"></div>
      <div className="fixed bottom-20 -right-32 w-[600px] h-[600px] bg-[#ff8c00] rounded-full blur-3xl opacity-15 animate-pulse pointer-events-none z-0" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b00] rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '3s'}}></div>

      {/* HERO SECTION - Brutalist Typography + Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-strong-man-doing-bench-press-40-large.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-transparent to-[#0f0f0f]"></div>

        <div className="container-custom relative z-10 text-center">
          <div className="hero-main-title mb-12">
            <div className="inline-block px-10 py-4 bg-[#ff4500] mb-8 transform -rotate-2 border-4 border-black">
              <span className="text-white font-heading font-black text-2xl uppercase tracking-widest">FITCLUB MUMBAI</span>
            </div>
            <h1 className="text-[clamp(5rem,18vw,20rem)] font-heading font-black leading-[0.8] tracking-tighter">
              <span className="block text-white">BUILD</span>
              <span className="block text-[#ff4500] neon-text">UNSTOPPABLE</span>
            </h1>
          </div>

          <p className="hero-subtitle text-3xl md:text-5xl text-gray-200 max-w-5xl mx-auto mb-16 uppercase tracking-wider font-bold">
            ELITE • TRAINING • RESULTS
          </p>

          <div className="flex flex-wrap gap-8 justify-center mb-20">
            <Link to="/services" className="btn-primary text-2xl px-16 py-8">
              START NOW →
            </Link>
            <Link to="/testimonials" className="btn-secondary text-2xl px-16 py-8">
              VIEW RESULTS
            </Link>
          </div>

          {/* Animated Stats - Hard Shadow Cards */}
          <div className="hero-stats grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: counter.clients, label: 'CLIENTS TRANSFORMED', suffix: '+' },
              { value: counter.success, label: 'SUCCESS RATE', suffix: '%' },
              { value: counter.years, label: 'YEARS EXPERIENCE', suffix: '+' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-8 transform hover:scale-105 transition-transform">
                <div className="text-6xl md:text-7xl font-heading font-black text-[#ff4500] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-4 border-[#ff4500] rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* BENTO GRID - WHY CHOOSE US */}
      <section className="bento-section section-padding bg-[#1a1a1a] relative">
        <div className="container-custom">
          <div className="mb-20">
            <div className="inline-block px-8 py-3 bg-[#ff4500]/10 border-2 border-[#ff4500] rounded-full mb-8">
              <span className="text-[#ff4500] font-bold text-lg uppercase tracking-wider">WHY US</span>
            </div>
            <h2 className="text-[clamp(4rem,10vw,12rem)] font-heading font-black leading-none tracking-tighter">
              <span className="block text-white">THE</span>
              <span className="block text-[#ff4500]">DIFFERENCE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Large Feature Card */}
            <div className="bento-card md:col-span-2 md:row-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-10 transition-all group">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 border-4 border-[#ff4500] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-5xl">💪</span>
                  </div>
                  <h3 className="text-5xl font-heading font-black text-white mb-6 uppercase leading-tight">
                    1-ON-1 ELITE COACHING
                  </h3>
                  <p className="text-2xl text-gray-300 leading-relaxed">
                    Every session is personalized to your goals, fitness level, and progress. No cookie-cutter programs.
                  </p>
                </div>
                <div className="text-[10rem] font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors leading-none">
                  01
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="bento-card bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-7xl font-heading font-black text-[#ff4500] mb-3">500+</div>
                <p className="text-sm text-gray-400 uppercase font-bold">Success Stories</p>
              </div>
            </div>

            <div className="bento-card bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-7xl font-heading font-black text-[#ff4500] mb-3">10Y</div>
                <p className="text-sm text-gray-400 uppercase font-bold">Experience</p>
              </div>
            </div>

            {/* Wide Card */}
            <div className="bento-card md:col-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-8 transition-all">
              <div className="w-16 h-16 border-4 border-[#ff4500] rounded-xl flex items-center justify-center mb-4">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-3xl font-heading font-black text-white mb-3 uppercase">PROVEN METHODOLOGY</h3>
              <p className="text-lg text-gray-300">Science-backed training + personalized nutrition = guaranteed results.</p>
            </div>

            {/* Tall Card */}
            <div className="bento-card md:row-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-8 flex flex-col justify-between transition-all">
              <div>
                <div className="w-16 h-16 border-4 border-[#ff4500] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase">Track Progress</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Strength', value: 85 },
                  { label: 'Endurance', value: 70 },
                  { label: 'Nutrition', value: 90 },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-[#ff4500] h-3 rounded-full" style={{width: `${metric.value}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* More Cards */}
            <div className="bento-card bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-3xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-6xl mb-3">⚡</div>
                <h3 className="text-xl font-heading font-black text-white uppercase">24/7 Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARD STACK - PROGRAMS */}
      <section className="stack-section section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="container-custom">
          <h2 className="text-[clamp(4rem,10vw,12rem)] font-heading font-black text-white mb-16 uppercase text-center">
            CHOOSE YOUR <span className="text-[#ff4500]">PROGRAM</span>
          </h2>

          <div className="space-y-12 max-w-6xl mx-auto">
            {[
              {
                title: '4-WEEK KICKSTART',
                price: '₹24,999',
                desc: 'Perfect for beginners. Build momentum and create lasting habits.',
                features: ['16 Sessions', 'Nutrition Guide', 'Weekly Check-ins'],
                link: '/services/4-week-transformation',
              },
              {
                title: '8-WEEK TRANSFORM',
                price: '₹44,999',
                desc: 'Complete transformation. Build muscle, burn fat, reshape your life.',
                features: ['32 Sessions', 'Meal Plans', '24/7 Access'],
                popular: true,
                link: '/services/8-week-transformation',
              },
              {
                title: 'NUTRITION COACHING',
                price: '₹6,999/mo',
                desc: 'Personalized meal plans and nutrition guidance.',
                features: ['Custom Plans', 'Recipe Access', 'Monthly Calls'],
                link: '/services/nutrition-plan',
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="stack-card relative"
              >
                {program.popular && (
                  <div className="absolute -top-6 right-8 z-20 px-8 py-3 bg-[#ff4500] border-4 border-black transform rotate-3">
                    <span className="text-black font-heading font-black text-sm uppercase">⭐ MOST POPULAR</span>
                  </div>
                )}

                <div className={`bg-[#1a1a1a] border-4 ${program.popular ? 'border-[#ff4500]' : 'border-gray-700'} p-10 md:p-16 hover:scale-[1.02] transition-transform`}>
                  <div className="grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 uppercase">{program.title}</h3>
                      <p className="text-2xl text-gray-300 mb-8 leading-relaxed">{program.desc}</p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        {program.features.map((feature, i) => (
                          <div key={i} className="px-6 py-3 bg-[#242424] border-2 border-[#ff4500]">
                            <span className="text-white font-bold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to={program.link} className="btn-primary text-lg px-12 py-5">
                        LEARN MORE →
                      </Link>
                    </div>

                    <div className="text-center">
                      <div className="bg-[#ff4500] border-4 border-black p-8">
                        <div className="text-6xl font-heading font-black text-white mb-2">{program.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/services" className="btn-secondary text-xl px-16 py-6">
              VIEW ALL PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      {/* SPLIT SCREEN - TRANSFORMATION SHOWCASE */}
      <section className="split-section section-padding bg-[#1a1a1a] relative overflow-hidden">
        <div className="container-custom">
          <h2 className="text-[clamp(4rem,10vw,12rem)] font-heading font-black text-white mb-16 uppercase text-center">
            REAL <span className="text-[#ff4500]">RESULTS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="parallax-left space-y-8">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-3xl p-4">
                  <div className="h-full bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800')] bg-cover bg-center rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-4xl font-heading font-black text-white mb-2 uppercase">Arjun K.</h3>
                      <div className="flex gap-4 text-lg font-bold">
                        <span className="px-4 py-2 bg-[#ff4500] text-white rounded-full">-12 KG</span>
                        <span className="px-4 py-2 bg-[#ff4500] text-white rounded-full">+8 KG MUSCLE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax-right">
              <div className="space-y-8">
                {[
                  { value: '500+', label: 'Transformations' },
                  { value: '95%', label: 'Success Rate' },
                  { value: '2500+', label: 'Total KG Lost' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-[#242424] border-l-8 border-[#ff4500] p-8">
                    <div className="text-7xl font-heading font-black text-[#ff4500] mb-3">{stat.value}</div>
                    <div className="text-2xl text-gray-300 uppercase font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/testimonials" className="inline-block btn-primary text-xl px-12 py-6 mt-8">
                VIEW ALL TRANSFORMATIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="testimonials-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-[clamp(4rem,10vw,12rem)] font-heading font-black text-white mb-16 uppercase text-center">
            CLIENT <span className="text-[#ff4500]">STORIES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya S.', text: 'Lost 10 kg in 8 weeks. Best decision of my life!', rating: 5 },
              { name: 'Vikram P.', text: 'Gained 12 kg muscle at age 40. Feel incredible!', rating: 5 },
              { name: 'Ananya R.', text: 'The trainers are amazing. Results speak for themselves.', rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-slide bg-[#1a1a1a] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-3xl text-[#ff4500]">★</span>
                  ))}
                </div>
                <p className="text-2xl text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-heading font-black text-white text-2xl uppercase">— {testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/testimonials" className="btn-secondary text-xl px-16 py-6">
              READ MORE REVIEWS
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Gradient Borders + Massive Typography */}
      <section className="section-padding bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[clamp(5rem,15vw,16rem)] font-heading font-black leading-none tracking-tighter mb-12">
              <span className="block text-white">READY TO</span>
              <span className="block text-[#ff4500] neon-text">TRANSFORM?</span>
            </h2>
            <p className="text-3xl md:text-4xl text-gray-200 mb-16 leading-relaxed uppercase tracking-wide font-bold">
              Your journey starts with a single step
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <Link to="/contact" className="btn-primary text-3xl px-20 py-10">
                BOOK FREE CONSULTATION
              </Link>
              <Link to="/services" className="btn-secondary text-3xl px-20 py-10">
                VIEW PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
