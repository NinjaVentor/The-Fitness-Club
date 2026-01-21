
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop", size: "col-span-2 row-span-2" },
    { url: "https://images.unsplash.com/photo-1549476464-37392f71755a?q=80&w=1974&auto=format&fit=crop", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1574673001865-4527bc63f5d2?q=80&w=2069&auto=format&fit=crop", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1570829763335-b7c737b105d5?q=80&w=2012&auto=format&fit=crop", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-1" },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-orange-600 font-oswald font-bold uppercase tracking-widest text-sm">Visual Tour</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-black uppercase">Experience <span className="text-orange-600">The Vibe</span></h3>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm">Take a look at our clean, well-lit, and professionally managed training floors.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {images.map((img, idx) => (
            <div key={idx} className={`${img.size} overflow-hidden rounded-2xl group relative`}>
              <img 
                src={img.url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Gym Interior"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
