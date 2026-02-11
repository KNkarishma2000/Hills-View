import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { scrollToId } from '../scrollUtils';

function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex pb-20 items-center justify-center pt-20 lg:pt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-sand/40 via-luxury-cream to-luxury-cream parallax-bg"
        data-speed="0.05"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-luxury-gold/10 rounded-full animate-spin-slow pointer-events-none parallax-bg"
        data-speed="0.1"
      />

      <div className="container mt-[52px] lg:mt-[0px] mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left text */}
        <div className="left-secvtionstyle order-1 lg:order-1 relative z-10 space-y-8 reveal-up active flex flex-col justify-center lg:block text-center lg:text-left">
          <div className="sm:pt-[80px] space-y-4 mobikle-responsivesection">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-luxury-text font-bold leading-none tracking-tight whitespace-nowrap">
              Hillsview{' '}
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light uppercase tracking-[0.1em] text-luxury-teal inline-block ml-2">
                Assisted Living
              </span>
            </h1>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-gold italic">
              "Where Life Blooms Anew"
            </p>
          </div>

          <div className="w-full h-[40vh] md:h-[50vh] bg-[#2a1b15] rounded-lg relative overflow-hidden group reveal-delay-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-4 border-[#3E2723] mx-auto lg:mx-0 max-w-2xl">
            <div className="absolute inset-0 z-20 pointer-events-none border-[12px] border-[#5D4037] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
            <div className="absolute inset-[12px] z-20 pointer-events-none border-[4px] border-[#8D6E63]" />
            <div className="absolute inset-[16px] z-20 pointer-events-none border-[8px] border-[#3E2723] shadow-[inset_2px_2px_10px_rgba(0,0,0,0.5)]" />

            <img
              src="https://hillsviewassistedliving.com/wp-content/uploads/2026/01/mainimage.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
              alt="Luxury Resort View"
            />

            <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-30">
              <p className="text-luxury-text font-serif text-base font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                Resort View
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-luxury-sub font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 reveal-delay-2">
            Discover high-style resort living where every day feels like a getaway. We blend world-class
            amenities with personalized care to create a vibrant, dignified lifestyle that celebrates you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-8 reveal-delay-3 justify-center lg:justify-start">
            <button
              onClick={() => scrollToId('care-levels')}
              className="group px-8 py-4 bg-luxury-teal text-white rounded-full font-medium text-lg shadow-[0_10px_20px_-5px_rgba(44,95,88,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(44,95,88,0.5)] hover:bg-[#1f4a44] hover:text-white transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Explore Living
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="group px-8 py-4 bg-white/50 border border-luxury-sub/20 text-luxury-text rounded-full font-medium text-lg hover:border-luxury-text hover:bg-luxury-text hover:text-white transition-all backdrop-blur-sm flex items-center justify-center transform hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right SVG Tree – copy your SVG JSX here 1:1 with self‑closing tags */}
       <div className="order-2 lg:order-2 flex justify-center lg:justify-end items-center relative reveal-up active gap-6">
  {/* Tree Illustration - PARALLAX EFFECT */}
  <div className="relative w-[300px] sm:w-[380px] h-full sm:h-[550px] parallax-bg" data-speed="-0.08">
    <div className="absolute inset-0 bg-luxury-gold/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float blur-xl" />

    <svg
      className="relative z-10 w-full h-full drop-shadow-xl"
      viewBox="0 0 400 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk and Main Structure */}
      <path
        d="M200,600 Q190,500 200,400"
        stroke="#8DA399"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Lower Stem Branches (High Dependency & Palliative) */}
      {/* Left branch */}
      <path
        d="M200,480 Q170,460 140,440"
        stroke="#8DA399"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right branch */}
      <path
        d="M200,480 Q260,460 300,440"
        stroke="#8DA399"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Upper Branches (Lifestyle Circles) */}
      <path
        d="M200,400 Q120,320 80,240"
        stroke="#8DA399"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200,400 Q200,300 200,180"
        stroke="#8DA399"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200,400 Q280,320 320,240"
        stroke="#8DA399"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* Stem Left: High Dependency */}
      <g className="leaf-sway" style={{ transformOrigin: '140px 440px', animationDelay: '0.5s' }}>
        <text
          x="130"
          y="435"
          textAnchor="end"
          fill="#2C5F58"
          fontFamily="Plus Jakarta Sans"
          fontSize="13"
          fontWeight="700"
        >
          High Dependency
        </text>
        <text
          x="130"
          y="450"
          textAnchor="end"
          fill="#2C5F58"
          fontFamily="Plus Jakarta Sans"
          fontSize="13"
          fontWeight="700"
        >
          Units
        </text>
        <circle cx="140" cy="440" r="6" fill="#2C5F58" />
      </g>

      {/* Stem Right: Palliative Care */}
      <g className="leaf-sway" style={{ transformOrigin: '300px 440px', animationDelay: '0.8s' }}>
        <text
          x="310"
          y="435"
          textAnchor="start"
          fill="#2C5F58"
          fontFamily="Plus Jakarta Sans"
          fontSize="13"
          fontWeight="700"
        >
          Palliative
        </text>
        <text
          x="310"
          y="450"
          textAnchor="start"
          fill="#2C5F58"
          fontFamily="Plus Jakarta Sans"
          fontSize="13"
          fontWeight="700"
        >
          Care
        </text>
        <circle cx="300" cy="440" r="6" fill="#2C5F58" />
      </g>

      {/* TOP NODES (3 Circles) */}
      {/* Left Circle: Low Care */}
      <g className="leaf-sway" style={{ transformOrigin: '80px 240px', animationDelay: '1.2s' }}>
        <circle cx="80" cy="240" r="60" fill="#BFA15F" opacity="1" />
        <text
          x="80"
          y="235"
          textAnchor="middle"
          fill="#1C1917"
          fontFamily="Plus Jakarta Sans"
          fontSize="15"
          fontWeight="700"
        >
          Low
        </text>
        <text
          x="80"
          y="255"
          textAnchor="middle"
          fill="#1C1917"
          fontFamily="Plus Jakarta Sans"
          fontSize="15"
          fontWeight="700"
        >
          Care
        </text>
      </g>

      {/* Center Circle: Resort Living */}
      <g className="leaf-sway" style={{ transformOrigin: '200px 180px', animationDelay: '1.8s' }}>
        <circle cx="200" cy="180" r="75" fill="#2C5F58" opacity="1" />
        <text
          x="200"
          y="175"
          textAnchor="middle"
          fill="#F9F7F2"
          fontFamily="Plus Jakarta Sans"
          fontSize="18"
          fontWeight="700"
        >
          Resort
        </text>
        <text
          x="200"
          y="198"
          textAnchor="middle"
          fill="#F9F7F2"
          fontFamily="Plus Jakarta Sans"
          fontSize="18"
          fontWeight="700"
        >
          Living
        </text>
      </g>

      {/* Right Circle: High Care */}
      <g className="leaf-sway" style={{ transformOrigin: '320px 240px', animationDelay: '2.2s' }}>
        <circle cx="320" cy="240" r="60" fill="#8DA399" opacity="1" />
        <text
          x="320"
          y="235"
          textAnchor="middle"
          fill="white"
          fontFamily="Plus Jakarta Sans"
          fontSize="15"
          fontWeight="700"
        >
          High
        </text>
        <text
          x="320"
          y="255"
          textAnchor="middle"
          fill="white"
          fontFamily="Plus Jakarta Sans"
          fontSize="15"
          fontWeight="700"
        >
          Care
        </text>
      </g>

      {/* Tree of Life Label */}
      <text
        x="200"
        y="650"
        textAnchor="middle"
        fill="#BFA15F"
        fontFamily="Cormorant Garamond"
        fontSize="28"
        fontWeight="700"
        fontStyle="italic"
        letterSpacing="0.05em"
        className="drop-shadow-sm"
      >
        Tree of Life
      </text>
    </svg>

    {/* Floating Card */}
    <div
      className="absolute floating-point -bottom-10 -left-21 z-30 bg-white p-4 sm:p-5 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-2 border-luxury-gold/50 animate-float hover:scale-105 transition-all duration-300"
      style={{ animationDelay: '1s' }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-luxury-teal to-[#1a3d38] p-3 sm:p-3.5 rounded-xl text-white shadow-lg shadow-teal-900/20 ring-1 ring-white/50 shrink-0">
          {/* if you want, put a Lucide icon here */}
          {/* <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> */}
        </div>
        <div>
          <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-luxury-gold mb-1 leading-tight">
            Living Standard
          </p>
          <p className="text-base sm:text-xl font-serif font-bold text-luxury-text tracking-wide leading-none">
            Resort-Class
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </header>
  );
}

export default Hero;
