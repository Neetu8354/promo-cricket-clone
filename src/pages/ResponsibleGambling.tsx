import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { AlertTriangle, Clock, Shield, Heart, Phone, Ban } from "lucide-react";

const TIPS = [
  { icon: Clock, title: "Set Time Limits", desc: "Decide how much time you want to spend gaming before you start. Take regular breaks and stick to your schedule." },
  { icon: Shield, title: "Set Deposit Limits", desc: "Only deposit what you can afford to lose. Never chase losses or borrow money to gamble." },
  { icon: Heart, title: "Play for Fun", desc: "Gaming should be entertainment, not a way to make money. If it stops being fun, take a break." },
  { icon: Ban, title: "Self-Exclusion", desc: "If you need a break, contact us via WhatsApp to temporarily or permanently exclude yourself from the platform." },
];

const WARNING_SIGNS = [
  "Spending more money than you can afford",
  "Neglecting work, family, or other responsibilities",
  "Borrowing money or selling possessions to gamble",
  "Feeling anxious or irritable when not gambling",
  "Lying about your gambling habits",
  "Chasing losses to try to win back money",
  "Gambling to escape problems or negative feelings",
  "Difficulty controlling or stopping gambling",
];

const ResponsibleGambling = () => {
  useSeo({
    title: "Responsible Gambling – Khelo24Id.live | Play Safe & Stay in Control",
    description: "Khelo24Id.live promotes responsible gambling. Learn about setting limits, recognizing problem gambling signs, and accessing support resources.",
    canonical: "/responsible-gambling",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Responsible Gambling" }]} />
      <section className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Responsible <span className="text-gradient-gold">Gambling</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          At Khelo24Id.live, we are committed to promoting responsible gambling. Gaming should be an enjoyable form of entertainment, not a source of stress or financial hardship.
        </p>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-10">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-yellow-500 mb-2">18+ Only</h2>
              <p className="text-muted-foreground">
                Our platform is strictly for users aged 18 and above. We verify the age of all users and do not permit minors to access our services. If you are under 18, please leave this site immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tips for Responsible Gaming</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TIPS.map((tip) => (
                <div key={tip.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
                  <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Warning Signs of Problem Gambling</h2>
            <p className="text-muted-foreground mb-4">
              If you recognize any of these signs in yourself or someone you know, it may be time to seek help:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {WARNING_SIGNS.map((sign, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  {sign}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Self-Exclusion Options</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you feel you need a break from gambling, we offer several self-exclusion options:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong className="text-foreground">Cooling-Off Period:</strong> Take a break for 24 hours, 7 days, or 30 days</li>
              <li><strong className="text-foreground">Self-Exclusion:</strong> Exclude yourself for 6 months or 1 year</li>
              <li><strong className="text-foreground">Permanent Exclusion:</strong> Permanently close your account</li>
              <li><strong className="text-foreground">Deposit Limits:</strong> Set daily, weekly, or monthly deposit limits</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To activate any of these options, contact our support team via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Help</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you or someone you know is struggling with gambling addiction, please reach out to professional help organizations:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-card/50 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Gamblers Anonymous India</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  A fellowship of people who share their experience, strength, and hope with each other to recover from gambling addiction.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-card/50 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">iCall</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Psychosocial helpline providing free counseling services. Available Monday to Saturday.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Khelo24Id.live is committed to providing a safe and responsible gaming environment. We:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Verify the age of all users to prevent underage gambling</li>
              <li>Provide tools for setting deposit and time limits</li>
              <li>Offer self-exclusion options for those who need a break</li>
              <li>Train our support staff to recognize signs of problem gambling</li>
              <li>Never encourage users to gamble beyond their means</li>
              <li>Provide clear information about the risks of gambling</li>
            </ul>
          </section>

          <section className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Need Help?</h2>
            <p className="text-muted-foreground">
              Our support team is available 24x7 via WhatsApp. If you need assistance with responsible gambling tools or want to discuss your gaming habits, please don't hesitate to reach out. We're here to help.
            </p>
          </section>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ResponsibleGambling;
