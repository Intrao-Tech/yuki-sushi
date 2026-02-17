
import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Avocado Maki",
    description: "Fresh avocado wrapped in perfectly seasoned rice and nori.",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Uramaki Sushi",
    description: "Modern inside-out sushi rolls balancing flavor, texture, and elegance.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Makizushi Sushi",
    description: "Handcrafted makizushi rolls made from the finest, freshest ingredients.",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Maki Sushi",
    description: "Expertly rolled maki sushi crafted with fresh, balanced flavors.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=600",
  }
];

const Favorites: React.FC = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3E2723] tracking-tight">
          Curated Favorites
        </h2>
        <div className="relative">
          <p className="max-w-xs text-[#3E2723]/60 text-sm md:text-base leading-relaxed md:text-right">
            Discover our most celebrated sushi, thoughtfully curated for an elevated dining experience.
          </p>
          <img
            src="/assets/pufferfish_holding_maki_rolls.png"
            alt="Pufferfish holding maki"
            className="char float-c hidden md:block absolute w-[280px] lg:w-[360px] -left-36 lg:-left-48 -top-8 lg:-top-12 z-[1]"
            style={{ '--r': '8deg' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Menu Grid */}
      <div className="relative z-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {menuItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#3E2723] mb-2 group-hover:text-[#FF7043] transition-colors">
              {item.name}
            </h3>
            <p className="text-sm text-[#3E2723]/70 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
