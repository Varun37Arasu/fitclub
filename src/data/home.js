// Home Page Data - Complete extraction from Home.jsx

export const heroData = {
  badge: 'Elite Nutrition & Fitness Coaching',
  title: {
    line1: 'Fuel Your Transformation',
    line2: 'Achieve Your Goals',
  },
  description: 'Expert nutrition coaching, custom meal plans, and proven results. Transform your body from the inside out with 500+ successful transformations.',
  buttons: {
    primary: { text: 'Explore Nutrition Plans', link: '/nutrition/veg-plan' },
    secondary: { text: 'Book Consultation', link: '/contact' },
  },
  backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000',
};

export const heroStatsData = [
  { value: 500, label: 'Nutrition Clients', suffix: '+', key: 'clients' },
  { value: 100, label: 'Success Rate', suffix: '%', key: 'success' },
  { value: 1000, label: 'Custom Meal Plans', suffix: '+', key: 'meals' },
];

export const whyChooseUsData = {
  heading: 'Why Choose URS Kings Nutrition',
  subheading: 'Everything you need for a successful transformation',
  mainFeature: {
    badge: 'Nutrition-First Approach',
    title: 'One-on-One Expert Nutrition Coaching',
    description: 'Every meal plan is tailored to your unique goals, dietary preferences, and lifestyle. Our certified nutrition coaches provide personalized guidance, macro tracking, and ongoing support to help you achieve maximum results sustainably and effectively.',
    stats: [
      { value: '500+', label: 'Clients' },
      { value: '100%', label: 'Success' },
      { value: '15Y', label: 'Experience' },
    ],
  },
  progressTracking: {
    badge: 'Track Everything',
    title: 'Monitor Your Progress',
    metrics: [
      { label: 'Strength Gains', value: 85 },
      { label: 'Endurance', value: 70 },
      { label: 'Body Composition', value: 90 },
    ],
  },
  nutrition: {
    badge: 'Nutrition Guidance',
    title: 'Custom Meal Plans',
    description: 'Personalized nutrition plans designed for your goals, lifestyle, and preferences. Includes macro calculations, recipe database, and ongoing adjustments.',
    features: [
      'Macro & Calorie Tracking',
      'Recipe Database Access',
      'Weekly Adjustments',
    ],
  },
  support: {
    badge: 'Always Available',
    title: '24/7 Support',
    description: 'Coach access whenever you need',
  },
  methods: {
    badge: 'Science-Based',
    title: 'Proven Methods',
    description: 'Research-backed protocols',
  },
};

export const programsData = {
  heading: 'Our Programs',
  subheading: 'Choose the program that fits your goals and commitment level',
  programs: [
    {
      title: '4-WEEK KICKSTART',
      price: '₹24,999',
      description: 'Perfect for beginners. Build momentum and create lasting habits.',
      features: ['16 Sessions', 'Nutrition Guide', 'Weekly Check-ins'],
      link: '/services/4-week-transformation',
      popular: false,
    },
    {
      title: '8-WEEK TRANSFORM',
      price: '₹44,999',
      description: 'Complete transformation. Build muscle, burn fat, reshape your life.',
      features: ['32 Sessions', 'Meal Plans', '24/7 Access'],
      link: '/services/8-week-transformation',
      popular: true,
    },
    {
      title: 'NUTRITION COACHING',
      price: '₹6,999/mo',
      description: 'Personalized meal plans and nutrition guidance.',
      features: ['Custom Plans', 'Recipe Access', 'Monthly Calls'],
      link: '/services/nutrition-plan',
      popular: false,
    },
  ],
  viewAllButton: {
    text: 'View All Programs',
    link: '/services',
  },
};

export const transformationShowcaseData = {
  heading: 'Real Transformations',
  subheading: 'See the incredible results our clients have achieved',
  featured: {
    name: 'Arjun K.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800',
    results: [
      { text: 'Lost 12 kg', type: 'loss' },
      { text: 'Gained 8 kg Muscle', type: 'gain' },
    ],
  },
  stats: [
    { value: '500+', label: 'Successful Transformations' },
    { value: '100%', label: 'Client Success Rate' },
    { value: '2500+', label: 'Total Kilograms Lost' },
  ],
  button: {
    text: 'View All Results',
    link: '/testimonials',
  },
};

export const clientReviewsData = {
  heading: 'Client Reviews',
  subheading: 'Hear what our clients have to say about their experience',
  reviews: [
    {
      name: 'Priya Sharma',
      text: 'Lost 10 kg in 8 weeks. Best decision of my life! The trainers are incredibly supportive.',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      text: 'Gained 12 kg muscle at age 40. The personalized approach really works.',
      rating: 5,
    },
    {
      name: 'Ananya Reddy',
      text: 'Professional, motivating, and result-oriented. Couldn\'t ask for more.',
      rating: 5,
    },
  ],
  button: {
    text: 'Read More Reviews',
    link: '/testimonials',
  },
};

export const finalCtaData = {
  heading: {
    line1: 'Ready to Transform',
    line2: 'Your Life?',
  },
  description: 'Book your free consultation today and take the first step towards achieving your fitness goals.',
  buttons: {
    primary: { text: 'Book Free Consultation', link: '/contact' },
    secondary: { text: 'View Programs', link: '/services' },
  },
};
