
import React from 'react';
import { BOOKING_PHONE, TRANSLATIONS, HOTEL_ADDRESS } from '../constants';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
        <div className="p-10 text-center bg-navy text-gold border-b border-white/10">
          <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L14.5 9H22.5L16 14L18.5 22L12 17L5.5 22L8 14L1.5 9H9.5L12 1Z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif tracking-widest uppercase italic">{t.resTitle}</h3>
          <p className="text-gold/60 mt-1 italic font-light text-xs">{t.resSub}</p>
        </div>
        
        <div className="p-10 text-center bg-vintage">
          <p className="text-slate-400 mb-4 uppercase tracking-widest text-[10px] font-bold">{t.callUs}</p>
          <a 
            href={`tel:${BOOKING_PHONE.replace(/\s/g, '')}`} 
            className="text-2xl font-serif font-bold text-navy hover:text-gold transition-colors block mb-2 tracking-widest italic"
          >
            {BOOKING_PHONE}
          </a>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-10">
            {HOTEL_ADDRESS}
          </p>
          
          <div className="space-y-4">
            <a 
              href={`tel:${BOOKING_PHONE.replace(/\s/g, '')}`}
              className="w-full bg-navy text-gold hover:bg-gold hover:text-navy font-bold py-4 rounded-none transition-all shadow-lg flex items-center justify-center uppercase tracking-widest text-[11px]"
            >
              <span>{t.callNow}</span>
            </a>
            <button 
              onClick={onClose}
              className="w-full text-slate-400 hover:text-navy font-bold py-2 transition-all uppercase tracking-widest text-[10px]"
            >
              {t.close}
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t.avail}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
