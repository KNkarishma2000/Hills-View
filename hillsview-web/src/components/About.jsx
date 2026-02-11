import React from 'react';

function About() {
  return (

 <section id="about" class="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="md:w-1/2 relative reveal-up">
            <div className="w-full aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="https://hillsviewassistedliving.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-12-at-9.28.21-AM.jpeg"
                alt="Comfortable Living"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-luxury-sand rounded-full -z-10" />
          </div>
          <div className="md:w-1/2 space-y-4 md:space-y-6 reveal-up">
            <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text">
              A Sanctuary for the Soul
            </h2>
            <p className="text-lg md:text-xl text-luxury-sub leading-relaxed">
              To Discover a higher standard of living with a motto to respect , revive and rekindle
              golden years of life, Hillsview is a luxury assisted-living retreat where aging is
              celebrated with dignity, comfort, and purpose, combining resort-style living and
              integrated healthcare under one roof....
            </p>
            <p className="text-lg md:text-xl text-luxury-sub leading-relaxed">
              Beyond care, Hillsview is shaping the future of elder living in India through a Centre
              of Excellence in Age Care (ageing in place as we call it) and the country’s first
              skills training institute for medical and paramedical geriatric caregivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
