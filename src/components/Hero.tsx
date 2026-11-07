import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

interface HeroProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenImageModal }) => {
  const handlePrimaryCta = () => {
    trackMetaContact('Hero Primary CTA');
    window.open(
      getWhatsAppUrl(`Halo kak, saya ingin konsultasi FlowNesia Kas Basic (${FLOWNESIA_CONFIG.pricing.mainPrice}) untuk usaha saya`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('cara-kerja');
    if (el) {
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient gradients */}
      <div
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-[#D9AE52]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-48 -left-20 -z-10 h-96 w-96 rounded-full bg-[#087F5B]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust marker: High-contrast text */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide text-[#063B2D]">
              <span className="flex items-center gap-1.5 text-[#087F5B]">
                <Sparkles className="h-3.5 w-3.5 text-[#087F5B]" />
                Otomasi Pembukuan Kas UMKM
              </span>
              <span aria-hidden="true" className="text-[#063B2D]/40">·</span>
              <span>Sekali Bayar {FLOWNESIA_CONFIG.pricing.mainPrice}</span>
              <span aria-hidden="true" className="text-[#063B2D]/40">·</span>
              <span className="text-[#087F5B]">Setup Sesuai SOP</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15] text-balance">
              Catat Keuangan Usaha{' '}
              <span className="relative inline-block text-[#087F5B]">
                Semudah Kirim Chat
                <span
                  className="absolute left-0 -bottom-1 h-1 w-full rounded-full bg-[#D9AE52]/60"
                  aria-hidden="true"
                />
              </span>{' '}
              WhatsApp
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#182820]/80 max-w-2xl">
              {FLOWNESIA_CONFIG.brand.description}
            </p>

            {/* Key Quick Benefits Points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#182820]/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Tanpa install aplikasi kasir baru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>AI bantu ekstrak nominal & kategori</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Terekap ke Google Sheets pengguna</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Dashboard & laba rugi di spreadsheet</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handlePrimaryCta}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#063B2D] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#063B2D]/20 transition-all duration-200 hover:bg-[#087F5B] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 text-[#D9AE52] transition-transform group-hover:rotate-12" />
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowRight className="h-4 w-4 text-[#D9AE52] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#063B2D]/20 bg-[#FFF9EB] px-6 py-4 text-base font-semibold text-[#063B2D] transition-all duration-200 hover:bg-[#063B2D]/5 hover:border-[#063B2D]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
              >
                <span>Lihat Cara Kerjanya</span>
              </button>
            </div>

            {/* Note on separate costs & data storage */}
            <div className="mt-4 flex flex-col gap-1.5 text-xs text-[#063B2D]">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold text-[#087F5B]">Catatan:</span>
                <span>{FLOWNESIA_CONFIG.pricing.separateCostNotice}</span>
              </div>
              <div className="flex items-center gap-2 text-[#182820]/70">
                <ShieldCheck className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Hasil pencatatan disimpan langsung ke Google Sheets pada akun Google pengguna.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Showcase Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Card: Financial Dashboard Screenshot (Semantic button) */}
              <button
                type="button"
                onClick={() =>
                  onOpenImageModal(
                    FLOWNESIA_CONFIG.assets.dashboard,
                    'Dashboard Keuangan Visual',
                    'Tangkapan layar dashboard keuangan: ringkasan pemasukan, beban, dan visualisasi grafik.'
                  )
                }
                className="group relative w-full text-left overflow-hidden rounded-2xl border border-[#063B2D]/15 bg-white p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#087F5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
                aria-label="Perbesar tampilan dashboard keuangan"
              >
                <div className="flex items-center justify-between px-2 pb-2 text-xs text-[#182820]/70 border-b border-[#063B2D]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="ml-2 font-mono text-[11px] font-medium text-[#063B2D]">Dashboard Keuangan</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#087F5B] group-hover:underline">Perbesar ↗</span>
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 mt-1">
                  <img
                    src={FLOWNESIA_CONFIG.assets.dashboard}
                    alt="Dashboard Keuangan FlowNesia Kas"
                    width={616}
                    height={505}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </button>

              {/* Front Card: Actual WhatsApp Transaction Chat Screenshot (Semantic button) */}
              <button
                type="button"
                onClick={() =>
                  onOpenImageModal(
                    FLOWNESIA_CONFIG.assets.waTransaction,
                    'Pencatatan Transaksi WhatsApp',
                    'Tangkapan layar WhatsApp: pengguna mengirim "Beli bahan 150.000" dan bot mengonfirmasi rincian transaksi.'
                  )
                }
                className="group absolute -bottom-6 -left-3 sm:-left-6 w-[62%] sm:w-[58%] text-left overflow-hidden rounded-2xl border-2 border-[#087F5B]/70 bg-white p-2 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-[#063B2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer animate-float-gentle"
                aria-label="Perbesar tangkapan layar chat WhatsApp"
              >
                <div className="flex items-center justify-between px-1.5 pb-1.5 text-[10px] text-[#063B2D] border-b border-[#063B2D]/10 font-medium">
                  <div className="flex items-center gap-1 min-w-0">
                    <MessageCircle className="h-3 w-3 text-[#087F5B] shrink-0" />
                    <span className="font-bold truncate">Chat WhatsApp Kas</span>
                  </div>
                  <span className="text-[10px] text-[#087F5B] font-bold shrink-0">Zoom ↗</span>
                </div>
                <div className="overflow-hidden rounded-lg mt-1 bg-slate-100">
                  <img
                    src={FLOWNESIA_CONFIG.assets.waTransaction}
                    alt="Chat WhatsApp FlowNesia Kas"
                    width={720}
                    height={1056}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </button>

              {/* Floating Status Tag (Factual statement without unverified claims) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 rounded-xl border border-[#087F5B]/40 bg-[#063B2D] px-3.5 py-2 text-white shadow-lg pointer-events-none">
                <p className="text-[10px] text-white/80">Integrasi Data</p>
                <p className="text-xs font-bold text-white">Google Sheets Terhubung</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
