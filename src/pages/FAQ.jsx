import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What should I bring to my first consultation?',
          a: 'Just bring yourself and any medical history or injury information. We\'ll discuss your goals, assess your current fitness level, and create a personalized plan.',
        },
        {
          q: 'Do you offer trial sessions?',
          a: 'Yes! Your first consultation is completely free. We\'ll walk you through our facility, introduce you to our trainers, and answer all your questions.',
        },
        {
          q: 'What if I\'m a complete beginner?',
          a: 'Perfect! Most of our clients start as beginners. We\'ll build a foundation-focused program that progresses at your pace with proper form and technique.',
        },
      ],
    },
    {
      category: 'Programs & Training',
      questions: [
        {
          q: 'Can I switch programs if needed?',
          a: 'Absolutely. We can adjust your program at any time based on your progress, goals, or preferences. Your success is our priority.',
        },
        {
          q: 'How often should I train?',
          a: 'Our programs typically involve 4 training sessions per week, but we can customize frequency based on your schedule and goals.',
        },
        {
          q: 'What equipment do you have?',
          a: 'We have a fully-equipped 5000 sq ft facility with state-of-the-art cardio machines, free weights, resistance training equipment, and dedicated recovery areas.',
        },
      ],
    },
    {
      category: 'Nutrition & Diet',
      questions: [
        {
          q: 'Do you provide nutrition guidance?',
          a: 'Yes! All our training programs include nutrition guidelines. Our 8-week program includes detailed meal plans, and we also offer standalone nutrition coaching.',
        },
        {
          q: 'Can I follow a specific diet (vegan, keto, etc.)?',
          a: 'Absolutely! Our meal plans are completely customizable to your dietary preferences, restrictions, and lifestyle.',
        },
        {
          q: 'Do I need supplements?',
          a: 'Supplements are optional. We provide guidance on beneficial supplements, but they\'re never required for success.',
        },
      ],
    },
    {
      category: 'Results & Progress',
      questions: [
        {
          q: 'How soon will I see results?',
          a: 'Most clients notice improvements in strength and energy within 2 weeks. Visible physical changes typically appear within 4-6 weeks with consistent training.',
        },
        {
          q: 'What if I don\'t see results?',
          a: 'We track your progress closely and adjust your program as needed. If you\'re not seeing results, we\'ll identify the issue and make changes immediately.',
        },
        {
          q: 'Do you guarantee results?',
          a: 'We guarantee our commitment to your success. Results depend on consistency, but we have a 95% success rate with clients who follow the program.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-[#0f0f0f] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
            alt="Gym background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 via-transparent to-[#ff8c00]/20"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-block px-6 py-2 bg-[#ff4500]/20 border border-[#ff4500] rounded mb-6">
            <span className="text-[#ff4500] font-bold text-sm uppercase tracking-wider">Help Center</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight mb-6">
            <span className="block text-white">Frequently Asked</span>
            <span className="block text-[#ff4500] neon-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our programs, training, and services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom max-w-5xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-heading font-black text-white mb-8 border-l-4 border-[#ff4500] pl-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = `${categoryIndex}-${index}`;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={index}
                      className="bg-black/40 backdrop-blur-sm border-2 border-gray-800 hover:border-[#ff4500] transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-center"
                      >
                        <h3 className="text-lg font-heading font-bold text-white pr-4">
                          {faq.q}
                        </h3>
                        <span className={`text-[#ff4500] text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-base text-gray-300 leading-relaxed border-t border-gray-800 pt-4">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
              Still Have <span className="text-[#ff4500]">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Our team is here to help. Book a free consultation or contact us directly.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Contact Us
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-12 py-4">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

