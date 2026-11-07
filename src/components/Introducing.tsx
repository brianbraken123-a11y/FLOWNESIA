import React from 'react';
import { Sparkles, MessageSquareText, Database, BarChart3, ArrowRight } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

export const Introducing: React.FC = () => {
  const benefitIcons = [
    <MessageSquareText className="h-6 w-6 text-[#087F5B]" key="wa" />,
    <Database className="h-6 w-6 text-[#D9AE52]" key="db" />,
    <BarChart3 className="h-6 w-6 text-[#087F5B]" key="chart" />,
  ];

  const handleCta = () => {
    trackMetaLead('Introducing Section CTA');
    window.open(getWhatsAppUrl('Halo kak, saya ingin tanya bagaimana FlowNesia Kas Basic bisa diterapkan di toko saya'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tentang" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block with Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F5B] mb-3">
              <Sparkles className="h-4 w-4 text-[#D9AE52]" />
              <span>Solusi Finansial Praktis & Modern</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
              Kenali FlowNesia Kas Basic
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#182820]/85">
              FlowNesia Kas Basic hadir sebagai jembatan cerdas yang menggabungkan kenyamanan <strong>WhatsApp</strong>, kecerdasan <strong>AI Transaction Processing</strong>, otomatisasi alur kerja (workflow), dan kestabilan <strong>Google Sheets</strong>.
            </p>

            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#182820]/85">
              Anda tidak perlu mengubah kebiasaan lama atau memaksa karyawan menghafal sistem rumit. Cukup ketik seperti sedang berkirim pesan ke teman, dan seluruh pembukuan tercatat rapi secara otomatis.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-[#063B2D] font-medium border-t border-[#063B2D]/10 pt-4">
              <div>
                <span className="block text-2xl font-extrabold text-[#087F5B]">100%</span>
                <span className="text-xs text-[#182820]/70">Data di Akun Anda</span>
              </div>
              <div className="h-8 w-px bg-[#063B2D]/15" />
              <div>
                <span className="block text-2xl font-extrabold text-[#D9AE52]">0</span>
                <span className="text-xs text-[#182820]/70">Rumus Excel Manual</span>
              </div>
              <div className="h-8 w-px bg-[#063B2D]/15" />
              <div>
                <span className="block text-2xl font-extrabold text-[#063B2D]">24/7</span>
                <span className="text-xs text-[#182820]/70">Server Automasi Siap</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Benefits Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {FLOWNESIA_CONFIG.benefits.map((benefit, idx) => (
              <div
                key={benefit.id}
                className="group relative rounded-2xl border border-[#063B2D]/10 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-[#D9AE52] hover:shadow-md hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF9EB] border border-[#D9AE52]/30 transition-transform group-hover:scale-105">
                    {benefitIcons[idx]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#087F5B] uppercase tracking-wider">
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
