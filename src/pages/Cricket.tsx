import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Trophy, BarChart3 } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import cardLive from "@/assets/card-livecricket.jpg";

const TIPS = [
  { icon: TrendingUp, title: "Live Cricket Betting Tips Online", desc: "Get real-time tips and insights based on match conditions, pitch reports and player form." },
  { icon: Trophy, title: "Best Cricket Prediction Sites Online", desc: "Our ML-powered predictions give you an edge with ball-by-ball analysis and win probability." },
  { icon: BarChart3, title: "Competitive Odds", desc: "Best odds in the market for IPL, T20 World Cup, ODI and all major tournaments." },
];

const Cricket = () => {
  useSeo({
    title: "Live Cricket Betting India | IPL Betting ID | Khelo24Id.live",
    description: "Bet on live cricket matches at Khelo24Id.live. Get IPL betting ID, T20 World Cup odds, and real-time cricket predictions with fast withdrawals under 5 minutes.",
    canonical: "/cricket",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Cricket Betting" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Live Cricket Betting on <span className="text-gradient-gold">Khelo24Id.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">Bet on live cricket matches online with the best odds and fastest payouts in India.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardLive} alt="bet on gameplay interface with khelo24id.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">How to Bet on Live Cricket Matches Online</h2>
            <p className="text-muted-foreground mb-4">Simply open WhatsApp, get your free cricket ID, deposit via UPI and start placing bets on live matches. It takes under 60 seconds to get started.</p>
            <Button onClick={openWA} className="bg-gradient-gold text-gold-foreground font-bold">
              <MessageCircle className="h-4 w-4 mr-2" /> Get Cricket ID Now
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {TIPS.map((t) => (
            <div key={t.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1 text-sm">{t.title}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Your Complete Cricket Betting Guide</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Khelo24Id.live offers data-driven cricket predictions covering IPL, T20 World Cup, Asia Cup and all international matches. Get real-time betting tips powered by match analysis, pitch reports and player form data.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Follow our step-by-step guides to start betting on live cricket matches. All transactions are encrypted and withdrawals are processed in under 5 minutes. Get your free cricket ID now via WhatsApp.
          </p>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/blog/live-cricket-betting-tips-online", label: "Cricket Betting Tips 2026" }, { to: "/blog/best-cricket-prediction-sites-online", label: "Best Cricket Prediction Sites" }, { to: "/blog/how-to-bet-on-live-cricket-matches-online", label: "How to Bet on Live Cricket" }, { to: "/about", label: "About Khelo24Id.live" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
