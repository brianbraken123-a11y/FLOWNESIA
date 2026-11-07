import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = (source: string) => {
    trackMetaLead(`Floating CTA (${source})`);
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* DESKTOP FLOATING BUTTON (hidden on mobile, visible on sm and up) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <button
          type="button"
          onClick={() => handleClick('Desktop Floating')}
          className="group relative flex items-center gap-3 rounded-full bg-[#087F5B] py-3.5 px-6 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#063B2D] hover:shadow-[#087F5B]/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AE52] cursor-pointer animate-breathe-gentle"
          aria-label="Konsultasi Gratis via WhatsApp"
        >
          {/* WhatsApp Icon */}
          <div className="relative flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9AE52]"></span>
            </span>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-medium text-white/80 leading-none">
              Respon Cepat
            </span>
            <span className="text-sm font-bold text-white leading-tight">
              Konsultasi Gratis
            </span>
          </div>
        </button>
      </div>

      {/* MOBILE FIXED BOTTOM STICKY CONVERSION BAR */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 block sm:hidden border-t border-[#063B2D]/15 bg-[#FFF9EB]/95 px-4 pt-3 pb-3 backdrop-blur-md shadow-2xl"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
      >
        <button
          type="button"
          onClick={() => handleClick('Mobile Sticky Bar')}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#087F5B] py-3.5 px-4 text-center font-bold text-white shadow-lg shadow-[#087F5B]/30 active:scale-[0.98] transition-transform cursor-pointer"
        >
          <MessageCircle className="h-5 w-5 text-[#D9AE52]" />
          <span className="text-sm">Tanya FlowNesia via WhatsApp</span>
        </button>
      </div>
    </>
  );
};
