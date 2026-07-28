import { motion } from 'framer-motion'
import { SectionIntro } from './Reviews.jsx'
import { INSTAGRAM_URL } from '../config.js'

const posts = [
  'photo-1611652022419-a9419f74343d',
  'photo-1599643477877-530eb83abc8e',
  'photo-1573408301185-9146fe634ad0',
  'photo-1605100804763-247f67b3557e',
  'photo-1603561591411-07134e71a2a9',
  'photo-1611591437281-460bfbe1220a'
]

export default function InstagramGallery() {
  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionIntro eyebrow="@shipzivora" title="Shine in the wild" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-14">
          {posts.map((seed, idx) => (
            <motion.a
              key={seed}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square rounded-md"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
            >
              <img
                src={`https://images.unsplash.com/${seed}?auto=format&fit=crop&w=400&h=400&q=70`}
                alt={`ZIVORA jewellery on Instagram, post ${idx + 1}`}
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
