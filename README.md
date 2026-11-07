# FlowNesia Kas Basic – Landing Page

Landing page premium, modern, dan conversion-focused untuk **FlowNesia Kas Basic**: sistem pencatatan keuangan usaha UMKM praktis via WhatsApp terintegrasi Google Sheets dan dashboard keuangan.

100% kompatibel dengan **Cloudflare Pages** (static site via Vite tanpa ketergantungan server runtime di produksi).

---

## 📋 Ringkasan Produk & Biaya

- **Nama Produk:** FlowNesia Kas Basic
- **Harga Sistem & Setup:** **Rp750.000** (pembelian sistem dan setup, sekali bayar).
- **Biaya Operasional Berjalan (Terpisah):**
  - **Server Automasi (n8n):** Rp30.000 / bulan (untuk hosting alur otomasi bot 24 jam).
  - **Token AI:** Sesuai volume pemakaian riil (dibayarkan langsung ke penyedia AI).
- **Hosting Landing Page:** Di-host secara gratis dan statis melalui Cloudflare Pages (terpisah dari server otomasi n8n).

---

## 📞 Kontak WhatsApp Resmi

Dikonfigurasi di `src/config/flownesia.ts`:
- **Nomor WhatsApp:** `6281324997190`
- **Tampilan:** `0813-2499-7190`
- **Tautan Telepon:** `tel:+6281324997190`
- **Tautan WhatsApp:** `https://wa.me/6281324997190`
- **Fungsi WhatsApp URL:** Semua tombol CTA di halaman menggunakan fungsi terpusat `getWhatsAppUrl()`.

---

## 🔒 Privasi Data & Penyamaran Aset

1. **Penyamaran Aset Publik:** Seluruh identitas pribadi dan alamat tautan spreadsheet privat pada tangkapan layar telah disamarkan (*anonymized/blurred*) pada direktori `public/assets/` dan `public/assets/aistudio/` tanpa mengubah angka atau bukti alur transaksi.
2. **Catatan Konsistensi Screenshot:** Tangkapan layar dashboard dan laporan laba rugi saat ini menampilkan contoh antarmuka dengan angka laba/rugi yang berbeda (Rp36.444 vs Rp116.444). Sesuai standar integritas, angka dalam gambar asli tidak direkayasa. Pemilik sistem disarankan menyediakan tangkapan layar pengganti yang konsisten pada periode yang sama.

---

## 🌐 Metadata Sosial & OpenGraph

Pada file `index.html`, tag `og:image` dan `twitter:image` menggunakan path root-relative `/assets/logo.jpg`. Setelah domain kustom Anda dihubungkan ke Cloudflare Pages, perbarui URL tersebut menjadi URL absolut (contoh: `https://domainanda.com/assets/logo.jpg`) untuk pratinjau optimal pada Facebook/Instagram Ads.

---

## ⚙️ Persyaratan Sistem & Dependensi

- **Node.js:** `>= 22.12.0` (diuji pada Node v22.23.2)
- **Package Manager:** `npm` (dilengkapi `package-lock.json`)
- **Framework:** React 19 + Vite 8
- **Styling & Icons:** Tailwind CSS v4 + Lucide React

---

## 🚀 Panduan Deployment ke Cloudflare Pages

1. Hubungkan repository GitHub Anda ke Cloudflare Dashboard.
2. Masuk ke menu **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Pilih repository ini.
4. Konfigurasi build:
   - **Framework preset:** `Vite` (atau `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** `NODE_VERSION = 22`
5. Klik **Save and Deploy**. Website akan otomatis ter-build dan aktif secara global.

---

## 🛠️ Perintah Lokal

```bash
# Instalasi dependensi
npm install

# Pemeriksaan tipe TypeScript (Lint)
npm run lint

# Menjalankan server development lokal
npm run dev

# Membangun file produksi statis
npm run build

# Menjalankan preview build produksi
npm run preview
```
