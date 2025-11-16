import { Link } from "react-router-dom";

export default function CaseStudiesIndex() {
  const cards = [
    {
      title: "SalonMind — AI-Powered Salon Management Platform",
      to: "/case-studies/bbs",
      blurb:
        "Complete SaaS platform with Admin, Employee & Client portals. Features CRM automation, billing, inventory tracking, and real-time analytics.",
    },
    {
      title: "CleanMyCar — Daily Car Cleaning Subscription Platform",
      to: "/case-studies/cleanmycar",
      blurb:
        "Society-based subscription platform with proof-of-service, partner management, and automated billing for car owners and cleaners.",
    },
    {
      title: "JioAds — Enterprise Advertising & Monetization SDK",
      to: "/case-studies/jioads",
      blurb:
        "High-performance ad SDK for multi-device apps with real-time targeting, analytics, and optimized ad delivery across Android, iOS, Web, and TV.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold">Case Studies</h1>
      <p className="mt-2 text-neutral-400 max-w-3xl">
        Deep dives into product challenges, architecture, solutions, and outcomes.
      </p>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="card-overlay rounded-xl p-5 block hover:scale-105 transition-transform"
          >
            <p className="font-medium">{c.title}</p>
            <p className="mt-2 text-neutral-300 text-sm">{c.blurb}</p>
            <span className="mt-3 inline-block text-sm underline underline-offset-4 text-cyan-400">
              Read case study →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
