import React, { useState } from 'react';
import { Activity, Users, Heart, Brain } from 'lucide-react';

const CompassOfCare = () => {
  const points = {
    N: {
      id: 'N',
      label: 'Physical',
      title: 'Physical Wellness',
      desc: 'Experience independent, resort-style living, designed to support your physical and emotional well-being.',
      icon: <Activity />,
      color: '#2C5F58',
      iconClass: 'text-[#2C5F58]'
    },
    E: {
      id: 'E',
      label: 'Social',
      title: 'Social Connection',
      desc: 'Fostering vibrant connections through community gatherings, shared dining, and curated events that spark joy.',
      icon: <Users />,
      color: '#BFA15F',
      iconClass: 'text-[#BFA15F]'
    },
    S: {
      id: 'S',
      label: 'Emotional',
      title: 'Emotional Support',
      desc: 'Serene environments and professional counseling to ensure mental peace and balance.',
      icon: <Heart />,
      color: '#ef4444',
      iconClass: 'text-red-400'
    },
    W: {
      id: 'W',
      label: 'Intellectual',
      title: 'Intellectual Growth',
      desc: 'A library of life. Keeping the mind sharp with workshops and technology classes.',
      icon: <Brain />,
      color: '#3b82f6',
      iconClass: 'text-blue-400'
    }
  };

  const [activePoint, setActivePoint] = useState(points.N);
  const [displayPoint, setDisplayPoint] = useState(points.N);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleUpdateInfo = (point) => {
    if (point.id === activePoint.id) return;
    
    setIsTransitioning(true);
    setActivePoint(point);
    
    setTimeout(() => {
      setDisplayPoint(point);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden border-t border-[#F9F7F2]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-[130px]">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1C1917] mb-4">The Compass of Care</h2>
          <p className="text-base md:text-xl text-[#44403C] opacity-80 max-w-2xl mx-auto">
            Hover over the cardinal points to explore our holistic philosophy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
          
          {/* Compass Container - Increased margin on mobile to prevent label cutoff */}
          <div className="relative w-[240px] h-[240px] md:w-[400px] md:h-[400px] border border-[#BFA15F]/30 rounded-full flex items-center justify-center my-8 md:my-0">
            
            {/* Center Hub */}
            <div className="z-10 w-24 h-24 md:w-36 md:h-36 bg-[#2C5F58] rounded-full flex items-center justify-center text-white font-serif italic text-lg md:text-2xl shadow-xl">
              Hillsview
            </div>

            {/* Nodes with responsive positioning */}
          {/* Nodes with responsive positioning */}
<CompassNode 
  point={points.N} 
  active={activePoint.id === 'N'} 
  pos="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
  labelPos="-top-8 md:-top-12" // Slightly closer on mobile
  onHover={() => handleUpdateInfo(points.N)}
/>
<CompassNode 
  point={points.E} 
  active={activePoint.id === 'E'} 
  pos="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" 
  labelPos="-right-5 md:-right-10" // Changed from -right-8 to -right-5
  onHover={() => handleUpdateInfo(points.E)}
/>
<CompassNode 
  point={points.S} 
  active={activePoint.id === 'S'} 
  pos="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" 
  labelPos="-bottom-8 md:-bottom-12" // Slightly closer on mobile
  onHover={() => handleUpdateInfo(points.S)}
/>
<CompassNode 
  point={points.W} 
  active={activePoint.id === 'W'} 
  pos="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" 
  labelPos="-left-5 md:-left-10" // Changed from -left-8 to -left-5
  onHover={() => handleUpdateInfo(points.W)}
/>
          </div>

          {/* Info Box */}
          <div className={`w-full md:w-[400px] bg-[#F9F7F2] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-[#E6E0D0] shadow-lg min-h-[200px] md:min-h-[250px] flex flex-col justify-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="font-serif text-2xl md:text-3xl text-[#2C5F58] mb-4">
              {displayPoint.title}
            </h3>
            <p className="text-[#44403C] leading-relaxed text-sm md:text-lg">
              {displayPoint.desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const CompassNode = ({ point, active, pos, labelPos, onHover }) => {
  return (
    <div 
      className={`absolute ${pos} group cursor-pointer z-20 flex items-center justify-center`}
      onMouseEnter={onHover}
      onClick={onHover} // Better for mobile tap
    >
      {/* Tooltip */}
      <div 
        className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-white text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-md whitespace-nowrap"
        style={{ backgroundColor: point.color }}
      >
        {point.label}
      </div>

      {/* Cardinal Label (N, E, S, W) - Absolute to node but moved further out */}
      <span className={`absolute ${labelPos} font-serif font-bold text-[#BFA15F] text-xl md:text-2xl`}>
        {point.id}
      </span>

      {/* Circle Icon */}
      <div className={`w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md border-2 transition-all duration-300 ${active ? 'border-[#BFA15F] scale-110' : 'border-transparent group-hover:border-[#BFA15F]/50'}`}>
        <div className={`${point.iconClass} w-7 h-7 md:w-8 md:h-8 flex items-center justify-center`}>
          {React.cloneElement(point.icon, { className: "w-full h-full" })}
        </div>
      </div>
    </div>
  );
};

export default CompassOfCare;