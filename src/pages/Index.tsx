import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { WinnersTicker } from "@/components/WinnersTicker";
import { TrustSection } from "@/components/TrustSection";
import { PopularGames } from "@/components/PopularGames";
import { GameSections } from "@/components/GameSections";
import { Promotions } from "@/components/Promotions";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PaymentBar } from "@/components/PaymentBar";
import { FAQ } from "@/components/FAQ";
import { HomeContent } from "@/components/HomeContent";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Khelo24Id – Online Cricket Betting ID India | Fast Withdrawal | 24x7 Support",
    description: "Khelo24Id.live - India's trusted online cricket betting ID provider. Get free cricket ID instantly, play IPL betting, Aviator, Teen Patti with fast withdrawals under 5 minutes and 24x7 WhatsApp support.",
    canonical: "/",
  });

  return (
    <main>
      <Header />
      <h1 className="text-3xl md:text-5xl font-black text-center py-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        India's Best Online Cricket Betting ID Platform
      </h1>
      <HeroSlider />
      <StatsBar />
      <WinnersTicker />
      <TrustSection />
      <PopularGames />
      <GameSections />
      <Promotions />
      <WhatsAppCTA />
      <PaymentBar />
      <HomeContent />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
