import React, { useState } from 'react';
import { MessageSquare, Sparkles, ShieldCheck, Trophy, ArrowUpRight, CheckCircle2, Star, Award } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK, mentors } from '../data/mentorshipData';

interface HeroProps {
  onOpenBooking: (packageId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeMentorIndex, setActiveMentorIndex] = useState(0);
  const currentMentor = mentors[activeMentorIndex];

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#F8FAFC]">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Key Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Helping Students Build <br />
              <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-8">
                High-Income Careers
              </span>
            </h1>

            {/* Subheading */}
            <p className="hidden md:block text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Direct, hands-on guidance from two industry leaders—<strong className="text-slate-900 font-semibold">Sanchit Puri</strong> (Affiliate Marketing & Business Scaling) and <strong className="text-slate-900 font-semibold">Syed Husna Ali</strong> (Career Counselling & Leadership). Transform your skills into predictable, sustainable earnings.
            </p>

            {/* Dual Mentor Selector Tabs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setActiveMentorIndex(0)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeMentorIndex === 0 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Sanchit Puri (Digital & Affiliate)
              </button>
              <button
                onClick={() => setActiveMentorIndex(1)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeMentorIndex === 1 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Syed Husna Ali (Career Guidance)
              </button>
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >

                <span>Book Mentorship Session</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <a
                href={DEFAULT_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-md transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-200 max-w-xl">
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black text-slate-900 flex flex-wrap items-baseline gap-1">
                  6+ <span className="text-amber-600 text-[10px] sm:text-base font-bold leading-none">Years</span>
                </span>
                <span className="text-[9px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">Track Record</span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black text-slate-900 flex flex-wrap items-baseline gap-1">
                  300+ <span className="text-amber-600 text-[10px] sm:text-base font-bold leading-none">Mentees</span>
                </span>
                <span className="text-[9px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">Guided Directly</span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black text-slate-900 flex flex-wrap items-baseline gap-1">
                  95% <span className="text-emerald-600 text-[10px] sm:text-base font-bold leading-none">Success</span>
                </span>
                <span className="text-[9px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">Career Outcome</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pristine Photo Card Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl p-3 bg-white border border-slate-200 shadow-xl group">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={currentMentor.image}
                  alt={currentMentor.name}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top transition-all duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        {currentMentor.name}
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </h3>
                      <p className="text-xs text-amber-800 font-semibold mt-0.5">
                        {currentMentor.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-900 text-xs font-extrabold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      4.9/5
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card Top Left */}
              <div className="absolute -top-3 -left-3 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500">Student Benchmark</span>
                  <span className="block text-sm font-black text-slate-900">₹1 Lakh+ / Month</span>
                </div>
              </div>

              {/* Floating Stat Card Bottom Right */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500">Mentorship Model</span>
                  <span className="block text-sm font-black text-emerald-700">100% Practical</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
