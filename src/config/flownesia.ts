/**
 * FlowNesia Kas Basic - Centralized Configuration
 * 
 * Central configuration for brand identity, verified WhatsApp contacts,
 * centralized pricing, feature lists, and disclaimers.
 */

export const FLOWNESIA_CONFIG = {
  brand: {
    name: 'FlowNesia',
    productName: 'FlowNesia Kas Basic',
    tagline: 'Catat Keuangan Usaha Semudah Kirim Chat WhatsApp',
    description:
      'FlowNesia Kas Basic membantu mencatat pemasukan dan pengeluaran melalui WhatsApp, merekap transaksi ke Google Sheets, dan memantau laporan keuangan usaha dengan lebih praktis.',
  },

  // Verified WhatsApp Business & Phone Contact
  contact: {
    whatsappNumber: '6281324997190',
    whatsappDisplay: '0813-2499-7190',
    phoneUrl: 'tel:+6281324997190',
  },

  pricing: {
    mainPrice: 'Rp750.000',
    mainPriceNumeric: 750000,
    type: 'Sekali bayar',
    subtitle: 'Pembelian sistem dan setup, sekali bayar.',
    separateCostNotice: 'Biaya server dan token AI terpisah.',
    hostingDistinction:
      'Biaya server otomasi produk (n8n) terpisah dari hosting landing page di Cloudflare Pages (hosting web statis).',
    operationalCosts: [
      {
        item: 'Biaya Server Automasi (n8n)',
        cost: 'Rp30.000 / bulan',
        description:
          'Biaya operasional server cloud untuk menjalankan alur otomasi n8n yang aktif 24 jam memproses pesan WhatsApp Anda.',
      },
      {
        item: 'Biaya Token AI',
        cost: 'Sesuai pemakaian',
        description:
          'Biaya API langsung ke penyedia AI sesuai volume transaksi yang dikirimkan melalui WhatsApp.',
      },
    ],
    features: [
      'Pencatatan transaksi melalui WhatsApp',
      'AI-assisted transaction processing',
      'Automatic Google Sheets recording',
      'Kategori akun, jurnal, dan saldo kas realtime',
      'Laporan keuangan dasar otomatis',
      'Laporan laba rugi dasar bulanan & tahunan',
      'Dashboard visualisasi keuangan (Basic)',
      'Workflow n8n dan prompt AI Basic siap pakai',
      'Setup dan pengujian sistem langsung sesuai SOP sampai siap digunakan',
    ],
  },

  // Official uploaded screenshots & logo (with privacy anonymization applied)
  assets: {
    logo: '/assets/logo.jpg',
    waTransaction: '/assets/wa-transaction.jpg',
    waStep1Input: '/assets/wa-step1-input.jpg',
    waStep2Ai: '/assets/wa-step2-ai.jpg',
    googleSheets: '/assets/google-sheets.jpg',
    dashboard: '/assets/dashboard.jpg',
    labaRugi: '/assets/laba-rugi.jpg',
  },

  problems: [
    {
      id: 1,
      title: 'Transaksi sering lupa dicatat',
      desc: 'Kesibukan operasional membuat pengeluaran harian seperti beli bensin, makan siang, atau kurir sering terlewat dan uang kas berkurang tanpa catatan.',
    },
    {
      id: 2,
      title: 'Catatan keuangan tersebar',
      desc: 'Sebagian nota tersimpan di laci, sebagian dicatat di aplikasi memo, dan sebagian hanya diingat di kepala, sehingga data sulit direkonsiliasi.',
    },
    {
      id: 3,
      title: 'Rekap manual memakan waktu',
      desc: 'Akhir bulan dihabiskan untuk memeriksa tumpukan nota fisik dan mengetik ulang satu per satu ke lembar spreadsheet.',
    },
    {
      id: 4,
      title: 'Sulit memantau kondisi keuangan',
      desc: 'Transaksi harian terasa berjalan, namun pemilik usaha belum dapat melihat angka laba/rugi bersih secara cepat dan teratur.',
    },
  ],

  benefits: [
    {
      id: 1,
      title: 'Praktis melalui WhatsApp',
      description:
        'Cukup kirim pesan singkat seperti "Beli bahan 150.000" langsung di WhatsApp tanpa perlu memasang aplikasi kasir tambahan.',
      badge: 'Tanpa Pasang Aplikasi Kasir Baru',
    },
    {
      id: 2,
      title: 'Data Lebih Terstruktur',
      description:
        'AI membantu mengekstrak tanggal, nominal, jenis transaksi, dan kategori, lalu alur otomasi n8n merekapnya ke Google Sheets.',
      badge: 'Bantuan AI & Otomasi',
    },
    {
      id: 3,
      title: 'Laporan Lebih Mudah Dipantau',
      description:
        'Dilengkapi dashboard visual dan lembar laporan laba rugi di Google Sheets pengguna yang dapat diakses dari smartphone maupun laptop.',
      badge: 'Tersimpan di Google Sheets Pengguna',
    },
  ],

  howItWorks: [
    {
      step: 1,
      number: '01',
      title: 'Kirim Transaksi Melalui WhatsApp',
      description:
        'Ketik pesan pemasukan atau pengeluaran ke chat WhatsApp bot kas usaha Anda (contoh: "Beli bahan 150.000").',
      image: '/assets/wa-step1-input.jpg',
      caption: 'Tangkapan layar asli pesan input pengguna: "Beli bahan 150.000" dikirimkan via WhatsApp.',
    },
    {
      step: 2,
      number: '02',
      title: 'AI Membantu Memproses Informasi Transaksi',
      description:
        'AI membaca pesan dan menguraikan tanggal, nominal (Rp150.000), jenis (Keluar), serta kategori (Belanja).',
      image: '/assets/wa-step2-ai.jpg',
      caption: 'Tangkapan layar balasan bot: Transaksi berhasil disimpan dengan rincian tanggal, jenis, kategori, nominal, dan keterangan.',
    },
    {
      step: 3,
      number: '03',
      title: 'Data Direkap ke Google Sheets',
      description:
        'Data diteruskan oleh server otomasi ke baris baru tabel Google Sheets pengguna secara berurutan.',
      image: '/assets/google-sheets.jpg',
      caption: 'Tangkapan layar Google Sheets: ID transaksi, Tanggal, Kategori, Masuk/Keluar, Saldo Kas, dan Status.',
    },
    {
      step: 4,
      number: '04',
      title: 'Pantau Dashboard dan Laporan',
      description:
        'Buka spreadsheet kapan saja untuk memantau ringkasan pendapatan, beban, dan laporan laba rugi usaha Anda.',
      image: '/assets/dashboard.jpg',
      caption: 'Tangkapan layar dashboard keuangan: ringkasan pemasukan, beban, dan visualisasi grafik.',
    },
  ],

  showcase: [
    {
      id: 'wa-chat',
      title: 'Pencatatan Transaksi WhatsApp',
      tag: 'Tangkapan Layar WhatsApp',
      description:
        'Contoh respon bot WhatsApp saat mencatat pengeluaran. Menampilkan tanggal, jenis transaksi, kategori belanja, nominal Rp150.000, serta tautan menuju Google Sheets.',
      image: '/assets/wa-transaction.jpg',
      badge: 'Input Transaksi WhatsApp',
      width: 720,
      height: 1056,
      aspectClass: 'aspect-[720/1056]',
    },
    {
      id: 'google-sheets',
      title: 'Database Transaksi Google Sheets',
      tag: 'Tangkapan Layar Spreadsheet',
      description:
        'Tabel spreadsheet yang memuat baris transaksi kas: ID, Tanggal, Kategori, Masuk, Keluar, Saldo Kas berjalan, Keterangan, Status, dan Created At.',
      image: '/assets/google-sheets.jpg',
      badge: 'Database Kas Google Sheets',
      width: 1027,
      height: 207,
      aspectClass: 'aspect-[1027/207]',
    },
    {
      id: 'dashboard',
      title: 'Dashboard Keuangan Visual',
      tag: 'Tangkapan Layar Dashboard',
      description:
        'Visualisasi lembar dashboard keuangan contoh: indikator Total Pemasukan, Total Beban, Laba/Rugi, Saldo Kas, serta grafik per bulan dan per kategori.',
      image: '/assets/dashboard.jpg',
      badge: 'Dashboard Visual',
      width: 616,
      height: 505,
      aspectClass: 'aspect-[616/505]',
    },
    {
      id: 'laba-rugi',
      title: 'Laporan Laba Rugi',
      tag: 'Tangkapan Layar Laporan',
      description:
        'Contoh lembar laporan laba rugi dengan rincian pos pendapatan dan kelompok beban hingga baris laba/rugi bersih periode berjalan.',
      image: '/assets/laba-rugi.jpg',
      badge: 'Laporan Laba Rugi',
      width: 295,
      height: 460,
      aspectClass: 'aspect-[295/460]',
    },
  ],

  whyFlowNesia: [
    {
      id: 1,
      title: 'Input Transaksi Lewat WhatsApp',
      desc: 'Mencatat arus kas langsung dari aplikasi WhatsApp yang sudah terbiasa digunakan sehari-hari tanpa aplikasi kasir terpisah.',
    },
    {
      id: 2,
      title: 'Rekap Data Terpusat',
      desc: 'Seluruh hasil pencatatan tersimpan di Google Sheets pada akun Google milik pengguna sendiri.',
    },
    {
      id: 3,
      title: 'Dashboard Keuangan',
      desc: 'Dilengkapi lembar dashboard visual dan formula otomatis untuk memantau ringkasan kas tanpa perlu menyusun rumus manual.',
    },
    {
      id: 4,
      title: 'Setup Sistem Sesuai SOP',
      desc: 'Pendampingan setup otomasi n8n, konfigurasi akun, dan pengujian alur pencatatan hingga siap dioperasikan.',
    },
    {
      id: 5,
      title: 'Transparansi Biaya',
      desc: 'Biaya pembelian sistem Rp750.000 sekali bayar, dengan rincian biaya operasional server dan token AI yang disampaikan secara terbuka.',
    },
  ],

  faqs: [
    {
      question: 'Apa itu FlowNesia?',
      answer:
        'FlowNesia Kas Basic adalah sistem pembukuan usaha yang mengintegrasikan WhatsApp, kecerdasan buatan (AI), alur kerja otomasi n8n, dan Google Sheets. Anda mencatat transaksi lewat WhatsApp, lalu sistem menguraikan dan mencatatnya ke Google Sheets Anda.',
    },
    {
      question: 'Berapa harganya?',
      answer:
        'Harga FlowNesia Kas Basic adalah Rp750.000 (sekali bayar). Biaya ini mencakup pembelian sistem, alur otomasi n8n, prompt AI pencatatan kas, template Google Sheets, serta pendampingan setup dan pengujian sesuai SOP.',
    },
    {
      question: 'Apakah ada biaya bulanan?',
      answer:
        'Ya, terdapat biaya operasional server terpisah sebesar Rp30.000/bulan untuk menjalankan server otomasi (n8n) yang aktif 24 jam memproses pesan WhatsApp Anda. Biaya ini terpisah dari harga pembelian sistem dan tidak mencakup hosting landing page yang berjalan di Cloudflare Pages.',
    },
    {
      question: 'Apakah token AI sudah termasuk?',
      answer:
        'Token AI dibayarkan terpisah sesuai pemakaian langsung ke penyedia AI sesuai volume transaksi yang Anda kirimkan ke bot.',
    },
    {
      question: 'Apakah dibantu saat pemasangan?',
      answer:
        'Ya, kami menyediakan pendampingan setup dan pengujian sistem sesuai SOP standar FlowNesia hingga WhatsApp bot, server otomasi, dan Google Sheets Anda terhubung dan teruji.',
    },
    {
      question: 'Bagaimana cara mencatat transaksi?',
      answer:
        'Anda membuka ruang obrolan WhatsApp bot kas usaha Anda, lalu mengetikkan transaksi (contoh: "Beli bahan 150.000"). AI menguraikan data tersebut dan sistem mengirimkannya ke Google Sheets.',
    },
    {
      question: 'Apakah tersedia laporan keuangan?',
      answer:
        'Ya, template Google Sheets FlowNesia dilengkapi lembar rekap transaksi, saldo kas berjalan, dashboard visual, dan lembar laporan laba rugi dasar.',
    },
    {
      question: 'Apakah harus memahami akuntansi?',
      answer:
        'Tidak. Sistem dirancang agar pemilik usaha dan staf dapat mencatat arus kas masuk dan keluar secara praktis tanpa memerlukan keahlian akuntansi khusus.',
    },
  ],
};

/**
 * Builds the pre-filled WhatsApp URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = FLOWNESIA_CONFIG.contact.whatsappNumber;
  const defaultText = `Halo kak, saya tertarik dengan FlowNesia Kas Basic (${FLOWNESIA_CONFIG.pricing.mainPrice})`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Helper to record WhatsApp click event if Meta Pixel is active
 * Only records 'Contact' event per guidelines.
 */
export function trackMetaContact(label = 'WhatsApp Contact'): void {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', { content_name: label });
    }
  } catch (err) {
    // silently ignore if tracker blocked
  }
}
