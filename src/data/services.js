// Services Page Data

export const heroData = {
  badge: 'Our Programs',
  title: 'Choose Your Training Program',
  description: 'Elite training programs designed for serious results. From kickstart to complete transformation.',
};

export const quickStatsData = [
  { value: '500+', label: 'Clients' },
  { value: '95%', label: 'Success' },
  { value: '3', label: 'Programs' },
  { value: '10Y', label: 'Experience' },
  { value: '4.9★', label: 'Rating' },
];

export const programsData = [
  {
    id: '4-week',
    tagline: 'KICKSTART YOUR FITNESS',
    title: '4-Week Transformation',
    description: 'Perfect for beginners or those looking for a fitness reset. Build foundational strength, learn proper form, and kickstart healthy habits.',
    duration: '4 Weeks',
    sessions: '16 Sessions',
    price: '₹24,999',
    features: [
      '4 sessions per week',
      'Basic nutrition guidelines',
      'Weekly progress tracking',
      'WhatsApp support',
    ],
    highlights: ['Beginner-Friendly', 'Foundation Building', 'Quick Results'],
    link: '/services/4-week-transformation',
    popular: false,
  },
  {
    id: '8-week',
    tagline: 'COMPLETE BODY TRANSFORMATION',
    title: '8-Week Elite Program',
    description: 'Our most popular program. Intensive training combined with advanced nutrition protocols for maximum fat loss and muscle gain.',
    duration: '8 Weeks',
    sessions: '32 Sessions',
    price: '₹44,999',
    features: [
      '4 sessions per week',
      'Custom meal plans',
      'Bi-weekly body composition analysis',
      '24/7 coach access',
      'Supplement guidance',
    ],
    highlights: ['Most Popular', 'Maximum Results', 'Complete Support'],
    link: '/services/8-week-transformation',
    popular: true,
  },
  {
    id: 'nutrition',
    tagline: 'FUEL YOUR TRANSFORMATION',
    title: 'Nutrition Coaching',
    description: 'Personalized nutrition guidance to complement your training or as a standalone program. Learn sustainable eating habits.',
    duration: 'Monthly',
    sessions: 'Ongoing',
    price: '₹6,999/mo',
    features: [
      'Personalized meal plans',
      'Macro calculations',
      'Recipe database access',
      'Monthly video consultations',
      'Email support',
    ],
    highlights: ['Flexible', 'Sustainable', 'Expert Guidance'],
    link: '/services/nutrition-plan',
    popular: false,
  },
];

export const comparisonData = {
  heading: 'COMPARE PROGRAMS',
  headers: ['FEATURES', '4-WEEK', '8-WEEK', 'NUTRITION'],
  rows: [
    {
      feature: 'Personal Training',
      fourWeek: '16 Sessions',
      eightWeek: '32 Sessions',
      nutrition: '—',
      highlight: 'eightWeek',
    },
    {
      feature: 'Meal Plans',
      fourWeek: 'Guidelines',
      eightWeek: 'Detailed Weekly',
      nutrition: 'Fully Custom',
      highlight: 'eightWeek',
    },
    {
      feature: 'Coach Access',
      fourWeek: 'Business Hours',
      eightWeek: '24/7 WhatsApp',
      nutrition: 'Email',
      highlight: 'eightWeek',
    },
    {
      feature: 'Progress Tracking',
      fourWeek: 'Weekly',
      eightWeek: 'Bi-weekly',
      nutrition: 'Weekly',
      highlight: 'eightWeek',
    },
    {
      feature: 'Recipe Database',
      fourWeek: '—',
      eightWeek: '✓',
      nutrition: '✓',
      highlight: 'eightWeek',
    },
    {
      feature: 'Supplement Guide',
      fourWeek: '—',
      eightWeek: '✓',
      nutrition: '—',
      highlight: 'eightWeek',
    },
    {
      feature: 'Video Library',
      fourWeek: '—',
      eightWeek: '✓',
      nutrition: '—',
      highlight: 'eightWeek',
    },
  ],
};

export const whyUsData = [
  {
    title: 'CERTIFIED EXPERTS',
    description: 'All trainers certified with 10+ years experience',
    num: '01',
  },
  {
    title: 'PROVEN RESULTS',
    description: '500+ successful transformations achieved',
    num: '02',
  },
  {
    title: '95% SUCCESS',
    description: 'Industry-leading client success rate',
    num: '03',
  },
  {
    title: 'SCIENCE-BACKED',
    description: 'Evidence-based training protocols',
    num: '04',
  },
  {
    title: '24/7 SUPPORT',
    description: 'Direct coach access anytime',
    num: '05',
  },
  {
    title: 'PREMIUM FACILITY',
    description: '5000 sq ft state-of-the-art gym',
    num: '06',
  },
];

export const ctaData = {
  heading: {
    line1: 'NOT SURE',
    line2: 'WHICH ONE?',
  },
  description: 'Book a free consultation and we will help you choose the perfect program for your goals.',
  buttons: [
    { text: 'BOOK FREE CALL', link: '/contact', primary: true },
    { text: 'VIEW TRANSFORMATIONS', link: '/testimonials', primary: false },
  ],
};

