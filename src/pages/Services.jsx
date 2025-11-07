import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Hero animations
    gsap.from('.services-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });

    // Staggered card animations
    gsap.from('.program-card', {
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.programs-section',
        start: 'top 80%',
      },
    });

    // Comparison table animation
    gsap.from('.comparison-row', {
      x: -20,
      stagger: 0.08,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.comparison-section',
        start: 'top 80%',
      },
    });
  }, []);

  const programs = [
    {
      id: '4-week',
      title: '4-WEEK KICKSTART',
      tagline: 'BUILD MOMENTUM',
      price: '₹24,999',
      duration: '4 WEEKS',
      sessions: '16',
      description: 'Perfect for beginners or those returning to fitness. Build solid foundations and create lasting habits.',
      features: [
        '16 Personal Training Sessions',
        'Custom Workout Plans',
        'Nutrition Guidelines',
        'Weekly Progress Check-ins',
        'WhatsApp Support (Business Hours)',
        'Form Correction & Technique',
      ],
      highlights: [
        { metric: '5-10 lbs', label: 'Average Fat Loss' },
        { metric: '15-20%', label: 'Strength Increase' },
      ],
      link: '/services/4-week-transformation',
      color: '#ff4500',
    },
    {
      id: '8-week',
      title: '8-WEEK TRANSFORM',
      tagline: 'COMPLETE TRANSFORMATION',
      price: '₹44,999',
      duration: '8 WEEKS',
      sessions: '32',
      popular: true,
      description: 'Our flagship program for serious transformations. Build muscle, burn fat, and completely reshape your physique.',
      features: [
        '32 Personal Training Sessions',
        'Advanced Training Protocols',
        'Detailed Weekly Meal Plans',
        'Bi-weekly Body Assessments',
        '24/7 Coach Access (WhatsApp)',
        'Supplement Recommendations',
        'Workout Video Library',
        'Recipe Database Access',
      ],
      highlights: [
        { metric: '10-15 lbs', label: 'Average Fat Loss' },
        { metric: '8-12 lbs', label: 'Muscle Gain Potential' },
        { metric: '35-40%', label: 'Strength Increase' },
      ],
      link: '/services/8-week-transformation',
      color: '#ff6b00',
    },
    {
      id: 'nutrition',
      title: 'NUTRITION COACHING',
      tagline: 'FUEL YOUR SUCCESS',
      price: '₹6,999/mo',
      duration: 'MONTHLY',
      sessions: 'Ongoing',
      description: 'Personalized nutrition guidance without the training. Perfect for those who workout independently.',
      features: [
        'Personalized Meal Plans',
        'Macro Calculations',
        '200+ Recipe Database',
        'Monthly Video Consultations',
        'Unlimited Email Support',
        'Weekly Check-ins',
      ],
      highlights: [
        { metric: '100%', label: 'Custom Plans' },
        { metric: '∞', label: 'Recipe Access' },
      ],
      link: '/services/nutrition-plan',
      color: '#ff8c00',
    },
  ];

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section - Brutalist Typography */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container-custom relative z-10">
          <div className="services-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8 transform -rotate-2 border-4 border-black">
              <span className="text-white font-heading font-black text-xl uppercase tracking-widest">PROGRAMS</span>
            </div>
            <h1 className="text-[clamp(4rem,15vw,14rem)] font-heading font-black leading-[0.85] tracking-tighter mb-8">
              <span className="block text-white">CHOOSE</span>
              <span className="block text-[#ff4500] neon-text">YOUR PATH</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Elite training programs designed for serious results. From kickstart to complete transformation.
            </p>
          </div>

          {/* Quick Stats - Hard Shadow Cards */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { value: '500+', label: 'CLIENTS' },
              { value: '95%', label: 'SUCCESS' },
              { value: '3', label: 'PROGRAMS' },
              { value: '10Y', label: 'EXPERIENCE' },
              { value: '4.9★', label: 'RATING' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-4 text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-heading font-black text-[#ff4500] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Card Stack Layout */}
      <section className="programs-section section-padding bg-[#1a1a1a] relative overflow-hidden">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>

        <div className="container-custom relative z-10">
          <div className="mb-20">
            <h2 className="text-6xl md:text-9xl font-heading font-black text-white mb-6 uppercase leading-none">
              OUR <span className="text-[#ff4500]">PROGRAMS</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl">
              Each program is meticulously designed to deliver maximum results. Choose the one that aligns with your goals.
            </p>
          </div>

          {/* Program Cards with Overlapping Layout */}
          <div className="space-y-12">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className="program-card relative"
                style={{ transform: `translateX(${idx * 20}px)` }}
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute -top-6 right-8 z-20 px-8 py-3 bg-[#ff4500] border-4 border-black transform rotate-3">
                    <span className="text-black font-heading font-black text-sm uppercase tracking-wider">⭐ MOST POPULAR</span>
                  </div>
                )}

                <div className={`relative bg-[#242424] border-4 ${program.popular ? 'border-[#ff4500]' : 'border-gray-700'} p-8 md:p-12 hover:scale-[1.02] transition-all`}>
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4500] via-[#ff8c00] to-[#ff4500] opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="grid md:grid-cols-3 gap-12">
                      {/* Left: Title & Description */}
                      <div className="md:col-span-2">
                        <div className="mb-6">
                          <div className="text-sm text-[#ff4500] font-bold mb-2 uppercase tracking-widest">{program.tagline}</div>
                          <h3 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 uppercase leading-none">
                            {program.title}
                          </h3>
                          <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            {program.description}
                          </p>
                        </div>

                        {/* Features Grid - Bento Style */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          {program.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-[#ff4500] flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">✓</span>
                              </div>
                              <span className="text-gray-200">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Highlights - Outline Style */}
                        <div className="flex flex-wrap gap-4 mb-8">
                          {program.highlights.map((highlight, i) => (
                            <div key={i} className="border-2 border-[#ff4500] px-6 py-3">
                              <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">{highlight.metric}</div>
                              <div className="text-xs text-gray-400 uppercase">{highlight.label}</div>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={program.link}
                          className="inline-block btn-primary text-lg px-12 py-5"
                        >
                          VIEW FULL DETAILS →
                        </Link>
                      </div>

                      {/* Right: Pricing & Stats */}
                      <div className="space-y-6">
                        {/* Price Card - Hard Shadow */}
                        <div className="bg-[#ff4500] border-4 border-black p-8 text-center transform hover:translate-y-[-4px] transition-transform">
                          <div className="text-6xl font-heading font-black text-white mb-2">
                            {program.price}
                          </div>
                          <div className="text-black font-bold text-lg uppercase">{program.duration}</div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-3">
                          <div className="bg-[#1a1a1a] border-2 border-gray-700 p-4 flex justify-between items-center">
                            <span className="text-gray-400 uppercase text-sm font-bold">Sessions</span>
                            <span className="text-2xl font-heading font-black text-[#ff4500]">{program.sessions}</span>
                          </div>
                          <div className="bg-[#1a1a1a] border-2 border-gray-700 p-4 flex justify-between items-center">
                            <span className="text-gray-400 uppercase text-sm font-bold">Duration</span>
                            <span className="text-2xl font-heading font-black text-[#ff4500]">{program.duration}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <Link
                          to="/contact"
                          className="block text-center btn-secondary py-5"
                        >
                          BOOK CONSULTATION
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Modern Grid */}
      <section className="comparison-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            COMPARE <span className="text-[#ff4500]">PROGRAMS</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b-4 border-[#ff4500]">
                  <th className="text-left p-8 text-2xl font-heading font-black text-white uppercase bg-[#1a1a1a]">FEATURES</th>
                  <th className="text-center p-8 text-2xl font-heading font-black text-white uppercase bg-[#1a1a1a]">4-WEEK</th>
                  <th className="text-center p-8 text-2xl font-heading font-black text-white uppercase bg-[#242424] border-x-4 border-[#ff4500]">8-WEEK ⭐</th>
                  <th className="text-center p-8 text-2xl font-heading font-black text-white uppercase bg-[#1a1a1a]">NUTRITION</th>
                </tr>
              </thead>
              <tbody className="bg-[#1a1a1a]">
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Personal Training</td>
                  <td className="p-8 text-center text-gray-200 text-lg">16 Sessions</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-lg bg-[#242424]">32 Sessions</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                </tr>
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Meal Plans</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Guidelines</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-lg bg-[#242424]">Detailed Weekly</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Fully Custom</td>
                </tr>
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Coach Access</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Business Hours</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-lg bg-[#242424]">24/7 WhatsApp</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Email</td>
                </tr>
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Progress Tracking</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Weekly</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-lg bg-[#242424]">Bi-weekly</td>
                  <td className="p-8 text-center text-gray-200 text-lg">Weekly</td>
                </tr>
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Recipe Database</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-2xl bg-[#242424]">✓</td>
                  <td className="p-8 text-center text-gray-200 text-2xl">✓</td>
                </tr>
                <tr className="comparison-row border-b-2 border-gray-700 hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Supplement Guide</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-2xl bg-[#242424]">✓</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                </tr>
                <tr className="comparison-row hover:bg-[#242424] transition-colors">
                  <td className="p-8 font-bold text-white text-lg">Video Library</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                  <td className="p-8 text-center text-[#ff4500] font-bold text-2xl bg-[#242424]">✓</td>
                  <td className="p-8 text-center text-gray-200 text-lg">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            WHY <span className="text-[#ff4500]">US?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex flex-col justify-between transition-all">
              <div>
                <div className="w-16 h-16 border-4 border-[#ff4500] flex items-center justify-center mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-4xl font-heading font-black text-white mb-4 uppercase">CERTIFIED EXPERTS</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  All our trainers are certified professionals with 10+ years of experience in transformation training.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-7xl font-heading font-black text-[#ff4500] mb-3">500+</div>
                <div className="text-lg text-gray-300 uppercase font-bold">Success Stories</div>
              </div>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">95%</div>
                <div className="text-sm text-gray-300 uppercase">Success Rate</div>
              </div>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">4.9★</div>
                <div className="text-sm text-gray-300 uppercase">Rating</div>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 transition-all">
              <div className="w-16 h-16 border-4 border-[#ff4500] flex items-center justify-center mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-3xl font-heading font-black text-white mb-3 uppercase">PROVEN METHODOLOGY</h3>
              <p className="text-lg text-gray-300">Science-backed training protocols combined with personalized nutrition for maximum results.</p>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-5xl mb-3">⚡</div>
                <div className="text-xl font-heading font-black text-white uppercase">Fast Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient Borders + Glow */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#ff4500_0%,_transparent_60%)] opacity-10"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_60%)] opacity-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-9xl font-heading font-black text-white mb-8 uppercase leading-none">
              NOT SURE<br />
              <span className="text-[#ff4500]">WHICH ONE?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              Book a free consultation and we'll help you choose the perfect program for your goals.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-2xl px-16 py-8">
                BOOK FREE CALL
              </Link>
              <Link to="/testimonials" className="btn-secondary text-2xl px-16 py-8">
                VIEW TRANSFORMATIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
