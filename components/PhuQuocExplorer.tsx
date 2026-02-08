
import React, { useState } from 'react';
import { searchPhuQuocInfo } from '../services/geminiService';
import { Language } from '../types';

interface PhuQuocExplorerProps {
  language: Language;
}

const PhuQuocExplorer: React.FC<PhuQuocExplorerProps> = ({ language }) => {
  const [results, setResults] = useState<{ text: string, links: { uri: string, title: string }[] } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const explore = async (topic: string) => {
    setIsSearching(true);
    const query = language === 'vi' 
      ? `Những địa điểm du lịch hàng đầu và tin tức mới nhất tại Phú Quốc năm 2024 về ${topic}` 
      : `Top tourist attractions and latest 2024 news in Phu Quoc regarding ${topic}`;
    const data = await searchPhuQuocInfo(query);
    setResults(data);
    setIsSearching(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 italic">
            {language === 'vi' ? 'Khám Phá Phú Quốc' : 'Explore Phu Quoc'}
          </h2>
          <p className="text-slate-500 italic font-light">
            {language === 'vi' ? 'Cập nhật những địa điểm hot nhất trực tuyến qua Starlet Search' : 'Get real-time local updates powered by Starlet Search'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => explore('beaches')}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold"
              disabled={isSearching}
            >
              {language === 'vi' ? 'Bãi biển đẹp nhất' : 'Best Beaches'}
            </button>
            <button 
              onClick={() => explore('food')}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold"
              disabled={isSearching}
            >
              {language === 'vi' ? 'Ẩm thực địa phương' : 'Local Food'}
            </button>
            <button 
              onClick={() => explore('festivals')}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold"
              disabled={isSearching}
            >
              {language === 'vi' ? 'Sự kiện & Lễ hội' : 'Festivals'}
            </button>
          </div>
        </div>

        {isSearching && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-pulse">
            <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Scanning the Island...</p>
          </div>
        )}

        {results && !isSearching && (
          <div className="max-w-3xl mx-auto bg-vintage p-8 border border-slate-100 shadow-sm animate-fadeIn">
            <div className="prose prose-slate prose-sm italic font-light text-slate-600 mb-8 leading-relaxed">
              {results.text}
            </div>
            {results.links.length > 0 && (
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-navy mb-4">Verified Sources</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-gold hover:underline flex items-start gap-2 group"
                    >
                      <span className="mt-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </span>
                      <span className="line-clamp-1">{link.title || 'Source'}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhuQuocExplorer;
