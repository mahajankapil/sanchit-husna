import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { packages, WHATSAPP_NUMBER } from '../data/mentorshipData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedPackageId = 'growth'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkgId, setPkgId] = useState(selectedPackageId);
  const [mentorChoice] = useState('Both Mentors (Recommended)');

  if (!isOpen) return null;

  const currentPkg = packages.find(p => p.id === pkgId) || packages[1];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Sanchit & Syed Husna! My name is ${name} (${phone}).
I want to enroll in the ${currentPkg.name} (${currentPkg.price}).
Mentor Preference: ${mentorChoice}. Please reserve my 1-on-1 slot!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase">

            <span>CONFIRM 1-ON-1 MENTORSHIP SLOT</span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Reserve Your Mentorship
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Selected Tier: <strong className="text-amber-800 font-extrabold">{currentPkg.name} ({currentPkg.price})</strong>
            </p>
          </div>

          <form onSubmit={handleConfirm} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ankit Verma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Select Package
              </label>
              <select
                value={pkgId}
                onChange={(e) => setPkgId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.price})</option>
                ))}
              </select>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold text-slate-700 block">Package Includes:</span>
              <ul className="space-y-1">
                {currentPkg.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Confirm & Reserve via WhatsApp</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
