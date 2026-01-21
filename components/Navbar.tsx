
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl font-oswald italic">FC</span>
          </div>
          <span className="text-white font-oswald text-2xl font-bold tracking-tighter uppercase hidden sm:block">
            The Fitness <span className="text-orange-600">Club</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-orange-500 transition-colors uppercase font-oswald text-sm tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <a
            href="tel:+910000000000"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-oswald font-semibold transition-all hover:scale-105 active:scale-95 block"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
