import React, { useRef, useState, useEffect } from 'react';
import { VolumeX, Volume2, Play, Pause } from 'lucide-react';

const Reel = ({ src, tag }: { src: string, tag?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync state with video events in case it pauses for other reasons
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div 
      className="relative w-44 h-[310px] md:w-52 md:h-[370px] lg:w-56 lg:h-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" 
      onClick={togglePlay}
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
      
      {/* Play/Pause overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="bg-black/40 p-3 rounded-full text-white backdrop-blur-sm">
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </div>
      </div>

      <div 
        className="absolute bottom-3 right-3 bg-black/50 p-1.5 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:bg-black/70"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </div>
      <div className="absolute top-3 left-3 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide z-10 shadow-md">
        {tag || "Client Feedback"}
      </div>
    </div>
  );
};

export const VideoReels: React.FC = () => {
  const reels = [
    { src: '/vid.mp4', tag: 'Client Feedback' },
    { src: '/vid2.mp4', tag: 'Client Feedback' },
    { src: '/vid3.mp4', tag: 'Manager Feedback' },
    { src: '/vid4.mp4', tag: 'Manager Feedback' },
    { src: '/vid5.mp4', tag: 'Manager Feedback' },
    { src: '/vid6.mp4', tag: 'Manager Feedback' }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    setDragDistance(Math.abs(walk));
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragDistance > 10) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

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
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClickCapture={handleClickCapture}
          className={`flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x select-none ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-mandatory'}`} 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((item, i) => (
            <div key={i} className="flex-shrink-0 snap-center first:pl-4 last:pr-4 sm:first:pl-0 sm:last:pr-0">
              <Reel src={item.src} tag={item.tag} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
