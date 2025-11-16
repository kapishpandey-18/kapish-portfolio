import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Building scalable solutions and crafting digital experiences
        </p>
      </div>

      <div className="card-overlay rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p className="text-lg">
            Hi! I'm{" "}
            <span className="text-blue-500 font-semibold">{profile.name}</span>,
            a Senior Software Engineer with 7+ years of experience specializing
            in{" "}
            <span className="text-purple-400">
              full-stack development, SDK architecture, and mobile app
              development
            </span>
            . I build scalable, production-ready solutions ranging from
            enterprise advertising SDKs to complete SaaS platforms.
          </p>

          <p>
            Currently at{" "}
            <span className="text-cyan-400 font-semibold">
              Quest Global (Jio Platforms Ltd)
            </span>
            , I architect and maintain the{" "}
            <span className="text-blue-400">JioAds SDK ecosystem</span> for Web
            and KaiOS platforms, serving millions of users across India. I've
            reduced ad load times by{" "}
            <span className="font-semibold text-green-400">80%</span> (from 1.2s
            to ~250ms) and implemented comprehensive E2E testing with{" "}
            <span className="text-purple-400">Playwright</span> and API
            validation with <span className="text-purple-400">Postman</span>.
          </p>

          <p>
            My expertise spans the entire product lifecycle — from{" "}
            <span className="text-blue-400">Figma prototypes</span> to
            pixel-perfect{" "}
            <span className="text-cyan-400">React + Tailwind CSS</span>{" "}
            frontends, robust{" "}
            <span className="text-green-400">Node.js + Express</span> backends,
            and cross-platform mobile apps using{" "}
            <span className="text-purple-400">Capacitor</span> (Android/iOS). I
            excel at creating developer-friendly SDKs with comprehensive
            documentation and debug modes.
          </p>

          <p>
            As a{" "}
            <span className="text-purple-400 font-semibold">
              product engineer
            </span>
            , I've built and launched two complete SaaS platforms:
            <span className="text-blue-400"> SalonMind</span> (AI-powered salon
            management with CRM, billing, inventory, and analytics) and{" "}
            <span className="text-cyan-400"> MyCar Platform</span>{" "}
            (subscription-based car cleaning with partner dashboard and
            proof-of-service tracking). Both include web apps, mobile apps,
            payment automation with Razorpay, and complete backend systems.
          </p>

          <p className="text-lg border-l-4 border-blue-500 pl-4 italic bg-neutral-900/30 py-3 rounded-r-lg">
            "I thrive on solving complex technical challenges and transforming
            ideas into production-ready products. My approach combines modern
            tooling (React, Node, Capacitor), automated testing (Playwright,
            Postman), and design-first thinking (Figma) to deliver exceptional
            user experiences."
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <svg
                className="w-6 h-6 text-blue-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <div className="text-sm text-neutral-400">Location</div>
                <div className="font-medium text-blue-400">
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <svg
                className="w-6 h-6 text-purple-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <div className="text-sm text-neutral-400">Experience</div>
                <div className="font-medium text-purple-400">7+ Years</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <svg
                className="w-6 h-6 text-cyan-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <div>
                <div className="text-sm text-neutral-400">Status</div>
                <div className="font-medium text-cyan-400">
                  Available for Freelance
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <svg
                className="w-6 h-6 text-green-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <div>
                <div className="text-sm text-neutral-400">Specialization</div>
                <div className="font-medium text-green-400">
                  Full-Stack + Mobile + SDKs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
