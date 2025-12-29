import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  heroData,
  statsData,
  filterCategories,
  transformationsData,
  videoTestimonialsData,
  reviewsData,
  ctaData,
} from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.testimonials-hero-title', {
        y: 100,
        duration: 0.8,
        ease: 'power4.out',
      });
  
      gsap.from('.transformation-card', {
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.transformations-grid',
          start: 'top 80%',
        },
      });
    })
     return () => ctx.revert();
  }, []);

  const filteredTransformations = filter === 'all' 
    ? transformationsData 
    : transformationsData.filter(t => t.category === filter);

  return (
    <div className="pt-20 bg-bg-primary">
      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
         {/* Full Viewport Background */}
         <div className="absolute inset-0">
           <img 
             src={heroData.backgroundImage}
             alt="Gym background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
         </div>

        <div className="container-custom relative z-10 px-4">
          <div className="testimonials-hero-title text-center max-w-full">
            <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-primary/20 border border-primary rounded mb-4 md:mb-6">
              <span className="text-primary font-bold text-xs md:text-sm tracking-wider break-words">{heroData.badge}</span>
            </div>
             <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight mb-4 md:mb-6 break-words px-2">
               <span className="block text-txt-primary">{heroData.title.line1}</span>
               <span className="block text-primary neon-text">{heroData.title.line2}</span>
             </h1>
             <p className="text-base md:text-xl text-txt-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
               {heroData.description}
             </p>
          </div>

          {/* Stats - Hard Shadow Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-bg-secondary border-2 border-primary p-3 md:p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl md:text-6xl font-heading font-black text-primary mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-txt-muted uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar - NOT STICKY */}
      <section className="py-8 md:py-12 bg-bg-secondary border-b-2 border-gray-200">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filterCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 md:px-6 md:py-3 font-heading font-black uppercase text-xs md:text-sm transition-all ${
                  filter === tab.id
                    ? 'bg-primary text-txt-primary border-2 border-primary'
                    : 'bg-bg-secondary text-txt-muted border-2 border-gray-300 hover:border-primary hover:text-txt-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Grid - Before/After Cards */}
      <section className="transformations-grid section-padding bg-bg-primary min-h-screen">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {filteredTransformations.map((transformation, idx) => (
               <div
                 key={idx}
                 className="transformation-card relative group bg-bg-secondary backdrop-blur-sm border-2 border-gray-200 hover:border-primary p-4 transition-all"
               >
                 {/* Before/After Images - Split Screen */}
                 <div className="grid grid-cols-2 gap-2 mb-4">
                     <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={transformation.before}
                        alt="Before"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-bg-primary/80 border-2 border-gray-600">
                        <span className="text-txt-primary font-heading font-black text-sm uppercase">BEFORE</span>
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={transformation.after}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-primary border-4 border-black">
                        <span className="text-txt-primary font-heading font-black text-sm uppercase">AFTER</span>
                      </div>
                    </div>
                  </div>

                   {/* Info */}
                   <div className="mb-3">
                     <h3 className="text-lg font-heading font-black text-txt-primary mb-1">
                       {transformation.name}
                     </h3>
                     <div className="flex items-center gap-2 text-xs text-txt-muted mb-2">
                       <span>Age: {transformation.age}</span>
                       <span>•</span>
                       <span className="text-xs">{transformation.program}</span>
                     </div>
                     <p className="text-sm text-txt-secondary italic mb-3 leading-relaxed line-clamp-2">
                       "{transformation.quote}"
                     </p>
                   </div>

                  {/* Results - Bento Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-bg-secondary border border-primary/50 p-3 text-center">
                      <div className="text-2xl font-heading font-black text-primary mb-1">{transformation.lost}</div>
                      <div className="text-xs text-txt-muted">Fat Loss</div>
                    </div>
                    <div className="bg-bg-secondary border border-primary/50 p-3 text-center">
                      <div className="text-2xl font-heading font-black text-primary mb-1">{transformation.gained}</div>
                      <div className="text-xs text-txt-muted">Muscle Gain</div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-2">
                    {transformation.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-txt-secondary text-xs">{result}</span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <h2 className="text-4xl md:text-7xl font-heading font-black text-txt-primary mb-16 uppercase text-center">
            {videoTestimonialsData.heading.split(' ')[0]} <span className="text-primary">{videoTestimonialsData.heading.split(' ')[1]}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videoTestimonialsData.videos.map((video, idx) => (
              <div key={video.id} className="relative aspect-video bg-bg-accent border-4 border-gray-300 hover:border-primary transition-all group overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center group-hover:bg-bg-secondary/30 transition-colors">
                  <div className="w-20 h-20 bg-primary border-4 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-txt-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-bg-primary/80 backdrop-blur-sm p-4 border-l-4 border-primary">
                    <p className="text-txt-primary font-heading font-black text-lg uppercase">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <h2 className="text-6xl md:text-7xl font-heading font-black text-txt-primary mb-16 uppercase text-center">
            {reviewsData.heading.split(' ')[0]} <span className="text-primary">{reviewsData.heading.split(' ')[1]}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewsData.reviews.map((review, idx) => (
              <div key={idx} className="bg-bg-secondary border-2 border-gray-300 hover:border-primary p-8 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-primary">★</span>
                  ))}
                </div>
                <p className="text-lg text-txt-secondary italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-heading font-black text-txt-primary text-xl uppercase">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_primary_0%,_transparent_60%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-heading font-black text-txt-primary mb-8 uppercase leading-none">
              {ctaData.heading.line1}<br />
              <span className="text-primary">{ctaData.heading.line2}</span>
            </h2>
            <p className="text-2xl md:text-3xl text-txt-secondary mb-12 leading-relaxed">
              {ctaData.description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {ctaData.buttons.map((button, idx) => (
                <a 
                  key={idx}
                  href={button.link} 
                  className={button.primary ? 'btn-primary text-2xl px-16 py-8' : 'btn-secondary text-2xl px-16 py-8'}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
