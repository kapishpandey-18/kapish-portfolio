import { useState } from 'react'
import PropTypes from 'prop-types'
import { productVisuals } from '../data/productVisuals'

function ImagesGrid({ list }) {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((img, i) => (
        <figure key={i} className="aspect-video bg-neutral-900 rounded overflow-hidden border border-neutral-800">
          <img 
            src={img.src} 
            alt={img.alt} 
            className="w-full h-full object-cover" 
            style={{ aspectRatio: img.aspectRatio }}
            loading="lazy"
          />
          <figcaption className="sr-only">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}

ImagesGrid.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      aspectRatio: PropTypes.string.isRequired,
    })
  ).isRequired,
}

function Category({ item }) {
  const [tab, setTab] = useState('mobile')
  const tabs = ['mobile', 'web']

  return (
    <section className="card-overlay rounded-xl p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">{item.category}</h2>
        <div className="flex gap-2 text-xs">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                'px-3 py-1 rounded border transition-colors ' +
                (tab === t
                  ? 'border-blue-500 text-white bg-blue-500'
                  : 'border-neutral-700 hover:border-blue-500 text-neutral-300')
              }>
              {t.capitalize ? t.capitalize() : t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-neutral-300">{item.description}</p>
      <ImagesGrid list={item.images[tab]} />
    </section>
  )
}

Category.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.shape({
      mobile: PropTypes.array.isRequired,
      web: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export default function ProductsVisualsPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Products Visuals</h1>
      <p className="mt-2 text-neutral-400 max-w-3xl">Grouped by <strong>Mobile</strong> vs <strong>Web</strong>. Replace placeholders under <code>public/assets/products/*</code>.</p>
      <div className="mt-8 space-y-8">
        {productVisuals.map(item => <Category key={item.slug} item={item} />)}
      </div>
    </article>
  )
}
