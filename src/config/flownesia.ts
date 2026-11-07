/**
 * FlowNesia Kas Basic - Centralized Configuration
 * 
 * You can easily customize the WhatsApp phone number and default messages here.
 * Format for Indonesian numbers: 628xxxxxxxxxx (without '+' or leading '0').
 */

export const FLOWNESIA_CONFIG = {
  brand: {
    name: 'FlowNesia',
    productName: 'FlowNesia Kas Basic',
    tagline: 'Catat Keuangan Usaha Semudah Kirim Chat WhatsApp',
    description:
      'FlowNesia Kas Basic membantu mencatat pemasukan dan pengeluaran melalui WhatsApp, merekap transaksi ke Google Sheets, dan memantau laporan keuangan usaha dengan lebih praktis.',
  },

  // Edit this phone number with your actual WhatsApp business number
  contact: {
    whatsappNumber: '6281234567890', // Ubah nomor WhatsApp Anda di sini
    whatsappDisplay: '+62 812-3456-7890',
    email: 'kontak@flownesia.com',
    operationalHours: 'Senin - Sabtu: 09:00 - 18:00 WIB',
  },

  pricing: {
    mainPrice: 'Rp750.000',
    mainPriceNumeric: 750000,
    type: 'Sekali bayar',
    subtitle: 'Pembelian sistem dan setup, sekali bayar.',
    operationalCosts: [
      {
        item: 'Biaya Server Cloud / n8n',
        cost: 'Rp30.000 / bulan',
        description: 'Untuk hosting server automasi yang aktif 24 jam memproses pesan WhatsApp Anda.',
      },
      {
        item: 'Biaya Token AI',
        cost: 'Sesuai pemakaian',
        description: 'Biaya API AI langsung sesuai volume transaksi Anda (sangat terjangkau, rata-rata Rp5 - Rp20 per transaksi).',
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

  // Official uploaded screenshots & logo
  assets: {
    logo: '/assets/logo.jpg',
    waTransaction: '/assets/wa-transaction.jpg',
    googleSheets: '/assets/google-sheets.jpg',
    dashboard: '/assets/dashboard.jpg',
    labaRugi: '/assets/laba-rugi.jpg',
  },

  problems: [
    {
      id: 1,
      title: 'Transaksi sering lupa dicatat',
      desc: 'Sibuk melayani pembeli membuat pengeluaran kecil seperti beli bensin, makan siang, atau bayar kurir sering terlewat dan uang kas tiba-tiba berkurang tanpa jejak.',
      highlight: 'Sering lupa catat',
    },
    {
      id: 2,
      title: 'Catatan keuangan tersebar',
      desc: 'Sebagian nota terselip di laci, sebagian diketik di memo HP, dan sebagian lagi hanya diingat di kepala. Akibatnya data berantakan dan sulit dicocokkan.',
      highlight: 'Data tercecer',
    },
    {
      id: 3,
      title: 'Rekap manual memakan waktu',
      desc: 'Setiap akhir bulan harus lembur berjam-jam membuka bon kertas dan mengetik ulang satu per satu ke buku kas atau laptop sampai pusing.',
      highlight: 'Lembur rekap bon',
    },
    {
      id: 4,
      title: 'Sulit memantau kondisi keuangan',
      desc: 'Omzet penjualan terasa ramai dan barang laris, namun tidak tahu pasti berapa laba bersih riil yang didapatkan setiap bulannya.',
      highlight: 'Laba bersih buram',
    },
  ],

  benefits: [
    {
      id: 1,
      title: 'Praktis melalui WhatsApp',
      description:
        'Cukup kirim pesan singkat seperti "Beli bahan 150.000" atau "Jual 3 paket katering 450.000" langsung di WhatsApp Anda tanpa perlu download aplikasi kasir baru yang rumit.',
      badge: 'Tanpa Install App Tambahan',
    },
    {
      id: 2,
      title: 'Data Lebih Terstruktur',
      description:
        'AI cerdas mengenali nominal, jenis transaksi (masuk/keluar), kategori akun, dan tanggal secara otomatis, lalu merapikannya langsung ke baris Google Sheets Anda.',
      badge: 'Auto Klasifikasi AI',
    },
    {
      id: 3,
      title: 'Laporan Lebih Mudah Dipantau',
      description:
        'Dilengkapi dashboard visual interaktif serta laporan laba rugi bulanan di spreadsheet Anda yang bisa diakses kapan saja dari smartphone maupun laptop.',
      badge: 'Real-time Spreadsheet',
    },
  ],

  howItWorks: [
    {
      step: 1,
      number: '01',
      title: 'Kirim Transaksi Melalui WhatsApp',
      description:
        'Ketik pesan pengeluaran atau pemasukan dengan bahasa santai sehari-hari di chat WhatsApp bot kas Anda (contoh: "Beli bahan 150.000").',
      assetKey: 'waTransaction',
      caption: 'Tangkapan layar asli pesan chat WhatsApp konfirmasi transaksi kas keluar Rp150.000.',
    },
    {
      step: 2,
      number: '02',
      title: 'AI Membantu Memproses Informasi Transaksi',
      description:
        'Sistem AI otomatis membaca pesan, mengekstrak tanggal, nominal uang, jenis transaksi (Masuk / Keluar), serta mengkategorikannya ke pos akun yang tepat.',
      assetKey: 'waTransaction',
      caption: 'AI mengekstrak nominal Rp150.000, jenis: Keluar, kategori: Belanja, keterangan: Beli bahan.',
    },
    {
      step: 3,
      number: '03',
      title: 'Data Direkap ke Google Sheets',
      description:
        'Detik itu juga, data transaksi tercatat rapi ke tabel Google Sheets Anda lengkap dengan ID unik, tanggal, kategori, saldo kas terupdate, dan status berhasil.',
      assetKey: 'googleSheets',
      caption: 'Tangkapan layar asli baris data Google Sheets transaksi kas terstruktur.',
    },
    {
      step: 4,
      number: '04',
      title: 'Pantau Dashboard dan Laporan',
      description:
        'Buka spreadsheet kapan saja untuk memantau grafik pemasukan vs beban, diagram kategori pengeluaran, serta laporan laba rugi bersih secara real-time.',
      assetKey: 'dashboard',
      caption: 'Dashboard visual keuangan bulanan dengan indikator total pemasukan, beban, dan laba/rugi.',
    },
  ],

  showcase: [
    {
      id: 'wa-chat',
      title: 'Pencatatan Transaksi WhatsApp',
      tag: 'Input Praktis',
      description:
        'Bukti nyata respon otomatis saat mencatat pengeluaran "Beli bahan 150.000". AI langsung membalas rincian tanggal, jenis, kategori, nominal, dan link menuju Google Sheets.',
      image: '/assets/wa-transaction.jpg',
      aspect: 'aspect-[9/16] max-h-[460px]',
      badge: 'WhatsApp Interface',
    },
    {
      id: 'google-sheets',
      title: 'Database Transaksi Google Sheets',
      tag: 'Rekap Terpusat',
      description:
        'Tabel spreadsheet yang otomatis terisi setiap ada pesan masuk. Mencakup ID unik, Tanggal, Kategori, Masuk, Keluar, Saldo Kas akumulatif, Keterangan, Status, dan Created At.',
      image: '/assets/google-sheets.jpg',
      aspect: 'aspect-[16/7]',
      badge: 'Spreadsheet Cloud',
    },
    {
      id: 'dashboard',
      title: 'Dashboard Keuangan Visual',
      tag: 'Ringkasan Eksekutif',
      description:
        'Visualisasi grafik batang pendapatan vs beban per bulan, grafik tren pengeluaran, donat komposisi beban per kategori, serta ringkasan total pemasukan dan saldo kas akhir.',
      image: '/assets/dashboard.jpg',
      aspect: 'aspect-[16/10]',
      badge: 'Grafik Interaktif',
    },
    {
      id: 'laba-rugi',
      title: 'Laporan Laba Rugi Otomatis',
      tag: 'Laporan Bulanan',
      description:
        'Rincian seluruh pos pendapatan (gaji, bonus, penjualan) dikurangi pos beban (belanja, konsumsi, transportasi, operasional) hingga menghasilkan angka Laba/Rugi Bersih yang transparan.',
      image: '/assets/laba-rugi.jpg',
      aspect: 'aspect-[3/4] max-h-[480px]',
      badge: 'Laba Rugi Bulanan',
    },
  ],

  whyFlowNesia: [
    {
      id: 1,
      title: 'Input Transaksi Lewat WhatsApp',
      desc: 'Gunakan aplikasi yang sudah Anda buka puluhan kali setiap hari. Tak perlu registrasi akun baru atau membuka software berat saat sedang sibuk melayani pembeli.',
    },
    {
      id: 2,
      title: 'Rekap Data Terpusat',
      desc: 'Semua pencatatan tersimpan aman di Google Drive / Google Sheets milik Anda sendiri. Data adalah 100% milik Anda dan tidak terkunci di vendor tertutup.',
    },
    {
      id: 3,
      title: 'Dashboard Keuangan Otomatis',
      desc: 'Dilengkapi visualisasi grafik dan formula laba rugi bawaan yang otomatis menghitung saldo akhir tanpa perlu Anda menulis rumus Excel manual.',
    },
    {
      id: 4,
      title: 'Setup Sistem Sesuai SOP',
      desc: 'Kami bantu setup workflow otomasi, integrasi akun, hingga pengujian sampai sistem dipastikan berjalan lancar dan siap Anda gunakan.',
    },
    {
      id: 5,
      title: 'Transparansi Biaya Mutlak',
      desc: 'Harga sistem sekali bayar Rp750.000. Biaya server dan pemakaian token AI dijelaskan secara jujur dan transparan tanpa biaya tersembunyi.',
    },
  ],

  faqs: [
    {
      question: 'Apa itu FlowNesia?',
      answer:
        'FlowNesia Kas Basic adalah sistem pembukuan usaha praktis berbasis automasi yang menghubungkan WhatsApp, AI (Artificial Intelligence), workflow n8n, dan Google Sheets. Anda cukup mengirim pesan transaksi lewat WhatsApp, dan sistem akan langsung merekapnya ke database spreadsheet beserta dashboard laporan keuangan.',
    },
    {
      question: 'Berapa harganya?',
      answer:
        'Harga FlowNesia Kas Basic adalah Rp750.000 (sekali bayar). Biaya ini mencakup lisensi sistem, workflow otomasi n8n, prompt AI khusus pencatatan kas, template Google Sheets interaktif, serta panduan setup dan pengujian sistem sesuai SOP hingga siap digunakan.',
    },
    {
      question: 'Apakah ada biaya bulanan?',
      answer:
        'Ya, terdapat biaya operasional server terpisah sebesar Rp30.000/bulan untuk menjaga server automasi (n8n) tetap aktif dan online 24 jam memproses pesan WhatsApp Anda. Biaya ini dibayarkan langsung untuk operasional cloud server Anda.',
    },
    {
      question: 'Apakah token AI sudah termasuk?',
      answer:
        'Token AI dibayarkan terpisah sesuai pemakaian langsung ke penyedia AI. Biaya ini sangat terjangkau, rata-rata hanya beberapa rupiah (sekitar Rp5 - Rp20) per transaksi yang dicatat, sehingga sangat hemat untuk penggunaan harian UMKM.',
    },
    {
      question: 'Apakah dibantu saat pemasangan?',
      answer:
        'Tentu saja! Kami memberikan pendampingan setup dan pengujian sistem sesuai SOP standar FlowNesia. Tim kami akan memastikan integrasi antara WhatsApp bot, server automasi, dan Google Sheets Anda terhubung dengan sempurna dan siap dipakai.',
    },
    {
      question: 'Bagaimana cara mencatat transaksi?',
      answer:
        'Sangat mudah. Anda hanya perlu membuka chat WhatsApp bot kas Anda, lalu ketik transaksi dalam kalimat santai, misalnya: "Beli bahan 150.000", "Beli bensin 30.000", atau "Masuk penjualan tunai 500.000". AI akan otomatis memproses dan memberikan balasan konfirmasi.',
    },
    {
      question: 'Apakah tersedia laporan keuangan?',
      answer:
        'Ya, template Google Sheets FlowNesia sudah dilengkapi dengan lembar Laporan Keuangan Dasar, ringkasan saldo kas berjalan, grafik dashboard pendapatan vs beban bulanan, serta lembar Laporan Laba Rugi otomatis.',
    },
    {
      question: 'Apakah harus memahami akuntansi?',
      answer:
        'Tidak perlu! FlowNesia dirancang khusus agar pemilik usaha, pedagang, dan tim operasional yang tidak memiliki latar belakang akuntansi tetap bisa mencatat arus kas dengan rapi, akurat, dan mudah dimengerti.',
    },
  ],
};

/**
 * Builds the pre-filled WhatsApp URL with user tracking
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = FLOWNESIA_CONFIG.contact.whatsappNumber;
  const defaultText = 'Halo kak, saya tertarik dengan FlowNesia Kas Basic';
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Helper to trigger Meta Pixel event safely if loaded
 */
export function trackMetaLead(label = 'WhatsApp Lead'): void {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: label });
      (window as any).fbq('track', 'Contact', { content_name: label });
    }
  } catch (err) {
    // silently ignore if tracker blocked
  }
}
