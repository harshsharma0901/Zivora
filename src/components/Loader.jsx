import { motion, AnimatePresence } from 'framer-motion'

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
            <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
              <motion.path
                d="M14 20 L50 20 L32 32 L50 44 L14 44 L32 32 Z"
                stroke="#B76E79"
                strokeWidth="1.6"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </svg>
            <motion.p
              className="eyebrow text-white/70"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Zivora
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
