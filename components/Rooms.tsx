
import React from 'react';
import { ROOMS, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface RoomsProps {
  onBookClick: () => void;
  language: Language;
}

const Rooms: React.FC<RoomsProps> = ({ onBookClick, language }) => {
  const t = TRANSLATIONS[language];
  return (
    <section id="rooms" className="py-24 bg-vintage">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 italic">{t.ourRooms}</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm italic font-light">
            {t.roomsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ROOMS.map((room) => (
            <div key={room.id} className="group bg-white flex flex-col transition-all border border-slate-100 shadow-sm hover:shadow-md">
              <div className="relative overflow-hidden h-64 border-b border-slate-50">
                <img 
                  src={room.image} 
                  alt={room.name[language]} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-serif text-navy mb-3 italic">{room.name[language]}</h3>
                <p className="text-slate-500 mb-6 text-xs leading-relaxed italic font-light">{room.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {room.features[language].map(f => (
                    <span key={f} className="text-[9px] font-bold uppercase tracking-widest text-slate-400 border border-slate-100 px-2 py-1">
                      {f}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={onBookClick}
                  className="w-full py-3 bg-navy text-gold hover:bg-gold hover:text-navy transition-all font-bold tracking-widest text-[10px] uppercase rounded-none"
                >
                  {t.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
