import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, Target, Gift } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import aviatorImg from "@/assets/promo-arcade.jpg";
import aviatorImg2 from "@/assets/card-roulette.jpg";

const STEPS = [
  { icon: Rocket, title: "Step 1: Set Your Bet", desc: "Log in to your Khelo24App account and set your bet amount" },
  { icon: Target, title: "Step 2: Watch & Decide", desc: "Watch the plane take off — keep your eye on the multiplier" },
  { icon: Gift, title: "Step 3: Cash Out", desc: "Hit Cash Out at the right moment and collect your winnings!" },
];

const TIPS = [
  { emoji: "🎯", text: "Use the Auto Cash Out feature — set your multiplier in advance and never miss" },
  { emoji: "💡", text: "Start with small bets, understand the game, then scale up" },
  { emoji: "📊", text: "Watch previous round patterns — they can guide your strategy" },
  { emoji: "⚡", text: "Place two bets at once — one safe (1.5x) and one risky (10x+)" },
];

const Aviator = () => {
  useSeo({
    title: "Aviator Game Online India | Play & Win at khelo24app.live",
    description: "Play Aviator crash game at Khelo24App! India's most thrilling online game — watch the multiplier rise and cash out at the perfect moment. Register now & claim your welcome bonus!",
    canonical: "/aviator",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Aviator" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Aviator Game — <span className="text-gradient-gold">Fly High, Cash Out Fast!</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Every second is a decision. Every moment is a choice between greed and strategy. Welcome to Aviator — India's most addictive online crash game, now available at khelo24app.live with bigger thrills and faster payouts!
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <img src={aviatorImg} alt="Aviator crash game interface on khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <img src={aviatorImg2} alt="Aviator game multiplier display on khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
        </div>

        {/* What is Aviator */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What is the Aviator Game?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aviator is a crash-style betting game where a plane takes off and a multiplier keeps rising — from 1x all the way to 100x or beyond! Your job is to decide when to cash out.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The longer you wait, the bigger the multiplier — but if the plane crashes before you cash out, your bet is lost. That's the ultimate thrill of Aviator.
          </p>
        </div>

        {/* How to Play */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Play Aviator on Khelo24App</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {STEPS.map((s, i) => (
            <div key={s.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all relative">
              <span className="absolute top-3 right-3 text-3xl font-black text-muted-foreground/20">{i + 1}</span>
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Winning Tips */}
        <div className="bg-card/50 border border-border rounded-2xl p-6 md:p-8 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Aviator Strategy Tips</h2>
          <p className="text-muted-foreground mb-6">
            🚀 Smart players set a safe target multiplier (like 1.5x or 2x) and cash out consistently. Controlling greed is the real winning strategy!
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {TIPS.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <span className="text-xl">{tip.emoji}</span>
                <p className="text-sm text-muted-foreground">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/30">
          <h2 className="text-xl font-bold mb-2">Ready to Fly?</h2>
          <p className="text-muted-foreground mb-4">Join thousands of players enjoying Aviator on khelo24app.live. Play responsibly.</p>
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Play Aviator Now
          </Button>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/cricket", label: "Live Cricket Betting" }, { to: "/teen-patti", label: "Play Teen Patti Online" }, { to: "/blog/best-online-sports-betting-platform-for-beginners", label: "Best Platform for Beginners" }, { to: "/blog/how-to-join-online-sports-gaming-website", label: "How to Join & Start Playing" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Aviator;
