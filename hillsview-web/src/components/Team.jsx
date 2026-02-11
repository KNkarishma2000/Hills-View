import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Armchair, Brain, Stethoscope } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Dr. Meher P Chinthamuneedi',
    role: 'Founder & Project Lead',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/02/Gemini_Generated_Image_jzmtt9jzmtt9jzmt.png',
    quote: '"Empower through knowledge, innovate with purpose, and serve with compassion."',
  },
  {
    name: 'Dr. Bala Chundru',
    role: 'General Surgeon & Family Medicine',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/balu.jpeg',
    quote: 'Over 35 years of clinical experience delivering compassionate, patient-centered care.',
  },
  {
    name: 'Dr Sowri Bala',
    role: 'Hospital Administration',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-1.38.34-PM.jpeg',
    quote: '"Service to mankind is service to GOD."',
  },
  {
    name: 'Dr. Pavan Gutta',
    role: 'Family Physician',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/pavan.jpeg',
    quote: '"Dedicated in purpose, Determined in action, Disciplined in pursuit."',
  },
  {
    name: 'Pardha Pothana',
    role: 'Director, Chip Design',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/parda.jpeg',
    quote: '"Engineer for Scale, Dream What the World Needs, Build What\'s Next."',
  },
  {
    name: 'Mrs. Bhawani Pothana',
    role: 'Nutrition Expert & Counsellor',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/bhavani.jpeg',
    quote: '"Compassionate Professional Bridging Generations."',
  },
  {
    name: 'Kavitha',
    role: 'IT & Social Impact Leader',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/kavitha.jpeg',
    quote: '"Sustainable Development with Social Responsibility."',
  },
  {
    name: 'Mr. B Vishnu Vardhan',
    role: 'Software & Philanthropy',
    img: 'https://hillsviewassistedliving.com/wp-content/uploads/2026/01/vishnu.jpeg',
    quote: '"The elderly are a source of wisdom, experience, and stability."',
  },
];

function Team() {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const scrollTeam = dir => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    autoScrollRef.current = setInterval(() => {
      scrollTeam('right');
    }, 6000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  return (
    <>
      {/* TEAM SECTION */}
     <section id="team" className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
        {/* Background SVGs preserved for your styling */}
        <div className="absolute left-10 top-15 opacity-10 pointer-events-none transform -rotate-6 parallax-bg" data-speed="0.05">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="#BFA15F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 85 Q 50 100 80 85" /><path d="M30 88 L 35 60" /><path d="M70 88 L 65 60" /><path d="M35 60 L 65 60" /><path d="M35 60 L 30 20" /><path d="M65 60 L 70 20" /><path d="M30 20 L 70 20" /><path d="M42 60 L 40 20" /><path d="M50 60 L 50 20" /><path d="M58 60 L 60 20" /><path d="M33 45 C 25 45, 25 60, 35 60" /><path d="M67 45 C 75 45, 75 60, 65 60" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-16 reveal-up relative">
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">Our Leadership Team</h2>
            <p className="text-base md:text-lg text-luxury-sub">A distinguished panel committed to excellence in care</p>
          </div>

          <div className="relative group" id="team-slider-wrapper">
            {/* Left Button - Cleaned up to only call scrollTeam */}
            <button
              onClick={() => scrollTeam('left')}
              className="lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 lg:-ml-12 bg-white text-luxury-teal p-3 rounded-full shadow-lg border border-luxury-sand hover:bg-luxury-teal hover:text-white transition-all focus:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              id="team-scroll-container"
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 px-4 snap-mandatory reveal-up no-scrollbar scroll-smooth"
            >
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="min-w-[280px] sm:min-w-[320px] bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all snap-center text-center group flex flex-col items-center border border-luxury-sand/30"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-luxury-sand rounded-full mb-6 overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-luxury-text font-bold">{member.name}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-luxury-teal uppercase tracking-widest mt-2 mb-4">{member.role}</p>
                  <p className="text-luxury-sub text-sm italic">{member.quote}</p>
                </div>
              ))}
            </div>

            {/* Right Button - Cleaned up to only call scrollTeam */}
            <button
              onClick={() => scrollTeam('right')}
              className="lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 lg:-mr-12 bg-white text-luxury-teal p-3 rounded-full shadow-lg border border-luxury-sand hover:bg-luxury-teal hover:text-white transition-all focus:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* RESORT LIVING SECTION (care-levels) – optional here or in CareLevels.jsx */}
      <section id="care-levels" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute right-0 top-20 opacity-5 pointer-events-none parallax-bg"
          data-speed="0.04"
        >
          <svg width="600" height="400" viewBox="0 0 200 150">
            <path
              d="M0 100 Q100 50 200 100"
              stroke="#BFA15F"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-16 reveal-up">
            <span className="inline-block px-4 py-1 border border-luxury-gold rounded-full text-luxury-gold font-bold text-xs uppercase tracking-widest mb-4">
              Concept "One-Stop Shop"
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              Your Membership to Better Living
            </h2>
            <p className="text-lg md:text-xl text-luxury-sub max-w-2xl mx-auto">
              We&apos;ve reimagined care as a continuum of lifestyle choices. Select the level of
              support that lets you live your best life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 reveal-up">
            <div className="bg-luxury-cream border border-luxury-sand rounded-[2rem] p-6 md:p-8 hover:shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden reveal-delay-1">
              <Armchair className="absolute -right-8 -bottom-8 w-48 h-48 text-luxury-gold opacity-5 pointer-events-none" />
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-luxury-teal mb-6 shadow-sm group-hover:bg-luxury-teal group-hover:text-white transition-colors relative z-10">
                <Armchair className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-luxury-text font-bold mb-2 relative z-10">
                Resort Living
              </h3>
              <p className="text-luxury-sub mb-6 leading-relaxed text-sm relative z-10">
                Designed for autonomy. Enjoy your own resort-style apartment availing well thought
                of amenities provided. The concept is focused on living a vibrant social calendar
                and continued wellness.
              </p>
            </div>

            <div className="bg-luxury-teal text-white rounded-[2rem] p-6 md:p-8 hover:shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden reveal-delay-2">
              <Brain className="absolute -right-8 -bottom-8 w-48 h-48 text-white opacity-5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[50px] opacity-10" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm relative z-10">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 relative z-10">The Sanctuary</h3>
              <p className="text-gray-200 mb-6 leading-relaxed text-sm relative z-10">
                Our disease-reversal programme improves quality of life and longevity through
                personalised medical supervision, including medication optimisation and tailored
                diet and exercise plans.
                Residents are supported in a secure, nurturing environment with 24/7 nursing care
                for chronic, progressive, or memory-related conditions, ensuring safety, dignity,
                and independence.
                Advanced digital technologies are integrated throughout care to enable continuous
                monitoring and the highest standards of wellbeing.
              </p>
            </div>

            <div className="bg-white border border-luxury-sand rounded-[2rem] p-6 md:p-8 hover:shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden reveal-delay-3">
              <Stethoscope className="absolute -right-8 -bottom-8 w-48 h-48 text-luxury-teal opacity-5 pointer-events-none" />
              <div className="w-16 h-16 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-teal mb-6 shadow-sm group-hover:bg-luxury-teal group-hover:text-white transition-colors relative z-10">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-luxury-text font-bold mb-2 relative z-10">
                Clinical Suites
              </h3>
              <p className="text-luxury-sub mb-6 leading-relaxed text-sm relative z-10">
                Includes consultation rooms for primary care and specialist services, a
                high-dependency unit for stabilising critically ill patients, and a palliative care
                unit for dignified end-of-life care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
