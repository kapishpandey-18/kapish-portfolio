export default function CSCleanMyCar() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">CleanMyCar — On-demand Car Cleaning</h1>
      <p className="mt-2 text-neutral-400">Society-based subscription service with multi-role flows and proof-of-work.</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-2 text-neutral-300">Targeting gated communities along the Dwarka Expressway, with owner app, cleaner app, and admin console.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Scope</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Owner: subscription (Monthly/Weekly), urgent cleaning, booking</li>
          <li>Cleaner: daily checklist, photo/video proof, GPS route</li>
          <li>Admin: partners, workshops, payments, analytics</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Architecture</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>Frontend: React + Tailwind; mobile via Capacitor</li>
          <li>Backend: Node.js + MongoDB; role-based permissions</li>
          <li>Integrations: Payments, GPS, media uploads</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Key UX</h2>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mt-2">
          <li>First-time users see three cards: Monthly, Weekly, Urgent</li>
          <li>Subscribed users see current plan + Urgent card only</li>
          <li>After 'Schedule Cleaning', show three plan cards before payment</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-2 text-neutral-300">Usable MVP flows defined; UI built; deployment as a web app wrapped in Capacitor for iOS/Android.</p>
      </section>
    </article>
  )
}
