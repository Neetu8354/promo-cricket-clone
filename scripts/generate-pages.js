/**
 * Post-build script to generate individual HTML files for each route
 * with correct canonical tags, meta titles, and descriptions.
 * This ensures Google sees the correct SEO tags in the raw HTML.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist');
const SITE = 'https://www.khelo24id.live';

const PAGES = {
  '/cricket': {
    title: 'Cricket Betting ID Online | Get Instant Cricket ID – Khelo24Id.live',
    description: 'Get your Online Cricket Betting ID in just 5 minutes at Khelo24Id! Bet on IPL, T20 World Cup & all cricket matches. Best odds, fast UPI withdrawal & 24x7 support. Register now!'
  },
  '/aviator': {
    title: 'Aviator Game Online India | Play & Win at Khelo24Id.live',
    description: 'Play Aviator crash game at Khelo24Id! India\'s most thrilling online game — watch the multiplier rise and cash out at the perfect moment. Register now & claim your welcome bonus!'
  },
  '/teen-patti': {
    title: 'Teen Patti Online Real Money | Play Live Teen Patti – Khelo24Id',
    description: 'Play Teen Patti online with real money at Khelo24Id.live! Enjoy live dealers, multiple game variants & instant UPI withdrawals. India\'s most trusted Teen Patti platform. Join now!'
  },
  '/about': {
    title: 'About Khelo24Id.live | Trusted Cricket Betting Platform India',
    description: 'Learn about Khelo24Id.live - India\'s trusted online cricket betting platform. Fast withdrawals under 5 minutes, 24x7 WhatsApp support, and secure UPI transactions.'
  },
  '/contact': {
    title: 'Contact Us – Khelo24Id.live | 24x7 Support',
    description: 'Contact Khelo24Id for 24x7 WhatsApp support in Hindi, English, Telugu & Tamil. Get help with your cricket betting ID, deposits, withdrawals and more.'
  },
  '/blog': {
    title: 'Cricket Betting Tips & Guides | Khelo24Id.live Blog',
    description: 'Expert cricket betting tips, Aviator strategies, and step-by-step guides on Khelo24Id.live. Learn how to bet on IPL, get free cricket ID, and win more.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy – Khelo24Id.live | Data Protection & Security',
    description: 'Read Khelo24Id.live\'s privacy policy. Learn how we collect, use, and protect your personal information on our online cricket betting platform.'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions – Khelo24Id.live | User Agreement',
    description: 'Read the terms and conditions for using Khelo24Id.live. Understand your rights and responsibilities on our online cricket betting platform.'
  },
  '/responsible-gambling': {
    title: 'Responsible Gambling – Khelo24Id.live | Play Safe & Stay in Control',
    description: 'Khelo24Id.live promotes responsible gambling. Learn about setting limits, recognizing problem gambling signs, and accessing support resources.'
  },
  '/payment-methods': {
    title: 'Payment Methods | Deposit & Withdrawal Options | Khelo24Id.live',
    description: 'Learn about all payment methods on Khelo24Id.live. Deposit via UPI, IMPS, NEFT, Net Banking. Fast withdrawals under 5 minutes. Secure INR transactions.'
  },
  '/editorial-policy': {
    title: 'Editorial Policy | Content Standards | Khelo24Id.live',
    description: 'Read Khelo24Id.live\'s editorial policy. Learn about our content standards, accuracy commitment, responsible gambling messaging, and how we maintain trust.'
  },
  '/blog/how-to-login-khelo24id': {
    title: 'How to Login Khelo24Id | Step by Step Guide 2026',
    description: 'Complete step-by-step guide on how to login to Khelo24Id.live. Get your cricket betting ID via WhatsApp and start playing in under 60 seconds.'
  },
  '/blog/live-cricket-betting-tips-online': {
    title: 'Live Cricket Betting Tips Online 2026 | Khelo24Id.live',
    description: 'Get the best live cricket betting tips online for 2026. Expert predictions, match analysis and winning strategies on Khelo24Id.live.'
  },
  '/blog/best-cricket-prediction-sites-online': {
    title: 'Best Cricket Prediction Sites Online 2026 | Khelo24Id.live',
    description: 'Find the best cricket prediction sites online in 2026. Khelo24Id.live offers ML-powered predictions, live odds and expert analysis.'
  },
  '/blog/how-to-bet-on-live-cricket-matches-online': {
    title: 'How to Bet on Live Cricket Matches Online 2026 | Khelo24Id.live',
    description: 'Learn how to bet on live cricket matches online in 2026. Complete guide to live cricket betting on Khelo24Id.live with best odds.'
  },
  '/blog/best-online-sports-betting-platform-for-beginners': {
    title: 'Best Online Sports Betting Platform for Beginners 2026 | Khelo24Id.live',
    description: 'Discover the best online sports betting platform for beginners in 2026. Khelo24Id.live offers easy signup, free cricket ID and 24x7 support.'
  },
  '/blog/how-to-join-online-sports-gaming-website': {
    title: 'How to Join Online Sports Gaming Website 2026 | Khelo24Id.live',
    description: 'Complete guide on how to join online sports gaming website Khelo24Id.live. Get free cricket ID, deposit via UPI, and start playing instantly.'
  },
  '/blog/how-sports-betting-platforms-work-online': {
    title: 'How Sports Betting Platforms Work Online 2026 | Khelo24Id.live',
    description: 'Learn how sports betting platforms work online. Understand odds, deposits, withdrawals and gameplay on Khelo24Id.live.'
  },
  '/blog/safe-online-sports-betting-websites-2026': {
    title: 'Safe Online Sports Betting Websites 2026 | Khelo24Id.live',
    description: 'Discover safe online sports betting websites in 2026. Khelo24Id.live offers secure transactions, verified gameplay and fast withdrawals.'
  },
  '/blog/mobile-friendly-sports-betting-platforms': {
    title: 'Mobile Friendly Sports Betting Platforms 2026 | Khelo24Id.live',
    description: 'Discover the best mobile friendly sports betting platforms in 2026. Khelo24Id.live works perfectly on all phones with no app download needed.'
  },
  '/blog/how-to-use-khelo24id-online': {
    title: 'How to Use Khelo24Id Online | Complete Guide 2026',
    description: 'Learn how to use khelo24id online platform. Step by step guide to access the best online sports gaming platform and start playing instantly.'
  },
  '/blog/cricket-betting-id-india': {
    title: 'Cricket Betting ID India – Free ID & Fast Payouts | Khelo24Id',
    description: 'Get a free cricket betting ID in India on Khelo24Id. Bet on IPL, T20 World Cup & more. ₹100 min deposit, withdrawals in under 5 mins, 24x7 WhatsApp support.'
  }
};

const AUTHOR = {
  "@type": "Person",
  name: "Rahul Sharma",
  jobTitle: "Senior Cricket Betting Analyst",
  url: `${SITE}/about`,
};

const BLOG_POSTS = [
  { slug: "/blog/how-to-login-khelo24id",                          title: "How to Login Khelo24Id Step by Step Guide 2026",              desc: "Complete step by step guide on how to login khelo24id with username.",              datePublished: "2026-01-10", dateModified: "2026-05-12", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/how-to-use-khelo24id-online",                     title: "How to Use Khelo24Id Online — Complete Guide",                desc: "Learn how to use khelo24id online platform and start playing instantly.",            datePublished: "2026-01-18", dateModified: "2026-05-15", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/best-online-sports-betting-platform-for-beginners", title: "Best Online Sports Betting Platform for Beginners 2026",    desc: "India's easiest platform with free ID, fast payouts and 24x7 support.",             datePublished: "2026-02-03", dateModified: "2026-05-18", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/how-to-join-online-sports-gaming-website",        title: "How to Join Online Sports Gaming Website",                   desc: "Get free cricket ID, deposit via UPI, and start playing instantly.",               datePublished: "2026-02-14", dateModified: "2026-05-20", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/live-cricket-betting-tips-online",                 title: "Live Cricket Betting Tips Online 2026",                      desc: "Expert predictions, match analysis and winning strategies.",                      datePublished: "2026-02-28", dateModified: "2026-05-22", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/how-sports-betting-platforms-work-online",        title: "How Sports Betting Platforms Work Online",                   desc: "Understand odds, deposits, withdrawals and gameplay.",                             datePublished: "2026-03-10", dateModified: "2026-05-25", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/safe-online-sports-betting-websites-2026",        title: "Safe Online Sports Betting Websites 2026",                   desc: "Secure transactions, verified gameplay and fast withdrawals.",                    datePublished: "2026-03-22", dateModified: "2026-06-01", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/best-cricket-prediction-sites-online",            title: "Best Cricket Prediction Sites Online 2026",                  desc: "ML-powered predictions, live odds and expert analysis.",                          datePublished: "2026-04-05", dateModified: "2026-06-05", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/how-to-bet-on-live-cricket-matches-online",       title: "How to Bet on Live Cricket Matches Online",                  desc: "Complete guide to live cricket betting with best odds.",                          datePublished: "2026-04-18", dateModified: "2026-06-08", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/mobile-friendly-sports-betting-platforms",        title: "Mobile Friendly Sports Betting Platforms 2026",              desc: "Works perfectly on all phones with no app download needed.",                     datePublished: "2026-05-02", dateModified: "2026-06-10", image: `${SITE}/og-image.jpg` },
  { slug: "/blog/cricket-betting-id-india",                         title: "Cricket Betting ID India – Free ID & Fast Payouts | Khelo24Id", desc: "Get a free cricket betting ID in India. Bet on IPL, T20 World Cup & more with ₹100 min deposit and 5-min withdrawals.", datePublished: "2026-06-20", dateModified: "2026-06-23", image: `${SITE}/blog-cricket-betting-id-hero.jpg` },
];

const BLOG_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What kind of betting guides are available on the Khelo24Id blog?", acceptedAnswer: { "@type": "Answer", text: "Our blog covers cricket betting tips, Aviator strategies, Teen Patti guides, platform tutorials, and expert advice for Indian players. Every article is written in simple language to help beginners and experienced players alike." } },
    { "@type": "Question", name: "How often are new blog articles published?", acceptedAnswer: { "@type": "Answer", text: "We publish fresh betting guides and cricket match tips regularly, especially during major events like IPL, T20 World Cup, and ODI World Cup. Subscribe to stay updated with the latest strategies." } },
    { "@type": "Question", name: "Are the cricket betting tips on the blog reliable?", acceptedAnswer: { "@type": "Answer", text: "Yes, our cricket tips are based on team form, pitch reports, player stats, and historical data. While no prediction is guaranteed, our analysis helps you make more informed betting decisions." } },
    { "@type": "Question", name: "Can beginners learn how to bet from the blog?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We have beginner-friendly guides like how to login, how to join, how to deposit, and how to place your first cricket bet. Each guide includes step-by-step instructions." } },
    { "@type": "Question", name: "Is the blog content free to read?", acceptedAnswer: { "@type": "Answer", text: "Yes, all blog articles on Khelo24Id.live are completely free. You can read betting tips, game strategies, and platform guides without any registration or payment." } },
    { "@type": "Question", name: "How do I get my Cricket Betting ID after reading the blog?", acceptedAnswer: { "@type": "Answer", text: "Simply click the 'Get ID on WhatsApp' button on our website. Our support team will create your Cricket Betting ID and send it to your WhatsApp within 5 minutes." } },
  ]
};

const BLOG_LISTING_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Khelo24Id.live Blog",
  url: `${SITE}/blog`,
  description: "Expert cricket betting tips, Aviator strategies, and step-by-step guides for Indian players.",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Khelo24Id.live",
    url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` }
  },
  blogPost: BLOG_POSTS.map(post => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.desc,
    url: `${SITE}${post.slug}`,
    image: { "@type": "ImageObject", url: post.image },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: AUTHOR,
    publisher: { "@type": "Organization", name: "Khelo24Id.live", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${post.slug}` }
  }))
};

// Read the base index.html
const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

// Generate HTML for each page
for (const [route, meta] of Object.entries(PAGES)) {
  const canonicalUrl = SITE + route;
  
  let html = indexHtml;
  
  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );
  
  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  );
  
  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );
  
  // Replace twitter:title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  
  // Replace description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );
  
  // Replace og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );
  
  // Replace twitter:description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );
  
  // For /blog page, inject Blog schema and Blog FAQ schema
  if (route === '/blog') {
    const blogSchemaScript = `<script type="application/ld+json">\n${JSON.stringify(BLOG_LISTING_SCHEMA, null, 2)}\n</script>`;
    const blogFaqScript = `<script type="application/ld+json">\n${JSON.stringify(BLOG_FAQ_SCHEMA, null, 2)}\n</script>`;
    html = html.replace(
      '</head>',
      `${blogSchemaScript}\n    ${blogFaqScript}\n</head>`
    );
  }
  
  // For individual blog pages, fix og:type and og:image in static HTML
  if (route.startsWith('/blog/') && route !== '/blog') {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="article"`
    );
  }

  // For individual blog pages, inject BlogPosting schema
  if (route.startsWith('/blog/')) {
    const postMeta = BLOG_POSTS.find(p => p.slug === route) || {};
    const postImage = postMeta.image || `${SITE}/og-image.jpg`;
    html = html.replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${postImage}"`
    );
    html = html.replace(
      /<meta name="twitter:image" content="[^"]*"/,
      `<meta name="twitter:image" content="${postImage}"`
    );
    const blogPostSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title,
      description: meta.description,
      url: canonicalUrl,
      image: { "@type": "ImageObject", url: postMeta.image || `${SITE}/og-image.jpg` },
      datePublished: postMeta.datePublished || "2026-01-10",
      dateModified: postMeta.dateModified || "2026-06-10",
      author: AUTHOR,
      publisher: { "@type": "Organization", name: "Khelo24Id.live", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl }
    };
    const blogPostScript = `<script type="application/ld+json">\n${JSON.stringify(blogPostSchema, null, 2)}\n</script>`;
    html = html.replace(
      '</head>',
      `${blogPostScript}\n</head>`
    );
  }
  
  // For /contact, inject pre-rendered HTML content
  if (route === '/contact') {
    const contactContent = `
      <div id="root">
        <header class="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold text-lg">Khelo24Id</a>
          </div>
        </header>
        <nav class="border-b border-border">
          <div class="container py-2 text-sm text-muted-foreground">
            <a href="/">Home</a> / <span>Contact Us</span>
          </div>
        </nav>
        <main>
          <section class="container py-12 md:py-20">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Contact <span class="text-gradient-gold">Khelo24Id.live</span>
            </h1>
            <p class="text-muted-foreground max-w-2xl mb-10">We're here to help — reach out anytime for login issues, deposits, withdrawals or game queries.</p>

            <h2 class="text-xl md:text-2xl font-bold mb-6">24x7 Support Available</h2>
            <div class="grid sm:grid-cols-2 gap-4 max-w-2xl mb-10">
              <button class="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
                <div class="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">📱</div>
                <div>
                  <h3 class="font-bold mb-1">Live Chat</h3>
                  <p class="text-sm text-muted-foreground">Instant replies from our support team, available round the clock.</p>
                </div>
              </button>
              <button class="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
                <div class="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">🎧</div>
                <div>
                  <h3 class="font-bold mb-1">WhatsApp Assistance</h3>
                  <p class="text-sm text-muted-foreground">Chat with us on WhatsApp in Hindi, English, Telugu & Tamil.</p>
                </div>
              </button>
            </div>

            <div class="max-w-2xl mb-10">
              <h2 class="text-xl font-bold mb-3">How Can We Help?</h2>
              <ul class="text-sm text-muted-foreground space-y-2">
                <li>• Account login and registration issues</li>
                <li>• Deposit and withdrawal assistance</li>
                <li>• Game rules and betting queries</li>
                <li>• Technical support and troubleshooting</li>
                <li>• Responsible gambling tools and self-exclusion</li>
              </ul>
              <p class="text-sm text-muted-foreground mt-4">
                Our support team speaks Hindi, English, Telugu, and Tamil. Average response time is under 2 minutes.
              </p>
            </div>

            <div class="text-center">
              <button class="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 py-2 rounded-lg">
                💬 Chat on WhatsApp Now
              </button>
            </div>
          </section>

          <section class="container py-12 md:py-20 max-w-3xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">Contact Support FAQs</h2>
            <div class="space-y-4">
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">How can I contact Khelo24Id customer support?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">You can reach Khelo24Id support 24x7 via WhatsApp. Click the 'Chat on WhatsApp' button on any page or the floating WhatsApp icon. Our team replies in under 2 minutes.</p>
              </div>
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">What is the response time for support queries?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Average response time is under 2 minutes on WhatsApp. For complex issues like withdrawal verification or account recovery, resolution may take up to 30 minutes.</p>
              </div>
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">Which languages does Khelo24Id support offer?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Khelo24Id customer support is available in Hindi, English, Telugu, and Tamil. You can chat in the language you are most comfortable with.</p>
              </div>
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">Can I get help with my cricket betting ID on WhatsApp?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Yes. Our support team can help you create a free cricket betting ID, reset your password, fix login issues, and guide you through deposits and withdrawals.</p>
              </div>
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">What contact issues can Khelo24Id support help with?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">We assist with account login, registration, deposits, withdrawals, game rules, cricket betting queries, Aviator and Teen Patti help, technical issues, and responsible gambling tools.</p>
              </div>
              <div class="p-5 rounded-xl bg-card/50 border border-border">
                <h3 class="font-bold mb-2">Is Khelo24Id support available on weekends and holidays?</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Yes, Khelo24Id support is available 24 hours a day, 7 days a week, including weekends and Indian public holidays.</p>
              </div>
            </div>
          </section>

          <footer class="border-t border-border bg-background/50 py-8">
            <div class="container text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Khelo24Id.live. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    `;
    html = html.replace(
      '<div id="root"></div>',
      contactContent
    );

    // Inject ContactFAQ schema
    const contactFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I contact Khelo24Id customer support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach Khelo24Id support 24x7 via WhatsApp. Click the 'Chat on WhatsApp' button on any page or the floating WhatsApp icon. Our team replies in under 2 minutes."
          }
        },
        {
          "@type": "Question",
          name: "What is the response time for support queries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Average response time is under 2 minutes on WhatsApp. For complex issues like withdrawal verification or account recovery, resolution may take up to 30 minutes."
          }
        },
        {
          "@type": "Question",
          name: "Which languages does Khelo24Id support offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Khelo24Id customer support is available in Hindi, English, Telugu, and Tamil. You can chat in the language you are most comfortable with."
          }
        },
        {
          "@type": "Question",
          name: "Can I get help with my cricket betting ID on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our support team can help you create a free cricket betting ID, reset your password, fix login issues, and guide you through deposits and withdrawals."
          }
        },
        {
          "@type": "Question",
          name: "What contact issues can Khelo24Id support help with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We assist with account login, registration, deposits, withdrawals, game rules, cricket betting queries, Aviator and Teen Patti help, technical issues, and responsible gambling tools."
          }
        },
        {
          "@type": "Question",
          name: "Is Khelo24Id support available on weekends and holidays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Khelo24Id support is available 24 hours a day, 7 days a week, including weekends and Indian public holidays."
          }
        }
      ]
    };
    const contactFaqScript = `<script type="application/ld+json">\n${JSON.stringify(contactFaqSchema, null, 2)}\n</script>`;
    html = html.replace(
      '</head>',
      `${contactFaqScript}\n</head>`
    );
  }
  
  // Create directory and write file
  const dirPath = path.join(DIST_DIR, route);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  
  console.log(`✓ Generated ${route}/index.html`);
}

console.log('\n✅ All pages generated with correct canonical tags!');
