import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.about-hero-title', {
      y: 50,
      duration: 0.8,
      ease: 'power4.out',
    });

    gsap.from('.timeline-item', {
      x: -30,
      stagger: 0.15,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top 80%',
      },
    });

    gsap.from('.team-card', {
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        <div className="container-custom relative z-10">
          <div className="about-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8 transform rotate-1 border-4 border-black">
              <span className="text-white font-heading font-black text-xl uppercase tracking-widest">OUR STORY</span>
            </div>
            <h1 className="text-[clamp(4rem,15vw,14rem)] font-heading font-black leading-[0.85] tracking-tighter mb-8">
              <span className="block text-white">BUILDING</span>
              <span className="block text-[#ff4500] neon-text">CHAMPIONS</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              For over 10 years, we've been transforming lives through elite training, personalized nutrition, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Quick Stats - Hard Shadow Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { value: '10+', label: 'YEARS' },
              { value: '500+', label: 'CLIENTS' },
              { value: '15', label: 'TRAINERS' },
              { value: '95%', label: 'SUCCESS' },
              { value: '4.9★', label: 'RATING' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Screen */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h2 className="text-7xl font-heading font-black text-white uppercase leading-tight mb-4">
                    OUR<br />MISSION
                  </h2>
                  <p className="text-2xl text-white/90 leading-relaxed">
                    To empower individuals to achieve their peak physical potential through expert guidance, proven methods, and relentless support.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#242424] border-l-8 border-[#ff4500] p-8">
                <h3 className="text-4xl font-heading font-black text-white mb-4 uppercase">OUR VISION</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To become India's most trusted fitness transformation partner, setting the gold standard for personalized training and measurable results.
                </p>
              </div>

              <div className="bg-[#242424] border-l-8 border-[#ff4500] p-8">
                <h3 className="text-4xl font-heading font-black text-white mb-4 uppercase">OUR COMMITMENT</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Every client deserves individualized attention, science-backed protocols, and a supportive environment that fosters lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Card Stack Layout */}
      <section className="timeline-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            OUR <span className="text-[#ff4500]">JOURNEY</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                year: '2014',
                title: 'THE BEGINNING',
                description: 'Started with a single trainer and 10 clients in a small 1000 sq ft space. The vision was clear: deliver results that speak for themselves.',
              },
              {
                year: '2016',
                title: 'EXPANDING HORIZONS',
                description: 'Grew to 5 trainers and 100+ active clients. Introduced advanced training protocols and personalized nutrition coaching.',
              },
              {
                year: '2018',
                title: 'NATIONAL RECOGNITION',
                description: 'Featured in leading fitness magazines. Our transformation success rate hit 90%. Expanded to 3000 sq ft facility with state-of-the-art equipment.',
              },
              {
                year: '2020',
                title: 'GOING DIGITAL',
                description: 'Launched online coaching programs during pandemic. Reached clients across India. Team grew to 10 certified trainers.',
              },
              {
                year: '2022',
                title: 'MILESTONE ACHIEVED',
                description: 'Celebrated 500+ successful transformations. Opened second location. Introduced specialized programs for athletes and seniors.',
              },
              {
                year: '2024',
                title: 'LEADING THE INDUSTRY',
                description: 'Now with 15 expert trainers, 5000 sq ft premium facility, and a 95% success rate. Setting new standards in personal training excellence.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="timeline-item relative group"
              >
                <div className="bg-[#1a1a1a] border-4 border-gray-700 group-hover:border-[#ff4500] p-8 md:p-12 transition-all">
                  <div className="flex flex-wrap items-start gap-8">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#ff4500] flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform flex-shrink-0">
                      <span className="text-4xl md:text-5xl font-heading font-black text-white">{item.year}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 uppercase">{item.title}</h3>
                      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase">
            OUR <span className="text-[#ff4500]">VALUES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex flex-col justify-between transition-all group">
              <div>
                <div className="w-20 h-20 border-4 border-[#ff4500] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-5xl">💪</span>
                </div>
                <h3 className="text-5xl font-heading font-black text-white mb-4 uppercase leading-tight">EXCELLENCE</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We never compromise on quality. Every workout, every meal plan, every interaction is crafted to deliver exceptional results.
                </p>
              </div>
              <div className="text-9xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">01</div>
            </div>

            <div className="md:col-span-2 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex flex-col justify-between transition-all group">
              <div>
                <div className="w-16 h-16 border-4 border-[#ff4500] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-3xl font-heading font-black text-white mb-3 uppercase">INTEGRITY</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Honest assessments, realistic timelines, transparent pricing. We build trust through authenticity.
                </p>
              </div>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-heading font-black text-white uppercase">PASSION</h3>
              </div>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-heading font-black text-white uppercase">COMMUNITY</h3>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 transition-all">
              <div className="w-16 h-16 border-4 border-[#ff4500] flex items-center justify-center mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-3xl font-heading font-black text-white mb-3 uppercase">CONTINUOUS IMPROVEMENT</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We stay ahead by constantly learning, adapting, and implementing the latest science-backed training methodologies.
              </p>
            </div>

            <div className="bg-[#242424] border-2 border-gray-700 hover:border-[#ff4500] rounded-2xl p-8 flex items-center justify-center text-center transition-all">
              <div>
                <div className="text-6xl mb-4">💯</div>
                <h3 className="text-2xl font-heading font-black text-white uppercase">RESULTS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase text-center">
            MEET OUR <span className="text-[#ff4500]">EXPERTS</span>
          </h2>
          <p className="text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Our team of certified professionals brings decades of combined experience to your transformation journey.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ravi Sharma',
                role: 'HEAD TRAINER',
                cert: 'NASM-CPT, CSCS',
                exp: '12 Years',
                speciality: 'Strength & Conditioning',
                img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800',
              },
              {
                name: 'Priya Verma',
                role: 'SENIOR COACH',
                cert: 'ACE-CPT, Precision Nutrition L1',
                exp: '8 Years',
                speciality: 'Weight Loss & Nutrition',
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800',
              },
              {
                name: 'Vikram Patel',
                role: 'TRANSFORMATION SPECIALIST',
                cert: 'ISSA-CPT, TRX Certified',
                exp: '10 Years',
                speciality: 'Body Recomposition',
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
              },
              {
                name: 'Ananya Reddy',
                role: 'STRENGTH COACH',
                cert: 'NSCA-CPT, Olympic Lifting',
                exp: '7 Years',
                speciality: 'Powerlifting & Strength',
                img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800',
              },
              {
                name: 'Arjun Singh',
                role: 'SPORTS NUTRITIONIST',
                cert: 'RD, CSSD',
                exp: '9 Years',
                speciality: 'Performance Nutrition',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800',
              },
              {
                name: 'Kavya Nair',
                role: 'MOBILITY SPECIALIST',
                cert: 'FMS, Yoga RYT-200',
                exp: '6 Years',
                speciality: 'Recovery & Mobility',
                img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800',
              },
            ].map((member, idx) => (
              <div key={idx} className="team-card relative group">
                <div className="bg-[#1a1a1a] border-4 border-gray-700 group-hover:border-[#ff4500] overflow-hidden transition-all">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-3xl font-heading font-black text-white mb-2 uppercase">{member.name}</h3>
                    <div className="mb-4">
                      <div className="text-sm text-[#ff4500] font-bold uppercase mb-1">{member.role}</div>
                      <div className="text-xs text-gray-400">{member.cert}</div>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span className="font-bold">Experience:</span>
                        <span>{member.exp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold">Speciality:</span>
                        <span className="text-right">{member.speciality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            OUR <span className="text-[#ff4500]">FACILITY</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '5000 SQ FT', desc: 'Premium Training Space', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
              { title: 'STATE-OF-THE-ART', desc: 'Equipment & Machines', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800' },
              { title: 'PRIVATE ZONES', desc: 'One-on-One Training Areas', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800' },
              { title: 'RECOVERY AREA', desc: 'Stretching & Mobility Space', img: 'https://images.unsplash.com/photo-1583454155184-870a1f63f286?q=80&w=800' },
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-video overflow-hidden border-4 border-gray-700 hover:border-[#ff4500] transition-all group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-4xl font-heading font-black text-white mb-2 uppercase">{item.title}</h3>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ff4500_0%,_transparent_60%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-9xl font-heading font-black text-white mb-8 uppercase leading-none">
              JOIN OUR<br />
              <span className="text-[#ff4500]">FAMILY</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              Experience the difference that expert coaching and genuine care can make in your transformation journey.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="/contact" className="btn-primary text-2xl px-16 py-8">
                BOOK CONSULTATION
              </a>
              <a href="/services" className="btn-secondary text-2xl px-16 py-8">
                VIEW PROGRAMS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
