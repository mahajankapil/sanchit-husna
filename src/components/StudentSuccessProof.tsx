import React, { useState } from 'react';
import { ShieldCheck, Maximize2, X, MessageSquare, ArrowRight, ArrowLeft, Award } from 'lucide-react';
import { studentProofs, WHATSAPP_NUMBER } from '../data/mentorshipData';
import { TestimonialProof } from '../types';

export const StudentSuccessProof: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<TestimonialProof | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'income' | 'whatsapp' | 'feedback'>('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredProofs = studentProofs.filter((p) => {
    if (activeTab === 'all') return true;
    return p.screenshotType === activeTab;
  });

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredProofs.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + filteredProofs.length) % filteredProofs.length);
  };

  return (
    <section id="proof" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>REAL RESULTS & VERIFIED PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real People, Real <span className="text-amber-700">Dreams Achieved</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See how we've helped students just like you overcome their fears and build the life they deserve. Click any proof screenshot to view in full detail.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => { setActiveTab('all'); setCurrentSlideIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              All Proofs ({studentProofs.length})
            </button>
            <button
              onClick={() => { setActiveTab('income'); setCurrentSlideIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'income'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              Income & Revenue
            </button>
            <button
              onClick={() => { setActiveTab('whatsapp'); setCurrentSlideIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              WhatsApp Chats
            </button>
            <button
              onClick={() => { setActiveTab('feedback'); setCurrentSlideIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'feedback'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              Career Offers & Feedback
            </button>
          </div>
        </div>

        {/* Featured Slider */}
        {filteredProofs.length > 0 && (
          <div className="mb-16 relative">
            <div className="bg-amber-50/50 rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-md relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-700" />
                      {filteredProofs[currentSlideIndex].badge}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      Mentor: {filteredProofs[currentSlideIndex].mentor}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    "{filteredProofs[currentSlideIndex].headline}"
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{filteredProofs[currentSlideIndex].story}"
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">Verified Metric</span>
                      <span className="text-xl font-extrabold text-amber-800">
                        {filteredProofs[currentSlideIndex].metric}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {filteredProofs[currentSlideIndex].studentName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {filteredProofs[currentSlideIndex].roleOrLocation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Image Preview */}
                <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setSelectedProof(filteredProofs[currentSlideIndex])}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900 max-h-80">
                    <img
                      src={filteredProofs[currentSlideIndex].imageUrl}
                      alt={filteredProofs[currentSlideIndex].studentName}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="w-full flex items-center justify-between text-white text-xs font-bold">
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-4 h-4 text-amber-400" /> Click to view full proof
                        </span>
                        <span className="text-slate-300 font-normal">{filteredProofs[currentSlideIndex].date}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Slider Arrows */}
              <div className="flex items-center justify-between pt-6 border-t border-amber-200/80 mt-6">
                <span className="text-xs font-bold text-slate-500">
                  Proof {currentSlideIndex + 1} of {filteredProofs.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentProofs.map((proof) => (
            <div
              key={proof.id}
              onClick={() => setSelectedProof(proof)}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-200 hover:border-amber-400 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="relative rounded-xl overflow-hidden h-48 mb-3 bg-slate-900 border border-slate-200">
                <img
                  src={proof.imageUrl}
                  alt={proof.studentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 text-amber-900 text-[10px] font-bold border border-amber-200">
                  {proof.badge}
                </div>
                <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-white">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm line-clamp-1 mb-1 group-hover:text-amber-700">
                  {proof.headline}
                </h4>
                <p className="text-xs text-amber-800 font-bold mb-2">
                  {proof.metric}
                </p>
                <p className="text-[11px] text-slate-600 line-clamp-2">
                  {proof.story}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 mt-3 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>{proof.studentName}</span>
                <span>{proof.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProof && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  {selectedProof.badge}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Mentored by {selectedProof.mentor}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {selectedProof.headline}
              </h3>

              <div className="rounded-2xl overflow-hidden border border-slate-200 my-4 bg-slate-900">
                <img
                  src={selectedProof.imageUrl}
                  alt={selectedProof.studentName}
                  className="w-full max-h-[450px] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-700 leading-relaxed italic mb-2">
                  "{selectedProof.story}"
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-900">{selectedProof.studentName} ({selectedProof.roleOrLocation})</span>
                  <span className="font-extrabold text-amber-800 text-sm">{selectedProof.metric}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Sunchit & Syed, I saw ${selectedProof.studentName}'s success story (${selectedProof.headline}). I want to achieve similar results in mentorship!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span>Get Results Like This on WA</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
