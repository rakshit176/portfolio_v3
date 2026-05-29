'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Chat', href: '#chat-section' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="font-bold text-sm tracking-[0.3em] uppercase text-[#00d4ff]">
          RK{'//'}AI
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs tracking-[0.12em] uppercase text-[#a0a0a0] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() =>
            document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0090b0] text-white text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          Hire Me →
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#e0e0e0] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#e0e0e0] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#e0e0e0] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#a0a0a0] hover:text-white transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0090b0] text-white text-sm font-semibold"
            >
              Hire Me →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
