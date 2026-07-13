import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CreditCard, Smartphone, Building2, Shield, Clock, CheckCircle2 } from "lucide-react";

const PAYMENT_METHODS = [
  {
    icon: Smartphone,
    title: "UPI Payments",
    desc: "Instant deposits via PhonePe, Google Pay, Paytm, BHIM, and all UPI apps",
    features: ["Instant credit", "No fees", "₹100 minimum"],
  },
  {
    icon: Building2,
    title: "Bank Transfer (IMPS/NEFT)",
    desc: "Direct transfers from any Indian bank account",
    features: ["All banks supported", "IMPS instant", "NEFT same day"],
  },
  {
    icon: CreditCard,
    title: "Net Banking",
    desc: "Secure online banking from major Indian banks",
    features: ["SBI, HDFC, ICICI", "Axis, Kotak, Yes Bank", "All major banks"],
  },
];

const PaymentMethods = () => {
  useSeo({
    title: "Payment Methods | Deposit & Withdrawal Options | khelo24app.live",
    description: "Learn about all payment methods on khelo24app.live. Deposit via UPI, IMPS, NEFT, Net Banking. Fast withdrawals under 5 minutes. Secure INR transactions.",
    canonical: "/payment-methods",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Payment Methods" }]} />
      
      <article className="container py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Payment <span className="text-gradient-gold">Methods</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          khelo24app.live supports all major Indian payment methods. Deposit instantly via UPI and withdraw your winnings in under 5 minutes.
        </p>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
            <Shield className="h-8 w-8 text-green-500" />
            <div>
              <p className="font-bold text-sm">100% Secure</p>
              <p className="text-xs text-muted-foreground">Encrypted transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
            <Clock className="h-8 w-8 text-blue-500" />
            <div>
              <p className="font-bold text-sm">Instant Deposits</p>
              <p className="text-xs text-muted-foreground">Credit within seconds</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <div>
              <p className="font-bold text-sm">Fast Withdrawals</p>
              <p className="text-xs text-muted-foreground">Under 5 minutes</p>
            </div>
          </div>
        </div>

        {/* Deposit Methods */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Deposit Methods</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.title} className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.desc}</p>
                <ul className="space-y-1">
                  {method.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How to Deposit */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Deposit</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</span>
              <div>
                <h3 className="font-bold mb-1">Contact Support on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Message our support team to get your unique payment details. Available 24x7.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</span>
              <div>
                <h3 className="font-bold mb-1">Make Payment via UPI or Bank Transfer</h3>
                <p className="text-sm text-muted-foreground">Use any UPI app (PhonePe, Google Pay, Paytm) or transfer via IMPS/NEFT. Minimum deposit is ₹100.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</span>
              <div>
                <h3 className="font-bold mb-1">Share Payment Screenshot</h3>
                <p className="text-sm text-muted-foreground">Send the payment confirmation screenshot to our WhatsApp support for instant verification.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</span>
              <div>
                <h3 className="font-bold mb-1">Funds Credited Instantly</h3>
                <p className="text-sm text-muted-foreground">Your account balance is updated within seconds after verification. Start playing immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Process */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Withdrawal Process</h2>
          <p className="text-muted-foreground mb-6">
            We pride ourselves on having one of the fastest withdrawal processes in the industry. Most withdrawals are completed in under 5 minutes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold text-lg mb-3">How to Withdraw</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  Message our WhatsApp support with withdrawal request
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  Provide your UPI ID or bank account details
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  Receive funds directly to your account
                </li>
              </ol>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold text-lg mb-3">Withdrawal Details</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Minimum withdrawal</span>
                  <span className="font-bold text-foreground">₹500</span>
                </li>
                <li className="flex justify-between">
                  <span>Processing time</span>
                  <span className="font-bold text-foreground">Under 5 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span>Withdrawal fee</span>
                  <span className="font-bold text-green-500">FREE</span>
                </li>
                <li className="flex justify-between">
                  <span>Daily limit</span>
                  <span className="font-bold text-foreground">No limit</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Security & Safety</h2>
          <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Your Money is Safe</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• All transactions are encrypted using industry-standard SSL technology</li>
                  <li>• We never store your bank credentials or UPI PIN</li>
                  <li>• Two-factor verification for large withdrawals</li>
                  <li>• 24x7 fraud monitoring and protection</li>
                  <li>• Dedicated support team for any payment issues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">What is the minimum deposit amount?</h3>
              <p className="text-sm text-muted-foreground">The minimum deposit is ₹100 via any payment method.</p>
            </div>
            <div className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">How long do withdrawals take?</h3>
              <p className="text-sm text-muted-foreground">Most withdrawals are processed in under 5 minutes. In rare cases, it may take up to 1 hour during peak times.</p>
            </div>
            <div className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">Are there any fees for deposits or withdrawals?</h3>
              <p className="text-sm text-muted-foreground">No, we do not charge any fees for deposits or withdrawals. All transactions are completely free.</p>
            </div>
            <div className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">Which UPI apps are supported?</h3>
              <p className="text-sm text-muted-foreground">We support all UPI apps including PhonePe, Google Pay, Paytm, BHIM, Amazon Pay, and any other UPI-enabled app.</p>
            </div>
            <div className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">Can I withdraw to a different bank account?</h3>
              <p className="text-sm text-muted-foreground">For security reasons, withdrawals must be made to a bank account registered in your name. Contact support if you need to update your details.</p>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/30">
          <h2 className="text-xl font-bold mb-2">Need Help with Payments?</h2>
          <p className="text-muted-foreground mb-4">Our support team is available 24x7 to assist with any deposit or withdrawal queries.</p>
          <p className="text-sm text-muted-foreground">Contact us on WhatsApp for instant assistance.</p>
        </section>
      </article>

      <RelatedLinks links={[{ to: "/about", label: "About khelo24app.live" }, { to: "/contact", label: "Contact Support" }, { to: "/responsible-gambling", label: "Responsible Gambling" }, { to: "/cricket", label: "Start Betting" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default PaymentMethods;
