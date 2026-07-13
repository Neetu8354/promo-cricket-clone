import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Trophy, BarChart3 } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import CricketFAQ from "@/components/CricketFAQ";
import cardLive from "@/assets/card-livecricket.jpg";

const FEATURES = [
  { icon: TrendingUp, title: "Instant Cricket ID", desc: "Ready in 5 minutes, delivered straight to WhatsApp" },
  { icon: Trophy, title: "Best Odds in Market", desc: "Maximize your winnings with competitive odds on all matches" },
  { icon: BarChart3, title: "Live Betting", desc: "Ball-by-ball real-time betting for maximum excitement" },
];

const MATCHES = [
  { name: "IPL", desc: "Indian Premier League — India's biggest cricket celebration" },
  { name: "ICC T20 World Cup", desc: "The world's best teams, the biggest stage" },
  { name: "ODI World Cup", desc: "50 overs of non-stop action" },
  { name: "India vs Pakistan", desc: "The greatest rivalry in cricket" },
  { name: "Domestic Cricket", desc: "Ranji Trophy, Vijay Hazare & more" },
];

const Cricket = () => {
  useSeo({
    title: "Cricket Betting ID Online | Get Instant Cricket ID – khelo24app.live",
    description: "Get your Online Cricket Betting ID in just 5 minutes at Khelo24App! Bet on IPL, T20 World Cup & all cricket matches. Best odds, fast UPI withdrawal & 24x7 support. Register now!",
    canonical: "/cricket",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Cricket Betting" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Get Your Online Cricket Betting ID — <span className="text-gradient-gold">Instant, Secure & 100% Trusted</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          In India, cricket isn't just a sport — it's a passion that runs through every vein. At khelo24app.live, we've taken that passion and turned it into something extraordinary. Now, watching a match isn't enough — bet on every ball and feel the thrill like never before!
        </p>

        {/* What is Cricket Betting ID */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardLive} alt="Online Cricket Betting ID interface on khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">What is a Cricket Betting ID?</h2>
            <p className="text-muted-foreground mb-4">
              A Cricket Betting ID is your unique login credential that gives you access to online betting platforms where you can place real money bets on live cricket matches — IPL, T20 World Cup, ODI series and much more.
            </p>
            <p className="text-muted-foreground mb-4">
              Our Online Cricket Betting ID system is the fastest and most reliable in India. No lengthy processes, no unnecessary documents — register once and get your ID delivered to WhatsApp in just 5 minutes.
            </p>
            <Button onClick={openWA} className="bg-gradient-gold text-gold-foreground font-bold">
              <MessageCircle className="h-4 w-4 mr-2" /> Get Cricket ID Now
            </Button>
          </div>
        </div>

        {/* Why Get ID from Khelo24App */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Get Your Cricket ID from Khelo24App?</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <p className="font-bold">📱 Works on Any Device</p>
            <p className="text-sm text-muted-foreground">Android or iPhone, desktop or mobile</p>
          </div>
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <p className="font-bold">💰 Fast Withdrawal</p>
            <p className="text-sm text-muted-foreground">Winnings transferred instantly to your UPI</p>
          </div>
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <p className="font-bold">🔐 Bank-Level Security</p>
            <p className="text-sm text-muted-foreground">256-bit SSL encryption keeps you protected</p>
          </div>
        </div>

        {/* Which Matches */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Which Cricket Matches Can You Bet On?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {MATCHES.map((m) => (
            <div key={m.name} className="p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <h3 className="font-bold text-primary mb-1">🏏 {m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/30">
          <h2 className="text-xl font-bold mb-2">Ready to Start Betting?</h2>
          <p className="text-muted-foreground mb-4">Get your Cricket Betting ID in just 5 minutes via WhatsApp!</p>
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Get Your Cricket ID Now
          </Button>
        </div>
      </section>

      <CricketFAQ />

      <RelatedLinks links={[{ to: "/blog/live-cricket-betting-tips-online", label: "Cricket Betting Tips 2026" }, { to: "/blog/best-cricket-prediction-sites-online", label: "Best Cricket Prediction Sites" }, { to: "/blog/how-to-bet-on-live-cricket-matches-online", label: "How to Bet on Live Cricket" }, { to: "/about", label: "About khelo24app.live" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
