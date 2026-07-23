import React, { useRef, useState } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

const Reel = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div 
      className="relative w-64 h-[450px] sm:w-72 sm:h-[500px] shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" 
      onClick={toggleMute}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </div>
      <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
        Client Feedback
      </div>
    </div>
  );
};

export const VideoReels: React.FC = () => {
  const reels = Array(6).fill('/vid.mp4');

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>CLIENT FEEDBACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our <span className="text-amber-700">Mentees</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real stories, real results. Watch what our students have to say about their transformation journey.
          </p>
        </div>

        {/* Video Slider */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reels.map((src, i) => (
            <div key={i} className="snap-center first:pl-4 last:pr-4 sm:first:pl-0 sm:last:pr-0">
              <Reel src={src} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
