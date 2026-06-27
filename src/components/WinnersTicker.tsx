import { openWA } from "@/lib/wa";
import { Trophy } from "lucide-react";

const TICKER = [
  "Get your free Cricket ID on WhatsApp",
  "Fast withdrawals in under 5 minutes",
  "Play IPL, Aviator, Teen Patti & more",
  "24x7 support in Hindi, English, Telugu & Tamil",
  "UPI deposits from ₹100",
  "Secure & trusted gaming platform",
  "Join thousands of players across India",
];

export const WinnersTicker = () => {
  const items = [...TICKER, ...TICKER];
  return (
    <section className="border-b border-border bg-card/30 overflow-hidden">
      <div className="container py-3 flex items-center gap-3 sm:gap-4">
        <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/15 border border-secondary/40">
          <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary" />
          <span className="text-[10px] sm:text-xs font-bold text-secondary tracking-wider">LIVE UPDATES</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {items.map((msg, i) => (
              <button key={i} onClick={openWA} className="flex items-center gap-2 text-sm hover:text-primary transition-smooth">
                <span className="text-muted-foreground">{msg}</span>
                <span className="text-muted-foreground/40">•</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
