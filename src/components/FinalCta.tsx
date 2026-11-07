import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

export const FinalCta: React.FC = () => {
  const handleFinalCta = () => {
    trackMetaContact('Final CTA WhatsApp');
    window.open(
      getWhatsAppUrl(`Halo kak, saya siap menggunakan FlowNesia Kas Basic (${FLOWNESIA_CONFIG.pricing.mainPrice}). Mohon dibantu proses setup usahanya.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#063B2D] text-white overflow-hidden">
      {/* Background ambient gold & emerald lights */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#087F5B]/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#D9AE52]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9AE52] mb-6 backdrop-blur-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#D9AE52]" />
          <span>Otomasi Pembukuan Kas Usaha Anda</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white text-balance leading-tight">
          Mulai Kelola Catatan Keuangan Usaha dengan Lebih Praktis
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Pencatatan kas via WhatsApp terhubung langsung ke Google Sheets. Sistem siap digunakan untuk mendukung operasional harian usaha Anda.
        </p>

        {/* Highlights Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9AE52]" />
            <span>{FLOWNESIA_CONFIG.pricing.mainPrice} Sekali Bayar</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9AE52]" />
            <span>Setup Didampingi Sesuai SOP</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9AE52]" />
            <span>Tersimpan di Google Sheets Anda</span>
          </div>
        </div>

        {/* Strong WhatsApp CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleFinalCta}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#D9AE52] px-8 py-5 text-base sm:text-lg font-extrabold text-[#063B2D] shadow-2xl transition-all duration-200 hover:bg-[#F4E2B2] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <MessageCircle className="h-6 w-6 text-[#063B2D] transition-transform group-hover:rotate-12" />
            <span>Hubungi Kami via WhatsApp</span>
            <ArrowRight className="h-5 w-5 text-[#063B2D] transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-xs text-white/80 font-medium">
            {FLOWNESIA_CONFIG.pricing.separateCostNotice}
          </p>
        </div>

        {/* Assurance */}
        <p className="mt-5 text-xs text-white/60 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-[#D9AE52]" />
          <span>Konsultasi awal via WhatsApp gratis tanpa kewajiban apa pun.</span>
        </p>

      </div>
    </section>
  );
};
