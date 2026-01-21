
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="trust">
          <TrustBadges />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about" className="bg-zinc-900/50">
          <WhyChooseUs />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="reviews" className="bg-zinc-900/50">
          <Reviews />
        </section>
        
        <section id="contact">
          <FooterCTA />
        </section>
      </main>

      <footer className="bg-black py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} The Fitness Club. Saket Nagar, Juhi Kalan, Kanpur.</p>
          <p className="mt-2 italic">Empowering your fitness journey near Barra Bypass Road.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
