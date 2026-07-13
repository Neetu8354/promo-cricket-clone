import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import cardTeen from "@/assets/card-teenpatti.jpg";

const FEATURES = [
  { emoji: "🃏", title: "Multiple Variants", desc: "Classic, Joker, Muflis, AK47 and many more" },
  { emoji: "👨‍💼", title: "Live Dealers", desc: "Real human dealers for an authentic casino experience" },
  { emoji: "💬", title: "Hindi & English Support", desc: "Play comfortably in the language you prefer" },
  { emoji: "📱", title: "Mobile-Optimized", desc: "Play anywhere, anytime on any device" },
  { emoji: "💰", title: "Real Money Winnings", desc: "Cash out instantly to your UPI" },
  { emoji: "🎁", title: "Daily Bonuses", desc: "New rewards every single day" },
];

const HAND_RANKINGS = [
  { rank: "👑", name: "Trail (Three of a Kind)", desc: "Three cards of the same rank — the most powerful hand" },
  { rank: "🔥", name: "Pure Sequence", desc: "Three consecutive cards of the same suit" },
  { rank: "✨", name: "Sequence", desc: "Three consecutive cards of mixed suits" },
  { rank: "🎯", name: "Color", desc: "Three cards of the same suit, not in sequence" },
  { rank: "💪", name: "Pair", desc: "Two cards of the same rank" },
  { rank: "🃏", name: "High Card", desc: "No combination — highest card decides the winner" },
];

const TeenPatti = () => {
  useSeo({
    title: "Teen Patti Online Real Money | Play Live Teen Patti – Khelo24App",
    description: "Play Teen Patti online with real money at khelo24app.live! Enjoy live dealers, multiple game variants & instant UPI withdrawals. India's most trusted Teen Patti platform. Join now!",
    canonical: "/teen-patti",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Teen Patti" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Teen Patti Online — <span className="text-gradient-gold">India's Favourite Card Game, Now With Real Money!</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          From festive nights to casual evenings, Teen Patti has always been the heartbeat of Indian gaming culture. Now at khelo24app.live, experience the same excitement 24x7 — with real money, live dealers, and the authentic feel of your favourite card game right on your phone!
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardTeen} alt="Teen Patti online game interface on khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Why Play Teen Patti at Khelo24App?</h2>
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="p-3 rounded-lg bg-card/50 border border-border">
                  <p className="font-bold text-sm">{f.emoji} {f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hand Rankings */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Teen Patti Hand Rankings — Quick Guide</h2>
        <p className="text-muted-foreground mb-6">In Teen Patti, each player receives three cards. The strongest hand wins. Here are the hand rankings from highest to lowest:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {HAND_RANKINGS.map((h, i) => (
            <div key={h.name} className="p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{h.rank}</span>
                <span className="text-xs text-muted-foreground">#{i + 1}</span>
              </div>
              <h3 className="font-bold mb-1">{h.name}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/30">
          <h2 className="text-xl font-bold mb-2">Ready to Play?</h2>
          <p className="text-muted-foreground mb-4">Join thousands of players enjoying Teen Patti on khelo24app.live!</p>
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Play Teen Patti Now
          </Button>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/blog/safe-online-sports-betting-websites-2026", label: "Safe Betting Websites 2026" }, { to: "/blog/mobile-friendly-sports-betting-platforms", label: "Mobile Friendly Platforms" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TeenPatti;
