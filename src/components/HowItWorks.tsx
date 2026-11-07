import React from 'react';
import { Send, Bot, TableProperties, LineChart, ZoomIn } from 'lucide-react';
import { FLOWNESIA_CONFIG } from '../config/flownesia';

interface HowItWorksProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenImageModal }) => {
  const stepsData = [
    {
      step: 1,
      num: '01',
      title: 'Kirim Transaksi Melalui WhatsApp',
      desc: 'Cukup ketik pesan singkat di chat WhatsApp bot kas usaha Anda. Misalnya saat baru belanja stok: "Beli bahan 150.000".',
      icon: <Send className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.waStep1Input,
      previewLabel: 'Pesan Input Pengguna',
      caption: 'Pengguna mengirim pesan transaksi melalui WhatsApp.',
      imgWidth: 720,
      imgHeight: 170,
    },
    {
      step: 2,
      num: '02',
      title: 'AI Membantu Memproses Informasi Transaksi',
      desc: 'AI membedah kalimat transaksi, mendeteksi tanggal, jenis (Keluar), kategori (Belanja), dan nominal (Rp150.000).',
      icon: <Bot className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.waStep2Ai,
      previewLabel: 'Hasil Ekstraksi AI & Balasan Bot',
      caption: 'Sistem memproses pesan dan memberikan rincian transaksi.',
      imgWidth: 590,
      imgHeight: 350,
    },
    {
      step: 3,
      num: '03',
      title: 'Data Direkap ke Google Sheets',
      desc: 'Otomatis tersimpan sebagai baris baru di spreadsheet kas dengan ID unik, tanggal, pos beban, dan saldo kas terupdate.',
      icon: <TableProperties className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.googleSheets,
      previewLabel: 'Database Google Sheets',
      caption: 'Baris data Google Sheets riil: ID transaksi, Tanggal, Kategori Belanja, Keluar Rp150.000, Saldo Kas Rp249.432.',
      imgWidth: 1027,
      imgHeight: 207,
    },
    {
      step: 4,
      num: '04',
      title: 'Pantau Dashboard dan Laporan',
      desc: 'Buka dashboard visual dan lembar laba rugi di Google Sheets kapan saja untuk melihat ringkasan keuangan usaha Anda.',
      icon: <LineChart className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.dashboard,
      previewLabel: 'Dashboard Visual Terkoneksi',
      caption: 'Tangkapan layar dashboard keuangan bulanan: grafik pendapatan vs beban, komposisi beban per kategori, dan saldo kas.',
      imgWidth: 616,
      imgHeight: 505,
    },
  ];

  return (
    <section id="cara-kerja" className="relative py-16 sm:py-24 bg-[#063B2D] text-white overflow-hidden">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#087F5B]/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-0 h-80 w-80 rounded-full bg-[#D9AE52]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9AE52] mb-3">
            <span>Alur Kerja Otomatis</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white text-balance">
            Cara Kerja FlowNesia Kas Basic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Empat langkah sederhana dari pesan chat di WhatsApp hingga tersaji rapi di laporan Google Sheets usaha Anda.
          </p>
        </div>

        {/* Desktop Connected Timeline / Mobile Vertical Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xs transition-all duration-300 hover:border-[#D9AE52]/60 hover:bg-white/10 hover:shadow-xl"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087F5B] shadow-xs border border-white/20">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#D9AE52]">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#D9AE52] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
                  {item.desc}
                </p>
              </div>

              {/* Semantic Button for Image Zoom */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onOpenImageModal(item.image, item.title, item.caption)}
                  className={`group/img relative w-full ${item.step <= 2 ? 'min-h-36' : 'h-36'} flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/40 p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]`}
                  aria-label={`Perbesar screenshot langkah ${item.num}: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={item.imgWidth}
                    height={item.imgHeight}
                    className={`${item.step <= 2 ? 'w-full h-auto' : 'max-h-full max-w-full'} object-contain rounded-lg transition-transform duration-300 opacity-95 group-hover/img:opacity-100`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#063B2D]/90 px-3 py-1.5 text-xs font-semibold text-white border border-[#D9AE52]/60 shadow-lg">
                      <ZoomIn className="h-3.5 w-3.5 text-[#D9AE52]" />
                      Lihat Screenshot
                    </span>
                  </div>
                </button>
                <p className="mt-2 text-[11px] text-[#D9AE52] font-semibold truncate">
                  {item.previewLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-white/85 leading-relaxed">
            Alur otomasi berjalan di server cloud n8n tanpa mengharuskan komputer Anda menyala terus menerus.
          </p>
        </div>

      </div>
    </section>
  );
};
