# Plan PDFs Directory

This folder stores the nutrition and transformation plan PDFs that will be emailed to customers after successful payment.

## Required PDF Files

You need to create and upload **7 PDF files** with these exact names:

### Nutrition Plans
1. **`veg-plan.pdf`** - Vegetarian Nutrition Plan
2. **`non-veg-plan.pdf`** - Non-Vegetarian Nutrition Plan
3. **`keto-plan.pdf`** - Keto Nutrition Plan

### Transformation Programs
4. **`8-week-plan.pdf`** - 8-Week Transformation Program
5. **`12-week-plan.pdf`** - 12-Week Transformation Program
6. **`24-week-plan.pdf`** - 24-Week Transformation Program
7. **`annual-plan.pdf`** - Annual Transformation Program

---

## PDF Content Guidelines

Each PDF should include:

### For Nutrition Plans:
- ✅ Welcome message
- ✅ 7-day meal plan with recipes
- ✅ Shopping list (categorized by food group)
- ✅ Macro breakdown (protein, carbs, fats)
- ✅ Portion sizes guide
- ✅ Meal timing recommendations
- ✅ Substitutions list (for dietary restrictions)
- ✅ Hydration guidelines
- ✅ Supplement recommendations (optional)
- ✅ Progress tracking sheet
- ✅ FAQ section
- ✅ Contact information (WhatsApp, email, phone)

### For Transformation Programs:
- ✅ Welcome message
- ✅ Program overview (phases, duration)
- ✅ Workout schedule (with exercises, sets, reps)
- ✅ Nutrition guidelines
- ✅ Weekly meal plans
- ✅ Progress tracking sheets
- ✅ Body measurements guide
- ✅ Recovery and rest days protocol
- ✅ Injury prevention tips
- ✅ Before/after photo guide
- ✅ Check-in schedule
- ✅ FAQ section
- ✅ Contact information

---

## File Naming Rules

⚠️ **IMPORTANT**: File names must be EXACTLY as listed above (lowercase, with hyphens).

**Correct ✅:**
- `veg-plan.pdf`
- `12-week-plan.pdf`

**Wrong ❌:**
- `Veg Plan.pdf` (spaces, capital letters)
- `VEG-PLAN.PDF` (all caps)
- `veg_plan.pdf` (underscore instead of hyphen)
- `vegetarian-plan.pdf` (different name)

---

## File Size Recommendations

- **Ideal**: 2-5 MB per PDF
- **Maximum**: 10 MB per PDF (email attachment limit)
- **Tip**: Optimize images before adding to PDF

### How to Reduce PDF Size:
1. Use online tools like [SmallPDF](https://smallpdf.com/compress-pdf)
2. Reduce image quality to 150 DPI (sufficient for screen reading)
3. Remove unnecessary pages

---

## Creating Professional PDFs

### Recommended Tools:
1. **Canva** (easiest, templates available)
   - Free templates for meal plans, workout programs
   - Export as PDF (high quality)
   - Link: https://canva.com

2. **Google Docs** (simple, free)
   - Create in Google Docs
   - File → Download → PDF

3. **Microsoft Word**
   - File → Export → Create PDF

4. **Adobe InDesign** (professional, paid)
   - Best for advanced layouts

### Design Tips:
- Use your brand colors (primary: green, secondary: orange)
- Add your logo on every page (header or footer)
- Use clear headings and subheadings
- Include high-quality food/workout images
- Make it print-friendly (white backgrounds)
- Add page numbers
- Use readable fonts (minimum 10pt)

---

## Uploading PDFs

### Method 1: Direct Upload (Local)
1. Create your PDF files
2. Rename them to match the exact names above
3. Copy them to this folder: `/Users/varunurs/Skills/fitness-website/public/plans/`

### Method 2: Via Git
1. Create your PDF files
2. Place them in this folder
3. Run:
   ```bash
   git add public/plans/*.pdf
   git commit -m "Add nutrition plan PDFs"
   git push
   ```
4. Vercel will auto-deploy (2-3 minutes)

---

## Testing

After uploading PDFs, test the email delivery:

1. Go to your website payment page
2. Complete a test payment using Razorpay test card: `4111 1111 1111 1111`
3. Check your email - you should receive the PDF attachment
4. Open the PDF and verify:
   - ✅ All pages load correctly
   - ✅ Images are visible
   - ✅ Text is readable
   - ✅ Links work (if any)
   - ✅ File size is reasonable

---

## Placeholder PDFs (For Testing)

If you don't have PDFs ready yet, you can create simple placeholder PDFs for testing:

### Quick Placeholder Content:
```
URS KINGS NUTRITION

[Plan Name] - COMING SOON

Thank you for your purchase!

Your personalized [Plan Name] will be delivered shortly.

In the meantime, please join our WhatsApp group for support:
+91 7090000877

Questions? Email us: diet@urs-kingsnutrition.com

- URS Kings Nutrition Team
```

Save this as a PDF with the appropriate filename to test the email delivery system.

---

## Current Status

- [ ] veg-plan.pdf
- [ ] non-veg-plan.pdf
- [ ] keto-plan.pdf
- [ ] 8-week-plan.pdf
- [ ] 12-week-plan.pdf
- [ ] 24-week-plan.pdf
- [ ] annual-plan.pdf

**Last Updated**: [Date]

---

## Need Help?

If you need help creating professional PDFs:
1. Message on WhatsApp: +91 7090000877
2. Email: info@urs-kingsnutrition.com

Or consider hiring a designer on:
- Fiverr (₹500-2000 per PDF)
- Upwork (₹1000-5000 per PDF)
- 99designs (professional templates)

