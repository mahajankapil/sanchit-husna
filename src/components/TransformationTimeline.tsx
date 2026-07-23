import React from 'react';
import { CalendarCheck, Map, Rocket, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { timelineSteps } from '../data/mentorshipData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  CalendarCheck,
  Map,
  Rocket,
  ShieldCheck,
  Trophy
};

interface TransformationTimelineProps {
  onOpenBooking: () => void;
}

export const TransformationTimeline: React.FC<TransformationTimelineProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>THE ROADMAP TO SUCCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 5-Step <span className="text-amber-700">Transformation Process</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured, zero-fluff blueprint designed to take you from foundational clarity to predictable monthly revenue & career breakthrough.
          </p>
        </div>

        {/* Timeline Grid / Line */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {timelineSteps.map((step, index) => {
              const IconComp = iconMap[step.icon] || Rocket;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.stepNumber}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Step Content Box */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold">
                          STEP 0{step.stepNumber}
                        </span>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                        <span className="text-amber-800">Key Outcome:</span>
                        <span className="text-slate-900">{step.deliverable}</span>
                      </div>

                    </div>
                  </div>

                  {/* Center Node / Number Badge */}
                  <div className="hidden md:flex my-4 md:my-0 relative z-20 items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer for 50% split on desktop */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Timeline Bottom CTA */}
        <div className="text-center mt-16 pt-8">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base inline-flex items-center gap-3 shadow-lg transition-all cursor-pointer"
          >
            <Rocket className="w-5 h-5 text-amber-400" />
            <span>Start Step 1: Book Your Discovery Session</span>
          </button>
        </div>

      </div>
    </section>
  );
};
