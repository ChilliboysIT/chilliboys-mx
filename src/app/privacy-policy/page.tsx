import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Chilli Boys Manufacturing",
  robots: "noindex, follow",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
          <p>Chilli Boys Manufacturing ("Chilli Boys", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or contact us via WhatsApp, email, or our lead form.</p>
          <p className="mt-2">This policy applies to all visitors and customers in Mexico, the European Union, and worldwide. We comply with the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) in Mexico and the General Data Protection Regulation (GDPR) for EU residents.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">2. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact Information:</strong> Name, email address, phone number, WhatsApp number.</li>
            <li><strong>Project Details:</strong> Project type, budget range, timeline, and message content submitted via our lead form.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited (via Google Analytics).</li>
            <li><strong>Cookies:</strong> We use minimal cookies for analytics and language preference.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">3. Legal Basis for Processing (GDPR)</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Consent:</strong> When you submit the lead form or message us on WhatsApp.</li>
            <li><strong>Contractual Necessity:</strong> To prepare quotes and fulfill fabrication contracts.</li>
            <li><strong>Legitimate Interest:</strong> To improve our website and services through analytics.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">4. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to inquiries and provide quotes.</li>
            <li>To manage active projects and communicate about fabrication timelines.</li>
            <li>To send occasional updates about new services (only with consent).</li>
            <li>To analyze website traffic and improve user experience.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">5. Data Sharing</h2>
          <p>We do not sell your personal data. We only share data with:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Service Providers:</strong> Google Analytics (traffic analysis), Vercel (hosting).</li>
            <li><strong>Legal Authorities:</strong> When required by Mexican or applicable law.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">6. Data Retention</h2>
          <p>We retain contact and project data for <strong>7 years</strong> to comply with Mexican tax and commercial law, or until you request deletion. WhatsApp conversations are retained according to your device settings.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">7. Your Rights</h2>
          <p>Under GDPR and LFPDPPP, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Access, correct, or delete your personal data.</li>
            <li>Object to or restrict processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time.</li>
            <li>Lodge a complaint with the INAI (Mexico) or your local DPA (EU).</li>
          </ul>
          <p className="mt-2">To exercise these rights, email us at <a href="mailto:privacy@chilliboys.mx" className="text-copper hover:underline">privacy@chilliboys.mx</a> or message us on WhatsApp.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">8. Cookies</h2>
          <p>We use Google Analytics cookies to understand site usage. You can disable cookies in your browser settings. We do not use tracking pixels or third-party advertising cookies.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">9. International Transfers</h2>
          <p>Your data is hosted on Vercel servers (United States). We rely on Standard Contractual Clauses (SCCs) for GDPR compliance when data is transferred outside the EU.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">10. Contact</h2>
          <p>Data Controller: Chilli Boys Manufacturing</p>
          <p>Address: KM 65 Highway 1, El Pescadero, BCS 23300, Mexico</p>
          <p>Email: <a href="mailto:privacy@chilliboys.mx" className="text-copper hover:underline">privacy@chilliboys.mx</a></p>
          <p>Office: +52 624 229 4158</p>
          <p>WhatsApp: use the chat button on this site</p>
        </section>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center">
        <Link href="/" className="text-copper hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
