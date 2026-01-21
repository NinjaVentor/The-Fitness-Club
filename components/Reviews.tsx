
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Abhishek Tiwari",
      role: "Member for 2 Years",
      text: "Best gym in Saket Nagar. The equipment is very well maintained and the environment is highly professional. Definitely recommended for strength training.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Regular Member",
      text: "As a woman, I find this unisex gym very safe and comfortable. The timing is flexible, and the staff is quite supportive of my weight loss journey.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Fitness Enthusiast",
      text: "Cleanliness is top-notch. It's great to have a high-quality gym near Barra Bypass Road that doesn't feel overcrowded. 5 stars from me!",
      rating: 5
    }
  ];

  return (
    <div className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Google Reviews
          </div>
          <h3 className="text-4xl md:text-5xl font-oswald font-black uppercase">What Our <span className="text-orange-600">Local Community</span> Says</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto">Don't just take our word for it. Hear from your neighbors in Saket Nagar and Juhi Kalan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between hover:bg-zinc-900/60 transition-colors">
              <div>
                <div className="flex text-orange-500 mb-4">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-zinc-300 italic mb-6 leading-relaxed">"{rev.text}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500 font-oswald font-bold text-lg">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-oswald font-bold uppercase tracking-wide leading-none">{rev.name}</h4>
                  <span className="text-zinc-500 text-xs">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-widest">View all 150+ reviews on Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
