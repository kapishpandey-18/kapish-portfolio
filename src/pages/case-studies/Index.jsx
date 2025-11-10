import { Link } from 'react-router-dom'

export default function CaseStudiesIndex() {
  const cards = [
    { title: "Beyond Beauty Studio (BBS) — Salon SaaS", to: "/case-studies/bbs", blurb: "Admin, Employee & User portals with billing, member passes, and P&L." },
    { title: "CleanMyCar — On-demand Car Cleaning", to: "/case-studies/cleanmycar", blurb: "Owner & cleaner flows, GPS, subscriptions, daily proof of cleaning." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold">Case Studies</h1>
      <p className="mt-2 text-neutral-400 max-w-3xl">Deep dives into scope, architecture, decisions, and outcomes.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {cards.map(c => (
          <Link key={c.to} to={c.to} className="card-overlay rounded-xl p-5 block">
            <p className="font-medium">{c.title}</p>
            <p className="mt-2 text-neutral-300 text-sm">{c.blurb}</p>
            <span className="mt-3 inline-block text-sm underline underline-offset-4 text-cyan-400">Read case study →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
