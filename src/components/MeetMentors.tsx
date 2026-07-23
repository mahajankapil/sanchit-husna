import React from 'react';
import { MessageSquare, CheckCircle2, Award, GraduationCap, Sparkles, ChevronRight } from 'lucide-react';
import { mentors, WHATSAPP_NUMBER } from '../data/mentorshipData';

interface MeetMentorsProps {
  onOpenBooking: (packageId?: string) => void;
}

export const MeetMentors: React.FC<MeetMentorsProps> = ({ onOpenBooking }) => {

  return (
    <section id="mentors" className="py-12 md:py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">

            <span>EXPERT LEADERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Your Industry <span className="text-amber-700">Mentors</span>
          </h2>

          <p className="hidden md:block text-slate-600 text-base sm:text-lg leading-relaxed">
            Get direct, unvarnished access to two seasoned experts who have built real digital businesses and guided hundreds of students to career excellence.
          </p>
          <p className="md:hidden text-slate-600 text-base leading-relaxed">
            Get direct guidance from proven industry experts.
          </p>

        </div>

        {/* Dual Mentor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {mentors.map((mentor) => {
              const waLink = `https://wa.me/${mentor.whatsappNumber}?text=${encodeURIComponent(mentor.whatsappMessage)}`;

              return (
                <div
                  key={mentor.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-6">
                    
                    {/* Mentor Header */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-md">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2 left-2 bg-slate-900 text-amber-400 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase">
                          Verified
                        </div>
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                          {mentor.experience} Industry Exp.
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {mentor.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-amber-800 font-semibold">
                          {mentor.title}
                        </p>

                        <div className="text-xs text-slate-500 flex items-center gap-1.5 font-semibold">
                          <GraduationCap className="w-4 h-4 text-amber-600" />
                          <span>{mentor.studentsCount}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {mentor.bio}
                    </p>

                    {/* Specialization Tags */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Core Specializations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.specialization.map((spec, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-600" /> Key Milestones & Impact
                      </h4>
                      <ul className="space-y-1.5">
                        {mentor.achievements.map((ach, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs items-center justify-center gap-2 shadow-xs transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                      <span>Chat with {mentor.name.split(' ')[0]}</span>
                    </a>

                    <button
                      onClick={() => onOpenBooking()}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Book 1-on-1 Session</span>
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>

                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
