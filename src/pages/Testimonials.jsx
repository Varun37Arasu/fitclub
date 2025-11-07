import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    gsap.from('.testimonials-hero-title', {
      y: 50,
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
  }, []);

  const transformations = [
    {
      name: 'Arjun Kumar',
      age: 32,
      category: 'weight-loss',
      program: '8-Week Transform',
      before: 'https://images.unsplash.com/photo-1583454155184-870a1f63f286?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1583454155187-f09283261e15?q=80&w=800',
      lost: '15 kg',
      gained: '8 kg muscle',
      quote: 'I never thought I could look this good at 32. The transformation was incredible!',
      results: ['Lost 15 kg fat', 'Gained 8 kg muscle', 'Increased strength 45%'],
    },
    {
      name: 'Priya Sharma',
      age: 28,
      category: 'transformation',
      program: '8-Week Transform',
      before: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=800',
      lost: '12 kg',
      gained: '5 kg muscle',
      quote: 'Best decision of my life. I feel stronger, healthier, and more confident than ever.',
      results: ['Lost 12 kg fat', 'Gained 5 kg muscle', 'Reduced body fat 18%'],
    },
    {
      name: 'Rajesh Patel',
      age: 40,
      category: 'muscle-gain',
      program: '8-Week Transform',
      before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800',
      lost: '8 kg',
      gained: '12 kg muscle',
      quote: 'At 40, I thought my best days were behind me. I was wrong. I\'m in the best shape of my life.',
      results: ['Lost 8 kg fat', 'Gained 12 kg muscle', 'Increased strength 55%'],
    },
    {
      name: 'Sneha Desai',
      age: 25,
      category: 'weight-loss',
      program: '4-Week Kickstart',
      before: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1583454155188-f09283261e16?q=80&w=800',
      lost: '8 kg',
      gained: '3 kg muscle',
      quote: 'The 4-week program was perfect for me as a beginner. Now I\'m hooked!',
      results: ['Lost 8 kg fat', 'Gained 3 kg muscle', 'Improved endurance 200%'],
    },
    {
      name: 'Vikram Singh',
      age: 35,
      category: 'transformation',
      program: '8-Week Transform',
      before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?q=80&w=800',
      lost: '18 kg',
      gained: '10 kg muscle',
      quote: 'Life-changing experience. I wish I had started years ago!',
      results: ['Lost 18 kg fat', 'Gained 10 kg muscle', 'Reduced waist 6 inches'],
    },
    {
      name: 'Ananya Reddy',
      age: 29,
      category: 'muscle-gain',
      program: '8-Week Transform',
      before: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800',
      after: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800',
      lost: '6 kg',
      gained: '7 kg muscle',
      quote: 'I wanted to build strength and confidence. I got both and so much more.',
      results: ['Lost 6 kg fat', 'Gained 7 kg muscle', 'Deadlift from 40kg to 100kg'],
    },
  ];

  const filteredTransformations = filter === 'all' 
    ? transformations 
    : transformations.filter(t => t.category === filter);

  return (
    <div className="pt-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Radial Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff4500] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff8c00] opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="testimonials-hero-title text-center">
            <div className="inline-block px-8 py-3 bg-[#ff4500] mb-8 transform -rotate-1 border-4 border-black">
              <span className="text-white font-heading font-black text-xl uppercase tracking-widest">SUCCESS STORIES</span>
            </div>
            <h1 className="text-[clamp(4rem,15vw,14rem)] font-heading font-black leading-[0.85] tracking-tighter mb-8">
              <span className="block text-white">REAL</span>
              <span className="block text-[#ff4500] neon-text">TRANSFORMATIONS</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              500+ clients transformed. Real people. Real results. Real stories.
            </p>
          </div>

          {/* Stats - Hard Shadow Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '500+', label: 'TRANSFORMATIONS' },
              { value: '95%', label: 'SUCCESS RATE' },
              { value: '2500+', label: 'TOTAL KG LOST' },
              { value: '4.9★', label: 'AVG RATING' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#242424] border-4 border-[#ff4500] p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-heading font-black text-[#ff4500] mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar - Bento Navigation */}
      <section className="py-12 bg-[#1a1a1a] sticky top-20 z-40 border-b-2 border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'weight-loss', label: 'WEIGHT LOSS' },
              { id: 'muscle-gain', label: 'MUSCLE GAIN' },
              { id: 'transformation', label: 'COMPLETE TRANSFORMATION' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-8 py-4 font-heading font-black uppercase text-sm transition-all ${
                  filter === tab.id
                    ? 'bg-[#ff4500] text-white border-4 border-black transform scale-105'
                    : 'bg-[#242424] text-gray-400 border-2 border-gray-700 hover:border-[#ff4500] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Grid - Before/After Cards */}
      <section className="transformations-grid section-padding bg-[#0f0f0f] min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredTransformations.map((transformation, idx) => (
              <div
                key={idx}
                className="transformation-card relative group bg-[#1a1a1a] border-4 border-gray-700 hover:border-[#ff4500] p-8 transition-all rounded-2xl"
              >
                {/* Before/After Images - Split Screen */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={transformation.before}
                        alt="Before"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 border-2 border-gray-600">
                        <span className="text-white font-heading font-black text-sm uppercase">BEFORE</span>
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={transformation.after}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-[#ff4500] border-4 border-black">
                        <span className="text-white font-heading font-black text-sm uppercase">AFTER</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-heading font-black text-white mb-2 uppercase">
                      {transformation.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>Age: {transformation.age}</span>
                      <span>•</span>
                      <span>{transformation.program}</span>
                    </div>
                    <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                      "{transformation.quote}"
                    </p>
                  </div>

                  {/* Results - Bento Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#242424] border-2 border-[#ff4500] p-4 text-center">
                      <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">{transformation.lost}</div>
                      <div className="text-xs text-gray-400 uppercase">FAT LOSS</div>
                    </div>
                    <div className="bg-[#242424] border-2 border-[#ff4500] p-4 text-center">
                      <div className="text-3xl font-heading font-black text-[#ff4500] mb-1">{transformation.gained}</div>
                      <div className="text-xs text-gray-400 uppercase">MUSCLE GAIN</div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    {transformation.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff4500] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            VIDEO <span className="text-[#ff4500]">TESTIMONIALS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((video, idx) => (
              <div key={idx} className="relative aspect-video bg-[#242424] border-4 border-gray-700 hover:border-[#ff4500] transition-all group overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1571019613454 + idx * 1000}-1cb2f99b2d8b?q=80&w=800`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-[#ff4500] border-4 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-sm p-4 border-l-4 border-[#ff4500]">
                    <p className="text-white font-heading font-black text-lg uppercase">CLIENT TESTIMONIAL #{idx + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-16 uppercase text-center">
            CLIENT <span className="text-[#ff4500]">REVIEWS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rohan Mehta', rating: 5, text: 'Absolutely phenomenal experience! The trainers really care about your progress and push you to be your best.' },
              { name: 'Kavya Nair', rating: 5, text: 'Best gym in Mumbai. The personalized attention and expert guidance make all the difference.' },
              { name: 'Amit Gupta', rating: 5, text: 'Lost 20 kg and gained so much confidence. Life-changing transformation!' },
              { name: 'Pooja Deshmukh', rating: 5, text: 'Professional, motivating, and result-oriented. Couldn\'t ask for more.' },
              { name: 'Karan Bhatia', rating: 5, text: 'The 8-week program exceeded all my expectations. Highly recommend!' },
              { name: 'Neha Kapoor', rating: 5, text: 'From day one, I felt supported and motivated. The results speak for themselves.' },
            ].map((review, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border-2 border-gray-700 hover:border-[#ff4500] p-8 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-[#ff4500]">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-heading font-black text-white text-xl uppercase">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ff4500_0%,_transparent_60%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-9xl font-heading font-black text-white mb-8 uppercase leading-none">
              YOUR STORY<br />
              <span className="text-[#ff4500]">STARTS HERE</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              Join 500+ successful transformations. Book your free consultation today.
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

export default Testimonials;
