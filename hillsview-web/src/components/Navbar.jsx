import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../scrollUtils';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen);
  }, [mobileOpen]);

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Team' },
    { id: 'care-levels', label: 'Living' },
    { id: 'services', label: 'Services' },
    { id: 'amenities', label: 'Amenities' },
  ];

  const handleClick = id => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 bg-luxury-cream/95 backdrop-blur-md border-b border-luxury-sand/30 transition-all duration-700 py-3 lg:py-4"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={() => scrollToId('top')}
          className="flex items-baseline gap-2 group decoration-0"
        >
          <span className="font-serif text-2xl lg:text-3xl font-bold text-luxury-text tracking-tight leading-none group-hover:text-luxury-teal transition-colors">
            Hillsview
          </span>
          <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-luxury-gold font-bold group-hover:text-luxury-teal transition-colors sm:inline-block">
            Assisted Living
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <div className="flex items-center gap-6 xl:gap-10 text-sm font-medium text-luxury-sub">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="hover:text-luxury-teal hover:underline decoration-luxury-gold underline-offset-8 decoration-2 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleClick('contact')}
            className="px-6 py-3 bg-luxury-teal text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-luxury-gold hover:text-white transition-all shadow-lg shadow-luxury-teal/20 hover:shadow-luxury-gold/20 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Reach Us</span>
          </button>
        </div>

        <button
          className="lg:hidden text-luxury-text p-2 relative z-50 focus:outline-none"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
    <div
  id="mobile-menu"
  className={`fixed inset-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center lg:hidden transition-transform duration-300 ${
    mobileOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-luxury-text p-2 rounded-full hover:bg-gray-100 transition z-[10001]"
          aria-label="Close Menu"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="bg-white flex flex-col space-y-8 text-center text-xl font-serif text-luxury-text">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleClick(item.id)}>
              {item.label === 'Living' ? 'Resort Living' : item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contact')}
            className="schedule-button px-8 py-4 bg-luxury-teal text-white rounded-full font-sans text-sm font-bold shadow-lg"
          >
            Schedule Visit
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
