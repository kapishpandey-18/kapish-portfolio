# Kapish — Portfolio (React + Tailwind + Vite)

A modern, production-ready portfolio built with **React 18**, **Tailwind CSS**, and **Vite**. Features glass-morphism design, responsive navigation, form validation, and industry best practices.

## ✨ Features
- ⚡ **React 18.2** + **Vite 5.4** for blazing-fast development
- 🎨 **Tailwind CSS 3.4** with custom blue/purple gradient theme
- 📱 **Fully Responsive** with mobile hamburger menu
- 🔍 **SEO Optimized** with meta tags, robots.txt, and Open Graph
- ✅ **PropTypes** for runtime type checking
- 🛡️ **Error Boundary** for graceful error handling
- 📝 **Form Validation** with Formspree integration
- 🎯 **ESLint** configured for code quality
- ♿ **Accessible** with ARIA labels and semantic HTML
- 🚀 **Production Ready** with optimized builds

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Installation
```bash
# Clone repository
git clone <your-repo-url>
cd kapish-portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your Formspree endpoint

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## � Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run lint:fix # Auto-fix ESLint issues
```

## 🧩 Customize Content

### Personal Information
Edit `/src/data/profile.js`:
- Name, title, bio, location
- Email, GitHub, LinkedIn links
- Skills and technologies

### Projects
Edit `/src/data/projects.js`:
- Add your projects with title, description, tech stack
- Include repo and live demo links
- Add project screenshots to `/public/assets/`

### Work Experience
Edit `/src/data/experience.js`:
- Company, role, duration
- Responsibilities and achievements

### Product Visuals
Edit `/src/data/productVisuals.js`:
- Add product screenshots
- Proper alt text for accessibility
- Aspect ratios for optimal layout

### Replace Placeholders
- `/public/assets/profile.svg` - Your profile picture
- `/public/assets/*-cover.svg` - Project screenshots
- `/public/resume.pdf` - Your resume file

## ☁️ Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Framework preset: **Vite** (auto-detected)
4. Build command: `vite build`
5. Output directory: `dist`
6. Add environment variable: `VITE_FORMSPREE_ENDPOINT`
7. Deploy! 🚀

### Netlify
1. Build locally: `npm run build`
2. Drag-drop `/dist` folder to [netlify.com](https://netlify.com)
   
OR connect repository:
- Build command: `vite build`
- Publish directory: `dist`
- Environment: Add `VITE_FORMSPREE_ENDPOINT`

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. In `vite.config.js`, set `base: '/repo-name/'`
4. Run: `npm run deploy`

## 📬 Contact Form Setup

This portfolio uses **Formspree** for contact form handling:

1. Create free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Add to `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```
4. Add same variable to your hosting platform's environment settings

**Alternative Services:**
- EmailJS
- Web3Forms
- Vercel Serverless Functions

## 🎨 Design System

### Colors
- **Primary (Blue)**: `#3b82f6` - Main CTAs and headings
- **Secondary (Purple)**: `#8b5cf6` - Accents and gradients
- **Accent (Cyan)**: `#06b6d4` - Links and highlights
- **Dark**: `#0f172a` - Background base
- **Light**: `#1e293b` - Card backgrounds

### Typography
- **Font**: System fonts (no external dependencies)
- **Headings**: Bold, gradient text effects
- **Body**: Neutral tones for readability

## � Project Structure

```
kapish-portfolio/
├── public/
│   ├── assets/          # Images and static files
│   ├── favicon.svg      # Site favicon
│   ├── robots.txt       # SEO crawler config
│   └── resume.pdf       # Downloadable resume
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Contact.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── ...
│   ├── pages/           # Route pages
│   │   ├── case-studies/
│   │   └── ...
│   ├── data/            # Content data files
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── ...
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind customization
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🔧 Tech Stack

- **React 18.2.0** - UI library
- **React Router DOM 6.28.0** - Client-side routing
- **Tailwind CSS 3.4.13** - Utility-first CSS
- **Vite 5.4.8** - Build tool and dev server
- **PropTypes** - Runtime type checking
- **ESLint 9** - Code linting
- **Formspree** - Form backend

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## �‍♂️ Support

For issues or questions, open an issue on GitHub or contact via the portfolio contact form.

---

Built with ❤️ by Kapish | [GitHub](https://github.com/kapish) | [LinkedIn](https://linkedin.com/in/kapish)

- Adjust in `tailwind.config.js`

## 🧱 Tech Stack
- React 18, Vite 5, Tailwind 3
- No backend required. If you need a Node API, deploy a separate repo/server or Vercel serverless functions.

---

### TODO Ideas
- Add blog (MDX)
- Add a case studies page
- Replace images with real screenshots


## 🧭 New Pages
- `/case-studies` — index of case studies
- `/case-studies/bbs` — BBS detailed case study
- `/case-studies/cleanmycar` — CleanMyCar detailed case study
- `/experience` — JioAds + projects experience


## 🖼 Products Visuals
Route: `/products-visuals` — Shows categories with screenshots.
- Add/replace images under `public/assets/products/<category>/`
- Update category data in `src/data/productVisuals.js`

### Mobile vs Web Grouping
Products Visuals now groups images into `mobile` and `web` tabs.
- Put files under `public/assets/products/<slug>/mobile/` or `web/`.
- Edit `src/data/productVisuals.js` to control lists.
