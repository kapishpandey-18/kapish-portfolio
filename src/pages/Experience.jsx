import Seo from "../components/Seo";

export default function ExperiencePage() {
  return (
    <>
      <Seo
        title="Professional Experience"
        description="Deep dive into Kapish Pandey's 7+ years leading SDKs, SaaS products, and entrepreneurial zero-to-one builds."
        pathname="/experience"
      />
      <article className="mx-auto max-w-4xl px-4 py-12 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="mt-3 text-neutral-400 text-lg">
            7+ years of building scalable SDKs, full-stack applications, and mobile-first products
          </p>
        </div>

        {/* Current Role */}
        <section className="mb-10 card-overlay rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400">Senior Software Engineer</h2>
              <p className="text-lg text-cyan-400 font-medium mt-1">
                Quest Global (Client: Jio Platforms Ltd)
              </p>
            </div>
            <div className="mt-2 md:mt-0 text-neutral-400">
              <div className="font-medium">Mar 2018 — Present</div>
              <div className="text-sm">Mumbai / Remote · 7+ years</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">JioAds SDK Platform</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>
                  <span className="font-medium text-white">
                    Architected and maintained enterprise advertising SDK
                  </span>{" "}
                  for Web & KaiOS platforms, serving millions of users across India with{" "}
                  <span className="text-green-400">&lt;200ms ad render time</span>
                </li>
                <li>
                  Designed modular SDK architecture with authentication, environment configs,
                  logging, event tracking, and comprehensive error handling for production
                  reliability
                </li>
                <li>
                  <span className="font-medium text-white">
                    Improved ad load performance by 80%
                  </span>{" "}
                  — from 1.2s to ~250ms through caching strategies, preloading techniques, and
                  optimized fallback logic
                </li>
                <li>
                  Implemented <span className="text-purple-400">Playwright E2E automation</span>{" "}
                  covering SDK integration scenarios, reducing QA cycles and catching regressions
                  early
                </li>
                <li>
                  Created <span className="text-purple-400">Postman-based API test suites</span> for
                  partner onboarding, lifecycle validation, and automated regression testing
                </li>
                <li>
                  Built debug mode and developer-friendly documentation,{" "}
                  <span className="text-green-400">reducing partner integration time by 40%</span>
                </li>
                <li>
                  Collaborated cross-functionally with backend teams, campaign managers, and QA to
                  deliver features at scale
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-neutral-700">
              <div className="text-center p-3 bg-neutral-900/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">80%</div>
                <div className="text-xs text-neutral-400 mt-1">Faster Load Times</div>
              </div>
              <div className="text-center p-3 bg-neutral-900/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">40%</div>
                <div className="text-xs text-neutral-400 mt-1">Integration Time ↓</div>
              </div>
              <div className="text-center p-3 bg-neutral-900/30 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-neutral-400 mt-1">E2E Coverage</div>
              </div>
              <div className="text-center p-3 bg-neutral-900/30 rounded-lg">
                <div className="text-2xl font-bold text-green-400">7+</div>
                <div className="text-xs text-neutral-400 mt-1">Years at Jio</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Engineering Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Product Engineering & Entrepreneurial Projects
          </h2>

          <div className="space-y-6">
            {/* SalonMind */}
            <div className="card-overlay rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">
                  SalonMind — AI-Powered Salon Management SaaS
                </h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                  Lead Engineer
                </span>
              </div>
              <p className="text-neutral-400 mb-3">
                Complete salon management platform with CRM automation, billing, inventory tracking,
                and analytics
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                <li>
                  Built full-stack application:{" "}
                  <span className="text-cyan-400">React + Tailwind</span> frontend,{" "}
                  <span className="text-green-400">Node.js + MongoDB</span> backend
                </li>
                <li>
                  Developed mobile apps for Android & iOS using{" "}
                  <span className="text-purple-400">Capacitor</span>
                </li>
                <li>
                  Integrated <span className="text-blue-400">Razorpay subscriptions</span> for
                  automated billing and payment recovery
                </li>
                <li>
                  Designed with <span className="text-pink-400">Figma</span> prototypes before
                  development for stakeholder alignment
                </li>
                <li>
                  Automated staff commission calculations, membership discounts, and inventory
                  alerts
                </li>
                <li>
                  Accelerated development using{" "}
                  <span className="text-orange-400">GitHub Copilot</span> and{" "}
                  <span className="text-orange-400">ChatGPT</span> for code generation, debugging,
                  and documentation
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                  Capacitor
                </span>
                <span className="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded">
                  Figma
                </span>
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">
                  Razorpay
                </span>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                  GitHub Copilot
                </span>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                  ChatGPT
                </span>
              </div>
            </div>

            {/* MyCar Platform */}
            <div className="card-overlay rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-cyan-400">
                  MyCar Platform — Car Cleaning Subscription Service
                </h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                  System Architect
                </span>
              </div>
              <p className="text-neutral-400 mb-3">
                Society-based subscription platform with partner dashboard, proof-of-service, and
                automated payments
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                <li>
                  Architected complete system with separate{" "}
                  <span className="text-blue-400">user and partner portals</span>
                </li>
                <li>
                  Implemented daily cleaning tracking with{" "}
                  <span className="text-purple-400">image proof upload</span> and verification
                </li>
                <li>
                  Built mobile-first PWA and native apps using{" "}
                  <span className="text-purple-400">Capacitor</span>
                </li>
                <li>
                  Automated <span className="text-green-400">Razorpay subscription billing</span>{" "}
                  with retry logic and payment recovery
                </li>
                <li>Optimized image uploads for low-bandwidth networks (6 AM–9 AM peak time)</li>
                <li>
                  Leveraged <span className="text-orange-400">GitHub Copilot</span> and{" "}
                  <span className="text-orange-400">ChatGPT</span> for rapid prototyping, API
                  development, and problem-solving
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">
                  Express.js
                </span>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                  Capacitor
                </span>
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">
                  Razorpay
                </span>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                  AWS S3
                </span>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                  GitHub Copilot
                </span>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                  ChatGPT
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="card-overlay rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Core Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend Development</h3>
              <ul className="text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> React.js (Hooks, Context, Performance
                  Optimization)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Tailwind CSS (Responsive, Mobile-First
                  Design)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Figma (UI/UX Design & Prototyping)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Backend Development</h3>
              <ul className="text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span> Node.js + Express.js (RESTful APIs)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span> MongoDB (Schema Design, Aggregation)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span> JWT Authentication & Authorization
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Mobile & Cross-Platform
              </h3>
              <ul className="text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Capacitor (Android & iOS Native Apps)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Progressive Web Apps (PWA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Android Studio & Xcode
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-3">Testing & DevOps</h3>
              <ul className="text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">▸</span> Playwright (E2E Automation)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">▸</span> Postman (API Testing & Documentation)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">▸</span> Git & GitHub (Version Control)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
