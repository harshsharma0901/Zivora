import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phone = '911234567890'
  const message = encodeURIComponent('Hi ZIVORA, I would like to know more about your jewellery collection.')

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZIVORA on WhatsApp"
      className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-glint"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.9-1-2.7-1.9-.7-.7-1.2-1.5-1.5-2-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.2-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.7 0-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2 3.1 5 4.2 2.9 1.1 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
        <path d="M12 2C6.5 2 2 6.4 2 11.8c0 1.9.5 3.6 1.5 5.2L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.4 10-9.9C22 6.4 17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.8 4 13.3 4 11.8 4 7.5 7.6 4 12 4s8 3.5 8 7.8c0 4.3-3.6 8.2-8 8.2z" />
      </svg>
    </motion.a>
  )
}
