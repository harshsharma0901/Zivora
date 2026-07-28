import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import PolicyLayout from '../components/PolicyLayout.jsx'
import { CONTACT_EMAIL, SITE_URL } from '../config.js'

export default function TermsConditions() {
  return (
    <PageTransition>
      <SEO title="Terms & Conditions" description="The terms and conditions governing use of the ZIVORA website and purchase of ZIVORA jewellery." path="/terms-and-conditions" />
      <PolicyLayout title="Terms & Conditions" updated="July 2026">
        <p>
          These Terms & Conditions govern your use of {SITE_URL.replace('https://', '')} and any purchase made through it. By
          using our website or placing an order, you agree to these terms.
        </p>

        <h2>About ZIVORA</h2>
        <p>ZIVORA is a premium fashion jewellery brand. All content on this website — including product designs, photography, and copy — is the property of ZIVORA unless otherwise stated.</p>

        <h2>Product Information</h2>
        <p>We make every effort to display our jewellery accurately, including colour, finish and dimensions. Slight variations may occur due to the handcrafted nature of our pieces and differences in screen displays.</p>

        <h2>Pricing & Payment</h2>
        <p>All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to correct pricing errors and to change prices at any time without prior notice. Payment must be completed in full before an order is processed.</p>

        <h2>Orders & Acceptance</h2>
        <p>Placing an order constitutes an offer to purchase. An order is only confirmed once you receive confirmation from us. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud or pricing errors.</p>

        <h2>Intellectual Property</h2>
        <p>All designs, logos, images and content on this site may not be reproduced, copied, or used without our prior written consent.</p>

        <h2>Limitation of Liability</h2>
        <p>ZIVORA is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our products, to the fullest extent permitted by law.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these Terms & Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>

        <h2>Contact Us</h2>
        <p>For any questions about these terms, email us at {CONTACT_EMAIL}.</p>
      </PolicyLayout>
    </PageTransition>
  )
}
