import React from 'react';
import { Sparkles, MessageSquareText, Database, BarChart3 } from 'lucide-react';
import { FLOWNESIA_CONFIG } from '../config/flownesia';

export const Introducing: React.FC = () => {
  const benefitIcons = [
    <MessageSquareText className="h-6 w-6 text-[#087F5B]" key="wa" />,
    <Database className="h-6 w-6 text-[#063B2D]" key="db" />,
    <BarChart3 className="h-6 w-6 text-[#087F5B]" key="chart" />,
  ];

  return (
    <section id="tentang" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block with Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#087F5B] mb-3">
              <Sparkles className="h-4 w-4 text-[#087F5B]" />
              <span>Solusi Finansial Praktis & Modern</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
              Kenali FlowNesia Kas Basic
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#182820]/85">
              FlowNesia Kas Basic menghubungkan kenyamanan antarmuka <strong>WhatsApp</strong>, pemrosesan transaksi berbantuan <strong>AI</strong>, otomasi alur kerja server <strong>n8n</strong>, dan keandalan <strong>Google Sheets</strong>.
            </p>

            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#182820]/85">
              Anda tidak perlu mengubah alur kerja atau meminta staf menghafal aplikasi kasir baru yang rumit. Cukup kirim pesan teks seperti biasa, dan data direkap ke lembar spreadsheet usaha Anda.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-[#063B2D] font-medium border-t border-[#063B2D]/10 pt-4">
              <div>
                <span className="block text-2xl font-extrabold text-[#087F5B]">100%</span>
                <span className="text-xs text-[#182820]/75">Data di Akun Anda</span>
              </div>
              <div className="h-8 w-px bg-[#063B2D]/15" aria-hidden="true" />
              <div>
                <span className="block text-2xl font-extrabold text-[#063B2D]">0</span>
                <span className="text-xs text-[#182820]/75">Rumus Manual</span>
              </div>
              <div className="h-8 w-px bg-[#063B2D]/15" aria-hidden="true" />
              <div>
                <span className="block text-2xl font-extrabold text-[#087F5B]">24 Jam</span>
                <span className="text-xs text-[#182820]/75">Server Otomasi Aktif</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Benefits Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {FLOWNESIA_CONFIG.benefits.map((benefit, idx) => (
              <div
                key={benefit.id}
                className="group relative rounded-2xl border border-[#063B2D]/10 bg-white/90 p-6 shadow-xs transition-all duration-300 hover:border-[#087F5B] hover:shadow-md hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF9EB] border border-[#087F5B]/20 transition-transform group-hover:scale-105">
                    {benefitIcons[idx]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#087F5B] uppercase tracking-wider">
                        {benefit.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#063B2D] group-hover:text-[#087F5B] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#182820]/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
