import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  heroData,
  statsData,
  missionVisionData,
  journeyData,
  valuesData,
  teamSectionData,
  teamData,
  facilitySectionData,
  facilityData,
  ctaData,
} from '../data/about';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
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
  })
      return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Full Viewport Background */}
         <div className="absolute inset-0">
           <img 
             src={heroData.backgroundImage}
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 via-transparent to-[#ff8c00]/20"></div>
         </div>

        <div className="container-custom relative z-10 px-4">
          <div className="about-hero-title text-center max-w-full ">
            <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-4 md:mb-6">
              <span className="text-[#ff4500] font-bold text-xs md:text-sm tracking-wider break-words">{heroData.badge}</span>
            </div>
             <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight mb-4 md:mb-6 break-words px-2">
               <span className="block text-white">{heroData.title.line1}</span>
               <span className="block text-[#ff4500] neon-text">{heroData.title.line2}</span>
             </h1>
             <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
               {heroData.description}
             </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-black/60 border-2 border-[#ff4500] p-3 md:p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl md:text-5xl font-heading font-black text-[#ff4500] mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Screen */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-stretch">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#ff4500] to-[#ff8c00] rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[300px]">
                <div className={`absolute inset-0 bg-[url('${missionVisionData.mission.backgroundImage}')] bg-cover bg-center opacity-30`}></div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase leading-tight mb-3 md:mb-4">
                    {missionVisionData.mission.title.split(' ')[0]}<br />{missionVisionData.mission.title.split(' ')[1]}
                  </h2>
                  <p className="text-base md:text-2xl text-white/90 leading-relaxed">
                    {missionVisionData.mission.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-black/40 backdrop-blur-sm border-l-4 border-[#ff4500] p-6 md:p-8">
                <h3 className="text-2xl md:text-4xl font-heading font-black text-white mb-3 md:mb-4 uppercase">{missionVisionData.vision.title}</h3>
                <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
                  {missionVisionData.vision.description}
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border-l-4 border-[#ff4500] p-6 md:p-8">
                <h3 className="text-2xl md:text-4xl font-heading font-black text-white mb-3 md:mb-4 uppercase">{missionVisionData.commitment.title}</h3>
                <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
                  {missionVisionData.commitment.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Journey */}
      <section className="timeline-section section-padding bg-[#0f0f0f]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            OUR <span className="text-[#ff4500]">JOURNEY</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {journeyData.map((item, idx) => (
              <div key={idx} className="timeline-item relative group">
                <div className="bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-[#ff4500] rounded-xl md:rounded-2xl p-4 md:p-6 transition-all relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">
                    {item.year}
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ff4500] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-xl md:text-2xl font-heading font-black text-white">{item.year}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-black text-white mb-2 md:mb-3 break-words leading-tight">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed break-words">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-white mb-8 md:mb-12 text-center break-words">
            OUR <span className="text-[#ff4500]">VALUES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {valuesData.map((value, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all group relative overflow-hidden min-h-[200px] md:min-h-[240px]"
              >
                <div className="absolute top-4 right-4 text-6xl md:text-7xl lg:text-8xl font-heading font-black text-[#ff4500]/10 group-hover:text-[#ff4500]/20 transition-colors">
                  {value.num}
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-3 border-[#ff4500] flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl md:text-2xl font-heading font-black text-[#ff4500]">{value.num}</span>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-black text-white mb-2 md:mb-3 break-words leading-tight">{value.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed break-words">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase text-center">
            {teamSectionData.heading.split(' ').slice(0, 2).join(' ')} <span className="text-[#ff4500]">{teamSectionData.heading.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            {teamSectionData.subheading}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamData.map((member, idx) => (
               <div key={idx} className="team-card relative group">
                 <div className="bg-black/40 backdrop-blur-sm border-2 border-gray-800 group-hover:border-[#ff4500] overflow-hidden transition-all">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                   <div className="p-6 bg-black/60">
                     <h3 className="text-2xl font-heading font-black text-white mb-2">{member.name}</h3>
                     <div className="mb-3">
                       <div className="text-xs text-[#ff4500] font-bold uppercase mb-1">{member.role}</div>
                       <div className="text-xs text-gray-400">{member.cert}</div>
                     </div>
                     <div className="space-y-1 text-gray-300 text-sm">
                       <div className="flex justify-between">
                         <span className="font-bold">Experience:</span>
                         <span>{member.exp}</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="font-bold">Speciality:</span>
                         <span className="text-right text-xs">{member.speciality}</span>
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
            {facilitySectionData.heading.split(' ')[0]} <span className="text-[#ff4500]">{facilitySectionData.heading.split(' ')[1]}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {facilityData.map((item, idx) => (
              <div key={idx} className="relative aspect-video overflow-hidden border-4 border-gray-700 hover:border-[#ff4500] transition-all group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-4xl font-heading font-black text-white mb-2 uppercase">{item.title}</h3>
                  <p className="text-xl text-gray-300">{item.description}</p>
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
              {ctaData.heading.line1}<br />
              <span className="text-[#ff4500]">{ctaData.heading.line2}</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              {ctaData.description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href={ctaData.buttons.primary.link} className="btn-primary text-2xl px-16 py-8">
                {ctaData.buttons.primary.text}
              </a>
              <a href={ctaData.buttons.secondary.link} className="btn-secondary text-2xl px-16 py-8">
                {ctaData.buttons.secondary.text}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
