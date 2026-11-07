import React from 'react';
import { Check, MessageCircle, ArrowRight, Server, Cpu, Shield, Sparkles } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

export const Pricing: React.FC = () => {
  const handleOrder = () => {
    trackMetaContact('Pricing WhatsApp CTA');
    window.open(
      getWhatsAppUrl(`Halo kak, saya ingin memesan FlowNesia Kas Basic (${FLOWNESIA_CONFIG.pricing.mainPrice}). Mohon panduan langkah berikutnya.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="harga" className="relative py-16 sm:py-24 bg-[#FFF9EB] overflow-hidden">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9AE52]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087F5B] mb-3">
            <Sparkles className="h-4 w-4 text-[#087F5B]" />
            <span>Investasi Terjangkau & Transparan</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
            Satu Sistem Praktis untuk Membantu Pencatatan Usaha
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/75">
            Sistem pembukuan kas via WhatsApp dan Google Sheets tanpa komitmen bulanan aplikasi yang membebani.
          </p>
        </div>

        {/* Pricing Layout: Main Pricing Card + Operational Costs Card */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Pricing Card: FLOWNESIA KAS BASIC */}
          <div className="lg:col-span-7 relative flex flex-col justify-between rounded-3xl border-2 border-[#087F5B] bg-white p-6 sm:p-8 shadow-xl shadow-[#063B2D]/5 transition-all duration-300 hover:shadow-2xl">
            
            {/* Top highlight ribbon with high contrast */}
            <div className="absolute -top-3.5 right-6 rounded-full bg-[#063B2D] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-xs border border-[#D9AE52]/60">
              Paket Lengkap Siap Pakai
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#087F5B]">
                Produk Utama
              </p>
              <h3 className="mt-1 text-2xl font-black text-[#063B2D] tracking-tight">
                FLOWNESIA KAS BASIC
              </h3>

              {/* Price display with high contrast */}
              <div className="mt-5 pb-5 border-b border-[#063B2D]/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight text-[#063B2D]">
                    {FLOWNESIA_CONFIG.pricing.mainPrice}
                  </span>
                </div>
                <p className="mt-2 text-sm font-bold text-[#087F5B]">
                  {FLOWNESIA_CONFIG.pricing.subtitle}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#063B2D] mb-3">
                  Fitur & Layanan Termasuk:
                </p>
                <ul className="space-y-3">
                  {FLOWNESIA_CONFIG.pricing.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#182820]">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#087F5B]/15 text-[#087F5B] mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-[#063B2D]/10">
              <button
                type="button"
                onClick={handleOrder}
                className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-[#063B2D] py-4 px-6 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#087F5B] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 text-[#D9AE52] transition-transform group-hover:rotate-12" />
                <span>Pesan FlowNesia Kas Basic</span>
                <ArrowRight className="h-4 w-4 text-[#D9AE52] transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-[#063B2D] font-medium">
                {FLOWNESIA_CONFIG.pricing.separateCostNotice}
              </p>
            </div>

          </div>

          {/* Separate Operational Costs Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#063B2D]/15 bg-[#FFF9EB]/90 p-6 sm:p-8 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087F5B] mb-2">
                <Server className="h-4 w-4 text-[#087F5B]" />
                <span>Biaya Operasional Terpisah</span>
              </div>
              <h4 className="text-xl font-bold text-[#063B2D]">
                Biaya Berjalan Sistem
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#182820]/75 leading-relaxed">
                Biaya operasional berjalan disampaikan secara terbuka tanpa komitmen tersembunyi.
              </p>

              {/* Breakdown 1: Server */}
              <div className="mt-6 rounded-2xl border border-[#063B2D]/10 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#063B2D]/10 text-[#063B2D]">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#182820]/70">Server Automasi (n8n)</p>
                    <p className="font-mono text-lg font-bold text-[#063B2D]">Rp30.000 / bulan</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#182820]/70">
                  Untuk operasional server cloud yang aktif 24 jam memproses pesan WhatsApp bot Anda.
                </p>
              </div>

              {/* Breakdown 2: AI Token */}
              <div className="mt-4 rounded-2xl border border-[#063B2D]/10 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087F5B]/15 text-[#087F5B]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#182820]/70">Biaya Token AI</p>
                    <p className="font-mono text-lg font-bold text-[#087F5B]">Sesuai Pemakaian</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#182820]/70">
                  Dibayarkan langsung ke penyedia AI sesuai volume transaksi yang Anda kirimkan.
                </p>
              </div>
            </div>

            {/* Hosting Distinction & Setup Note */}
            <div className="mt-6 pt-5 border-t border-[#063B2D]/10 flex flex-col gap-2.5 text-xs text-[#182820]/75">
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-[#087F5B] shrink-0 mt-0.5" />
                <span>
                  Setup dan pengujian alur pencatatan dibantu sesuai SOP FlowNesia hingga siap digunakan.
                </span>
              </div>
              <p className="text-[11px] text-[#182820]/60 italic">
                {FLOWNESIA_CONFIG.pricing.hostingDistinction}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
