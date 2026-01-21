
import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <div className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-oswald font-black uppercase leading-none tracking-tighter">
            Ready to <span className="text-orange-600">Start?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            Visit us today near Barra Bypass Road. No appointments needed for a walkthrough. Your transformation awaits in Juhi Kalan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="tel:+910000000000" 
            className="group flex items-center space-x-4 bg-orange-600 hover:bg-orange-700 text-white px-8 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 w-full sm:w-auto"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Call Us Now</p>
              <p className="font-oswald font-bold text-xl tracking-wide">+91 0000 000 000</p>
            </div>
          </a>

          <a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white px-8 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <div className="bg-orange-600/20 p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Find Our Gym</p>
              <p className="font-oswald font-bold text-xl tracking-wide">Get Directions</p>
            </div>
          </a>
        </div>

        <div className="pt-12 grid md:grid-cols-3 gap-8 text-zinc-400 text-sm">
          <div className="space-y-2">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Address</p>
            <p>Saket Nagar, Juhi Kalan,<br />Near Barra Bypass Road, Kanpur</p>
          </div>
          <div className="space-y-2">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Timing</p>
            <p>Monday - Saturday<br />05:00 AM - 10:00 PM</p>
          </div>
          <div className="space-y-2">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Gym Type</p>
            <p>Unisex Facility<br />Cardio & Strength Training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
