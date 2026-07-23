import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const scrolled = (window.scrollY / documentHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-50 pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#D4AF37] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};
