// Program Pages Data

// 4-Week Transformation
export const fourWeekData = {
  hero: {
    badge: 'BEGINNER FRIENDLY',
    title: '4-WEEK KICKSTART',
    description: 'Build the foundation for lasting transformation',
    price: '₹24,999',
  },
  stats: [
    { value: '16', label: 'Sessions' },
    { value: '4', label: 'Weeks' },
    { value: '5-10 LBS', label: 'Fat Loss' },
  ],
  included: [
    {
      title: '16 SESSIONS',
      description: '4 sessions per week with certified trainer',
      num: '01',
    },
    {
      title: 'WORKOUT PLAN',
      description: 'Tailored to your fitness level',
      num: '02',
    },
    {
      title: 'NUTRITION GUIDE',
      description: 'Basic meal planning',
      num: '03',
    },
    {
      title: 'CHECK-INS',
      description: 'Progress tracking',
      num: '04',
    },
    {
      title: 'WHATSAPP',
      description: 'Direct coach access',
      num: '05',
    },
  ],
  schedule: [
    { day: 'MONDAY', focus: 'Upper Body Strength', intensity: 'High' },
    { day: 'WEDNESDAY', focus: 'Lower Body Power', intensity: 'High' },
    { day: 'FRIDAY', focus: 'Full Body Conditioning', intensity: 'Medium' },
    { day: 'SATURDAY', focus: 'Core & Mobility', intensity: 'Low-Medium' },
  ],
  expectedResults: [
    { metric: '5-10 LBS', label: 'Fat Loss' },
    { metric: '15-20%', label: 'Strength Up' },
    { metric: '100%', label: 'Habits' },
  ],
  testimonial: {
    quote: 'Lost 8 lbs and gained serious strength in just 4 weeks!',
    author: 'Raj M., Mumbai',
  },
  cta: {
    heading: 'READY TO START?',
    description: 'Book your free consultation now and let us build your transformation plan together.',
    buttons: [
      { text: 'BOOK FREE CONSULTATION', link: '/contact', primary: true },
      { text: 'VIEW ALL PROGRAMS', link: '/services', primary: false },
    ],
  },
};

// 8-Week Transformation
export const eightWeekData = {
  hero: {
    badge: 'MOST POPULAR',
    title: '8-WEEK ELITE',
    description: 'Complete body transformation program',
    price: '₹44,999',
  },
  stats: [
    { value: '32', label: 'Sessions' },
    { value: '8', label: 'Weeks' },
    { value: '12-18 KG', label: 'Fat Loss' },
  ],
  included: [
    { title: '32 SESSIONS', desc: 'Intensive 4x/week training', num: '01' },
    { title: 'PROTOCOLS', desc: 'Progressive overload system', num: '02' },
    { title: 'MEAL PLANS', desc: 'Weekly nutrition guidance', num: '03' },
    { title: 'ASSESSMENTS', desc: 'Body composition tracking', num: '04' },
    { title: '24/7 ACCESS', desc: 'WhatsApp coach support', num: '05' },
    { title: 'SUPPLEMENTS', desc: 'Personalized guide', num: '06' },
  ],
  trainingPhases: [
    { phase: 'WEEKS 1-2', title: 'FOUNDATION', focus: 'Form mastery & base conditioning', color: '#ff4500' },
    { phase: 'WEEKS 3-4', title: 'STRENGTH', focus: 'Progressive overload begins', color: '#ff6b00' },
    { phase: 'WEEKS 5-6', title: 'HYPERTROPHY', focus: 'Muscle building intensifies', color: '#ff8c00' },
    { phase: 'WEEKS 7-8', title: 'PEAK', focus: 'Maximum output & definition', color: '#ffa500' },
  ],
  beforeAfter: [
    { name: 'Arjun K.', lost: '12 kg', gained: '8 kg muscle', weeks: '8', image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800" },
    { name: 'Priya S.', lost: '10 kg', gained: '5 kg muscle', weeks: '8', image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800" },
  ],
  cta: {
    heading: 'YOUR TRANSFORMATION STARTS NOW',
    description: 'Join hundreds of successful transformations. Book your free consultation today.',
    buttonText: 'BOOK FREE CONSULTATION',
    buttonLink: '/contact',
  },
};

// Nutrition Plan
export const nutritionData = {
  hero: {
    badge: 'MONTHLY PLAN',
    title: 'NUTRITION COACHING',
    description: 'Personalized meal plans and nutrition guidance to fuel your fitness goals',
    price: '₹6,999/mo',
  },
  stats: [
    { value: '200+', label: 'Recipes' },
    { value: '24/7', label: 'Support' },
    { value: '95%', label: 'Success Rate' },
  ],
  included: [
    { title: 'MEAL PLANS', desc: 'Custom plans based on your goals', num: '01' },
    { title: 'MACRO TRACKING', desc: 'Precise protein, carbs, fat targets', num: '02' },
    { title: 'RECIPE ACCESS', desc: '200+ healthy recipes', num: '03' },
    { title: 'MONTHLY CALLS', desc: 'Video consultations', num: '04' },
    { title: 'EMAIL SUPPORT', desc: 'Unlimited support', num: '05' },
    { title: 'PROGRESS TRACKING', desc: 'Weekly check-ins', num: '06' },
  ],
  sampleDay: [
    { meal: 'BREAKFAST', time: '7:00 AM', food: 'Scrambled eggs, oatmeal, berries', macros: 'P: 30g | C: 45g | F: 15g' },
    { meal: 'SNACK', time: '10:00 AM', food: 'Greek yogurt with almonds', macros: 'P: 20g | C: 15g | F: 10g' },
    { meal: 'LUNCH', time: '1:00 PM', food: 'Grilled chicken, rice, vegetables', macros: 'P: 40g | C: 50g | F: 12g' },
    { meal: 'SNACK', time: '4:00 PM', food: 'Protein shake, banana', macros: 'P: 25g | C: 30g | F: 5g' },
    { meal: 'DINNER', time: '7:00 PM', food: 'Salmon, sweet potato, broccoli', macros: 'P: 35g | C: 40g | F: 18g' },
  ],
  cta: {
    heading: 'FUEL YOUR SUCCESS',
    description: 'Start your nutrition coaching today and transform your relationship with food.',
    buttonText: 'BOOK CONSULTATION',
    buttonLink: '/contact',
  },
};
