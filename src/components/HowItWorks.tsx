import React from 'react';
import { Send, Bot, TableProperties, LineChart, ZoomIn, ArrowRight } from 'lucide-react';
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
      desc: 'Cukup ketik pesan singkat di WhatsApp bot kas usaha Anda. Misalnya saat baru belanja stok: "Beli bahan 150.000".',
      icon: <Send className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.waTransaction,
      previewLabel: 'Screenshot Chat WhatsApp Asli',
      caption: 'Pesan asli pengguna mengetik "Beli bahan 150.000" dan langsung dijawab oleh sistem bot kas.',
    },
    {
      step: 2,
      num: '02',
      title: 'AI Membantu Memproses Informasi Transaksi',
      desc: 'Model AI membedah kalimat transaksi, mendeteksi tanggal (2026-10-27), jenis (Keluar), kategori (Belanja), dan nominal (Rp150.000).',
      icon: <Bot className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.waTransaction,
      previewLabel: 'Ekstraksi AI Akurat',
      caption: 'Respon otomatis FlowNesia: Transaksi berhasil disimpan dengan rincian lengkap pos beban.',
    },
    {
      step: 3,
      num: '03',
      title: 'Data Direkap ke Google Sheets',
      desc: 'Otomatis tersimpan sebagai baris baru di spreadsheet kas dengan ID unik, tanggal, nominal keluar, saldo kas terhitung, dan status berhasil.',
      icon: <TableProperties className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.googleSheets,
      previewLabel: 'Database Google Sheets Asli',
      caption: 'Baris data Google Sheets riil: ID transaksi, Tanggal, Kategori Belanja, Keluar Rp150.000, Saldo Kas Rp249.432.',
    },
    {
      step: 4,
      num: '04',
      title: 'Pantau Dashboard dan Laporan',
      desc: 'Buka dashboard visual dan lembar laba rugi kapan saja untuk melihat total pemasukan, total beban, dan laba bersih usaha Anda.',
      icon: <LineChart className="h-5 w-5 text-white" />,
      image: FLOWNESIA_CONFIG.assets.dashboard,
      previewLabel: 'Dashboard Visual Terkoneksi',
      caption: 'Dashboard keuangan bulanan: grafik pendapatan vs beban, komposisi beban per kategori, dan saldo kas.',
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
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D9AE52] mb-3">
            <span>Alur Kerja Otomatis</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white text-balance">
            Cara Kerja FlowNesia Kas Basic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Empat langkah sederhana dari ketikan jempol di WhatsApp hingga tersaji rapi di laporan keuangan usaha Anda.
          </p>
        </div>

        {/* Desktop Connected Timeline / Mobile Vertical Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#D9AE52]/60 hover:bg-white/10 hover:shadow-xl"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087F5B] shadow-md border border-white/20">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#D9AE52]/80">
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

              {/* Real Screenshot Preview Card */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div
                  onClick={() => onOpenImageModal(item.image, item.title, item.caption)}
                  className="group/img relative overflow-hidden rounded-xl border border-white/15 bg-black/40 cursor-pointer"
                  title="Klik untuk melihat screenshot beresolusi penuh"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-36 w-full object-cover transition-transform duration-300 group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#063B2D]/90 px-3 py-1.5 text-xs font-semibold text-white border border-[#D9AE52]/60 shadow-lg">
                      <ZoomIn className="h-3.5 w-3.5 text-[#D9AE52]" />
                      Lihat Screenshot
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-[#D9AE52]/80 font-medium truncate">
                  {item.previewLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-white/90">
            Seluruh proses berjalan otomatis di server awan (cloud server n8n) tanpa perlu menyalakan komputer Anda secara terus menerus. Anda bisa mencatat kapan saja, di mana saja.
          </p>
        </div>

      </div>
    </section>
  );
};
