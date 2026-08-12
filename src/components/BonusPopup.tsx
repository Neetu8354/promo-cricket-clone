import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { openWA } from "@/lib/wa";

export const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup on mount with a slight delay for smooth appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 pointer-events-auto"
        onClick={() => setIsVisible(false)}
      />

      {/* Popup */}
      <div className="relative z-50 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm mx-4 border border-accent/30">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close popup"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Content */}
          <div className="text-center space-y-4">
            {/* Bonus Icon & Text */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                🎁 100% BONUS
              </div>
              <p className="text-base md:text-lg text-white/90 font-semibold">
                Claim your 100% bonus now!
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                openWA();
                setIsVisible(false);
              }}
              className="w-full bg-white text-primary font-bold py-3 px-4 rounded-lg hover:bg-white/90 transition-all transform hover:scale-105 active:scale-95 shadow-lg text-sm md:text-base"
            >
              CLICK HERE — WHATSAPP
            </button>

            {/* Supporting Text */}
            <p className="text-xs md:text-sm text-white/80">
              Limited time offer. Terms apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
