import React, { useState } from 'react';
import { Check, X, Sparkles, MessageSquare, Zap, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { packages, WHATSAPP_NUMBER } from '../data/mentorshipData';

interface PackagesPricingProps {
  onOpenBooking: (packageId?: string) => void;
}

export const PackagesPricing: React.FC<PackagesPricingProps> = ({ onOpenBooking }) => {
  const [showComparison, setShowComparison] = useState(false);

  const handleSelectPackage = (pkgId: string, pkgName: string, pkgPrice: string) => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D97706', '#10B981', '#0F172A']
    });

    onOpenBooking(pkgId);
  };

  return (
    <section id="packages" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Select Your <span className="text-amber-700">Mentorship Package</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Transparent pricing with 100% practical, 1-on-1 handholding. Choose the tier that matches your career or revenue goals.
          </p>

          {/* Comparison Toggle */}

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isGrowth = pkg.id === 'growth';
            const isElite = pkg.id === 'elite-vip';
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMessage)}`;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group bg-white border ${
                  isGrowth 
                    ? 'border-2 border-amber-500 shadow-xl scale-100 lg:-translate-y-3 z-20' 
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Highlight Ribbon */}
                {isGrowth && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-amber-400 font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    MOST POPULAR CHOICE
                  </div>
                )}

                {isElite && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                    VIP 1-ON-1 HANDHOLDING
                  </div>
                )}

                <div>
                  {/* Package Title & Tagline */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {pkg.name}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-700 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">
                        {pkg.duration}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 min-h-[36px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through font-medium">
                        {pkg.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 ml-auto bg-emerald-100 px-2 py-0.5 rounded">
                        SAVE 50%
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-600 font-medium mt-1">
                      Target Mentors: <strong className="text-slate-900">{pkg.mentorTarget}</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Deliverables:
                    </span>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {pkg.notIncluded && pkg.notIncluded.map((notFeat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-through">{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSelectPackage(pkg.id, pkg.name, pkg.price)}
                    className={`w-full py-3.5 rounded-xl font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                      isGrowth
                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >

                    <span>Select {pkg.name} ({pkg.price})</span>
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    <span>Book via WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        {showComparison && (
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md overflow-x-auto animate-in fade-in duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Detailed Package Comparison Matrix
            </h3>

            <table className="w-full text-left text-xs min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Feature / Deliverable</th>
                  <th className="py-3 px-4">Starter (₹4,999)</th>
                  <th className="py-3 px-4 text-amber-800 font-extrabold">Growth (₹7,499)</th>
                  <th className="py-3 px-4">Elite VIP (₹12,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-semibold">1-on-1 Mentorship Sessions</td>
                  <td className="py-3 px-4">1 Session (60 mins)</td>
                  <td className="py-3 px-4 font-bold text-amber-900">4 Sessions (Monthly)</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">Unlimited / Bi-Weekly</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Dual Mentor Access (Sanchit + Syed)</td>
                  <td className="py-3 px-4">Choice of 1 Mentor</td>
                  <td className="py-3 px-4 font-bold text-amber-900">Both Mentors Included</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">Both Mentors + VIP Group</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Weekly Live Audit & Review</td>
                  <td className="py-3 px-4 text-slate-400">✕</td>
                  <td className="py-3 px-4 font-bold text-amber-900">✓ Included</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">✓ Priority Private Audit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">WhatsApp Support Access</td>
                  <td className="py-3 px-4">Group Support (Mon-Fri)</td>
                  <td className="py-3 px-4 font-bold text-amber-900">Direct Voice Note Access</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">Direct Emergency Calls</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Funnel & Resume Build Assistance</td>
                  <td className="py-3 px-4">Templates Only</td>
                  <td className="py-3 px-4 font-bold text-amber-900">Review & Polish</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">Done-With-You Rebuild</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
