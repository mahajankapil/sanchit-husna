import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Instagram, Linkedin, Youtube, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/mentorshipData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredMentor: 'Both Mentors',
    goal: 'Affiliate Marketing & Business Scaling',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `Hi Sanchit & Syed Husna! My name is ${formData.name} (${formData.phone}).
Target Goal: ${formData.goal}
Preferred Mentor: ${formData.preferredMentor}
Message: ${formData.message || 'I want to book my mentorship session.'}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book Your <span className="text-amber-700">Mentorship Session</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ready to build a high-income career or scale your digital business? Send us a quick inquiry below or connect directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big Card */}
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 shadow-md space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                Instant WhatsApp Booking
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Skip the waiting time. Get direct 1-on-1 response from Sanchit Puri or Syed Husna Ali's team right now.
              </p>

              <a
                href={DEFAULT_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Open Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              <a
                href="tel:+919876543210"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Phone Hotline</span>
                  <span className="text-sm font-bold text-slate-900">+91 98765 43210</span>
                </div>
              </a>

              <a
                href="mailto:contact@mentorshipplatform.com"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Official Email</span>
                  <span className="text-sm font-bold text-slate-900">mentorship@sp-sha.com</span>
                </div>
              </a>

            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Follow Mentors on Social Media:
              </span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-slate-300 transition-all shadow-xs">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-slate-300 transition-all shadow-xs">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-slate-300 transition-all shadow-xs">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-amber-600" /> Headquarter Locations:
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Delhi NCR & Mumbai Corporate Hub, India (In-person Workshops & Worldwide Online Sessions).
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
              
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send Consultation Request
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Fill out your details to receive a customized 1-on-1 strategy call confirmation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Select Primary Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                    >
                      <option>Affiliate Marketing & Business Scaling</option>
                      <option>Digital Marketing & Lead Generation</option>
                      <option>Freelancing & High-Ticket Client Closing</option>
                      <option>Career Counselling & Guidance (Syed Husna)</option>
                      <option>Personality & Communication Skills</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Preferred Mentor
                    </label>
                    <select
                      value={formData.preferredMentor}
                      onChange={(e) => setFormData({ ...formData, preferredMentor: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                    >
                      <option>Both Mentors (Recommended)</option>
                      <option>Sanchit Puri (Digital & Affiliate)</option>
                      <option>Syed Husna Ali (Career Guidance)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Your Current Status / Query (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your current background and what you hope to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Redirecting to WhatsApp chat...
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
