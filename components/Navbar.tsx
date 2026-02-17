
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1200px] px-4 py-3 md:px-8 md:py-4 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
      {/* Left Links */}
      <div className="hidden md:flex items-center gap-8 flex-1">
        <a href="#" className="text-sm font-medium text-[#3E2723] hover:text-[#FF7043] transition-colors">Home</a>
        <a href="#" className="text-sm font-medium text-[#3E2723] hover:text-[#FF7043] transition-colors">Menu</a>
        <a href="#" className="text-sm font-medium text-[#3E2723] hover:text-[#FF7043] transition-colors">Delivery</a>
        <a href="#" className="text-sm font-medium text-[#3E2723] hover:text-[#FF7043] transition-colors">About</a>
      </div>

      {/* Logo - Middle */}
      <div className="flex justify-center md:px-4">
        <span className="text-xl md:text-2xl font-serif font-bold text-[#3E2723] tracking-tight whitespace-nowrap">
          Yuki <span className="text-[#FF7043]">Sushi</span>
        </span>
      </div>

      {/* Right Action */}
      <div className="flex justify-end flex-1">
        <button className="hidden sm:block px-6 py-2.5 bg-[#3E2723] text-white text-sm font-semibold rounded-full hover:bg-[#2D1B18] transition-all transform hover:scale-105 active:scale-95">
          Order Now
        </button>
        {/* Mobile menu toggle placeholder */}
        <button className="sm:hidden p-2 text-[#3E2723]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
