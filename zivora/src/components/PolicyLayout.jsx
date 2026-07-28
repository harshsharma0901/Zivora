import { motion } from 'framer-motion'

export default function PolicyLayout({ title, updated, children }) {
  return (
    <>
      <section className="pt-40 pb-16 bg-beige text-center">
        <div className="container-x">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl">{title}</h1>
          {updated && <p className="text-ink/40 text-sm mt-4">Last updated: {updated}</p>}
        </div>
      </section>
      <section className="py-20 bg-white">
        <motion.div
          className="container-x max-w-2xl policy-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="prose-policy text-ink/70 leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </div>
        </motion.div>
      </section>
    </>
  )
}
