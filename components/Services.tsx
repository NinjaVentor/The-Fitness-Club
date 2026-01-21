
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Strength Training",
      desc: "Comprehensive resistance programs focusing on muscle growth and raw power using modern racks and free weights.",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?q=80&w=2070&auto=format&fit=crop",
      tag: "Power"
    },
    {
      title: "Cardio Fitness",
      desc: "Advanced treadmills and elliptical machines designed to improve heart health and burn calories efficiently.",
      img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop",
      tag: "Endurance"
    },
    {
      title: "Weight Management",
      desc: "Personalized dietary advice paired with specific workout routines to help you reach your target weight safely.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      tag: "Wellness"
    },
    {
      title: "General Fitness",
      desc: "Balanced programs for daily health maintenance, flexibility, and overall functional well-being.",
      img: "https://images.unsplash.com/photo-1518611012118-2969c63b17b2?q=80&w=2070&auto=format&fit=crop",
      tag: "Lifestyle"
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-orange-600 font-oswald font-bold uppercase tracking-widest text-sm">Professional Programs</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-black uppercase">Tailored to Your <span className="text-orange-600">Ambition</span></h3>
        <p className="text-zinc-500 max-w-2xl mx-auto">From professional athletes to beginners, we provide the tools and environment for everyone to succeed in Saket Nagar.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all hover:border-orange-600/50">
            <div className="h-48 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-oswald font-bold text-xl uppercase tracking-tighter">{s.title}</h4>
                <span className="text-[10px] font-bold bg-orange-600/10 text-orange-500 px-2 py-1 rounded border border-orange-600/20 uppercase tracking-widest">{s.tag}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <a href="#contact" className="inline-flex items-center text-orange-500 text-xs font-bold uppercase tracking-widest hover:text-orange-400 transition-colors">
                Enquire Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
