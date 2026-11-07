import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    trackMetaContact('Navbar WhatsApp CTA');
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { label: 'Masalah', href: '#masalah' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#063B2D]/10 bg-[#FFF9EB]/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Wordmark & Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] rounded-lg"
        >
          <img
            src={FLOWNESIA_CONFIG.assets.logo}
            alt="FlowNesia Logo"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-[#D9AE52]/40 object-cover shadow-xs transition-transform group-hover:scale-105 shrink-0"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#063B2D] leading-tight">
              Flow<span className="text-[#087F5B]">Nesia</span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#063B2D]/80 leading-none">
              Kas Basic
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links for Desktop (1024px and up) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#182820]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap shrink-0 transition-colors hover:text-[#087F5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action Button on Desktop & Tablet */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={handleCtaClick}
            type="button"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#063B2D] px-4 sm:px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#087F5B] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-[#D9AE52] transition-transform group-hover:rotate-12" />
            <span>Konsultasi WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Tablet & Mobile Hamburger Toggle (Available up to 1023px, hidden on lg) */}
        <div className="flex lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#063B2D] hover:bg-[#063B2D]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Tablet & Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-[#063B2D]/10 bg-[#FFF9EB] px-4 py-5 lg:hidden shadow-lg transition-all"
        >
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#182820] hover:bg-[#063B2D]/5 hover:text-[#087F5B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#063B2D]/10 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#063B2D] py-3 text-sm font-semibold text-white shadow-xs active:bg-[#087F5B] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-[#D9AE52]" />
                <span>Konsultasi WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
