
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ConciergeChatProps {
  language: Language;
}

const ConciergeChat: React.FC<ConciergeChatProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t.chatGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getConciergeResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Service error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="bg-white shadow-2xl w-80 md:w-96 overflow-hidden border border-slate-200 mb-4 animate-slideIn flex flex-col h-[500px]">
          <div className="bg-navy p-5 flex justify-between items-center text-gold border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold bg-white/5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1L14.5 9H22.5L16 14L18.5 22L12 17L5.5 22L8 14L1.5 9H9.5L12 1Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif font-bold tracking-widest italic">Starlet</h4>
                <p className="text-[10px] text-gold/60 uppercase tracking-widest font-semibold">{t.online}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gold/80 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-6 bg-vintage scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-navy text-gold shadow-md' 
                  : 'bg-white text-slate-600 shadow-sm border border-slate-100 italic'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 border border-slate-100 flex space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.chatPlaceholder} 
              className="flex-grow px-4 py-2 bg-vintage border border-slate-100 text-slate-800 text-sm focus:outline-none focus:border-gold transition-all placeholder:text-slate-400 italic"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-navy text-gold hover:bg-gold hover:text-navy transition-all shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy border border-gold/40 hover:bg-slate-800 text-gold rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ConciergeChat;
