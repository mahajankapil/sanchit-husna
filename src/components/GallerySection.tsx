import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { galleryItems } from '../data/mentorshipData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'training' | 'speaking' | 'students' | 'achievements'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>BEHIND THE SCENES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mentorship in <span className="text-amber-700">Action</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Snapshots of our live 1-on-1 strategy calls, university keynote workshops, student masterminds, and milestone award ceremonies.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              All Photos ({galleryItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('training')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'training'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              1-on-1 Training
            </button>
            <button
              onClick={() => setActiveFilter('speaking')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'speaking'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              Speaking & Workshops
            </button>
            <button
              onClick={() => setActiveFilter('students')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'students'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              Student Meetups
            </button>
            <button
              onClick={() => setActiveFilter('achievements')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'achievements'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
              }`}
            >
              Awards & Milestones
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-300 group cursor-pointer relative shadow-xs hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    {item.category} • {item.date}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-[70vh] bg-slate-900">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-800 uppercase">
                  {selectedPhoto.category} • {selectedPhoto.date}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
