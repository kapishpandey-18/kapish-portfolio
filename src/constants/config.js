// Site configuration
export const SITE_CONFIG = {
  name: "Kapish Portfolio",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  url: "https://kapishpandey.com", // Update with your actual domain
  author: "Kapish Pandey",
  email: "contact@kapishpandey.com", // Update with your actual email
  description:
    "Kapish Pandey is a product-focused full stack engineer crafting delightful SaaS, marketplace, and consumer experiences end-to-end.",
  keywords: [
    "Kapish Pandey",
    "full stack engineer",
    "product engineer",
    "React developer",
    "Node.js developer",
    "UI/UX",
    "SaaS",
    "portfolio",
  ],
  defaultImage: "/myworld.jpg",
  twitterHandle: "@kapishpandey",
  social: {
    github: "https://github.com/kapishpandey-18",
    linkedin: "https://linkedin.com/in/kapishpandey",
    twitter: "https://twitter.com/kapishpandey",
  },
};

// Navigation links
export const NAV_LINKS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/kapishpandey-18",
    color: "hover:text-purple-400",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/kapishpandey",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com/kapishpandey",
    color: "hover:text-cyan-400",
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:contact@kapishpandey.com",
    color: "hover:text-green-400",
  },
];

// Form configuration
export const FORM_CONFIG = {
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
  maxMessageLength: 1000,
  minMessageLength: 10,
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
