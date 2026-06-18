import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Zap, Headphones, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import aboutImg from "@/assets/promo-live.jpg";

const FEATURES = [
  { icon: ShieldCheck, title: "Secure Platform", desc: "Fully encrypted transactions with verified gameplay and data protection." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Play on any device — our platform works seamlessly on phones and tablets." },
  { icon: Zap, title: "Fast Payouts", desc: "Withdrawals processed in under 5 minutes directly to your bank via UPI." },
  { icon: Headphones, title: "24x7 Support", desc: "Always available via WhatsApp in Hindi, English, Telugu & Tamil." },
];

const About = () => {
  useSeo({
    title: "About Khelo24Id.live | Trusted Cricket Betting Platform India",
    description: "Learn about Khelo24Id.live - India's trusted online cricket betting platform. Fast withdrawals under 5 minutes, 24x7 WhatsApp support, and secure UPI transactions.",
    canonical: "/about",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          About <span className="text-gradient-gold">Khelo24Id.live</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Khelo24Id.live is a modern online gaming platform built specifically for Indian players. We combine cutting-edge technology with a deep understanding of what Indian gamers need — fast transactions, local payment methods, and support in regional languages.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide a secure, fair, and enjoyable gaming experience for every player. We believe in transparency, responsible gaming, and putting our users first. Every feature we build is designed to make your experience seamless.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mt-14 mb-8">
          Key <span className="text-gradient-gold">Features</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <img src={aboutImg} alt="best betting platform in india. Join now and play fast khelo24id.live" className="rounded-xl border border-border w-full max-w-3xl mx-auto aspect-video object-cover mb-8" loading="lazy" />

          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Why Choose Khelo24Id.live</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We offer a complete gaming experience tailored for Indian players. From live cricket betting during IPL and international matches to popular games like Aviator and Teen Patti, everything is designed with you in mind.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our platform supports instant UPI deposits from all major apps including PhonePe, Google Pay, and Paytm. Withdrawals are processed in under 5 minutes directly to your bank account — no waiting, no hidden fees.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Getting started is simple: message us on WhatsApp, receive your free ID within 60 seconds, and start playing. Our support team is available 24x7 in Hindi, English, Telugu, and Tamil.
            </p>
          </div>

          <div className="text-center">
            <Button onClick={openWA} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              <MessageCircle className="h-5 w-5 mr-2" /> Join Now on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/teen-patti", label: "Play Teen Patti Online" }, { to: "/blog", label: "Read Our Gaming Guides" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default About;
