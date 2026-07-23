import React, { useState } from 'react';
import { 
  Target, TrendingUp, Briefcase, Zap, Compass, UserCheck, 
  Sparkles, BarChart3, Award, MessageSquare, GraduationCap, 
  ArrowRight, CheckCircle, Search
} from 'lucide-react';
import { services, WHATSAPP_NUMBER } from '../data/mentorshipData';

interface ServicesGridProps {
  onOpenBooking: (packageId?: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Target,
  TrendingUp,
  Briefcase,
  Zap,
  Compass,
  UserCheck,
  Sparkles,
  BarChart3,
  Award,
  MessageSquare,
  GraduationCap
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marketing' | 'career' | 'growth'>('all');

  const filteredServices = services.filter((s) => {
    return activeCategory === 'all' || s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>HIGH-IMPACT MENTORSHIP MODULES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="text-amber-700">Mentorship Services</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Master high-income digital skills or accelerate your professional career trajectory with customized 1-on-1 execution modules.
          </p>

          {/* Category Filter Dropdown */}
          <div className="flex justify-center pt-6">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as any)}
              className="w-full sm:w-auto min-w-[280px] bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm cursor-pointer"
            >
              <option value="all">All Modules (11)</option>
              <option value="marketing">Digital & Affiliate Marketing</option>
              <option value="career">Career & Personality</option>
              <option value="growth">Freelancing & Business Scaling</option>
            </select>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Target;
            const waMsg = `Hi, I want to inquire about the "${service.title}" mentorship service with ${service.mentorName}.`;
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Popular Ribbon if marked */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-extrabold tracking-wider uppercase">
                    HOT MODULE
                  </div>
                )}

                <div>
                  {/* Icon + Mentor Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold text-slate-700 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">
                      {service.mentorName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Outcomes */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables:
                    </span>
                    {service.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 text-slate-800 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    <span>Inquire on WA</span>
                  </a>

                  <button
                    onClick={() => onOpenBooking()}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer"
                    title="Book Mentorship"
                  >
                    <ArrowRight className="w-4 h-4 text-amber-400" />
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
