import { motion, AnimatePresence } from 'framer-motion'
import { LogoMark } from './Logo.jsx'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <LogoMark className="h-14 w-auto" />
            </motion.div>
            <motion.p
              className="eyebrow text-white/70"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Zivora
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
