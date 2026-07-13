import { Link } from "react-router-dom";

export const HomeContent = () => (
  <section className="container py-10 md:py-14">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black mb-6">
        Welcome to <span className="text-gradient-gold">khelo24app.live</span> – India's Trusted Online Cricket Betting Platform
      </h2>
      
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed">
          <strong className="text-foreground">khelo24app.live</strong> is India's premier online cricket betting platform, offering a seamless gaming experience with instant withdrawals, 24x7 WhatsApp support, and secure UPI transactions. Whether you're looking to bet on IPL matches, play Aviator crash game, or enjoy Teen Patti with live dealers, we've got you covered.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Why Choose khelo24app.live?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-foreground">Free Cricket ID:</strong> Get your betting ID instantly via WhatsApp – no lengthy registration forms</li>
          <li><strong className="text-foreground">Fast Withdrawals:</strong> Receive your winnings in under 5 minutes directly to your bank account or UPI</li>
          <li><strong className="text-foreground">Secure Transactions:</strong> All deposits and withdrawals are encrypted and processed through trusted payment gateways</li>
          <li><strong className="text-foreground">24x7 Support:</strong> Our trained support team is available round the clock in Hindi, English, Telugu, and Tamil</li>
          <li><strong className="text-foreground">Best Odds:</strong> Competitive odds on IPL, T20 World Cup, ODI matches, and all major cricket tournaments</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Popular Games on khelo24app.live</h3>
        <p className="leading-relaxed">
          Our platform offers a wide variety of games tailored for Indian players:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><Link to="/cricket" className="text-primary hover:underline">Live Cricket Betting</Link> – Bet on IPL, T20 World Cup, Asia Cup, and international matches with real-time odds</li>
          <li><Link to="/aviator" className="text-primary hover:underline">Aviator Crash Game</Link> – Watch the multiplier rise and cash out before it crashes for big wins</li>
          <li><Link to="/teen-patti" className="text-primary hover:underline">Teen Patti Online</Link> – India's favourite 3-card poker game with live dealers</li>
          <li><strong className="text-foreground">Andar Bahar</strong> – Classic Indian card game with instant payouts</li>
          <li><strong className="text-foreground">Roulette & More</strong> – Premium casino games available 24/7</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">How to Get Started</h3>
        <p className="leading-relaxed">
          Getting started on khelo24app.live is simple and takes less than 60 seconds:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Click any "Get ID on WhatsApp" button on our website</li>
          <li>Our agent will share your unique ID and password instantly</li>
          <li>Deposit via UPI (PhonePe, Google Pay, Paytm) with a minimum of ₹100</li>
          <li>Start playing and winning on your favourite games</li>
        </ol>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Safe and Responsible Gaming</h3>
        <p className="leading-relaxed">
          At khelo24app.live, we are committed to promoting <Link to="/responsible-gambling" className="text-primary hover:underline">responsible gambling</Link>. We encourage all players to set deposit limits, take regular breaks, and play within their means. Our platform is strictly for users aged 18 and above. If you feel gambling is affecting your life, please visit our responsible gambling page for help resources.
        </p>

        <p className="leading-relaxed">
          For any questions or assistance, our <Link to="/contact" className="text-primary hover:underline">24x7 support team</Link> is just a WhatsApp message away. Read our <Link to="/blog" className="text-primary hover:underline">betting guides and tips</Link> to improve your game strategy and maximize your winnings.
        </p>
      </div>
    </div>
  </section>
);
