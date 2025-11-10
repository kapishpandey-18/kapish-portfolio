export default function CSBBS() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Beyond Beauty Studio (BBS) — Salon SaaS</h1>
      <p className="mt-2 text-neutral-400">Building a scalable salon platform with Admin, Employee, and User portals.</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-2 text-neutral-300">BBS is a real salon brand in Gurgaon. The goal is to build a SaaS that any salon can use: services, pricing, member passes, worker incentives, billing, and P&L tracking.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Scope</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Portals: Admin, Employee, User (Capacitor mobile apps for U/E)</li>
          <li>Features: Services & pricing, billing & receipts, member passes, incentive-based salaries, profit & loss</li>
          <li>Future: WhatsApp integration, booking calendar, client-facing app</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Architecture</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Frontend: React + Tailwind, component library, design system</li>
          <li>Backend: Node.js + MongoDB, OTP-based login, role-based auth</li>
          <li>Deployment: Vercel (web), Capacitor (mobile), CI on GitHub</li>
          <li>Docs: PRD, API contracts, DB schemas, diagrams</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Key Decisions</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Documentation-first approach for Sprint 1</li>
          <li>Luxurious black-and-gold theme for brand consistency</li>
          <li>Scalable roadmap for WhatsApp, booking, and analytics</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-2 text-neutral-300">Clear product scope and design system ready. Backend prototypes built; moving toward a stable, production-ready release.</p>
      </section>
    </article>
  )
}
