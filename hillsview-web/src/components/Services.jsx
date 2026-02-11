import React from 'react';
import {
  Home,
  Coffee,
  BookOpen,
  Building2,
  Activity,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  Award,
  ShieldCheck,
} from 'lucide-react';

function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#F9F7F2] relative overflow-hidden font-sans text-[#1C1917]"
    >
      {/* Left decorative svg */}
      <div className="absolute left-0 top-40 opacity-5 pointer-events-none -rotate-12">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#2C5F58"
          strokeWidth="1.5"
        >
          <path
            d="M20 150 Q 60 180 100 150 Q 140 120 180 150"
            strokeLinecap="round"
          />
          <path
            d="M20 160 Q 60 190 100 160 Q 140 130 180 160"
            strokeLinecap="round"
          />
          <path
            d="M100 80 C 120 50, 150 80, 100 130 C 50 80, 80 50, 100 80"
            fill="#BFA15F"
            stroke="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Right decorative svg */}
      <div className="absolute right-0 bottom-20 opacity-5 pointer-events-none">
        <svg
          width="300"
          height="300"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#BFA15F"
          strokeWidth="1"
        >
          <circle cx="80" cy="50" r="40" />
          <circle cx="80" cy="50" r="35" strokeDasharray="1 3" />
          <path d="M80 50 L80 25" strokeLinecap="round" />
          <path d="M80 50 L95 60" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-[#1C1917]">
            Concierge Services
          </h2>
          <p className="text-[#44403C]">
            A holistic suite of services designed for your every need.
          </p>
        </div>

        <div className="space-y-12">
          {/* Lifestyle & Living */}
          <div className="reveal-up">
            <h3 className="text-xl md:text-2xl text-[#2C5F58] mb-6 border-b border-[#E6E0D0] pb-2 inline-block font-serif">
              Lifestyle &amp; Living
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-100 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9F7F2] rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <Home className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>

                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Independent Resort style living
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  A vibrant, revitalised living space for independent living
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-200 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9F7F2] rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <Coffee className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Assited living (Low care unit)
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  Personalized support for daily tasks in a private, dignified setting.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-300 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9F7F2] rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <BookOpen className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Respite
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  Short-term stays for recovery or giving caregivers a well-deserved break.
                </p>
              </div>
            </div>
          </div>

          {/* Future Wellness */}
          <div className="reveal-up">
            <h3 className="text-xl md:text-2xl text-[#2C5F58] mb-6 border-b border-[#E6E0D0] pb-2 inline-block font-serif">
              Future Wellness
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-100 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#BFA15F]/5 rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <Building2 className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Community Hospital
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  Proposed future development for providing medical services to Hillsview residents
                  and for the local community as a CSR activity.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Excellence */}
          <div className="reveal-up">
            <h3 className="text-xl md:text-2xl text-[#2C5F58] mb-6 border-b border-[#E6E0D0] pb-2 inline-block font-serif">
              Clinical Excellence
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card: Highcare or Memory care */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-100 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#2C5F58]/5 rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <Activity className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Highcare or Memory care
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  On-site support services for the total well-being of residents requiring 24-hour
                  care due to chronic, debilitating health conditions.
                </p>
              </div>

              {/* Card: High Dependency unit */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-200 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#2C5F58]/5 rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <HeartHandshake className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  High Dependency unit
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  24/7 monitoring for complex health needs in a clinical suite setting
                </p>
              </div>

              {/* Card: Hospice or palliative care support */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E6E0D0] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden delay-300 reveal-up">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#2C5F58]/5 rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/10" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9F7F2] to-white border border-[#E6E0D0] flex items-center justify-center text-[#2C5F58] mb-4 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-[#2C5F58] group-hover:border-[#BFA15F]">
                  <Stethoscope className="w-8 h-8" />

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#BFA15F] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#2C5F58] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 group-hover:-translate-x-2 transition-all duration-500 delay-75" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#44403C] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1C1917] relative z-10 group-hover:text-[#2C5F58] transition-colors">
                  Hospice or palliative care support
                </h4>
                <p className="text-sm text-[#44403C] mt-2 leading-relaxed relative z-10">
                  Compassionate comfort care focusing on dignity at the end of life.
                </p>
              </div>

              {/* Skill Development Center – full width */}
              <div className="col-span-full flex justify-center mt-8">
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-2 border-[#BFA15F]/30 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden reveal-up max-w-[550px] w-full">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2C5F58] via-[#BFA15F] to-[#2C5F58]" />

                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#BFA15F]/10 rounded-bl-[100%] z-0 transition-colors group-hover:bg-[#BFA15F]/20" />

                  <div className="w-20 h-20 rounded-full bg-white border border-[#BFA15F] flex items-center justify-center text-[#2C5F58] mb-6 shadow-md relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BFA15F] group-hover:text-white">
                    <GraduationCap className="w-10 h-10" />

                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#2C5F58] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <Award className="w-3 h-3 text-[#BFA15F]" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-widest text-[#BFA15F] font-bold mb-2 block">
                      Centre of Excellence
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif text-[#1C1917] mb-3 group-hover:text-[#2C5F58] transition-colors">
                      Skill Development Center
                    </h4>
                    <div className="w-12 h-0.5 bg-[#BFA15F] mx-auto mb-4" />

                    <p className="text-sm text-[#44403C] mt-3 leading-relaxed">
                      A center of excellence developed to provide on site training to medical and
                      paramedical specialists in soft skills and advanced competencies for geriatric
                      care.
                    </p>
                  </div>

                  <div className="absolute bottom-0 right-0 p-4 opacity-20">
                    <ShieldCheck className="w-12 h-12 text-[#BFA15F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
