import React from 'react';
import { Eye, ZoomIn, FileSpreadsheet, MessageCircle, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { FLOWNESIA_CONFIG } from '../config/flownesia';

interface ProductShowcaseProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenImageModal }) => {
  const showcaseItems = [
    {
      id: 'wa-chat',
      title: 'Pencatatan Transaksi WhatsApp',
      tag: 'Tangkapan Layar WhatsApp',
      icon: <MessageCircle className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Respon bot WhatsApp saat mencatat pengeluaran. Menampilkan tanggal, jenis transaksi, kategori belanja, nominal Rp150.000, serta tautan menuju Google Sheets.',
      image: FLOWNESIA_CONFIG.assets.waTransaction,
      badge: 'Input Transaksi WhatsApp',
      colSpan: 'lg:col-span-5',
      imageMaxHeight: 'max-h-[460px]',
      width: 720,
      height: 1056,
    },
    {
      id: 'google-sheets',
      title: 'Database Transaksi Google Sheets',
      tag: 'Tangkapan Layar Database Sheets',
      icon: <FileSpreadsheet className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Tabel spreadsheet yang otomatis terupdate. Memuat kolom ID, Tanggal, Kategori, Masuk, Keluar, Saldo Kas berjalan, Keterangan, Status (Berhasil), Created At, dan Created By.',
      image: FLOWNESIA_CONFIG.assets.googleSheets,
      badge: 'Database Kas Google Sheets',
      colSpan: 'lg:col-span-7',
      imageMaxHeight: 'max-h-[380px]',
      width: 1027,
      height: 207,
    },
    {
      id: 'dashboard',
      title: 'Dashboard Keuangan Visual',
      tag: 'Tangkapan Layar Dashboard',
      icon: <BarChart3 className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Visualisasi lembar dashboard keuangan contoh: Total Pemasukan, Total Beban, Laba/Rugi, Saldo Kas, grafik per bulan, dan komposisi beban per kategori.',
      image: FLOWNESIA_CONFIG.assets.dashboard,
      badge: 'Dashboard Visual',
      colSpan: 'lg:col-span-7',
      imageMaxHeight: 'max-h-[460px]',
      width: 616,
      height: 505,
    },
    {
      id: 'laba-rugi',
      title: 'Laporan Laba Rugi',
      tag: 'Tangkapan Layar Laporan Laba Rugi',
      icon: <TrendingUp className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Contoh lembar laporan laba rugi dengan rincian pos pendapatan dan kelompok beban hingga baris laba/rugi bersih periode berjalan.',
      image: FLOWNESIA_CONFIG.assets.labaRugi,
      badge: 'Laporan Laba Rugi',
      colSpan: 'lg:col-span-5',
      imageMaxHeight: 'max-h-[460px]',
      width: 295,
      height: 460,
    },
  ];

  return (
    <section id="showcase" className="relative py-16 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#087F5B] mb-3">
            <Sparkles className="h-4 w-4 text-[#087F5B]" />
            <span>Tampilan Nyata Produk</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
            Lihat FlowNesia Bekerja
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/80">
            Berikut adalah tangkapan layar antarmuka asli FlowNesia Kas Basic. Klik pada kartu atau tombol perbesar untuk melihat rincian beresolusi penuh.
          </p>
        </div>

        {/* Responsive Grid with Alternating Card Sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#063B2D]/15 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#087F5B] hover:shadow-lg`}
            >
              {/* Card Meta & Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#063B2D]/10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF9EB] border border-[#087F5B]/30">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#087F5B] block truncate">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#063B2D] truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenImageModal(item.image, item.title, item.description)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#063B2D]/15 bg-[#FFF9EB] px-3 py-1.5 text-xs font-bold text-[#063B2D] transition-colors hover:bg-[#063B2D] hover:text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
                  title={`Perbesar ${item.title}`}
                >
                  <ZoomIn className="h-3.5 w-3.5 text-[#087F5B]" />
                  <span className="hidden sm:inline">Perbesar</span>
                </button>
              </div>

              {/* Clickable Image Button Container */}
              <button
                type="button"
                onClick={() => onOpenImageModal(item.image, item.title, item.description)}
                className="my-5 relative w-full text-left overflow-hidden rounded-2xl border border-[#063B2D]/10 bg-slate-50 flex items-center justify-center p-2 cursor-pointer transition-transform duration-300 group-hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]"
                aria-label={`Perbesar gambar ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className={`w-full ${item.imageMaxHeight} object-contain rounded-xl`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#063B2D]/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#063B2D] shadow-lg border border-[#087F5B]">
                    <Eye className="h-4 w-4 text-[#087F5B]" />
                    Klik untuk Memperbesar Gambar
                  </span>
                </div>
              </button>

              {/* Caption & Description */}
              <div className="pt-2">
                <p className="text-sm leading-relaxed text-[#182820]/80">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#087F5B] font-bold">
                  <span>{item.badge}</span>
                  <span className="text-[#182820]/60 font-semibold">Resolusi Asli</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot context */}
        <p className="mt-12 max-w-3xl mx-auto text-center text-xs text-[#182820]/80 leading-relaxed">
          Contoh tampilan FlowNesia Kas Basic. Data pada akun Anda mengikuti transaksi yang dicatat.
        </p>

      </div>
    </section>
  );
};
