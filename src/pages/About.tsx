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
  { icon: ShieldCheck, title: "Built for India", desc: "UPI payments, Hindi support, Indian-favourite games" },
  { icon: Zap, title: "Speed First", desc: "5-minute ID setup, instant withdrawals, zero delays" },
  { icon: Smartphone, title: "Bank-Level Security", desc: "256-bit SSL encryption protecting every transaction" },
  { icon: Headphones, title: "Real Human Support", desc: "24x7 live chat and WhatsApp support" },
];

const STATS = [
  { value: "500,000+", label: "Happy Players" },
  { value: "500+", label: "Games Available" },
  { value: "5 Minutes", label: "ID Setup Time" },
  { value: "24x7", label: "Customer Support" },
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
          About Khelo24Id — <span className="text-gradient-gold">Built for India, Built for Winners</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Khelo24Id.live was born from a simple but powerful idea — to create an online gaming platform that truly understands Indian players. No complicated processes, no hidden fees, no unnecessary waiting. Just pure gaming excitement, delivered with complete trust.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={aboutImg} alt="Khelo24Id.live gaming platform interface" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We know that in India, cricket is more than a sport — it's an emotion, a way of life. That's why we built a world-class cricket betting experience that still feels personal, local, and completely yours.
            </p>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
              <h2 className="font-bold mb-2">Our Mission</h2>
              <p className="text-sm text-muted-foreground italic">
                "To give every Indian cricket fan and gaming enthusiast a safe, fast, and exciting platform where they can play without worry, win with confidence, and withdraw their earnings instantly."
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <p className="font-bold">🎯 Certified Fair Play</p>
            <p className="text-sm text-muted-foreground">RNG certified games — no manipulation, ever</p>
          </div>
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <p className="font-bold">🎁 Player Rewards</p>
            <p className="text-sm text-muted-foreground">Daily bonuses, VIP perks, and loyalty rewards</p>
          </div>
        </div>

        {/* Stats */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Numbers Speak for Themselves</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map((s) => (
            <div key={s.label} className="p-6 rounded-xl bg-card/50 border border-border text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/30">
          <h2 className="text-xl font-bold mb-2">Ready to Join?</h2>
          <p className="text-muted-foreground mb-4">Experience the Khelo24Id difference today!</p>
          <Button onClick={openWA} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Join Now on WhatsApp
          </Button>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/teen-patti", label: "Play Teen Patti Online" }, { to: "/blog", label: "Read Our Gaming Guides" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default About;
