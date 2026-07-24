import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/mentorshipData';

export const WebinarBooking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission and redirect to WhatsApp
    setIsSubmitted(true);
    window.open(`https://wa.me/919811051676?text=${encodeURIComponent("Hi! I want to claim my VIP pass for the upcoming exclusive Masterclass.")}`, '_blank');
  };

  const whatsappMessage = encodeURIComponent("Hi! I want to claim my VIP pass for the upcoming exclusive Masterclass.");
  const waUrl = `https://wa.me/919811051676?text=${whatsappMessage}`;

  return (
    <section id="webinar" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Webinar Details */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Upcoming Masterclass
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-amber-500">
                Webinar
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                Join Sunchit Puri and Syed Husna Ali in this exclusive 90-minute live training. Learn the exact frameworks to build high-income skills and land international clients.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-sm">Date</span>
                </div>
                <span className="text-slate-200 text-sm font-medium">This Sunday</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-sm">Time</span>
                </div>
                <span className="text-slate-200 text-sm font-medium">7:00 PM IST</span>
              </div>
              <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Video className="w-5 h-5" />
                  <span className="font-bold text-sm">Format</span>
                </div>
                <span className="text-slate-200 text-sm font-medium">Live via Zoom</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-700/50">
              <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wide">What you will learn:</h4>
              {[
                "The 3-step high-ticket client acquisition funnel.",
                "How to build an irresistible digital portfolio.",
                "Executive communication secrets to close deals fast."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extrabold text-slate-900">Claim Your Spot</h3>
                    <p className="text-slate-500 text-sm mt-2">Only 100 seats available. Register now before it fills up.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-slate-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-slate-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 mt-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 group"
                    >
                      <span>WhatsApp Direct</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <span className="text-xs text-slate-400 font-medium">Or register instantly via</span>
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline">
                        WhatsApp
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-4 animate-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Registration Confirmed!</h3>
                  <p className="text-slate-600">
                    We've saved your seat. You will receive the Zoom link on your WhatsApp shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-amber-600 font-bold text-sm hover:underline mt-4 inline-block"
                  >
                    Register another person
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
