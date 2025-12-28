// Services Page Data

export const heroData = {
  badge: 'Our Programs',
  title: 'Choose Your Training Program',
  description: 'Elite training programs designed for serious results. From kickstart to complete transformation.',
};

export const quickStatsData = [
  { value: '500+', label: 'Clients' },
  { value: '100%', label: 'Success' },
  { value: '5', label: 'Programs' },
  { value: '10Y', label: 'Experience' },
  { value: '4.9★', label: 'Rating' },
];

export const programsData = [
  {
    id: '8-week',
    tagline: 'COMPLETE BODY TRANSFORMATION',
    title: '8-Week Elite Program',
    badge: 'MOST POPULAR',
    description: 'Our most popular program. Intensive training combined with advanced nutrition protocols for maximum fat loss and muscle gain.',
    duration: '8 Weeks',
    sessions: '32 Sessions',
    price: '₹49,999',
    moneyBack: true,
    features: [
      '4 sessions per week',
      'Custom meal plans',
      'Bi-weekly body composition analysis',
      '24/7 coach access',
      'Supplement guidance',
    ],
    highlights: ['Most Popular', 'Maximum Results', 'Proven System'],
    link: '/services/8-week-transformation',
    popular: true,
  },
  {
    id: '12-week',
    tagline: 'TOTAL TRANSFORMATION',
    title: '12-Week Complete Program',
    badge: 'BEST VALUE',
    description: 'Achieve dramatic results with our comprehensive 3-month program. Perfect for serious body recomposition goals.',
    duration: '12 Weeks',
    sessions: '48 Sessions',
    price: '₹69,999',
    moneyBack: true,
    features: [
      '4 sessions per week',
      'Advanced nutrition with macro cycling',
      'DEXA scans every 4 weeks',
      'Premium supplements included',
      'Recovery & massage therapy',
      'Mindset coaching',
    ],
    highlights: ['Best Value', 'Dramatic Results', 'Premium Package'],
    link: '/services/12-week-transformation',
    popular: false,
  },
  {
    id: '24-week',
    tagline: 'BODY RECOMPOSITION',
    title: '24-Week Elite Program',
    badge: 'PREMIUM ELITE',
    description: 'The ultimate transformation journey for serious athletes. Six months of intensive training and lifestyle optimization.',
    duration: '24 Weeks',
    sessions: '96 Sessions',
    price: '₹1,29,999',
    moneyBack: true,
    features: [
      '4 sessions per week',
      'Complete dietary transformation',
      'Monthly comprehensive assessments',
      '6 months premium supplements',
      'Unlimited recovery center access',
      'Complete lifestyle coaching',
    ],
    highlights: ['Elite Results', 'VIP Treatment', 'Life Changing'],
    link: '/services/24-week-transformation',
    popular: false,
  },
  {
    id: 'annual',
    tagline: 'LIFESTYLE TRANSFORMATION',
    title: 'Annual Program',
    badge: 'EXCLUSIVE',
    description: 'A full year of transformation, maintenance, and peak performance. Our most exclusive and comprehensive offering.',
    duration: '52 Weeks',
    sessions: '192 Sessions',
    price: '₹2,49,999',
    moneyBack: true,
    features: [
      '192 personalized sessions',
      'Adaptive nutrition evolution',
      'Quarterly health panels',
      'Full year supplement stack',
      'VIP recovery access',
      'Complete life transformation',
    ],
    highlights: ['Ultimate Commitment', 'Legacy Building', 'Elite Lifestyle'],
    link: '/services/annual-transformation',
    popular: false,
  },
  {
    id: 'nutrition',
    tagline: 'FUEL YOUR FITNESS',
    title: 'Nutrition Diet Plans',
    badge: 'NUTRITION FOCUSED',
    description: 'Personalized meal plans designed to complement your training. Learn sustainable eating habits for lifelong health.',
    duration: 'Monthly',
    sessions: 'Ongoing',
    price: '₹6,999/mo',
    moneyBack: true,
    features: [
      'Custom meal plans',
      'Macro tracking',
      '200+ recipe database',
      'Monthly video consultations',
      'Unlimited email support',
    ],
    highlights: ['Flexible', 'Educational', 'Sustainable'],
    link: '/services/nutrition-diet-plans',
    popular: false,
  },
];

export const comparisonData = {
  heading: 'COMPARE PROGRAMS',
  headers: ['FEATURES', '8-WEEK', '12-WEEK', '24-WEEK', 'ANNUAL'],
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
    title: '100% SUCCESS',
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

