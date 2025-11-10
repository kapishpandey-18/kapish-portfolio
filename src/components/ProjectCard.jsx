import PropTypes from 'prop-types'

export default function ProjectCard({ p }) {
  return (
    <div className="card-overlay rounded-xl overflow-hidden">
      {p.image && (
        <div className="aspect-video bg-neutral-900/50">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <span className="text-xs text-neutral-400">{p.period}</span>
        </div>
        <p className="mt-2 text-neutral-300">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map(s => (
            <span key={s} className="text-xs border border-neutral-700 rounded px-2 py-1">{s}</span>
          ))}
        </div>
        {p.highlights?.length > 0 && (
          <ul className="mt-3 list-disc list-inside text-sm text-neutral-400 space-y-1">
            {p.highlights.map((h, i) => (<li key={i}>{h}</li>))}
          </ul>
        )}
        <div className="mt-4 flex gap-3">
          {p.repo && <a className="text-sm underline underline-offset-4 hover:text-blue-500" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
          {p.live && <a className="text-sm underline underline-offset-4 hover:text-cyan-400" href={p.live} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  p: PropTypes.shape({
    title: PropTypes.string.isRequired,
    period: PropTypes.string,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    repo: PropTypes.string,
    live: PropTypes.string,
  }).isRequired,
}
