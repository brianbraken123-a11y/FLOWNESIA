import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

interface FloatingWhatsAppProps {
  isModalOpen?: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ isModalOpen = false }) => {
  // If modal is active, hide the floating CTA so it does not interfere with accessibility or backdrop
  if (isModalOpen) return null;

  const handleClick = (source: string) => {
    trackMetaContact(`Floating WhatsApp CTA (${source})`);
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* DESKTOP FLOATING BUTTON (Visible on sm breakpoint and above) */}
      <aside
        aria-label="Kontak Cepat WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden sm:block pointer-events-auto"
      >
        <button
          type="button"
          onClick={() => handleClick('Desktop Floating')}
          className="group relative flex items-center gap-3 rounded-full bg-[#087F5B] py-3.5 px-6 text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#063B2D] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer animate-breathe-gentle"
          aria-label="Konsultasi WhatsApp FlowNesia"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:rotate-12" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white leading-tight">
              Konsultasi WhatsApp
            </span>
            <span className="text-[10px] text-white/80 leading-none">
              Tanya FlowNesia Kas
            </span>
          </div>
        </button>
      </aside>

      {/* MOBILE STICKY CONVERSION BAR (Visible on mobile screens < 640px) */}
      <aside
        aria-label="Bilah Konversi WhatsApp Mobile"
        className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden border-t border-[#063B2D]/15 bg-[#FFF9EB]/95 px-4 pt-2.5 backdrop-blur-md shadow-2xl"
        style={{
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.65rem)',
        }}
      >
        <button
          type="button"
          onClick={() => handleClick('Mobile Sticky Bar')}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087F5B] py-3.5 px-4 text-center font-bold text-white shadow-md active:bg-[#063B2D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
          aria-label="Tanya FlowNesia via WhatsApp"
        >
          <MessageCircle className="h-5 w-5 text-[#D9AE52]" />
          <span className="text-sm">Tanya FlowNesia via WhatsApp</span>
        </button>
      </aside>
    </>
  );
};
