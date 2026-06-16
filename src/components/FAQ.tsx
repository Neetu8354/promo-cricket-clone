import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I get my free Cricket ID?", a: "Click any 'Get ID on WhatsApp' button. Our agent will share your ID and password within 60 seconds. No registration forms or lengthy verification required for instant access." },
  { q: "What is the minimum deposit?", a: "₹100 via UPI, IMPS or Net Banking. All transactions are in Indian Rupees (INR). We support all major UPI apps including PhonePe, Google Pay, Paytm, and BHIM." },
  { q: "How fast are withdrawals?", a: "Withdrawals are processed in under 5 minutes directly to your bank account or UPI ID. We offer one of the fastest payout times in the industry with no hidden fees." },
  { q: "Which cricket events are covered?", a: "IPL, T20 World Cup, ODI World Cup, BBL, PSL, CPL, Test matches and all major domestic tournaments. We also cover international bilateral series and emerging cricket leagues." },
  { q: "How to play Aviator?", a: "Place your bet, watch the multiplier rise, and cash out before the plane crashes. The longer you wait, the higher the multiplier, but if you don't cash out in time, you lose your bet." },
  { q: "Is customer support available 24/7?", a: "Yes, our WhatsApp chat support runs 24x7 in Hindi, English, Telugu and Tamil. Our trained support agents can help with deposits, withdrawals, game queries, and technical issues." },
  { q: "Is online cricket betting legal in India?", a: "Online betting laws vary by state in India. We recommend checking your local regulations. Khelo24Id.live operates as an online gaming platform and encourages responsible gaming practices." },
  { q: "What is Teen Patti and how do I play?", a: "Teen Patti is a popular Indian card game similar to poker. Players are dealt 3 cards and bet on who has the best hand. Rankings include Trail (three of a kind), Pure Sequence, Sequence, Color, Pair, and High Card." },
  { q: "How do I verify my account?", a: "Account verification is done via WhatsApp. You may be asked to provide a valid government ID (Aadhaar/PAN) for withdrawals above certain limits. This ensures security and prevents fraud." },
  { q: "What payment methods are accepted?", a: "We accept UPI (PhonePe, Google Pay, Paytm, BHIM), IMPS, NEFT, and Net Banking from all major Indian banks. All transactions are secure and encrypted." },
  { q: "Can I play on mobile?", a: "Yes! Khelo24Id.live is fully optimized for mobile devices. You can play all games including cricket betting, Aviator, and Teen Patti directly from your smartphone browser without downloading any app." },
  { q: "What is responsible gambling?", a: "Responsible gambling means playing for entertainment within your financial limits. Set deposit limits, take breaks, and never chase losses. If you feel gambling is affecting your life, please visit our Responsible Gambling page for help resources." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const FAQ = () => (
  <section className="container py-10 md:py-14">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-2">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card/50 border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
