const FAQ_ITEMS = [
  {
    question: "How long does it take to get a Cricket Betting ID?",
    answer: "Your Cricket Betting ID is delivered in just 5 minutes! Click any 'Get Cricket ID' button, verify your WhatsApp number, and our agent will send your unique ID and password instantly."
  },
  {
    question: "Is the Cricket Betting ID completely free?",
    answer: "Yes, absolutely! Getting your Cricket Betting ID on Khelo24Id is 100% free. There are no hidden charges, registration fees, or any cost to create your account."
  },
  {
    question: "Which cricket matches can I bet on?",
    answer: "You can bet on IPL, T20 World Cup, ODI World Cup, India vs Pakistan, domestic tournaments (Ranji Trophy, Vijay Hazare), and all major international cricket series. We cover ball-by-ball live betting."
  },
  {
    question: "What is the minimum deposit to start betting?",
    answer: "The minimum deposit is just ₹100. You can deposit via UPI (PhonePe, Google Pay, Paytm), IMPS, or Net Banking. All transactions are secure and encrypted."
  },
  {
    question: "How fast are withdrawals from my Cricket ID account?",
    answer: "Withdrawals are processed in under 5 minutes directly to your UPI, PhonePe, or Paytm account. No delays, no hidden fees — your winnings reach you instantly."
  },
  {
    question: "Is my Cricket Betting ID safe and secure?",
    answer: "Yes. Khelo24Id uses 256-bit SSL encryption — the same technology used by major banks. Your personal data, betting history, and financial transactions are completely protected."
  }
];

const CricketFAQ = () => {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Cricket Betting ID — Frequently Asked Questions</h2>
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

export default CricketFAQ;
