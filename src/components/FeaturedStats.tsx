import React from 'react';
import { Users, TrendingUp, Building2, Award } from 'lucide-react';

export const FeaturedStats: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: "Students Mentored",
      value: "300+",
      subtext: "1-on-1 Personalized Coaching",
      icon: Users,
      bgColor: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      id: 2,
      label: "Dreams Funded",
      value: "₹50 Lakhs+",
      subtext: "Collective Digital Earnings",
      icon: TrendingUp,
      bgColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      id: 3,
      label: "Lives Changed",
      value: "50+",
      subtext: "High-Ticket Client Acquisition",
      icon: Building2,
      bgColor: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      id: 4,
      label: "Happy Students",
      value: "95%",
      subtext: "Successful Career Transitions",
      icon: Award,
      bgColor: "bg-purple-50 text-purple-800 border-purple-200"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 group flex flex-col items-start shadow-xs hover:shadow-md"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${stat.bgColor} mb-4 shadow-xs`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-extrabold text-slate-800 mt-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
