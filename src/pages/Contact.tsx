import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Headphones, MessagesSquare } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import ContactFAQ from "@/components/ContactFAQ";

const Contact = () => {
  useSeo({
    title: "Contact Us – Khelo24Id.live | 24x7 Support",
    description: "Contact Khelo24Id for 24x7 WhatsApp support in Hindi, English, Telugu & Tamil. Get help with your cricket betting ID, deposits, withdrawals and more.",
    canonical: "/contact",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Contact <span className="text-gradient-gold">Khelo24Id.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">We're here to help — reach out anytime for login issues, deposits, withdrawals or game queries.</p>

        <h2 className="text-xl md:text-2xl font-bold mb-6">24x7 Support Available</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mb-10">
          <button onClick={openWA} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
            <div className="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <MessagesSquare className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Instant replies from our support team, available round the clock.</p>
            </div>
          </button>
          <button onClick={openWA} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
            <div className="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <Headphones className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">WhatsApp Assistance</h3>
              <p className="text-sm text-muted-foreground">Chat with us on WhatsApp in Hindi, English, Telugu & Tamil.</p>
            </div>
          </button>
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="text-xl font-bold mb-3">How Can We Help?</h2>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Account login and registration issues</li>
            <li>• Deposit and withdrawal assistance</li>
            <li>• Game rules and betting queries</li>
            <li>• Technical support and troubleshooting</li>
            <li>• Responsible gambling tools and self-exclusion</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Our support team speaks Hindi, English, Telugu, and Tamil. Average response time is under 2 minutes.
          </p>
        </div>

        <div className="text-center">
          <Button onClick={openWA} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Chat on WhatsApp Now
          </Button>
        </div>
      </section>

      <ContactFAQ />

      <RelatedLinks links={[{ to: "/about", label: "About Khelo24Id.live" }, { to: "/blog/how-to-login-khelo24id", label: "How to Login — Step by Step" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Game" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contact;
