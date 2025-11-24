import Seo from "../components/Seo";
import Contact from "../components/Contact";
import CaseStudyIcon from "../assets/icons/case-study.svg?react";

export default function ExperiencePage() {
  return (
    <>
      <Seo
        title="Professional Experience"
        description="Deep dive into Kapish Pandey's 7+ years leading SDKs, SaaS products, and entrepreneurial zero-to-one builds."
        pathname="/experience"
      />
      <article className="mx-auto max-w-4xl px-4 py-12 min-h-screen space-y-10">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="mt-3 text-neutral-400 text-lg">
            Senior Software Engineer — Full Stack | SDK | Mobile Apps | Product Engineering
          </p>
        </div>

        {/* Current Role */}
        <section className="card-overlay rounded-xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400">
                Senior Software Engineer — Quest Global (Client: Jio Platforms Ltd)
              </h2>
              <p className="text-sm text-neutral-400 mt-1">Mar 2018 – Present · Mumbai / Remote</p>
            </div>
            <div className="mt-3 md:mt-0 text-neutral-400">
              <div className="font-medium text-purple-400">8+ Years</div>
              <div className="text-sm">SDKs · System Design · Testing</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Key Contributions</h3>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Built and maintained JioAds Web & KaiOS SDKs used across partner and internal apps.</li>
              <li>
                Designed modular SDK components: authentication, events, analytics, environment configs,
                and logging.
              </li>
              <li>Led partner onboarding/support, improving integration time by 40%.</li>
              <li>Implemented Playwright E2E automation for SDK flows.</li>
              <li>Created Postman API test suites for partner API validation and stability.</li>
              <li>Worked with product, QA, and platform teams for reliable SDK releases.</li>
              <li>Leveraged GitHub Copilot + ChatGPT for faster prototyping, debugging, and docs.</li>
            </ul>
          </div>
        </section>

        {/* Product Engineering Case Studies */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CaseStudyIcon className="w-6 h-6 text-purple-400" aria-hidden="true" />
            <h2 className="text-2xl font-semibold text-purple-400">Personal Product Engineering Case Studies (POCs)</h2>
          </div>
          <p className="text-neutral-400">
            ⚠️ Non-commercial POCs built for learning, system-design practice, and improving engineering depth.
          </p>

          <div className="space-y-6">
            <div className="card-overlay rounded-xl p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-blue-400">SalonMind — SaaS Product Engineering (POC)</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">POC</span>
              </div>
              <p className="text-neutral-300 font-medium">Tech Stack: React, Node.js, MongoDB, Capacitor, Figma, Playwright, Postman</p>
              <div>
                <p className="text-sm uppercase text-neutral-400 tracking-wide">What this POC demonstrates</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                  <li>Multi-role SaaS architecture (Admin, Employee, Client) with RBAC.</li>
                  <li>Payroll/commission engine, bookings & service logic, reusable Figma UI system.</li>
                  <li>Capacitor mobile app for staff workflows; backend APIs for salary/commission/bookings.</li>
                  <li>Playwright E2E automation (in progress) and Postman API collections.</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase text-neutral-400 tracking-wide">Key engineering learnings</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-4">
                  <li>Designing scalable workflows and clean modular backend architecture.</li>
                  <li>UI/UX consistency using design systems and reusable components.</li>
                  <li>Handling multi-role permission flows and improving API quality through automation.</li>
                </ul>
              </div>
            </div>

            <div className="card-overlay rounded-xl p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-cyan-400">MyCar Platform — Full-Stack + Mobile Engineering POC</h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">POC</span>
              </div>
              <p className="text-neutral-300 font-medium">
                Tech Stack: React, Node.js, MongoDB, Capacitor (Android/iOS), Twilio OTP, Figma, Playwright, Postman
              </p>
              <div>
                <p className="text-sm uppercase text-neutral-400 tracking-wide">What this POC demonstrates</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                  <li>Multi-app ecosystem (User App + Partner/Cleaner App) with Twilio OTP auth.</li>
                  <li>Subscription engine (Mini/Sedan/SUV), cleaner assignment engine, daily logs, proof uploads.</li>
                  <li>Multi-society backend architecture, full Figma UI/UX for all screens & flows.</li>
                  <li>Postman API testing; Playwright automation for mobile scenarios (in progress).</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase text-neutral-400 tracking-wide">Key engineering learnings</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-4">
                  <li>Designing real-world mobile workflows and handling offline/online states.</li>
                  <li>Building scalable subscription models and partner → cleaner → user workflows.</li>
                  <li>Improving backend reliability through testing and automation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skillset */}
        <section className="card-overlay rounded-xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Technical Skillset</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Languages</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Frontend</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>React.js, Tailwind CSS, HTML5, CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">Backend</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>Node.js, Express.js, MongoDB, Mongoose</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Mobile Development</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>Capacitor (Android/iOS), React</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Testing & QA</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>Playwright (E2E), Postman (API Testing), Regression Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Design & UX</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>Figma (Wireframes, Prototypes, UI Systems)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Dev Tools</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>Git, GitHub, VS Code, Android Studio, Xcode</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Core Expertise</h3>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside ml-1">
                <li>SDK Development, System Architecture, Multi-role Workflows, Product Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Summary */}
        <section className="card-overlay rounded-xl p-6 md:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-blue-400">Projects Summary</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>SalonMind (POC) – Full SaaS system + mobile app + Figma + testing.</li>
            <li>MyCar Platform (POC) – Subscription app + cleaner app + backend + testing.</li>
            <li>JioAds SDK – Web + KaiOS SDKs, API testing, E2E automation.</li>
          </ul>
        </section>

        {/* Target Roles */}
        <section className="card-overlay rounded-xl p-6 md:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-purple-400">Target Roles</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Senior Full-Stack Engineer (React + Node)</li>
            <li>Senior Frontend Engineer</li>
            <li>SDK Engineer</li>
            <li>Product Engineer</li>
            <li>Mobile Engineer (React + Capacitor)</li>
          </ul>
        </section>

        {/* Resume / Downloads */}
        <section className="card-overlay rounded-xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Resume</h2>
          <p className="text-neutral-300">Add your PDF/DOCX links once ready.</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/resume.pdf"
              className="px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              Download PDF
            </a>
            <a
              href="/resume.docx"
              className="px-4 py-2 rounded-lg border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-colors"
            >
              Download DOCX
            </a>
          </div>
        </section>
      </article>
      <Contact />
    </>
  );
}
