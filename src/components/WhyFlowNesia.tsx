import React from 'react';
import { MessageSquare, Database, LineChart, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';
import { FLOWNESIA_CONFIG } from '../config/flownesia';

export const WhyFlowNesia: React.FC = () => {
  const featureIcons = [
    <MessageSquare className="h-6 w-6 text-[#087F5B]" key="wa" />,
    <Database className="h-6 w-6 text-[#063B2D]" key="db" />,
    <LineChart className="h-6 w-6 text-[#087F5B]" key="chart" />,
    <Wrench className="h-6 w-6 text-[#063B2D]" key="wrench" />,
    <ShieldCheck className="h-6 w-6 text-[#087F5B]" key="shield" />,
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white/80 border-t border-[#063B2D]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087F5B] mb-3">
            <CheckCircle className="h-4 w-4 text-[#087F5B]" />
            <span>Kelebihan Utama</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
            Kenapa Memilih FlowNesia Kas Basic?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/75">
            Dibuat untuk pemilik usaha yang butuh rekap pembukuan rapi tanpa beban kerja administrasi berlebih.
          </p>
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLOWNESIA_CONFIG.whyFlowNesia.map((feature, idx) => {
            return (
              <div
                key={feature.id}
                className={`group relative rounded-3xl border border-[#063B2D]/10 bg-[#FFF9EB]/50 p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#087F5B] hover:bg-[#FFF9EB] hover:shadow-md ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#063B2D]/10 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#087F5B]/40">
                  {featureIcons[idx]}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#063B2D] mb-1">
                  <span>FITUR 0{feature.id}</span>
                </div>

                <h3 className="text-xl font-bold text-[#063B2D] group-hover:text-[#087F5B] transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#182820]/80">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest Accounting Boundary Note */}
        <div className="mt-12 rounded-2xl border border-[#063B2D]/10 bg-[#FFF9EB] p-5 text-center max-w-3xl mx-auto text-xs text-[#182820]/75 leading-relaxed">
          <strong className="text-[#063B2D]">Catatan Batasan:</strong> FlowNesia Kas Basic adalah alat bantu pencatatan transaksi kas operasional harian. Sistem ini tidak menggantikan verifikasi audit akuntansi profesional resmi.
        </div>

      </div>
    </section>
  );
};
