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
        'Respon bot WhatsApp saat mencatat pengeluaran harian. Terlihat format tanggal 2026-10-27, Jenis: Keluar, Kategori: Belanja, Nominal: Rp150.000, Keterangan: Beli bahan, beserta link Google Sheets.',
      image: FLOWNESIA_CONFIG.assets.waTransaction,
      badge: 'Input Transaksi Cepat',
      colSpan: 'lg:col-span-5',
      imageMaxHeight: 'max-h-[500px]',
      aspectRatio: 'object-contain',
      bgTone: 'bg-[#063B2D]/5',
    },
    {
      id: 'google-sheets',
      title: 'Database Transaksi Google Sheets',
      tag: 'Tangkapan Layar Database Sheets',
      icon: <FileSpreadsheet className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Tabel spreadsheet yang otomatis terupdate. Memuat kolom ID, Tanggal, Kategori, Masuk, Keluar, Saldo Kas berjalan, Keterangan, Status (Berhasil), Created At, dan Created By.',
      image: FLOWNESIA_CONFIG.assets.googleSheets,
      badge: 'Rekap Terpusat Realtime',
      colSpan: 'lg:col-span-7',
      imageMaxHeight: 'max-h-[380px]',
      aspectRatio: 'object-contain',
      bgTone: 'bg-[#063B2D]/5',
    },
    {
      id: 'dashboard',
      title: 'Dashboard Keuangan Visual',
      tag: 'Tangkapan Layar Dashboard',
      icon: <BarChart3 className="h-5 w-5 text-[#D9AE52]" />,
      description:
        'Visualisasi lengkap keuangan usaha: Total Pemasukan, Total Beban, Laba/Rugi, Saldo Kas, grafik batang Pendapatan vs Beban per Bulan, serta diagram lingkaran Komposisi Beban per Kategori.',
      image: FLOWNESIA_CONFIG.assets.dashboard,
      badge: 'Visualisasi Keuangan',
      colSpan: 'lg:col-span-7',
      imageMaxHeight: 'max-h-[460px]',
      aspectRatio: 'object-contain',
      bgTone: 'bg-[#063B2D]/5',
    },
    {
      id: 'laba-rugi',
      title: 'Laporan Laba Rugi Otomatis',
      tag: 'Tangkapan Layar Laporan Laba Rugi',
      icon: <TrendingUp className="h-5 w-5 text-[#087F5B]" />,
      description:
        'Tabel perhitungan laba rugi bersih bulanan. Mengelompokkan pos Pendapatan (Gaji, Bonus, Penjualan) dan Beban (Belanja, Makanan, Transportasi, Listrik, dsb) secara otomatis.',
      image: FLOWNESIA_CONFIG.assets.labaRugi,
      badge: 'Perhitungan Laba Bersih',
      colSpan: 'lg:col-span-5',
      imageMaxHeight: 'max-h-[500px]',
      aspectRatio: 'object-contain',
      bgTone: 'bg-[#063B2D]/5',
    },
  ];

  return (
    <section id="showcase" className="relative py-16 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F5B] mb-3">
            <Sparkles className="h-4 w-4 text-[#D9AE52]" />
            <span>Tampilan Nyata Produk</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
            Lihat FlowNesia Bekerja
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/80">
            Berikut adalah tangkapan layar antarmuka asli FlowNesia Kas Basic. Tidak ada simulasi palsu — klik pada kartu untuk memperbesar dan membaca rinciannya.
          </p>
        </div>

        {/* Responsive Grid with Alternating Card Sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#063B2D]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D9AE52] hover:shadow-xl`}
            >
              {/* Card Meta & Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#063B2D]/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF9EB] border border-[#D9AE52]/40">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#087F5B]">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#063B2D]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenImageModal(item.image, item.title, item.description)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#063B2D]/15 bg-[#FFF9EB] px-3 py-1.5 text-xs font-medium text-[#063B2D] transition-colors hover:bg-[#063B2D] hover:text-white cursor-pointer"
                  title="Klik untuk memperbesar gambar"
                >
                  <ZoomIn className="h-3.5 w-3.5 text-[#D9AE52]" />
                  <span className="hidden sm:inline">Perbesar</span>
                </button>
              </div>

              {/* Clickable Image Container */}
              <div
                onClick={() => onOpenImageModal(item.image, item.title, item.description)}
                className={`my-5 relative overflow-hidden rounded-2xl border border-[#063B2D]/10 bg-slate-50 flex items-center justify-center p-2 cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full ${item.imageMaxHeight} ${item.aspectRatio} rounded-xl shadow-xs`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#063B2D]/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 backdrop-blur-[1px]">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#063B2D] shadow-xl border border-[#D9AE52]">
                    <Eye className="h-4 w-4 text-[#087F5B]" />
                    Klik untuk Memperbesar Gambar
                  </span>
                </div>
              </div>

              {/* Caption & Description */}
              <div className="pt-2">
                <p className="text-sm leading-relaxed text-[#182820]/80">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#087F5B] font-semibold">
                  <span>{item.badge}</span>
                  <span className="text-[#182820]/50 font-normal">Resolusi Asli</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on data integrity */}
        <div className="mt-12 text-center text-xs text-[#182820]/60 max-w-xl mx-auto">
          Catatan: Seluruh angka di atas adalah tangkapan layar penggunaan asli FlowNesia Kas Basic. Data keuangan Anda nantinya akan sepenuhnya terisi sesuai transaksi nyata usaha Anda.
        </div>

      </div>
    </section>
  );
};
