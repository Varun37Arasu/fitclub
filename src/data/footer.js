// Footer Data
import { contactInfoData } from './contact';

export const logoData = {
  image: '/logo10.png',
  text: 'URS KINGS',
  highlight: 'NUTRITION',
  fallbackText: 'URS KINGS NUTRITION',
};

export const companyInfo = {
  description: 'Elite personal training and nutrition coaching. Build unstoppable strength and transform your life.',
};

export const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export const contactInfo = {
  address: contactInfoData.cards[0].info[0],
  phone: contactInfoData.cards[2].info[0],
  email: contactInfoData.cards[1].info[0],
};

export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/fitclub' },
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/fitclub' },
  { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/fitclub' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/fitclub' },
];

export const legalLinks = [
  { name: 'Privacy Policy', url: '#' },
  { name: 'Terms of Service', url: '#' },
  { name: 'Cookies', url: '#' },
];

export const copyrightText = `© ${new Date().getFullYear()} FitClub. All rights reserved.`;

