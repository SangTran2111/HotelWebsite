
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Using a classic tropical beach shot with white sand and palm trees typical of Phu Quoc */}
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90" 
          alt="White sand beach with palm trees in Phu Quoc" 
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay to ensure text legibility while keeping the beach visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <p className="uppercase tracking-[0.6em] text-gold mb-4 animate-fadeIn font-semibold text-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {t.welcome}
        </p>
        <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Phu Quoc Star Hotel
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 text-slate-100 max-w-xl mx-auto italic opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {t.heroSub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#rooms" 
            className="w-full sm:w-auto px-10 py-4 bg-gold text-navy transition-all text-xs font-bold tracking-widest uppercase hover:bg-white shadow-2xl hover:scale-105 active:scale-95"
          >
            {t.explore}
          </a>
          <a 
            href="#amenities" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/50 transition-all text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-navy backdrop-blur-md hover:scale-105 active:scale-95"
          >
            {t.experience}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
};

export default Hero;