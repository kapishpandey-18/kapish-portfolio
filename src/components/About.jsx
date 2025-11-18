import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          0 → 1 product builds, SDKs, and mobile apps.
        </p>
      </div>

      <div className="card-overlay rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p className="text-lg">
            Hi! I'm <span className="text-blue-500 font-semibold">{profile.name}</span>, a Senior
            Software Engineer with 8+ years building scalable SDKs, full-stack apps, mobile apps
            (Android/iOS via Capacitor), and end-to-end product architectures.
          </p>

          <p>
            I take ideas from <span className="text-cyan-400">0 → 1</span>: system design, UI/UX,
            backend workflows, mobile apps, and automation. Strengths: clean architecture, system
            design, multi-role workflows, UI/UX with{" "}
            <span className="text-purple-400">Figma</span>, and testing via{" "}
            <span className="text-purple-400">Playwright</span> +{" "}
            <span className="text-purple-400">Postman</span>.
          </p>

          <p className="border-l-4 border-blue-500 pl-4 bg-neutral-900/30 py-3 rounded-r-lg italic">
            Current role: <span className="text-cyan-400 font-semibold">Quest Global</span> (Client:
            Jio Platforms Ltd) — Senior Software Engineer for JioAds Web & KaiOS SDKs, designing
            modular auth/config/logging/events and partner integration support.
          </p>

          <p>
            I ship hands-on personal POCs to deepen product engineering:
            <span className="text-blue-400"> SalonMind</span> (SaaS salon management) and{" "}
            <span className="text-cyan-400"> MyCar Platform</span> (subscription car cleaning).
            These explore RBAC, payroll/commission, cleaner assignment engines, proof-of-service
            uploads, Figma design systems, and automation with Playwright/Postman.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-sm text-neutral-400">Location</div>
                <div className="font-medium text-blue-400">{profile.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <span className="text-2xl">⏱️</span>
              <div>
                <div className="text-sm text-neutral-400">Experience</div>
                <div className="font-medium text-purple-400">8+ Years</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <span className="text-2xl">🧰</span>
              <div>
                <div className="text-sm text-neutral-400">Core Expertise</div>
                <div className="font-medium text-green-400">
                  SDKs · System Architecture · Product Engineering
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-neutral-900/30 rounded-lg border border-neutral-700/30">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="text-sm text-neutral-400">Status</div>
                <div className="font-medium text-cyan-400">Open to opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
