import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import CareLevels from './components/CareLevels.jsx';
import CompassSection from './components/CompassOfCare.jsx';
import Services from './components/Services.jsx';
import Amenities from './components/Amenities.jsx';
import Footer from './components/Footer.jsx';
import Lenis from '@studio-freight/lenis';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    // init Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
useEffect(() => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Target all elements with the reveal-up class
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
  <>
    {/* Floating companion (fixed overlay, no layout impact) */}
    <div id="narrative-companion" aria-hidden="true">
      <svg
        className="companion-svg"
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="35" cy="30" r="10" fill="#E6E0D0" />
          <path
            d="M26 30 C 26 22, 44 22, 44 30"
            stroke="#F9F7F2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 45 Q 20 80 25 100 L 45 100 Q 50 80 48 45 Q 35 40 22 45"
            fill="#2C5F58"
          />
          <path
            d="M28 100 L 28 130"
            stroke="#44403C"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M42 100 L 42 130"
            stroke="#44403C"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="65" cy="32" r="9" fill="#E6E0D0" />
          <circle cx="65" cy="28" r="10" fill="#F9F7F2" />
          <path
            d="M52 45 Q 50 90 55 110 L 75 110 Q 80 90 78 45 Q 65 40 52 45"
            fill="#BFA15F"
          />
          <path
            d="M60 110 L 60 130"
            stroke="#44403C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M70 110 L 70 130"
            stroke="#44403C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M45 65 Q 50 70 55 65"
            stroke="#E6E0D0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>

    {/* Page sections */}
    <Navbar />
    <Hero />
    <About />
    <Team />
    <CompassSection />
    <Services />
    <Amenities />
    <Contact />
    <Footer />
  </>
);
}

export default App;
