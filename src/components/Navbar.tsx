import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mentors', href: '#mentors' },
    { name: 'Services', href: '#services' },
    { name: 'Roadmap', href: '#process' },
    { name: 'Proof', href: '#proof' },
    { name: 'Packages', href: '#packages' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'py-3.5 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 shadow-lg' 
            : 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="https://cwishlist.sirv.com/lofo.png" 
              alt="Sanchit Puri Logo" 
              className="w-10 h-10 object-contain rounded-md" 
            />
            <div className="flex flex-col">
              <span className={`font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                SANCHIT PURI
              </span>
              <span className={`text-[11px] font-medium tracking-wide ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Executive Career Acceleration
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className={`hidden lg:flex items-center gap-8 px-8 py-2.5 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold hover:text-amber-600 transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Right */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Book Consultation */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Book Mentorship</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`sm:hidden mt-3 mx-4 p-5 rounded-2xl border shadow-xl flex flex-col gap-4 ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold py-2 border-b flex items-center justify-between ${
                  isDarkMode ? 'border-slate-800 text-slate-200' : 'border-slate-100 text-slate-800'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Book 1-on-1 Mentorship</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
