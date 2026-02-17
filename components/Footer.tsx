
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-56 md:mt-80 bg-[#121D1D]">
      {/* Overlapping Hero Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] md:max-w-[700px] px-6 z-20">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
            alt="Overlapping Ramen Bowl"
            className="w-full h-auto rounded-full shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-[12px] border-[#121D1D] transition-transform duration-700 group-hover:scale-105"
          />
          {/*
            Pufferfish — Large, sitting proudly on the bottom-left of the bowl.
            Big enough to be a clear design element, not a sticker.
            Angled like it's swimming up and presenting the dish.
          */}
          <img
            src="/assets/pufferfish_holding_maki_rolls.png"
            alt=""
            className="char char-dark float-c absolute z-30 w-[180px] md:w-[260px] lg:w-[320px] -bottom-12 md:-bottom-20 -right-14 md:-right-24 lg:-right-36"
            style={{ '--r': '-15deg' } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-64 md:pt-96 pb-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-center border-b border-white/10 pb-16">

          {/* Tagline */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Timeless recipes to <br /> savor <span className="italic text-[#FF7043] font-light">&</span> enjoy
            </h3>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF7043]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF7043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Our Location</p>
              <address className="text-white/80 not-italic text-sm leading-relaxed">
                42 Brick Lane, Shoreditch<br />
                London E1 6RF
              </address>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-4 lg:justify-end">
            <div className="w-10 h-10 rounded-full bg-[#FF7043]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF7043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Get In Touch</p>
              <p className="text-white/80 text-sm leading-relaxed">
                hello@yukisushi.co.uk<br />
                +44 20 7946 0958
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Copyright */}
          <p className="text-white/30 text-xs order-3 md:order-1">
            &copy; 2026 Yuki Sushi. All rights reserved.
          </p>

          {/* Logo */}
          <div className="order-1 md:order-2">
             <span className="text-2xl font-serif font-bold text-white tracking-tight">
              Yuki <span className="text-[#FF7043]">Sushi</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 order-2 md:order-3">
            <a href="#" className="text-white/30 hover:text-[#FF7043] text-[10px] font-bold tracking-widest uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-[#FF7043] text-[10px] font-bold tracking-widest uppercase transition-colors">Terms</a>
            <a href="#" className="text-white/30 hover:text-[#FF7043] text-[10px] font-bold tracking-widest uppercase transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="waves-footer" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q 20 0, 40 20 T 80 20" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves-footer)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
