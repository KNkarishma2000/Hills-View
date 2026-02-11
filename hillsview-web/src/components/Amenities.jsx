import React from 'react';
import {
  Quote,
  Utensils,
  ChefHat,
  Film,
  Waves,
  Bell,
  Music,
  PartyPopper,
  Flower2,
  Sprout,
  Footprints,
  UserPlus,
  Sun,
} from 'lucide-react';

function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 reveal-up">
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-6 md:mb-8">
            Amenities
          </h2>
          <div className="max-w-4xl mx-auto bg-luxury-cream p-6 md:p-8 rounded-3xl border border-luxury-sand relative">
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold absolute top-4 left-4 opacity-50" />
            <p className="text-base md:text-lg text-luxury-sub italic">
              &quot;We will constantly work hard to ensure all the residents, and their loved ones are
              empowered with tailored services, confident about their health and well-being... and
              truly celebrating each moment of our residents’ golden years.&quot;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-up">
          {/* 1. Club House & Kitchen */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Utensils className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Club House &amp; Kitchen
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Utensils className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Master kitchen serving gourmet meals daily.
                </span>
              </div>
            </div>
          </div>

          {/* 2. My Rasoi */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">My Rasoi</span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <ChefHat className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Personalized cooking stations for your favorite recipes.
                </span>
              </div>
            </div>
          </div>

          {/* 3. Movie Theatre */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Film className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">Movie Theatre</span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Film className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Private screenings of classics and new releases.
                </span>
              </div>
            </div>
          </div>

          {/* 4. Aqua Pool */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Waves className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">Aqua Pool</span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Waves className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Therapeutic swimming and hydrotherapy sessions.
                </span>
              </div>
            </div>
          </div>

          {/* 5. 24/7 Concierge */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Bell className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  24/7 Concierge
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Bell className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Always here to assist with your every need.
                </span>
              </div>
            </div>
          </div>

          {/* 6. Activities Hall */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Music className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Activities Hall
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Music className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Space for hobbies, games, and social events.
                </span>
              </div>
            </div>
          </div>

          {/* 7. Festival Celebrations */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <PartyPopper className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Festival Celebrations
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <PartyPopper className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Joyous gatherings for all major cultural festivals.
                </span>
              </div>
            </div>
          </div>

          {/* 8. Yoga & Fitness */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Flower2 className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Yoga &amp; Fitness
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Flower2 className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Gentle exercise programs tailored for seniors.
                </span>
              </div>
            </div>
          </div>

          {/* 9. Greenhouse */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Sprout className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">Greenhouse</span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Sprout className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Therapeutic gardening in our lush greenhouse.
                </span>
              </div>
            </div>
          </div>

          {/* 10. Outdoor Trails */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Footprints className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Outdoor Trails
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Footprints className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Safe, scenic paths for morning and evening walks.
                </span>
              </div>
            </div>
          </div>

          {/* 11. Guest Rooms */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">Guest Rooms</span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <UserPlus className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Comfortable suites for visiting family and friends.
                </span>
              </div>
            </div>
          </div>

          {/* 12. Spiritual Discourses */}
          <div className="flip-card h-40 md:h-48 group">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Sun className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-2 md:mb-3 animate-float-icon" />
                <span className="font-bold text-luxury-sub text-sm md:text-base">
                  Spiritual Discourses
                </span>
              </div>
              <div className="flip-card-back relative overflow-hidden">
                <Sun className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24" />
                <span className="text-xs md:text-sm font-medium relative z-10">
                  Quiet spaces for prayer and spiritual reflection.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
