import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

interface HeroProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenImageModal }) => {
  const handlePrimaryCta = () => {
    trackMetaLead('Hero Primary CTA');
    window.open(getWhatsAppUrl('Halo kak, saya ingin konsultasi FlowNesia Kas Basic untuk usaha saya'), '_blank', 'noopener,noreferrer');
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('cara-kerja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle background ambient gradients */}
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
            
            {/* Trust marker: Unboxed, clean metadata discipline */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[#087F5B]">
              <span className="flex items-center gap-1.5 text-[#063B2D]">
                <Sparkles className="h-3.5 w-3.5 text-[#D9AE52]" />
                Automasi Finansial UMKM
              </span>
              <span aria-hidden="true" className="text-[#D9AE52]">·</span>
              <span>Sekali Bayar Rp750.000</span>
              <span aria-hidden="true" className="text-[#D9AE52]">·</span>
              <span>Didampingi Setup</span>
            </div>

            {/* Headline with Champagne Gold accent */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15] text-balance">
              Catat Keuangan Usaha{' '}
              <span className="relative inline-block text-[#087F5B]">
                Semudah Kirim Chat
                <span
                  className="absolute left-0 -bottom-1.5 h-1 w-full rounded-full bg-[#D9AE52]/70"
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
                <span>AI otomatis ekstrak nominal & kategori</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Rekap realtime ke Google Sheets Anda</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Dashboard & laba rugi otomatis</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handlePrimaryCta}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#063B2D] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#063B2D]/20 transition-all duration-200 hover:bg-[#087F5B] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AE52] cursor-pointer"
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

            {/* Trust Footnote */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#182820]/60">
              <ShieldCheck className="h-4 w-4 text-[#087F5B]" />
              <span>Privasi terjamin. Data spreadsheet 100% tersimpan di akun Google Drive Anda sendiri.</span>
            </div>
          </div>

          {/* Right Column: Premium Product Showcase Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Card: Financial Dashboard Screenshot */}
              <div
                onClick={() =>
                  onOpenImageModal(
                    FLOWNESIA_CONFIG.assets.dashboard,
                    'FlowNesia Dashboard Keuangan',
                    'Dashboard visual otomatis membaca spreadsheet: grafik pendapatan vs beban, saldo kas berjalan, dan laba rugi.'
                  )
                }
                className="group relative overflow-hidden rounded-2xl border border-[#063B2D]/15 bg-white p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#D9AE52]/50 cursor-pointer"
                title="Klik untuk memperbesar tampilan dashboard"
              >
                <div className="flex items-center justify-between px-2 pb-2 text-xs text-[#182820]/70 border-b border-[#063B2D]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-[11px] font-medium text-[#063B2D]">Dashboard Keuangan Otomatis</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#087F5B] group-hover:underline">Perbesar ↗</span>
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 mt-1">
                  <img
                    src={FLOWNESIA_CONFIG.assets.dashboard}
                    alt="Dashboard Keuangan FlowNesia Kas"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Front Card: Actual WhatsApp Transaction Chat Screenshot (Floating slightly) */}
              <div
                onClick={() =>
                  onOpenImageModal(
                    FLOWNESIA_CONFIG.assets.waTransaction,
                    'Pencatatan WhatsApp FlowNesia',
                    'Ketik transaksi di WhatsApp (contoh: "Beli bahan 150.000"). AI langsung merekap jenis, kategori, nominal, dan link Google Sheets.'
                  )
                }
                className="group absolute -bottom-6 -left-3 sm:-left-6 w-[62%] sm:w-[58%] overflow-hidden rounded-2xl border-2 border-[#D9AE52]/60 bg-white p-2 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[#D9AE52]/20 cursor-pointer animate-float-gentle"
                title="Klik untuk memperbesar screenshot WhatsApp"
              >
                <div className="flex items-center justify-between px-1.5 pb-1.5 text-[10px] text-[#063B2D] border-b border-[#063B2D]/10 font-medium">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3 text-[#087F5B]" />
                    <span className="font-semibold truncate">Chat WhatsApp Kas</span>
                  </div>
                  <span className="text-[10px] text-[#087F5B] font-bold">Zoom ↗</span>
                </div>
                <div className="overflow-hidden rounded-lg mt-1 bg-slate-100">
                  <img
                    src={FLOWNESIA_CONFIG.assets.waTransaction}
                    alt="Chat WhatsApp FlowNesia Kas"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Little Floating Value Tag */}
              <div className="absolute -top-3 -right-2 sm:-right-4 rounded-xl border border-[#D9AE52]/50 bg-[#063B2D] px-3.5 py-2 text-white shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#D9AE52]" />
                  <div>
                    <p className="text-[10px] text-white/70">Kecepatan Rekap</p>
                    <p className="text-xs font-bold text-[#D9AE52]">Otomatis &lt; 3 Detik</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
