# Data Management Guide

## 📁 Structure

All website content is now centralized in the `/src/data` folder. This makes it easy to update content without touching component code.

```
src/data/
├── index.js          # Central export (import from here)
├── home.js           # Home page content
├── services.js       # Services page content
├── about.js          # About page content
├── testimonials.js   # Testimonials page content
├── contact.js        # Contact page content
├── programs.js       # Program pages (4-week, 8-week, nutrition)
├── faq.js            # FAQ page content
├── navigation.js     # Navigation menu items
└── footer.js         # Footer content
```

## 🚀 How to Use

### Method 1: Import from Central Index (Recommended)

```javascript
// In your component
import { homeData, servicesData } from '../data';

// Use the data
const { heroData, statsData } = homeData;
```

### Method 2: Import Directly from Specific File

```javascript
// In your component
import { heroData, statsData } from '../data/home';
```

## 📝 Usage Examples

### Example 1: Home Page Hero Section

```javascript
import { homeData } from '../data';

function Hero() {
  const { heroData } = homeData;
  
  return (
    <section>
      <span>{heroData.badge}</span>
      <h1>{heroData.title}</h1>
      <p>{heroData.description}</p>
      <Link to={heroData.cta.primary.link}>
        {heroData.cta.primary.text}
      </Link>
    </section>
  );
}
```

### Example 2: Services Page Programs

```javascript
import { servicesData } from '../data';

function Programs() {
  const { programsData } = servicesData;
  
  return (
    <div>
      {programsData.map((program) => (
        <div key={program.id}>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <span>{program.price}</span>
          <Link to={program.link}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}
```

### Example 3: About Page Journey Timeline

```javascript
import { aboutData } from '../data';

function Journey() {
  const { journeyData } = aboutData;
  
  return (
    <div>
      {journeyData.map((item, idx) => (
        <div key={idx}>
          <span>{item.year}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## ✏️ How to Update Content

### To Change Hero Text on Home Page:

1. Open `src/data/home.js`
2. Find `heroData` object
3. Update the values:

```javascript
export const heroData = {
  badge: 'Your New Badge Text',
  title: 'YOUR NEW TITLE',
  subtitle: 'YOUR NEW SUBTITLE',
  // ... rest of the fields
};
```

### To Add a New Program:

1. Open `src/data/services.js`
2. Add new object to `programsData` array:

```javascript
export const programsData = [
  // ... existing programs
  {
    id: 'new-program',
    tagline: 'YOUR TAGLINE',
    title: 'New Program Name',
    description: 'Program description...',
    duration: '12 Weeks',
    sessions: '48 Sessions',
    price: '₹69,999',
    features: ['Feature 1', 'Feature 2'],
    highlights: ['Highlight 1', 'Highlight 2'],
    link: '/services/new-program',
    popular: false,
  },
];
```

### To Update Pricing:

1. Open `src/data/home.js` (for home page pricing cards)
2. Or `src/data/programs.js` (for individual program pages)
3. Update the `price` field:

```javascript
price: '₹29,999',  // New price
```

### To Add a Testimonial:

1. Open `src/data/testimonials.js`
2. Add to `transformationsData` array:

```javascript
{
  name: 'New Client Name',
  age: 30,
  program: '8-Week Elite',
  result: '-15kg',
  quote: 'Amazing transformation!',
  category: 'Weight Loss',
  image: 'https://your-image-url.com',
}
```

### To Update Contact Information:

1. Open `src/data/contact.js`
2. Update `contactInfoData`:

```javascript
export const contactInfoData = {
  phone: {
    primary: '+91 YOUR NEW NUMBER',
  },
  email: {
    primary: 'newemail@fitclub.com',
  },
  // ... etc
};
```

## 🎯 Benefits

1. **Easy Updates**: Change content without touching React components
2. **Centralized**: All content in one place
3. **Type Safety**: Can add TypeScript types later if needed
4. **Reusable**: Same data can be used across multiple components
5. **Version Control**: Easy to track content changes in Git
6. **Team Friendly**: Non-developers can update content easily

## 🔄 Migration Status

**Status**: Data files created ✅

**Next Step**: Update components to import from these data files instead of hardcoded values.

**Note**: Components currently still have hardcoded data. To complete the migration, replace hardcoded arrays/objects in components with imports from these data files.

## 📚 Quick Reference

| File | Contains |
|------|----------|
| `home.js` | Hero, stats, features, process steps, reviews, pricing |
| `services.js` | Programs list, comparison table, why choose us |
| `about.js` | Mission/vision, journey timeline, values, team |
| `testimonials.js` | Success stories, filters, metrics |
| `contact.js` | Contact info, form fields, map, social links |
| `programs.js` | 4-week, 8-week, nutrition program details |
| `faq.js` | All FAQ questions organized by category |
| `navigation.js` | Nav links, service links, CTA button |
| `footer.js` | Company info, links, social, copyright |

---

**Pro Tip**: Always import from `src/data/index.js` for cleaner imports:

```javascript
// ✅ Good
import { homeData, servicesData } from '../data';

// ❌ Less clean
import { heroData } from '../data/home';
import { programsData } from '../data/services';
```

