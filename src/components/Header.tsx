'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Servicios',  dropdown: true  },
  { label: 'Soluciones', dropdown: true  },
  { label: 'Conoceme',     dropdown: false },
  { label: 'Proyectos',  dropdown: true  },
  { label: 'Reseñas',  dropdown: true  },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(11,11,11,0.98)] shadow-[0_1px_0_rgba(212,175,55,0.12)]'
          : 'bg-[rgba(11,11,11,0.80)] backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-8 flex items-center justify-between h-20">

        {/* ── Logo ── */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <svg width="68" height="68" viewBox="0 0 34 34" fill="none">
            <path d="M17 2L31 9.5V24.5L17 32L3 24.5V9.5L17 2Z"
              stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M17 8L27 13.5V22.5L17 28L7 22.5V13.5L17 8Z"
              fill="#D4AF37" />
          </svg>
          <span className="text-2xl font-bold tracking-widest">
            <span className="text-[#F5F5F0]">ARCHITEK AI</span>{' '}
            <span className="text-[#888] font-normal">SOLUTIONS</span>
          </span>
        </div>

        {/* ── Nav + Botón juntos a la derecha ── */}
        <div className="hidden md:flex items-center gap-6">

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.map(({ label, dropdown }) => (
              <button
                key={label}
                className="flex items-center gap-1 text-sm font-medium text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200"
              >
                {label}
                {dropdown && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* CTA button */}
         <button
           className="inline-flex items-center 
              px-6 py-2
              text-sm font-semibold 
              text-[#D4AF37] 
              border-2 border-[#D4AF37] 
              rounded-lg 
              hover:bg-[rgba(212,175,55,0.1)] 
              transition-all duration-200 
              flex-shrink-0"
          >
           Contrátame
          </button>


        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-[#C8C8C8] hover:text-[#D4AF37]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(11,11,11,0.98)] border-t border-[rgba(212,175,55,0.1)] px-8 py-4">
          {navLinks.map(({ label }) => (
            <button
              key={label}
              className="block w-full text-left py-3 text-base font-medium text-[#E0E0E0] hover:text-[#D4AF37] border-b border-[rgba(255,255,255,0.05)] transition-colors"
            >
              {label}
            </button>
          ))}
          <div className="pt-4">
            <button className="w-full py-2.5 text-sm font-semibold text-[#D4AF37] border border-[#D4AF37] rounded-lg hover:bg-[rgba(212,175,55,0.1)] transition-all">
              Contrátame
            </button>
          </div>
        </div>
      )}
    </header>
  );
}