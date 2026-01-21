
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Local Accessibility",
      desc: "Conveniently located near Barra Bypass Road, making daily workouts a breeze for residents of Saket Nagar & Juhi Kalan.",
      icon: "📍"
    },
    {
      title: "Flexible Hours",
      desc: "Operating from 5 AM to 10 PM to accommodate your busy work or study schedule without compromise.",
      icon: "⏰"
    },
    {
      title: "Premium Equipment",
      desc: "We maintain our cardio and strength machinery meticulously to ensure safety and peak performance.",
      icon: "🏋️‍♂️"
    },
    {
      title: "Supportive Atmosphere",
      desc: "A community-focused unisex environment where everyone feels comfortable and motivated to train.",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            className="rounded-3xl shadow-2xl z-10 relative" 
            alt="Workout" 
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-600 rounded-3xl -z-10 animate-pulse hidden lg:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-4xl font-oswald font-black text-orange-500">10+</p>
            <p className="text-white text-xs uppercase font-bold tracking-widest">Years of Excellence</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-orange-600 font-oswald font-bold uppercase tracking-widest text-sm">Our Distinction</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-black uppercase">Why We Are Saket Nagar's <span className="text-orange-600">Top Choice</span></h3>
            <p className="text-zinc-400">Our success is built on high customer satisfaction and a relentless focus on creating a local hub for fitness lovers in Kanpur.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, idx) => (
              <div key={idx} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-orange-600/30 transition-all group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{r.icon}</div>
                <h4 className="font-oswald font-bold text-lg uppercase mb-2">{r.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
