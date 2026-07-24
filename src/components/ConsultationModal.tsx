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
  selectedPackageId = 'elite-vip'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPkgIds, setSelectedPkgIds] = useState<string[]>([selectedPackageId || 'elite-vip']);
  const [mentorChoice] = useState('Both Mentors (Recommended)');

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPkgIds.length === 0) {
      alert("Please select at least one package.");
      return;
    }

    const selectedPackages = selectedPkgIds.map(id => packages.find(p => p.id === id)!);
    const packageList = selectedPackages.map(p => `- ${p.name} (${p.price})`).join('\n');
    
    const msg = `Hi Sunchit & Syed Husna! My name is ${name} (${phone}).\nI want to enroll in the following packages:\n${packageList}\n\nMentor Preference: ${mentorChoice}. Please reserve my 1-on-1 slot!`;

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
              Selected Tiers: <strong className="text-amber-800 font-extrabold">{selectedPkgIds.length > 0 ? selectedPkgIds.map(id => packages.find(p => p.id === id)?.name).join(', ') : 'None'}</strong>
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
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Package(s)
              </label>
              <div className="space-y-2">
                {packages.map(p => {
                  const isSelected = selectedPkgIds.includes(p.id);
                  return (
                    <div 
                      key={p.id}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedPkgIds(prev => prev.filter(id => id !== p.id));
                        } else {
                          setSelectedPkgIds(prev => [...prev, p.id]);
                        }
                      }}
                      className={`w-full text-left p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer transition-all gap-2 ${
                        isSelected 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex-1 pr-4">
                        <div className={`font-bold text-sm ${isSelected ? 'text-amber-900' : 'text-slate-900'}`}>{p.name}</div>
                        <div className={`text-[11px] leading-snug mt-0.5 ${isSelected ? 'text-amber-700' : 'text-slate-500'}`}>{p.tagline}</div>
                      </div>
                      <div className={`font-extrabold text-sm whitespace-nowrap ${isSelected ? 'text-amber-700' : 'text-slate-900'}`}>{p.price}</div>
                    </div>
                  );
                })}
              </div>
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
