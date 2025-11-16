import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experience.map((e) => (
          <div
            key={e.role}
            className="card-overlay rounded-xl p-5 group hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium group-hover:text-blue-400 transition-colors">{e.role}</p>
                <p className="text-sm text-neutral-400">{e.company}</p>
                {e.location && <p className="text-xs text-neutral-500 mt-1">{e.location}</p>}
              </div>
              <span className="text-xs text-neutral-400">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1">
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
