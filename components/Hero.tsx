
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: 'General Fitness' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Interior" 
          className="w-full h-full object-cover grayscale-[40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 border border-orange-600/30 rounded-full px-4 py-1">
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">Now Open in Saket Nagar, Kanpur</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-oswald font-extrabold uppercase leading-[1.1] tracking-tight">
            Elevate Your <span className="text-orange-600">Strength</span> <br /> 
            Transform Your Life
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
            The most accessible unisex fitness destination in Juhi Kalan. Professional equipment, expert guidance, and a supportive community to help you achieve your goals.
          </p>
          <div className="flex items-center space-x-4">
             <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-10 h-10 rounded-full border-2 border-zinc-900 shadow-xl" alt="Member" />
                ))}
             </div>
             <div className="text-sm">
               <div className="flex text-orange-500">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
               </div>
               <p className="text-zinc-300 font-semibold italic">Join 500+ Local Members</p>
             </div>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="bg-zinc-900/90 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-oswald font-bold uppercase">Membership Enquiry</h2>
            <p className="text-zinc-400 text-sm">Start your transformation today. Fill the form below!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors"
                placeholder="Ex: Rajesh Kumar"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Phone Number</label>
              <input 
                type="tel" 
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors"
                placeholder="Ex: +91 9876543210"
                value={formState.phone}
                onChange={(e) => setFormState({...formState, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Service Interest</label>
              <select 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors appearance-none"
                value={formState.service}
                onChange={(e) => setFormState({...formState, service: e.target.value})}
              >
                <option>General Fitness</option>
                <option>Weight Management</option>
                <option>Strength Training</option>
                <option>Cardio Fitness</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-oswald font-bold uppercase tracking-widest py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-600/20"
            >
              Get Free Consultation
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-center text-sm rounded-lg animate-fade-in">
              Thanks {formState.name}! We'll call you shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
