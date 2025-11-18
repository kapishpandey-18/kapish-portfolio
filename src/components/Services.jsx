export default function Services() {
  const items = [
    {
      title: "Senior Full-Stack (React + Node)",
      details: "System design, clean REST contracts, scalable workflows, RBAC.",
      icon: "🧭",
    },
    {
      title: "SDK Engineering",
      details: "Modular auth/events/logging/analytics, multi-env config, partner-friendly docs.",
      icon: "📦",
    },
    {
      title: "Mobile (React + Capacitor)",
      details: "Android/iOS parity, offline/online states, proof uploads, OTP auth.",
      icon: "📱",
    },
    {
      title: "Product Engineering",
      details: "0 → 1 flows, UX writing, edge cases, north-star to incremental delivery.",
      icon: "🎯",
    },
    {
      title: "Testing & Quality",
      details: "Playwright E2E, Postman API suites, regression strategy, staging hardening.",
      icon: "🧪",
    },
    {
      title: "Design Systems (Figma)",
      details: "Wireframes, prototypes, reusable UI kits, developer handoff.",
      icon: "🎨",
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          How I Can Help
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Aligning with my target roles and strengths from the portfolio.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card-overlay rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {it.icon}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-lg text-blue-500">{it.title}</p>
                <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{it.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
