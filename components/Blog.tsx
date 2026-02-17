
import React from 'react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    date: "JANUARY 15, 2026",
    title: "The secret to perfect Omakase at home",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    date: "FEBRUARY 02, 2026",
    title: "A masterclass in seasonal bluefin tuna sourcing",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    date: "MARCH 10, 2026",
    title: "Mastering the perfect sushi rice at home",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800",
  }
];

const Blog: React.FC = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#FF7043] text-sm">🍣</span>
            <span className="text-[#FF7043] text-xs font-bold tracking-[0.2em] uppercase">
              News & Insights
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="relative z-[2] text-4xl md:text-5xl lg:text-6xl font-serif text-[#3E2723] leading-tight">
              Restaurant blog <span className="italic font-light text-[#FF7043]">&</span> update
            </h2>
            <img
              src="/assets/small_goldfish.png"
              alt=""
              className="char float-c hidden md:block absolute z-[1] w-[200px] lg:w-[280px] xl:w-[320px] -right-32 lg:-right-44 xl:-right-52 -top-24 lg:-top-36"
              style={{ '--r': '12deg' } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group text-left flex flex-col cursor-pointer">
              {/* Image */}
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Date */}
              <time className="text-[#FF7043] text-[10px] md:text-xs font-bold tracking-wider mb-4">
                {post.date}
              </time>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#3E2723]/10 mb-6"></div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-[#3E2723] leading-snug mb-8 group-hover:text-[#FF7043] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Read More Link */}
              <div className="mt-auto">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#3E2723]/60 uppercase hover:text-[#3E2723] transition-colors inline-flex items-center gap-1">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/*
        Goldfish — Far right edge of the section, vertically centered with the grid.
        Acts as a subtle environmental detail — like a fish swimming past the page.
        Large enough to be intentional (100px), faded enough to not compete with content.
      */}
    </section>
  );
};

export default Blog;
