export default function SkillsMatrix() {
  const groups = [
    { name: "Languages", skills: ["JavaScript (ES6+)"] },
    { name: "Frontend", skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"] },
    { name: "Mobile", skills: ["Capacitor (Android/iOS)", "React"] },
    { name: "Testing & QA", skills: ["Playwright (E2E)", "Postman (API Testing)", "Regression Strategy"] },
    { name: "Design & UX", skills: ["Figma (Wireframes/Prototypes/UI Systems)"] },
    { name: "Dev Tools", skills: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode"] },
    { name: "Core Expertise", skills: ["SDK Development", "System Architecture", "Multi-role Workflows", "Product Engineering"] },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div
            key={g.name}
            className="card-overlay rounded-xl p-5 group hover:border-blue-500/30 transition-all duration-300"
          >
            <p className="font-medium group-hover:text-blue-400 transition-colors">{g.name}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs border border-neutral-700 rounded px-2 py-1 group-hover:border-blue-500/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
