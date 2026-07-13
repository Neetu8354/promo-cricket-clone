import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const PrivacyPolicy = () => {
  useSeo({
    title: "Privacy Policy – khelo24app.live | Data Protection & Security",
    description: "Read khelo24app.live's privacy policy. Learn how we collect, use, and protect your personal information on our online cricket betting platform.",
    canonical: "/privacy-policy",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>
        <p className="text-muted-foreground mb-6">Last Updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              khelo24app.live ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our online sports gaming platform. Please read this privacy policy carefully. By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-2 text-primary">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you register on the platform, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Full name and date of birth</li>
              <li>Email address and phone number</li>
              <li>Bank account details and UPI ID for transactions</li>
              <li>Government-issued ID for verification (Aadhaar, PAN)</li>
              <li>IP address and device information</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-primary">2.2 Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              We automatically collect certain information when you access our platform, including browser type, operating system, access times, pages viewed, and the referring URL.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Create and manage your gaming account</li>
              <li>Process deposits and withdrawals</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Provide customer support via WhatsApp and other channels</li>
              <li>Send promotional offers and updates (with your consent)</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our platform and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you services. We may also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">6. Third-Party Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Payment processors for transaction processing</li>
              <li>Identity verification services</li>
              <li>Law enforcement when required by law</li>
              <li>Service providers who assist in operating our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">8. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are strictly for users aged 18 and above. We do not knowingly collect information from anyone under 18 years of age. If we discover that a minor has provided us with personal information, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us via WhatsApp. Our support team is available 24x7 in Hindi, English, Telugu, and Tamil.
            </p>
          </section>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default PrivacyPolicy;
