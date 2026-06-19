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
    description: 'Get 24x7 support for login, deposits, withdrawals and games on Khelo24Id.live.'
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
  }
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
  
  // Create directory and write file
  const dirPath = path.join(DIST_DIR, route);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  
  console.log(`✓ Generated ${route}/index.html`);
}

console.log('\n✅ All pages generated with correct canonical tags!');
