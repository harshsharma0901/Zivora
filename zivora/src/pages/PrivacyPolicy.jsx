import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import PolicyLayout from '../components/PolicyLayout.jsx'
import { CONTACT_EMAIL, whatsappLink } from '../config.js'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <SEO title="Privacy Policy" description="Read ZIVORA's privacy policy to understand how we collect, use and protect your data." path="/privacy-policy" />
      <PolicyLayout title="Privacy Policy" updated="July 2026">
        <p>
          ZIVORA ("we", "us", "our") respects your privacy. This policy explains what personal information we collect, how we
          use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email, shipping address and payment details when you place an order, create an account, or contact our support team. We also collect usage data such as pages visited and items viewed, to improve your experience.</p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process and fulfil your orders, including shipping and payment</li>
          <li>To communicate order updates, promotions, and newsletter content you have opted into</li>
          <li>To personalise product recommendations and improve our website</li>
          <li>To prevent fraud and comply with legal obligations</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>We do not sell your personal information. We share data only with trusted service providers — such as payment processors, couriers, and analytics tools — solely to operate our business, under strict confidentiality agreements.</p>

        <h2>Cookies</h2>
        <p>We use cookies to remember your cart, wishlist, and preferences. You can disable cookies in your browser settings, though some features may not function correctly without them.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by emailing {CONTACT_EMAIL}. We will respond within 30 days.</p>

        <h2>Data Security</h2>
        <p>We use industry-standard encryption and secure checkout to protect your information. No online system is completely secure, but we continuously review our practices to minimise risk.</p>

        <h2>Contact Us</h2>
        <p>
          Questions about this policy can be sent to {CONTACT_EMAIL}, or reach us directly on{' '}
          <a href={whatsappLink('Hi ZIVORA, I have a question about your Privacy Policy.')} target="_blank" rel="noopener noreferrer" className="text-rosegold underline">
            WhatsApp
          </a>.
        </p>
      </PolicyLayout>
    </PageTransition>
  )
}
