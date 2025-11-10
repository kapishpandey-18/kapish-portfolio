export default function SkillsMatrix() {
  const groups = [
    { name: "Frontend", skills: ["React", "Vite", "Tailwind", "TypeScript (learning)", "Capacitor"]},
    { name: "Backend", skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Auth/JWT"]},
    { name: "Dev Tools", skills: ["GitHub", "Copilot", "Vercel", "Netlify", "Figma", "Canva"]},
    { name: "Special", skills: ["SDKs", "AdTech (JioAds)", "Design Systems", "Automation"]},
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map(g => (
          <div key={g.name} className="card-overlay rounded-xl p-5 group hover:border-blue-500/30 transition-all duration-300">
            <p className="font-medium group-hover:text-blue-400 transition-colors">{g.name}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.skills.map(s => (
                <span key={s} className="text-xs border border-neutral-700 rounded px-2 py-1 group-hover:border-blue-500/40 transition-colors">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
