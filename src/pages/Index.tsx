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
    title: "Khelo24Id – #1 Cricket Betting ID & Online Casino India | Fast Withdrawal",
    description: "Get your Cricket Betting ID in 5 minutes at Khelo24Id.live! Play IPL betting, Aviator, Teen Patti & 500+ casino games. Fast UPI withdrawal & 24x7 support. Join India's most exciting betting platform today!",
    canonical: "/",
  });

  return (
    <main>
      <Header />
      <h1 className="text-3xl md:text-5xl font-black text-center py-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        Get Your Cricket Betting ID Instantly — Play, Win & Withdraw Fast at Khelo24Id
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
