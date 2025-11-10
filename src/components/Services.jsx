export default function Services() {
  const items = [
    { title: "React Frontend (Tailwind + Vite)", details: "Pixel-perfect UI, dashboards, landing pages, component libraries.", icon: "⚛️" },
    { title: "Node.js + MongoDB APIs", details: "Auth, CRUD, payments, analytics; clean REST contracts & docs.", icon: "🚀" },
    { title: "SDK Development", details: "Class-based SDKs, custom headers/auth, error callbacks, multi-env config.", icon: "📦" },
    { title: "Product Design (Figma)", details: "Wireframes, design systems, clickable prototypes, developer handoff.", icon: "🎨" },
    { title: "Automation & AI", details: "Content pipelines, Instagram/WhatsApp posting, Google Drive workflows.", icon: "🤖" },
    { title: "System Design", details: "Scalable architectures, database schema design, API contracts, microservices.", icon: "🏗️" },
  ]
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Services
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Solutions I deliver for startups and local businesses.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card-overlay rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{it.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-lg text-blue-500">{it.title}</p>
                <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{it.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
