# Gradual Migration Guide

## ✅ **Services Page - MIGRATED** (Example Complete!)

The Services page has been migrated to use centralized data. Here's what was changed:

### Before:
```javascript
const programs = [
  { id: '4-week', title: '4-Week...', price: '₹24,999', ... },
  // ... hardcoded data
];
```

### After:
```javascript
import { servicesData } from '../data';

const { programsData, quickStatsData, whyUsData } = servicesData;
const programs = programsData;
```

Now you can update prices, descriptions, etc. by editing `src/data/services.js`!

---

## 📋 **How to Migrate Other Pages**

### **Step-by-Step Process:**

#### 1. **Import the data at the top of the component:**

```javascript
// For Home page
import { homeData } from '../data';

// For About page
import { aboutData } from '../data';

// For Testimonials page
import { testimonialsData } from '../data';
```

#### 2. **Extract the data you need:**

```javascript
const { heroData, statsData, bentoFeaturesData } = homeData;
```

#### 3. **Replace hardcoded arrays with imported data:**

**Before:**
```javascript
{[
  { value: '500+', label: 'Transformations' },
  { value: '95%', label: 'Success Rate' },
].map((stat) => (
  <div>{stat.value}</div>
))}
```

**After:**
```javascript
{statsData.map((stat) => (
  <div>{stat.value}</div>
))}
```

---

## 🎯 **Migration Priority**

Migrate pages in this order based on how often you update them:

1. ✅ **Services** - DONE (pricing changes frequently)
2. **Home** - Hero text, pricing cards
3. **About** - Team info, journey timeline
4. **Testimonials** - Add new success stories
5. **Contact** - Contact info, form fields
6. **Programs** - Program details, pricing
7. **Navigation** - Menu items
8. **Footer** - Links, contact info

---

## 📝 **Example: Migrating Home Page**

### Current Home.jsx structure:
```javascript
// Hardcoded data in component
const heroText = "TRANSFORM YOUR BODY";
const stats = [
  { value: '500+', label: 'Transformations' },
  // ...
];
```

### After migration:
```javascript
import { homeData } from '../data';

const Home = () => {
  const { heroData, statsData, pricingData } = homeData;
  
  return (
    <section>
      <h1>{heroData.title}</h1>
      <p>{heroData.description}</p>
      
      {statsData.map(stat => (
        <div key={stat.label}>
          <span>{stat.value}</span>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
};
```

---

## 💡 **Quick Tips**

### **Finding What to Replace:**

1. Look for arrays defined with `[...]`
2. Look for objects with content like `{ title: '...', description: '...' }`
3. Search for hardcoded text in quotes

### **Testing After Migration:**

1. Check the page loads without errors
2. Verify all content displays correctly
3. Test that links still work
4. Check mobile responsiveness

### **If Something Breaks:**

1. Check the import path: `'../data'` (one level up from pages folder)
2. Check the data structure matches what the component expects
3. Console.log the imported data to see what you're getting

---

## 🔧 **Common Patterns**

### **Pattern 1: Simple Array Mapping**
```javascript
// Before
{[
  { name: 'Item 1', value: 'Value 1' },
  { name: 'Item 2', value: 'Value 2' },
].map(item => <div>{item.name}</div>)}

// After
import { pageData } from '../data';
const { itemsData } = pageData;

{itemsData.map(item => <div>{item.name}</div>)}
```

### **Pattern 2: Single Object**
```javascript
// Before
const hero = {
  title: 'My Title',
  description: 'My Description',
};

// After
import { pageData } from '../data';
const { heroData } = pageData;
// Use heroData.title, heroData.description
```

### **Pattern 3: Nested Data**
```javascript
// Before
const program = {
  title: '4-Week',
  features: ['Feature 1', 'Feature 2'],
};

// After
import { programsData } from '../data';
const { fourWeekData } = programsData;
// Use fourWeekData.hero.title, fourWeekData.included
```

---

## 📚 **Data File Reference**

| Component | Import From | Data Available |
|-----------|-------------|----------------|
| Home.jsx | `homeData` | heroData, statsData, bentoFeaturesData, processStepsData, clientReviewsData, pricingData |
| Services.jsx | `servicesData` | ✅ MIGRATED |
| About.jsx | `aboutData` | heroData, statsData, missionVisionData, journeyData, valuesData, teamData |
| Testimonials.jsx | `testimonialsData` | heroData, statsData, filterCategories, transformationsData, resultsMetricsData |
| Contact.jsx | `contactData` | heroData, contactInfoData, mapData, socialLinksData, formFieldsData |
| Program pages | `programsData` | fourWeekData, eightWeekData, nutritionData |
| Navigation.jsx | `navigationData` | mainNavLinks, serviceLinks, ctaButton |
| Footer.jsx | `footerData` | companyInfo, quickLinks, programLinks, contactInfo, socialLinks |

---

## 🎉 **Benefits You'll See**

After migration:
- ✅ Update content in one place (`src/data/`)
- ✅ No need to search through JSX
- ✅ Easy to add new items
- ✅ Better organized code
- ✅ Ready for CMS integration later

---

## 🚀 **Next Steps**

1. **Test Services page** - Make sure it works after migration
2. **Pick your next page** - Start with the one you update most
3. **Follow the pattern** - Use Services page as a reference
4. **Update data files** - When you need to change content

**Need help?** Just ask! I can migrate any specific page you want next.

