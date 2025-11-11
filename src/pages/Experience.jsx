export default function ExperiencePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-semibold">Professional Experience</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Senior Software Engineer — Jio (JioAds)</h2>
        <p className="text-neutral-400">Consultant via Quest Global · Mar 2018 — Present</p>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Led web SDK & KaiOS SDK integrations for in-house and third-party apps</li>
          <li>Built class-based, reliable SDK modules with auth, headers, and error handling</li>
          <li>Collaborated across ad-tech partners to ship features at scale</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Entrepreneurial Projects</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li><strong>BBS Platform:</strong> Salon SaaS with admin/employee/user portals, incentive-based salaries, P&L tracking</li>
          <li><strong>CleanMyCar:</strong> Subscription-based car cleaning with partner ecosystem</li>
          <li><strong>JavaScript SDK:</strong> Multi-environment endpoints, exposed public API, error callback architecture</li>
        </ul>
      </section>
    </article>
  )
}
