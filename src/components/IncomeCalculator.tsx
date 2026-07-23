import React, { useState } from 'react';
import { Calculator, Sparkles, Clock } from 'lucide-react';

interface IncomeCalculatorProps {
  onOpenBooking: () => void;
}

export const IncomeCalculator: React.FC<IncomeCalculatorProps> = ({ onOpenBooking }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [track, setTrack] = useState<'freelance' | 'affiliate' | 'career'>('freelance');

  let estimatedMonthlyIncome = 0;
  let estimatedTimeframe = "2-3 Months";

  if (track === 'freelance') {
    estimatedMonthlyIncome = Math.round(hoursPerWeek * 3500);
    estimatedTimeframe = "30 to 45 Days";
  } else if (track === 'affiliate') {
    estimatedMonthlyIncome = Math.round(hoursPerWeek * 4800);
    estimatedTimeframe = "45 to 60 Days";
  } else {
    estimatedMonthlyIncome = Math.round(hoursPerWeek * 5500);
    estimatedTimeframe = "60 to 90 Days";
  }

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md max-w-4xl mx-auto">
          
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase">
              <Calculator className="w-3.5 h-3.5 text-amber-600" />
              <span>INTERACTIVE ROI ESTIMATOR</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Calculate Your <span className="text-amber-700">Earning Potential</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600">
              Estimate your monthly income growth based on weekly effort and structured mentorship execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="space-y-6">
              
              {/* Select Skill Track */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Mentorship Skill Track:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setTrack('freelance')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      track === 'freelance'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Freelancing
                  </button>
                  <button
                    onClick={() => setTrack('affiliate')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      track === 'affiliate'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Affiliate Ads
                  </button>
                  <button
                    onClick={() => setTrack('career')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      track === 'career'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Career Growth
                  </button>
                </div>
              </div>

              {/* Slider for Hours */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Weekly Dedicated Time:</span>
                  <span className="text-amber-800 font-extrabold">{hoursPerWeek} Hours / Week</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-slate-900 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                  <span>5 Hrs (Part Time)</span>
                  <span>20 Hrs (Dedicated)</span>
                  <span>35 Hrs (Full Time)</span>
                </div>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Estimated Potential Monthly Income
              </span>

              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                ₹{estimatedMonthlyIncome.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-normal">/ month</span>
              </div>

              <div className="text-xs text-slate-600 flex items-center justify-center gap-2 pt-2 border-t border-slate-200 font-semibold">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Estimated Timeframe: <strong className="text-emerald-700">{estimatedTimeframe}</strong></span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-2"
              >

                <span>Unlock This Growth with Mentorship</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
