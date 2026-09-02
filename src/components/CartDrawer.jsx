import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import { whatsappLink, SITE_URL, BANK_DETAILS } from '../config.js'

const emptyForm = { name: '', phone: '', email: '', address: '', pincode: '', notes: '', payment: 'Bank Transfer / UPI' }

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, subtotal, clearCart } = useCart()
  const [view, setView] = useState('cart') // 'cart' | 'order-form'
  const [form, setForm] = useState(emptyForm)

  const closeAndReset = () => {
    setIsOpen(false)
    setView('cart')
    setForm(emptyForm)
  }

  const itemLines = () =>
    items.map(
      (item) =>
        `• ${item.name} (x${item.qty}) — ${formatPrice(item.price * item.qty)}\n  Photo: ${SITE_URL}/product/${item.id}`
    )

  const handleEnquiry = () => {
    if (items.length === 0) return
    const message = [
      'Hi ZIVORA! I have a question about these pieces:',
      '',
      ...itemLines(),
      '',
      `Subtotal: ${formatPrice(subtotal)}`,
      '',
      'Could you confirm availability and next steps?'
    ].join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    closeAndReset()
  }

  const handleFormChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const bankLines =
      form.payment === 'Bank Transfer / UPI'
        ? [
            '',
            '--- Pay via Bank Transfer ---',
            `Account Name: ${BANK_DETAILS.accountName}`,
            `Account Number: ${BANK_DETAILS.accountNumber}`,
            `IFSC: ${BANK_DETAILS.ifsc}`,
            `Bank: ${BANK_DETAILS.bank}, ${BANK_DETAILS.branch}`,
            'Please share the payment screenshot here on WhatsApp after transferring.'
          ]
        : []

    const message = [
      'Hi ZIVORA! I would like to place an order:',
      '',
      ...itemLines(),
      '',
      `Subtotal: ${formatPrice(subtotal)}`,
      '',
      '--- Delivery Details ---',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Address: ${form.address}`,
      `Pincode: ${form.pincode}`,
      form.notes ? `Notes: ${form.notes}` : null,
      `Payment Method: ${form.payment}`,
      ...bankLines,
      '',
      'Please confirm and let me know the next steps.'
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    closeAndReset()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-ink/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAndReset}
          />
          <motion.aside
            className="fixed top-0 right-0 z-[95] h-full w-full sm:w-[420px] bg-white flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-beige">
              <h2 className="font-display text-2xl">
                {view === 'cart' ? `Your Bag (${items.length})` : 'Delivery Details'}
              </h2>
              <button aria-label="Close bag" onClick={closeAndReset}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {view === 'cart' && (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                  {items.length === 0 && (
                    <p className="text-ink/50 text-sm pt-10 text-center">Your bag is empty. Every great collection starts with one piece.</p>
                  )}
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                      <div className="flex-1">
                        <p className="font-body text-sm font-medium">{item.name}</p>
                        <p className="text-rosegold text-sm mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-7 h-7 border border-ink/20 rounded-full text-sm hover:border-rosegold"
                          >
                            −
                          </button>
                          <span className="text-sm w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-7 h-7 border border-ink/20 rounded-full text-sm hover:border-rosegold"
                          >
                            +
                          </button>
                          <button onClick={() => removeItem(item.id)} className="ml-auto text-xs text-ink/40 hover:text-rosegold underline">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {items.length > 0 && (
                  <div className="px-6 py-6 border-t border-beige space-y-3">
                    <div className="flex justify-between font-body text-sm">
                      <span>Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <p className="text-xs text-ink/40">Shipping and taxes calculated at checkout.</p>
                    <button
                      onClick={() => setView('order-form')}
                      className="w-full bg-ink text-white py-4 eyebrow !text-[0.72rem] hover:bg-rosegold transition-colors"
                    >
                      Place Order
                    </button>
                    <button
                      onClick={handleEnquiry}
                      className="w-full border border-ink/20 text-ink py-3.5 eyebrow !text-[0.68rem] hover:border-rosegold hover:text-rosegold transition-colors"
                    >
                      Enquiry Only
                    </button>
                    <Link
                      to="/shop"
                      onClick={closeAndReset}
                      className="block text-center text-xs text-ink/50 underline hover:text-rosegold"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                )}
              </>
            )}

            {view === 'order-form' && (
              <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                <button
                  type="button"
                  onClick={() => setView('cart')}
                  className="text-xs text-ink/50 hover:text-rosegold underline mb-2"
                >
                  ← Back to bag
                </button>

                <FormField label="Full Name" name="name" value={form.name} onChange={handleFormChange} required />
                <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleFormChange} required />
                <FormField label="Email (optional)" name="email" type="email" value={form.email} onChange={handleFormChange} />
                <FormField label="Delivery Address" name="address" value={form.address} onChange={handleFormChange} required textarea />
                <FormField label="Pincode" name="pincode" value={form.pincode} onChange={handleFormChange} required />
                <FormField label="Notes (optional)" name="notes" value={form.notes} onChange={handleFormChange} textarea />

                <div>
                  <label className="text-xs eyebrow !text-ink/50 mb-2 block">Payment Method</label>
                  <div className="flex gap-3">
                    {['Bank Transfer / UPI', 'Cash on Delivery'].map((opt) => (
                      <label
                        key={opt}
                        className={`flex-1 text-center text-sm border rounded-md py-2.5 cursor-pointer transition-colors ${
                          form.payment === opt ? 'border-rosegold text-rosegold bg-beige' : 'border-ink/20 text-ink/70'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={opt}
                          checked={form.payment === opt}
                          onChange={handleFormChange}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>

                  {form.payment === 'Bank Transfer / UPI' && (
                    <div className="mt-3 bg-beige rounded-md p-4 text-xs text-ink/70 space-y-1">
                      <p className="eyebrow !text-[0.6rem] text-ink/50 mb-2">Transfer to this account, then send us the screenshot on WhatsApp</p>
                      <p><span className="text-ink/50">Account Name:</span> {BANK_DETAILS.accountName}</p>
                      <p><span className="text-ink/50">Account Number:</span> {BANK_DETAILS.accountNumber}</p>
                      <p><span className="text-ink/50">IFSC:</span> {BANK_DETAILS.ifsc}</p>
                      <p><span className="text-ink/50">Bank:</span> {BANK_DETAILS.bank}, {BANK_DETAILS.branch}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-beige">
                  <div className="flex justify-between font-body text-sm py-3">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-ink text-white py-4 eyebrow !text-[0.72rem] hover:bg-rosegold transition-colors"
                  >
                    Send Order via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function FormField({ label, name, type = 'text', value, onChange, required, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label className="text-xs eyebrow !text-ink/50 mb-1.5 block" htmlFor={name}>{label}</label>
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        value={value}
        onChange={onChange}
        rows={textarea ? 2 : undefined}
        className="w-full border border-ink/20 px-3.5 py-2.5 text-sm outline-none focus:border-rosegold rounded-md"
      />
    </div>
  )
}
