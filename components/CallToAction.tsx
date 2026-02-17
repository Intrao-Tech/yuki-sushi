
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative w-full bg-[#3E2723] overflow-hidden py-24 md:py-32 lg:py-48">
      {/* Background Decorative Elements - Soft Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 600 C 200 400, 500 800, 800 500 S 1200 700, 1600 400" stroke="white" strokeWidth="80" strokeLinecap="round" opacity="0.5"/>
          <path d="M-100 700 C 300 500, 600 900, 900 600 S 1300 800, 1700 500" stroke="white" strokeWidth="60" strokeLinecap="round" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="text-[#FF7043] text-[10px] font-bold tracking-[0.2em] uppercase">Experience Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Elevating the moment, <br />
              one <span className="italic font-light text-[#FF7043]">bite</span> at a time
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-12 leading-relaxed font-light">
              Taste the difference 2026 brings to traditional craft; premium, fresh ingredients
              and authentic techniques for an unparalleled journey in flavor.
            </p>
            <button className="group inline-flex items-center gap-4 px-10 py-5 bg-[#FF7043] text-white text-lg font-bold rounded-full hover:bg-[#E64A19] transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_-10px_rgba(255,112,67,0.4)]">
              Explore Menu
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/*
            Right Visual Column — Tight diagonal "school of fish" composition.
            Characters are clustered as a group, not scattered independently.
            They overlap slightly and form a clear top-left → bottom-right diagonal.
          */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] lg:h-[800px] flex items-center justify-center">

            {/* Swordfish — Top-right, swimming diagonally */}
            <img
              src="/assets/swordfish-removebg.png"
              alt="Swordfish character"
              className="char char-dark float-a absolute w-[300px] md:w-[420px] lg:w-[520px] z-30"
              style={{
                '--r': '-18deg',
                top: '-2%',
                right: '-5%',
              } as React.CSSProperties}
            />

            {/* Angry Piranha — Middle-left, facing toward the text */}
            <img
              src="/assets/angry_piranha.png"
              alt="Angry piranha character"
              className="char char-dark float-b absolute w-[220px] md:w-[300px] lg:w-[360px] z-20"
              style={{
                '--r': '6deg',
                top: '33%',
                left: '-10%',
              } as React.CSSProperties}
            />

            {/* Whale with Chef Hat — Bottom-right, balancing the swordfish */}
            <img
              src="/assets/whale_with_chef_hat.png"
              alt="Whale chef character"
              className="char char-dark float-c absolute w-[260px] md:w-[360px] lg:w-[440px] z-10"
              style={{
                '--r': '5deg',
                bottom: '-2%',
                right: '-8%',
              } as React.CSSProperties}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-[20%] left-[5%] w-3 h-3 bg-[#FF7043] rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="absolute bottom-[25%] right-[15%] w-4 h-4 bg-[#FF7043] rounded-full blur-md opacity-40 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-[45%] right-[10%] w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
