const FAQ_ITEMS = [
  {
    question: "How can I contact Khelo24Id customer support?",
    answer: "You can reach Khelo24Id support 24x7 via WhatsApp. Click the 'Chat on WhatsApp' button on any page or the floating WhatsApp icon. Our team replies in under 2 minutes."
  },
  {
    question: "What is the response time for support queries?",
    answer: "Average response time is under 2 minutes on WhatsApp. For complex issues like withdrawal verification or account recovery, resolution may take up to 30 minutes."
  },
  {
    question: "Which languages does Khelo24Id support offer?",
    answer: "Khelo24Id customer support is available in Hindi, English, Telugu, and Tamil. You can chat in the language you are most comfortable with."
  },
  {
    question: "Can I get help with my cricket betting ID on WhatsApp?",
    answer: "Yes. Our support team can help you create a free cricket betting ID, reset your password, fix login issues, and guide you through deposits and withdrawals."
  },
  {
    question: "What contact issues can Khelo24Id support help with?",
    answer: "We assist with account login, registration, deposits, withdrawals, game rules, cricket betting queries, Aviator and Teen Patti help, technical issues, and responsible gambling tools."
  },
  {
    question: "Is Khelo24Id support available on weekends and holidays?",
    answer: "Yes, Khelo24Id support is available 24 hours a day, 7 days a week, including weekends and Indian public holidays."
  }
];

const ContactFAQ = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <section className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Support FAQs</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-5 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-2">{item.question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactFAQ;
