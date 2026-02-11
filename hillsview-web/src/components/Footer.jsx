import React from 'react';
import { Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-luxury-cream pt-16 md:pt-20 pb-8 md:pb-10 border-t border-luxury-sand relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-teal via-luxury-gold to-luxury-teal opacity-20" />

      <div className="container mx-auto px-6">
        {/* Brand + tagline */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-text mb-4">
            Hillsview
          </h2>
          <p className="text-luxury-sub text-sm">
            Designed for dignity. Built for care.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-luxury-sand/30">
          <div className="text-[10px] md:text-xs text-luxury-sub/60 order-2 md:order-1">
            © 2026 Hillsview Assisted Living. All rights reserved.
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block relative group cursor-pointer">
              <p className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-luxury-sand/50 hover:border-luxury-gold transition-all bg-white/50 shadow-sm hover:shadow-md">
                <span className="text-[8px] uppercase bg-gradient-to-r from-luxury-teal to-luxury-gold bg-clip-text text-transparent font-bold tracking-tighter group-hover:tracking-normal transition-all duration-300">
                  Powered by CorporateMirrors
                </span>

                <Sparkles className="w-2.5 h-2.5 text-luxury-gold group-hover:rotate-12 transition-transform" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
