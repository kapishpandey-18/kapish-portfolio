# Kapish Pandey — Portfolio# Kapish — Portfolio (React + Tailwind + Vite)

A modern, production-ready portfolio built with **React 18**, **Tailwind CSS**, and **Vite**. Features glass-morphism design, responsive navigation, performance optimizations, and industry best practices.A modern, production-ready portfolio built with **React 18**, **Tailwind CSS**, and **Vite**. Features glass-morphism design, responsive navigation, form validation, and industry best practices.

## ✨ Features## ✨ Features

- ⚡ **React 18.2** + **Vite 5.4** for blazing-fast development

### Core Technologies- 🎨 **Tailwind CSS 3.4** with custom blue/purple gradient theme

- ⚡ **React 18.2** + **Vite 5.4** for blazing-fast development- 📱 **Fully Responsive** with mobile hamburger menu

- 🎨 **Tailwind CSS 3.4** with custom blue/purple gradient theme- 🔍 **SEO Optimized** with meta tags, robots.txt, and Open Graph

- 🚀 **React Router DOM 6.28** for client-side routing- ✅ **PropTypes** for runtime type checking

- 🛡️ **Error Boundary** for graceful error handling

### Code Quality & Developer Experience- 📝 **Form Validation** with Formspree integration

- ✅ **PropTypes** for runtime type checking- 🎯 **ESLint** configured for code quality

- 🎯 **ESLint + Prettier** configured for consistent code style- ♿ **Accessible** with ARIA labels and semantic HTML

- 📦 **Organized folder structure** (utils, hooks, constants, context)- 🚀 **Production Ready** with optimized builds

- 🔄 **Custom React hooks** for reusable logic

- 🛡️ **Error Boundary** for graceful error handling## 🚀 Quick Start

### Performance### Prerequisites

- 💨 **Lazy loading** for route-based code splitting- Node.js 16+ and npm/yarn/pnpm

- 📉 **React.memo** optimization for components

- 🎭 **Suspense** with loading states### Installation

```bash

### UI/UX# Clone repository

- 📱 **Fully Responsive** with mobile hamburger menugit clone <your-repo-url>

- 🎨 **Glass-morphism design** with gradient accentscd kapish-portfolio

- 🔍 **SEO Optimized** with meta tags, robots.txt

- ♿ **Accessible** with ARIA labels and semantic HTML# Install dependencies

- 📝 **Form Validation** with Formspree integrationnpm install



### DevOps# Create environment file

- 🔁 **GitHub Actions CI/CD** for automated testing and deploymentcp .env.example .env

- 🚀 **Auto-deploy** to GitHub Pages on main branch# Edit .env and add your Formspree endpoint

- 📊 **Automated linting** and formatting checks

# Start development server

## 📁 Project Structurenpm run dev

```

````

kapish-portfolio/The app will open at `http://localhost:5173`

├── .github/

│   └── workflows/## � Available Scripts

│       └── ci.yml              # CI/CD pipeline

├── public/```bash

│   ├── assets/                 # Static images and SVGsnpm run dev      # Start development server

│   ├── resume.pdf              # Downloadable resumenpm run build    # Build for production

│   └── robots.txt              # SEO configurationnpm run preview  # Preview production build locally

├── src/npm run lint     # Run ESLint

│   ├── components/             # Reusable UI componentsnpm run lint:fix # Auto-fix ESLint issues

│   │   ├── About.jsx```

│   │   ├── CaseStudyLayout.jsx

│   │   ├── Contact.jsx## 🧩 Customize Content

│   │   ├── ErrorBoundary.jsx

│   │   ├── Footer.jsx### Personal Information

│   │   ├── Hero.jsxEdit `/src/data/profile.js`:

│   │   ├── Navbar.jsx- Name, title, bio, location

│   │   ├── ProjectCard.jsx- Email, GitHub, LinkedIn links

│   │   └── ...- Skills and technologies

│   ├── pages/                  # Route pages (lazy loaded)

│   │   ├── case-studies/### Projects

│   │   ├── Experience.jsxEdit `/src/data/projects.js`:

│   │   └── NotFound.jsx- Add your projects with title, description, tech stack

│   ├── data/                   # Static data (profile, projects, etc.)- Include repo and live demo links

│   │   ├── profile.js- Add project screenshots to `/public/assets/`

│   │   ├── projects.js

│   │   └── experience.js### Work Experience

│   ├── constants/              # App constants and configEdit `/src/data/experience.js`:

│   │   ├── config.js- Company, role, duration

│   │   ├── theme.js- Responsibilities and achievements

│   │   └── index.js

│   ├── hooks/                  # Custom React hooks### Product Visuals

│   │   ├── useForm.jsEdit `/src/data/productVisuals.js`:

│   │   ├── useMediaQuery.js- Add product screenshots

│   │   ├── useScrollPosition.js- Proper alt text for accessibility

│   │   └── index.js- Aspect ratios for optimal layout

│   ├── utils/                  # Helper functions

│   │   ├── helpers.js### Replace Placeholders

│   │   ├── validation.js- `/public/assets/profile.svg` - Your profile picture

│   │   └── index.js- `/public/assets/*-cover.svg` - Project screenshots

│   ├── context/                # React Context (if needed)- `/public/resume.pdf` - Your resume file

│   ├── App.jsx                 # Main app component

│   ├── main.jsx                # App entry point## ☁️ Deployment

│   └── index.css               # Global styles

├── .env.example                # Environment variables template### Vercel (Recommended)

├── .eslintrc.js                # ESLint configuration1. Push code to GitHub

├── .prettierrc                 # Prettier configuration2. Import project at [vercel.com](https://vercel.com)

├── .gitignore3. Framework preset: **Vite** (auto-detected)

├── package.json4. Build command: `vite build`

├── tailwind.config.js5. Output directory: `dist`

├── vite.config.js6. Add environment variable: `VITE_FORMSPREE_ENDPOINT`

└── README.md7. Deploy! 🚀

````

### Netlify

## 🚀 Quick Start1. Build locally: `npm run build`

2. Drag-drop `/dist` folder to [netlify.com](https://netlify.com)

### Prerequisites

- **Node.js 16+** and npm/yarn/pnpmOR connect repository:

- Build command: `vite build`

### Installation- Publish directory: `dist`

- Environment: Add `VITE_FORMSPREE_ENDPOINT`

````bash

# Clone repository### GitHub Pages

git clone https://github.com/kapishpandey-18/portfolio.git1. Install: `npm install --save-dev gh-pages`

cd portfolio2. Add to `package.json` scripts:

   ```json

# Install dependencies   "deploy": "vite build && gh-pages -d dist"

npm install   ```

3. In `vite.config.js`, set `base: '/repo-name/'`

# Create environment file4. Run: `npm run deploy`

cp .env.example .env

# Edit .env and add your Formspree endpoint (optional)## 📬 Contact Form Setup



# Start development serverThis portfolio uses **Formspree** for contact form handling:

npm run dev

```1. Create free account at [formspree.io](https://formspree.io)

2. Create a new form and copy the endpoint URL

The app will open at `http://localhost:5173`3. Add to `.env`:

````

## 📜 Available Scripts VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id

````

```bash4. Add same variable to your hosting platform's environment settings

npm run dev          # Start development server with HMR

npm run build        # Build for production (outputs to /dist)**Alternative Services:**

npm run preview      # Preview production build locally- EmailJS

npm run lint         # Run ESLint checks- Web3Forms

npm run lint:fix     # Auto-fix ESLint issues- Vercel Serverless Functions

npm run format       # Format code with Prettier

npm run format:check # Check code formatting## 🎨 Design System

````

### Colors

## 🛠️ Configuration- **Primary (Blue)**: `#3b82f6` - Main CTAs and headings

- **Secondary (Purple)**: `#8b5cf6` - Accents and gradients

### Environment Variables- **Accent (Cyan)**: `#06b6d4` - Links and highlights

- **Dark**: `#0f172a` - Background base

Create a `.env` file in the root directory:- **Light**: `#1e293b` - Card backgrounds

`````env### Typography

VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here- **Font**: System fonts (no external dependencies)

```- **Headings**: Bold, gradient text effects

- **Body**: Neutral tones for readability

### Vite Configuration

## � Project Structure

Key configurations in `vite.config.js`:

- Auto-opens browser on `npm run dev````

- Default port: 5173kapish-portfolio/

├── public/

### Tailwind Configuration│   ├── assets/          # Images and static files

│   ├── favicon.svg      # Site favicon

Custom theme in `tailwind.config.js`:│   ├── robots.txt       # SEO crawler config

- Custom color palette (blue, purple, cyan gradients)│   └── resume.pdf       # Downloadable resume

- Extended spacing and animations├── src/

- Dark mode support│   ├── components/      # React components

│   │   ├── Hero.jsx

## 🎨 Customization│   │   ├── Navbar.jsx

│   │   ├── Contact.jsx

### Update Personal Information│   │   ├── ErrorBoundary.jsx

│   │   └── ...

1. **Profile Data**: Edit `src/data/profile.js`│   ├── pages/           # Route pages

2. **Projects**: Edit `src/data/projects.js`│   │   ├── case-studies/

3. **Experience**: Edit `src/data/experience.js`│   │   └── ...

4. **Resume**: Replace `public/resume.pdf` with your resume│   ├── data/            # Content data files

│   │   ├── profile.js

### Update Colors & Theme│   │   ├── projects.js

│   │   └── ...

Edit `src/constants/theme.js` and `tailwind.config.js` for color schemes.│   ├── App.jsx          # Main app component

│   ├── main.jsx         # Entry point

### Add New Pages│   └── index.css        # Global styles

├── .env.example         # Environment variables template

1. Create component in `src/pages/`├── eslint.config.js     # ESLint configuration

2. Add route in `src/App.jsx`├── tailwind.config.js   # Tailwind customization

3. Add navigation link in `src/constants/config.js`├── vite.config.js       # Vite configuration

└── package.json         # Dependencies and scripts

## 🚀 Deployment```



### GitHub Pages (Automatic)## 🔧 Tech Stack



The project includes GitHub Actions workflow that automatically:- **React 18.2.0** - UI library

1. Runs linting and formatting checks- **React Router DOM 6.28.0** - Client-side routing

2. Builds the project- **Tailwind CSS 3.4.13** - Utility-first CSS

3. Deploys to GitHub Pages on push to `main` branch- **Vite 5.4.8** - Build tool and dev server

- **PropTypes** - Runtime type checking

**Setup Steps:**- **ESLint 9** - Code linting

1. Enable GitHub Pages in repository settings- **Formspree** - Form backend

2. Set source to "GitHub Actions"

3. Push to `main` branch - deployment happens automatically!## 📝 License



### Manual BuildMIT License - feel free to use this template for your own portfolio!



```bash## �‍♂️ Support

npm run build

# Output will be in /dist directoryFor issues or questions, open an issue on GitHub or contact via the portfolio contact form.

# Upload /dist to your hosting service

```---



### Other PlatformsBuilt with ❤️ by Kapish | [GitHub](https://github.com/kapish) | [LinkedIn](https://linkedin.com/in/kapish)



- **Vercel**: Connect repository, auto-detects Vite config- Adjust in `tailwind.config.js`

- **Netlify**: Connect repository, build command: `npm run build`, publish dir: `dist`

- **CloudFlare Pages**: Same as Netlify## 🧱 Tech Stack

- React 18, Vite 5, Tailwind 3

## 🧪 Code Quality- No backend required. If you need a Node API, deploy a separate repo/server or Vercel serverless functions.



### ESLint Rules---



- React Hooks rules enforced### TODO Ideas

- PropTypes validation warnings- Add blog (MDX)

- Console statements warnings (allows warn/error)- Add a case studies page

- Unused variables warnings- Replace images with real screenshots



### Prettier Configuration

## 🧭 New Pages

- Single quotes: `false`- `/case-studies` — index of case studies

- Semicolons: `true`- `/case-studies/bbs` — BBS detailed case study

- Tab width: `2`- `/case-studies/cleanmycar` — CleanMyCar detailed case study

- Print width: `100`- `/experience` — JioAds + projects experience

- Trailing commas: `es5`



## 📦 Custom Hooks## 🖼 Products Visuals

Route: `/products-visuals` — Shows categories with screenshots.

### `useScrollPosition(threshold)`- Add/replace images under `public/assets/products/<category>/`

Detects when user scrolls past a threshold.- Update category data in `src/data/productVisuals.js`



### `useMediaQuery()`### Mobile vs Web Grouping

Provides responsive breakpoint checks (isMobile, isTablet, isDesktop).Products Visuals now groups images into `mobile` and `web` tabs.

- Put files under `public/assets/products/<slug>/mobile/` or `web/`.

### `useForm(initialValues, onSubmit)`- Edit `src/data/productVisuals.js` to control lists.

Handles form state, validation, and submission with built-in error handling.

## 🔧 Utilities

### Helpers (`src/utils/helpers.js`)
- `formatDate()` - Date formatting
- `truncateText()` - Text truncation
- `slugify()` - String to URL slug
- `debounce()` - Function debouncing
- `isInViewport()` - Viewport detection

### Validation (`src/utils/validation.js`)
- `isValidEmail()` - Email validation
- `validateContactForm()` - Form validation
- `sanitizeInput()` - XSS prevention

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kapish Pandey**

- GitHub: [@kapishpandey-18](https://github.com/kapishpandey-18)
- LinkedIn: [Kapish Pandey](https://linkedin.com/in/kapishpandey)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from Google Fonts
- Form handling by [Formspree](https://formspree.io/)

---

⭐ Star this repo if you find it helpful!
`````
