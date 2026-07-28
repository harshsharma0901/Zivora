import { motion } from 'framer-motion'
import { reviews } from '../data/reviews.js'

export default function Reviews() {
  return (
    <section className="bg-beige py-28">
      <div className="container-x">
        <SectionIntro eyebrow="Words from our circle" title="Loved, worn, treasured" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {reviews.map((r, idx) => (
            <motion.figure
              key={r.id}
              className="bg-white p-7 rounded-md shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-sm text-ink/80 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="text-xs text-ink/40">{r.location} · {r.product}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionIntro({ eyebrow, title, center = true, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.p
        className={`eyebrow ${light ? 'text-rosegold-light' : ''}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-5xl mt-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B76E79">
      <path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.5 7.1L12 18l-6.5 3.6 1.5-7.1-5.3-5 7.2-.9L12 2z" />
    </svg>
  )
}
