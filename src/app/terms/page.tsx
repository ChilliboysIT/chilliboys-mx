import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Chilli Boys Manufacturing",
  robots: "noindex, follow",
};

export default function Terms() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-black text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p>By accessing or using the Chilli Boys Manufacturing website ("Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">2. Services</h2>
          <p>Chilli Boys provides custom engineering and fabrication services in Baja California Sur, Mexico. All projects require a written quote and signed agreement before fabrication begins. Quotes are valid for 30 days unless otherwise stated.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">3. Quotes & Deposits</h2>
          <p>All quotes are estimates based on provided specifications. A 50% deposit is required to begin fabrication. The remaining balance is due upon delivery and installation. For projects over $25,000 USD, milestone-based payments may be arranged.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">4. Cancellations & Refunds</h2>
          <p>Deposits are refundable only if cancellation occurs before materials are purchased. Once fabrication has begun, refunds are prorated based on work completed. Custom materials and special-order items are non-refundable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">5. Warranties</h2>
          <p>We provide a 1-year structural warranty on fabrication workmanship. This does not cover damage from natural disasters, misuse, or modifications made by third parties. Material warranties are passed through from the original manufacturer.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by Mexican law, Chilli Boys' liability shall not exceed the total amount paid for the specific project giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">7. Intellectual Property</h2>
          <p>All designs, drawings, and concepts created by Chilli Boys remain our intellectual property until full payment is received. Upon payment, the client receives a license to use the design for the specific project. Reproduction without consent is prohibited.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">8. Governing Law</h2>
          <p>These terms are governed by the laws of Mexico and the state of Baja California Sur. Any disputes shall be resolved in the courts of La Paz, BCS.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-2">9. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:build@chilliboys.mx" className="text-copper hover:underline">build@chilliboys.mx</a> or via WhatsApp at +52 612 105 2006 or by phone at +52 624 229 4158.</p>
        </section>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center">
        <Link href="/" className="text-copper hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
