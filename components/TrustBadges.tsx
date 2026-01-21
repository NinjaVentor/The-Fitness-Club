
import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      label: "5.0-Star Rating",
      sub: "Highest rated on Google",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      label: "Unisex Gym",
      sub: "Inclusive environment for all",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      label: "5AM – 10PM",
      sub: "Open Mon to Sat",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: "Juhi Kalan",
      sub: "Heart of Saket Nagar",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-zinc-900 border-y border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 bg-zinc-800 p-4 rounded-2xl group-hover:bg-orange-600/10 transition-colors">
              {badge.icon}
            </div>
            <h3 className="font-oswald font-bold text-lg uppercase tracking-wide">{badge.label}</h3>
            <p className="text-zinc-500 text-sm">{badge.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
