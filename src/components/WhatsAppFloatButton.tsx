import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/mentorshipData';

export const WhatsAppFloatButton: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(userQuery)}`;
    window.open(url, '_blank');
    setChatOpen(false);
    setUserQuery('');
  };

  const quickPrompts = [
    "Hi Sunchit! I want to ask about Affiliate Marketing mentorship.",
    "Hi Syed Husna! I need Career Guidance & Counselling.",
    "Which mentorship package is best for a complete beginner?",
    "Can I book a 1-on-1 discovery call today?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Preview Popup */}
      {chatOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl animate-in slide-in-from-bottom-5 duration-200">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                WA
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900">Sunchit & Syed Husna</h4>
                <span className="text-[10px] text-emerald-700 font-bold">Online • Instant Support</span>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 mb-4">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">
                👋 Welcome! How can we help you today?
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Tap a quick question below or type your message to start chatting on WhatsApp:
              </p>
            </div>

            <div className="space-y-1.5">
              {quickPrompts.map((prompt, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prompt)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 text-[11px] font-medium text-slate-700 transition-all text-left"
                >
                  "{prompt}"
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendCustom} className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Chat on WhatsApp"
      >
        <div className="relative">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline font-extrabold">Chat on WhatsApp</span>
      </button>

    </div>
  );
};
