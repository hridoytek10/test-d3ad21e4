# TekNext Upload Instructions

This doctor profile landing page is fully compatible with TekNext. Follow these steps to upload and use as a template.

## 📋 Pre-Upload Checklist

Before uploading to TekNext, verify these files exist in the project root:

- ✅ `app/page.tsx` - Main page component
- ✅ `data/site.json` - All site content
- ✅ `template.json` - Template metadata
- ✅ `public/preview.png` - Template preview image (1200x800)
- ✅ `public/profile.jpg` - Doctor profile photo
- ✅ `package.json` - Dependencies
- ✅ `README.md` - Documentation

## 📦 Project Structure for TekNext

TekNext expects this exact structure at the ZIP root:

```
doctor-profile-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── doctor/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── education.tsx
│   │   ├── reviews.tsx
│   │   ├── clinic.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── [other UI components]
├── data/
│   └── site.json
├── public/
│   ├── preview.png
│   ├── profile.jpg
│   └── favicon.ico
├── template.json
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

## 🎯 Key TekNext Requirements

1. **Single Page Layout**: All content on one page (✅ Verified)
2. **Data-Driven Content**: All text from `data/site.json` (✅ Verified)
3. **Preview Image**: 1200x800 PNG at `/public/preview.png` (✅ Verified)
4. **Profile Image**: Doctor photo at `/public/profile.jpg` (✅ Verified)
5. **No Build Artifacts**: `.next/`, `node_modules/` excluded (✅ Ready)
6. **Template Metadata**: `template.json` with required fields (✅ Created)

## 📝 Customization Before Upload

Update these files with your doctor's information:

### 1. `data/site.json`
- Doctor name and bio
- Services and specialties
- Education and credentials
- Contact information
- Clinic hours and location
- FAQ questions

### 2. Replace Images
- `/public/profile.jpg` - Doctor's professional photo
- `/public/preview.png` - Template preview screenshot

### 3. `template.json`
- Update `id` and `name` if needed
- Review `requiredFields` list
- Customize `keywords`

## 🚀 Build & Test

Before uploading, ensure everything builds correctly:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Start production server (optional)
pnpm start
```

If build succeeds with no errors, you're ready for TekNext!

## 📤 Upload to TekNext

1. Create a ZIP file of the entire project root
2. Exclude: `.next/`, `node_modules/`, `.git/`
3. Ensure ZIP root contains: `app/`, `data/`, `components/`, `public/`, `template.json`, `package.json`
4. Upload ZIP to TekNext
5. Fill in template details in TekNext dashboard

## ✨ Template Features Highlight

When uploading, mention these features:

- ✨ Cute animated buttons (bounce, pulse, glow)
- 📱 Fully responsive design
- 🎨 Modern healthcare color scheme (teal/blue)
- 📝 Patient testimonials & reviews
- 📅 Appointment booking section
- 🏥 Clinic information & hours
- ❓ Interactive FAQ accordion
- 🎓 Education timeline
- 💌 Contact form with validation
- ⚡ Smooth scroll animations

## 🔧 Troubleshooting

**Build fails?**
- Check `package.json` for missing dependencies
- Verify `data/site.json` is valid JSON
- Ensure all imports in components are correct

**Images not showing?**
- Verify images exist in `/public/`
- Check file names match in `data/site.json`
- Images should be optimized for web

**Content not updating?**
- Restart dev server after editing `data/site.json`
- Clear browser cache
- Check for TypeScript errors

## 📚 Additional Resources

- Next.js 16 Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Component Guide: See individual files in `/components/doctor/`

---

Ready to upload! Good luck with your TekNext template! 🎉
