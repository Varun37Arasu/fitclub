// Navigation Data

export const logoData = {
  image: '/src/assets/logo10.png',
  text: 'URS KINGS',
  highlight: 'NUTRITION',
  fallbackText: 'URS KINGS NUTRITION',
};

export const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'TESTIMONIALS', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'CONTACT', path: '/contact' },
];

// All programs under Services dropdown
export const serviceLinks = [
  // Nutrition Plans
  { name: 'Vegetarian Nutrition Plan', path: '/nutrition/veg-plan', category: 'Nutrition' },
  { name: 'Non-Veg Nutrition Plan', path: '/nutrition/non-veg-plan', category: 'Nutrition' },
  { name: 'Keto Nutrition Plan', path: '/nutrition/keto-plan', category: 'Nutrition' },
  // Transformation Programs
  { name: '8-Week Elite Transformation', path: '/services/8-week-transformation', category: 'Transformation' },
  { name: '12-Week Complete Transformation', path: '/services/12-week-transformation', category: 'Transformation' },
  { name: '24-Week Premium Transformation', path: '/services/24-week-transformation', category: 'Transformation' },
  { name: 'Annual Lifestyle Transformation', path: '/services/annual-transformation', category: 'Transformation' },
];

export const ctaButton = {
  text: 'START NOW',
  path: '/contact',
};

