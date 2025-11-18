# 🚀 Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### ✅ Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - builds successfully
- [ ] All PropTypes added to components
- [ ] No console.log statements in production code
- [ ] Error boundaries implemented

### ✅ Content Review
- [ ] Update `src/data/profile.js` with your real information
- [ ] Add real project screenshots to `/public/assets/`
- [ ] Replace `/public/assets/profile.svg` with your photo
- [ ] Upload actual `/public/resume.pdf`
- [ ] Review all project descriptions in `src/data/projects.js`
- [ ] Update experience in `src/data/experience.js`
- [ ] Fix productVisuals paths if using custom images

### ✅ Environment Variables
- [ ] Create `.env` file locally (copy from `.env.example`)
- [ ] Add `VITE_FORMSPREE_ENDPOINT` with your Formspree URL
- [ ] **Important**: Add same env vars to hosting platform (Vercel/Netlify)
- [ ] Verify `.env` is in `.gitignore` (should be by default)

### ✅ SEO & Meta
- [ ] Update `<title>` in `/index.html`
- [ ] Update meta description in `/index.html`
- [ ] Update Open Graph title/description in `/index.html`
- [ ] Update Twitter Card meta tags in `/index.html`
- [ ] Create and add OG image (1200x630px) to `/public/og-image.png`
- [ ] Update `og:image` meta tag to reference your OG image
- [ ] Verify `/public/robots.txt` has correct settings
- [ ] Update `/public/favicon.svg` if needed

### ✅ Links & Forms
- [ ] Test all navigation links (Projects, Services, Case Studies, etc.)
- [ ] Test contact form submission (use real Formspree endpoint)
- [ ] Verify GitHub/LinkedIn/Email links in profile.js
- [ ] Check all external project links (repo, live demo)
- [ ] Ensure all links open in new tab (`target="_blank"`)

### ✅ Responsive Design
- [ ] Test on mobile (375px width minimum)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1920px)
- [ ] Mobile hamburger menu works correctly
- [ ] All images load and are properly sized
- [ ] Text is readable on all screen sizes

### ✅ Performance
- [ ] Images are optimized (compress if over 500KB)
- [ ] Lazy loading enabled on images
- [ ] No unnecessary console logs
- [ ] Build size is reasonable (check `dist/` folder)
- [ ] Test load time on slow 3G

## Deployment Steps

### Vercel
1. [ ] Push code to GitHub repository
2. [ ] Go to [vercel.com](https://vercel.com) → New Project
3. [ ] Import your GitHub repository
4. [ ] Framework: Vite (auto-detected)
5. [ ] Build command: `vite build`
6. [ ] Output directory: `dist`
7. [ ] Add environment variable: `VITE_FORMSPREE_ENDPOINT`
8. [ ] Click Deploy
9. [ ] Wait for deployment to complete
10. [ ] Visit deployed URL and test thoroughly

### Netlify
1. [ ] Run `npm run build` locally
2. [ ] Drag-drop `dist/` folder to [netlify.com](https://netlify.com)
3. [ ] OR connect GitHub repo:
   - Build command: `vite build`
   - Publish directory: `dist`
4. [ ] Add environment variable: `VITE_FORMSPREE_ENDPOINT` in Site settings
5. [ ] Deploy site
6. [ ] Test deployed site

## Post-Deployment Testing

### ✅ Functionality
- [ ] Visit homepage - loads correctly
- [ ] Click all navigation links - routes work
- [ ] Test mobile menu - opens and closes
- [ ] Scroll to sections via hash links (#projects, #contact)
- [ ] Submit contact form - receives email
- [ ] Download resume - file downloads correctly
- [ ] Click project links - external sites open
- [ ] Test 404 page - visit /nonexistent-page

### ✅ Visual
- [ ] Favicon displays in browser tab
- [ ] Gradient backgrounds render correctly
- [ ] Glass-morphism effects visible on cards
- [ ] All colors match design (blue/purple theme)
- [ ] Profile image displays
- [ ] No broken images (check browser console)

### ✅ SEO
- [ ] Open Graph preview works (test on Facebook/LinkedIn share)
- [ ] Twitter Card preview works
- [ ] Page title shows in browser tab
- [ ] Meta description appears in Google search preview
- [ ] Favicon shows in search results

### ✅ Performance
- [ ] Lighthouse score (aim for 90+ on all metrics):
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100
- [ ] No console errors in browser DevTools
- [ ] No console warnings (except expected Tailwind CSS warnings)
- [ ] Page load time under 3 seconds

### ✅ Accessibility
- [ ] Keyboard navigation works (Tab key)
- [ ] Screen reader compatible (test with VoiceOver/NVDA)
- [ ] All images have alt text
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA standards

## Optional Enhancements

- [ ] Set up custom domain
- [ ] Add Google Analytics
- [ ] Set up SSL certificate (usually auto on Vercel/Netlify)
- [ ] Create sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring (UptimeRobot, etc.)
- [ ] Add cookie consent banner if needed (GDPR)

## Troubleshooting

### Build Fails
- Check node version (16+ required)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist .vite`

### Form Not Working
- Verify Formspree endpoint in `.env`
- Check env var is set on hosting platform
- Test endpoint directly on Formspree dashboard

### Images Not Loading
- Check file paths are correct (case-sensitive)
- Ensure images are in `/public/assets/`
- Check browser console for 404 errors

### Styles Not Applying
- Verify Tailwind is configured correctly
- Check `tailwind.config.js` for custom colors
- Clear browser cache

---

**🎉 Congratulations! Your portfolio is live!**

Remember to:
- Share on LinkedIn/Twitter
- Add to resume
- Update regularly with new projects
- Monitor analytics
