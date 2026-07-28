import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import PolicyLayout from '../components/PolicyLayout.jsx'
import { CONTACT_EMAIL, whatsappLink } from '../config.js'

export default function ReturnPolicy() {
  return (
    <PageTransition>
      <SEO title="Return & Refund Policy" description="ZIVORA's return and refund policy for fine jewellery purchases." path="/return-policy" />
      <PolicyLayout title="Return & Refund Policy" updated="July 2026">
        <p>We want you to love your ZIVORA piece. If you are not fully satisfied, we offer a straightforward return, exchange and refund process.</p>

        <h2>30-Day Returns</h2>
        <p>Unworn, unaltered pieces in their original packaging with all tags attached may be returned within 30 days of delivery for a full refund to your original payment method.</p>

        <h2>Exchanges</h2>
        <p>Prefer a different size or design? We offer free exchanges within 30 days of delivery, subject to availability. Resized rings are eligible for exchange only for store credit.</p>

        <h2>Non-Returnable Items</h2>
        <ul>
          <li>Custom or bespoke commissioned pieces</li>
          <li>Earrings, for hygiene reasons, once removed from sealed packaging</li>
          <li>Gift cards</li>
        </ul>

        <h2>How to Start a Return</h2>
        <p>
          Email {CONTACT_EMAIL} or message us on{' '}
          <a href={whatsappLink('Hi ZIVORA, I would like to start a return.')} target="_blank" rel="noopener noreferrer" className="text-rosegold underline">
            WhatsApp
          </a>{' '}
          with your order number and reason for return. Our team will guide you through a prepaid, insured return shipment within 24 hours.
        </p>

        <h2>Refund Timeline</h2>
        <p>Once we receive and inspect your return, refunds are processed within 5–7 business days. It may take an additional billing cycle for the credit to appear on your statement.</p>

        <h2>Damaged or Incorrect Items</h2>
        <p>If your piece arrives damaged or incorrect, contact us within 48 hours of delivery with photos, and we will arrange a free replacement or full refund.</p>
      </PolicyLayout>
    </PageTransition>
  )
}
