import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I create an account on Khelo24Id?", a: "It's incredibly simple! Click the Register button on our website, enter your mobile number, verify with an OTP, and you're done. Your Cricket Betting ID will be delivered straight to your WhatsApp within 5 minutes." },
  { q: "What is the minimum deposit amount?", a: "You can get started with as little as ₹100! We believe every player deserves to enjoy the thrill of gaming — whether you're a first-timer or a seasoned pro." },
  { q: "How fast are withdrawals processed?", a: "Our withdrawals are among the fastest in India. Once you submit a withdrawal request, your money reaches your UPI, PhonePe, or Paytm account within 15–30 minutes — including on weekends!" },
  { q: "Is Khelo24Id safe and secure?", a: "Absolutely. Khelo24Id.live uses 256-bit SSL encryption — the same technology used by major banks. Your personal data and financial transactions are completely protected at all times." },
  { q: "Which payment methods are accepted?", a: "We support all major Indian payment methods: UPI, PhonePe, Google Pay, Paytm, IMPS, and Net Banking. Fast, easy, and completely free of transaction charges." },
  { q: "How can I win at the Aviator game?", a: "Strategy is everything in Aviator. Smart players set a consistent cash-out target (like 1.5x or 2x) and stick to it for steady winnings. Use the Auto Cash Out feature and resist the temptation of chasing huge multipliers every round." },
  { q: "How do I contact customer support?", a: "Our support team is available 24x7! Reach us via WhatsApp, live chat on the website, or email. We respond within minutes in both English and Hindi." },
  { q: "Can I play on my mobile phone?", a: "Yes! Khelo24Id.live is fully optimized for mobile. No app download needed — simply open the website in your browser on any Android or iPhone and enjoy a seamless gaming experience." },
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
            <AccordionContent className="text-muted-foreground">
              {f.a}
              {/* Hidden text for SEO - always present in HTML source */}
              <span className="sr-only">{f.a}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    {/* Hidden FAQ content for SEO - always present in page source */}
    <div hidden>
      {FAQS.map((f, i) => (
        <div key={`hidden-faq-${i}`}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  </section>
);
