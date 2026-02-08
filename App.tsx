
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import ConciergeChat from './components/ConciergeChat';
import BookingModal from './components/BookingModal';
import PhuQuocExplorer from './components/PhuQuocExplorer';
import { Language } from './types';
import { TRANSLATIONS, HOTEL_ADDRESS } from './constants';
import { generateHotelFrontView } from './services/geminiService';

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [hotelImage, setHotelImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const fetchHotelImage = async () => {
      setIsImageLoading(true);
      const generatedImage = await generateHotelFrontView();
      if (generatedImage) {
        setHotelImage(generatedImage);
      } else {
        // High quality static fallback that matches the requested aesthetic
        setHotelImage("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80");
      }
      setIsImageLoading(false);
    };

    fetchHotelImage();
  }, []);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);

  const hospitalityText = {
    en: "Step into a world of refined tranquility at Phu Quoc Star Hotel. Our boutique sanctuary is more than just a destination; it's a dedicated space for your rejuvenation. We believe in heartfelt hospitality that treats every guest like family, ensuring your stay is filled with moments of peace and authentic island warmth. Every corner of our retreat is designed to invite you to pause, breathe, and rediscover your center amidst the tropical beauty of Phu Quoc.",
    vi: "Bước vào thế giới của sự tĩnh lặng tinh tế tại Phu Quoc Star Hotel. Thiên đường boutique của chúng tôi không chỉ là một điểm đến; đó là không gian dành riêng cho sự phục hồi và trẻ hóa của bạn. Chúng tôi tin vào lòng hiếu khách chân thành, coi mỗi vị khách như người thân trong gia đình, đảm bảo kỳ nghỉ của bạn luôn tràn ngập những giây phút bình yên và sự ấm áp đích thực của hòn đảo. Mọi ngóc ngách của nơi đây đều mời gọi bạn dừng lại, hít thở và tìm lại sự cân bằng giữa vẻ đẹp nhiệt đới của Phú Quốc.",
    ko: "푸꾸옥 스타 호텔에서 세련된 평온함의 세계로 들어서세요. 저희 부티크 안식처는 단순한 목적지 그 이상입니다. 여러분의 재충전과 활력을 위한 전용 공간입니다. 저희는 모든 고객을 가족처럼 대하는 진심 어린 환대를 믿으며, 여러분의 숙박이 평온한 순간과 섬의 진정한 따뜻함으로 가득 차도록 보장합니다. 저희 호텔의 모든 공간은 푸꾸옥의 열대 아름다움 속에서 잠시 멈추고, 숨을 쉬며, 자신의 중심을 재발견할 수 있도록 설계되었습니다."
  };

  return (
    <div className="relative min-h-screen bg-vintage selection:bg-gold selection:text-navy">
      <Navbar onBookClick={toggleBookingModal} language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      
      {/* Hospitality & Retreat Section */}
      <section id="amenities" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4 italic leading-tight">
                    {language === 'en' ? 'A Sanctuary to Retreat' : language === 'vi' ? 'Nơi Nghỉ Dưỡng Yên Bình' : '평온한 안식처'}
                  </h2>
                  <div className="h-0.5 w-16 bg-gold"></div>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed italic font-light">
                  {hospitalityText[language]}
                </p>

                <div className="flex items-center space-x-12 pt-4">
                  <div>
                    <h4 className="font-serif italic text-slate-400 text-sm uppercase tracking-widest">{language === 'en' ? 'Experience' : language === 'vi' ? 'Trải nghiệm' : '경험'}</h4>
                    <p className="font-bold text-navy tracking-widest uppercase text-xs mt-1">Peaceful Retreat</p>
                  </div>
                  <div>
                    <h4 className="font-serif italic text-slate-400 text-sm uppercase tracking-widest">{language === 'en' ? 'Service' : language === 'vi' ? 'Dịch vụ' : '서비스'}</h4>
                    <p className="font-bold text-navy tracking-widest uppercase text-xs mt-1">Heartfelt Hospitality</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                 <div className="border border-slate-200 p-2 bg-white shadow-sm min-h-[500px] flex items-center justify-center relative overflow-hidden">
                   {isImageLoading ? (
                     <div className="flex flex-col items-center space-y-4 animate-pulse">
                       <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                       <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Capturing Paradise...</p>
                     </div>
                   ) : hotelImage && (
                     <img 
                       src={hotelImage} 
                       alt="Phu Quoc Star Hotel Exterior" 
                       className="w-full h-[650px] object-cover animate-fadeIn"
                     />
                   )}
                 </div>
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold -z-10 opacity-30"></div>
              </div>
          </div>
        </div>
      </section>

      <Rooms onBookClick={toggleBookingModal} language={language} />

      <PhuQuocExplorer language={language} />

      {/* Simple Location with a prominent sand and tree beach background */}
      <section id="location" className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80" 
            alt="Beautiful sand beach and trees background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gold italic">{t.locationTitle}</h2>
          <p className="text-slate-300 text-lg mb-4 max-w-xl mx-auto italic font-light">
            {t.locationSub}
          </p>
          <p className="text-gold/80 text-sm mb-16 uppercase tracking-[0.3em] font-medium">
            {HOTEL_ADDRESS}
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center group">
              <span className="text-5xl font-serif italic text-gold block transform transition-transform group-hover:scale-110">28°C</span>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">{t.temp}</p>
            </div>
            <div className="text-center group">
              <span className="text-5xl font-serif italic text-gold block transform transition-transform group-hover:scale-110">Central</span>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">{t.airport}</p>
            </div>
            <div className="text-center group">
              <span className="text-5xl font-serif italic text-gold block transform transition-transform group-hover:scale-110">Prime</span>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">{t.beachfront}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <h3 className="text-2xl font-serif font-bold tracking-widest text-navy mb-6 italic uppercase">PHU QUOC STAR HOTEL</h3>
              <p className="text-slate-400 leading-relaxed italic font-light text-base mb-4">
                {t.footerSub} Elevating your boutique experience.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <p className="text-navy/60 mb-1">{t.addressLabel}:</p>
                <p>{HOTEL_ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-20">
              <div>
                <h4 className="font-bold text-navy mb-6 uppercase tracking-widest text-[10px]">{t.quickLinks}</h4>
                <ul className="space-y-3 text-slate-400 text-xs font-medium italic">
                  <li><a href="#" className="hover:text-gold">Home</a></li>
                  <li><a href="#rooms" className="hover:text-gold">Rooms</a></li>
                  <li><a href="#location" className="hover:text-gold">Location</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-6 uppercase tracking-widest text-[10px]">{t.followUs}</h4>
                <div className="flex space-x-6 text-slate-400">
                  <a href="#" className="hover:text-gold font-bold uppercase text-[10px]">FB</a>
                  <a href="#" className="hover:text-gold font-bold uppercase text-[10px]">IG</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-300 text-[10px] uppercase tracking-widest font-bold">
            <p>&copy; 2024 Phu Quoc Star Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ConciergeChat language={language} />
      <BookingModal isOpen={isBookingModalOpen} onClose={toggleBookingModal} language={language} />
    </div>
  );
};

export default App;
