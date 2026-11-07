import React from 'react';
import { Clock, Layers, FileSpreadsheet, TrendingDown, AlertCircle } from 'lucide-react';
import { FLOWNESIA_CONFIG } from '../config/flownesia';

export const Problems: React.FC = () => {
  const problemIcons = [
    <Clock className="h-6 w-6 text-[#087F5B]" key="clock" />,
    <Layers className="h-6 w-6 text-[#D9AE52]" key="layers" />,
    <FileSpreadsheet className="h-6 w-6 text-[#087F5B]" key="sheets" />,
    <TrendingDown className="h-6 w-6 text-[#D9AE52]" key="trending" />,
  ];

  return (
    <section id="masalah" className="relative py-16 sm:py-20 bg-white/70 border-y border-[#063B2D]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F5B] mb-3">
            <AlertCircle className="h-4 w-4 text-[#D9AE52]" />
            <span>Tantangan Pembukuan UMKM</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl text-balance">
            Masih Ribet Mencatat Keuangan Usaha?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/75">
            Banyak pemilik usaha menghabiskan waktu berharga untuk hal administratif yang melelahkan, padahal energi seharusnya fokus membesarkan penjualan.
          </p>
        </div>

        {/* 4 Interactive Problem Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLOWNESIA_CONFIG.problems.map((problem, index) => (
            <div
              key={problem.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#063B2D]/10 bg-[#FFF9EB]/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9AE52]/60 hover:bg-[#FFF9EB] hover:shadow-md"
            >
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#063B2D]/10 shadow-xs transition-colors group-hover:border-[#D9AE52]/40">
                  {problemIcons[index]}
                </div>
                
                <h3 className="text-lg font-bold text-[#063B2D] group-hover:text-[#087F5B] transition-colors">
                  {problem.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-[#182820]/80">
                  {problem.desc}
                </p>
              </div>

              {/* Subtle foot detail */}
              <div className="mt-6 pt-4 border-t border-[#063B2D]/5 flex items-center justify-between text-xs font-medium text-[#182820]/60">
                <span className="font-mono text-[#D9AE52] font-semibold">0{problem.id}</span>
                <span className="text-red-700/80 font-medium">Masalah Nyata</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-[#182820]/70">
            Kabar baiknya: Anda tidak perlu belajar akuntansi rumit atau membeli aplikasi langganan mahal untuk menyelesaikannya.
          </p>
        </div>

      </div>
    </section>
  );
};
