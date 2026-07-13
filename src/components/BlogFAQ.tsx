import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BLOG_FAQS = [
  { q: "What kind of betting guides are available on the Khelo24App blog?", a: "Our blog covers cricket betting tips, Aviator strategies, Teen Patti guides, platform tutorials, and expert advice for Indian players. Every article is written in simple language to help beginners and experienced players alike." },
  { q: "How often are new blog articles published?", a: "We publish fresh betting guides and cricket match tips regularly, especially during major events like IPL, T20 World Cup, and ODI World Cup. Subscribe to stay updated with the latest strategies." },
  { q: "Are the cricket betting tips on the blog reliable?", a: "Yes, our cricket tips are based on team form, pitch reports, player stats, and historical data. While no prediction is guaranteed, our analysis helps you make more informed betting decisions." },
  { q: "Can beginners learn how to bet from the blog?", a: "Absolutely. We have beginner-friendly guides like how to login, how to join, how to deposit, and how to place your first cricket bet. Each guide includes step-by-step instructions." },
  { q: "Is the blog content free to read?", a: "Yes, all blog articles on khelo24app.live are completely free. You can read betting tips, game strategies, and platform guides without any registration or payment." },
  { q: "How do I get my Cricket Betting ID after reading the blog?", a: "Simply click the 'Get ID on WhatsApp' button on our website. Our support team will create your Cricket Betting ID and send it to your WhatsApp within 5 minutes." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BLOG_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const BlogFAQ = () => (
  <section className="container py-10 md:py-14">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black">Blog <span className="text-gradient-gold">FAQs</span></h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-2">
        {BLOG_FAQS.map((f, i) => (
          <AccordionItem key={i} value={`blog-item-${i}`} className="bg-card/50 border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
