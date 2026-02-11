import React from 'react';

function CareLevels() {
  return (
    <section id="care-levels" className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: SVG tree – copy full SVG block from hero right section if you want it here instead */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start items-center relative reveal-up active gap-6">
          <div className="relative w-[300px] sm:w-[380px] h-full sm:h-[550px] parallax-bg" data-speed="-0.08">
            <div className="absolute inset-0 bg-luxury-gold/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float blur-xl" />
            {/* paste your full <svg> ... </svg> tree of life from hero right side here */}
          </div>
        </div>

        {/* Right: text/description (you can customize based on original HTML) */}
        <div className="order-1 lg:order-2 space-y-6 reveal-up">
          <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs">
            Levels of Care
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-text">
            A continuum of compassionate support
          </h2>
          <p className="text-lg md:text-xl text-luxury-sub leading-relaxed">
            From low-care resort living to high-dependency and palliative support, Hillsview offers a
            complete care spectrum under one roof so residents and families never have to face abrupt
            transitions.
          </p>
          <p className="text-lg text-luxury-sub leading-relaxed">
            Our multidisciplinary team works with you to match the right level of assistance while
            preserving independence, dignity, and joy in daily living.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CareLevels;
