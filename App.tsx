
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Favorites from './components/Favorites';
import CallToAction from './components/CallToAction';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-[#FF7043]/30 bg-white">
      {/* Floating Navbar Container */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <Navbar />
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Top section with warm cream background */}
        <div className="bg-[#FFF8F0]">
          <div className="pt-32 md:pt-40">
            <Hero />
          </div>
          <Favorites />
        </div>
        
        {/* Transition to clean white section */}
        <CallToAction />
        <Blog />
      </main>
      
      {/* Footer overlaps onto the white background of the Blog section */}
      <Footer />
    </div>
  );
};

export default App;
