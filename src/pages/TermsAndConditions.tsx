import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const TermsAndConditions = () => {
  useSeo({
    title: "Terms and Conditions – khelo24app.live | User Agreement",
    description: "Read the terms and conditions for using khelo24app.live. Understand your rights and responsibilities on our online cricket betting platform.",
    canonical: "/terms-and-conditions",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]} />
      <section className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
          Terms and <span className="text-gradient-gold">Conditions</span>
        </h1>
        <p className="text-muted-foreground mb-6">Last Updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using khelo24app.live ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">To use our platform, you must:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Be a resident of a jurisdiction where online gaming is legal</li>
              <li>Provide accurate and complete registration information</li>
              <li>Not be prohibited from participating in online gaming activities</li>
              <li>Use the platform for personal, non-commercial purposes only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account with us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You must provide accurate, current, and complete information</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>One account per person is allowed; multiple accounts will be terminated</li>
              <li>We reserve the right to verify your identity at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">4. Deposits and Withdrawals</h2>
            <h3 className="text-lg font-semibold mb-2 text-primary">4.1 Deposits</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Minimum deposit: ₹100</li>
              <li>Accepted methods: UPI, IMPS, Net Banking</li>
              <li>All transactions are in Indian Rupees (INR)</li>
              <li>Deposits are credited instantly in most cases</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-primary">4.2 Withdrawals</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Withdrawals are processed within 5 minutes</li>
              <li>Minimum withdrawal amount may apply</li>
              <li>Withdrawals are made to verified bank accounts or UPI IDs only</li>
              <li>We may require identity verification before processing withdrawals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">5. Bonuses and Promotions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bonuses and promotions are subject to specific terms and conditions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Wagering requirements may apply before withdrawal</li>
              <li>Bonuses may have expiration dates</li>
              <li>We reserve the right to modify or cancel promotions at any time</li>
              <li>Abuse of bonus offers may result in account termination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">6. Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Use the platform for any illegal purpose</li>
              <li>Engage in fraudulent activities or money laundering</li>
              <li>Use automated systems or bots</li>
              <li>Collude with other users</li>
              <li>Exploit technical errors or bugs</li>
              <li>Share your account with others</li>
              <li>Use VPNs to circumvent geographic restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on khelo24app.live, including text, graphics, logos, and software, is the property of khelo24app.live or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              khelo24app.live is provided "as is" without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform. Gaming involves risk, and you should only play with money you can afford to lose.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">9. Responsible Gaming</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to responsible gaming. If you feel you may have a gambling problem, please visit our <a href="/responsible-gambling" className="text-primary hover:underline">Responsible Gambling</a> page for resources and self-exclusion options.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">10. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these terms shall be resolved through binding arbitration. You agree to waive your right to participate in class action lawsuits.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion. Upon termination, any remaining balance will be returned to you, subject to verification.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact us via WhatsApp. Our support team is available 24x7.
            </p>
          </section>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TermsAndConditions;
