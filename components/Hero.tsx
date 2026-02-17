
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-4 max-w-[1440px] mx-auto">
      {/* Top Content Stack */}
      <div className="relative z-10 max-w-4xl">
        {/* Subtle Accent Tag */}
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-[#FF7043]/10 border border-[#FF7043]/20">
          <span className="text-[#FF7043] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#FF7043] animate-pulse"></span>
            Established 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#3E2723] leading-[1.1] md:leading-[1.05] tracking-tight mb-6">
          Handcrafted Rolls, <br className="hidden md:block" />
          <span className="relative inline-block">
            Delivered
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF7043]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
            </svg>
          </span>{" "}
          Fresh.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#3E2723]/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience the pinnacle of Japanese culinary art. Yuki Sushi brings seasonal,
          premium-grade ingredients from the market to your table since early 2026.
        </p>

        {/* CTA Button with Shark mascot */}
        <div className="relative inline-block">
          <button className="relative z-[2] group flex items-center gap-3 px-8 py-4 bg-[#556B2F] text-white text-lg font-bold rounded-full hover:bg-[#3E4E22] transition-all transform hover:-translate-y-1 shadow-[0_12px_40px_-10px_rgba(85,107,47,0.4)]">
            Start Your Order
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          {/* Shark mascot — on button for desktop only */}
          <img
            src="/assets/shark-removebg.png"
            alt="Shark mascot — Yuki Sushi"
            className="char float-b absolute z-[1] hidden md:block w-[300px] lg:w-[360px] -right-32 lg:-right-40 -top-20 lg:-top-24"
            style={{ '--r': '8deg' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Visual Section - Bottom Half */}
      <div className="relative w-full mt-16 md:mt-24 flex justify-center pb-20">
        {/* Decorative Circle Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#FF7043]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] border border-[#FF7043]/10 rounded-full -z-10"></div>

        {/* Large Centered Plate/Sushi Image */}
        <div className="relative group max-w-[1000px] w-full px-4 transform hover:scale-[1.02] transition-transform duration-700 ease-out">
          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200"
            alt="Premium Sushi Rolls"
            className="w-full h-auto object-cover rounded-[40px] shadow-[0_32px_80px_-20px_rgba(62,39,35,0.25)] border-8 border-white/50"
          />

          {/* Shark mascot — on food photo for mobile only */}
          <img
            src="/assets/shark-removebg.png"
            alt="Shark mascot — Yuki Sushi"
            className="char float-b absolute z-30 block md:hidden w-[180px] -top-14 -right-6"
            style={{ '--r': '12deg' } as React.CSSProperties}
          />

          {/* Floating Highlight Cards */}
          <div className="absolute -top-6 -right-2 md:top-12 md:right-0 bg-white p-4 rounded-2xl shadow-xl border border-[#FFF8F0] transform rotate-3 hidden sm:block z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF7043]/20 rounded-lg flex items-center justify-center text-[#FF7043]">
                🍣
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#3E2723]">Premium Grade</p>
                <p className="text-[10px] text-[#3E2723]/60">Sashimi Quality</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 md:bottom-12 md:left-0 bg-[#556B2F] text-white p-4 rounded-2xl shadow-xl transform -rotate-3 hidden sm:block z-20">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <p className="text-xs font-bold">Fast Delivery</p>
                <p className="text-[10px] opacity-80">Under 30 Mins</p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Japanese-inspired pattern (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] -z-20 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q 20 0, 40 20 T 80 20" fill="none" stroke="#3E2723" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
