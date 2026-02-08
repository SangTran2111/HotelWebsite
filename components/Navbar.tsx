
"use client"

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  onBookClick: () => void;
  language: Language;
  setLanguage: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="text-gold text-2xl transition-transform group-hover:scale-110">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
               <path d="M12 1L14.5 9H22.5L16 14L18.5 22L12 17L5.5 22L8 14L1.5 9H9.5L12 1Z" />
            </svg>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className={`text-xl font-serif font-bold tracking-widest transition-colors ${isScrolled ? 'text-gold' : 'text-white'}`}>
              PHU QUOC STAR HOTEL
            </span>
          </div>
        </a>
        
        <div className="hidden lg:flex space-x-10 items-center">
          <div className="flex space-x-6">
            <a href="#rooms" className={`hover:text-gold transition-colors font-medium text-xs uppercase tracking-widest ${isScrolled ? 'text-white/80' : 'text-slate-100'}`}>{t.navRooms}</a>
            <a href="#amenities" className={`hover:text-gold transition-colors font-medium text-xs uppercase tracking-widest ${isScrolled ? 'text-white/80' : 'text-slate-100'}`}>{t.navAmenities}</a>
            <a href="#location" className={`hover:text-gold transition-colors font-medium text-xs uppercase tracking-widest ${isScrolled ? 'text-white/80' : 'text-slate-100'}`}>{t.navLocation}</a>
          </div>
          
          <div className="flex bg-white/10 rounded-full px-2 py-1 space-x-1 border border-white/10">
            {(['en', 'vi', 'ko'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-[10px] font-bold px-2 py-1 rounded-full transition-all ${language === lang ? 'bg-gold text-navy' : 'text-slate-300 hover:text-white'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            onClick={onBookClick}
            className="px-6 py-2 bg-gold hover:bg-white text-navy font-bold transition-all text-xs tracking-widest uppercase rounded-none"
          >
            {t.bookNow}
          </button>
        </div>

        <button className={`${isScrolled ? 'text-gold' : 'text-white'} lg:hidden`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
