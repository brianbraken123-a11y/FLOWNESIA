# FlowNesia Kas Basic – Landing Page

Landing page premium, modern, dan conversion-focused untuk **FlowNesia Kas Basic**: sistem pencatatan keuangan usaha UMKM praktis via WhatsApp terintegrasi Google Sheets dan dashboard keuangan.

## 🌟 Fitur Utama Website

1. **Brand Identity & Desain Premium**:
   - Palette FinTech Indonesia: *Deep Forest Green* (`#063B2D`), *Emerald Green* (`#087F5B`), *Champagne Gold* (`#D9AE52`), dan *Warm Cream* (`#FFF9EB`).
   - Tipografi modern: Plus Jakarta Sans & JetBrains Mono untuk tabular data.
   - Glassmorphism halus, microinteraction, dan layout responsif mobile-first.

2. **Alur Konversi WhatsApp**:
   - CTA WhatsApp langsung di Hero, Navbar, Showcase Modal, Pricing, FAQ, Final CTA, dan Footer.
   - **Floating WhatsApp Desktop**: Tombol mengambang di pojok kanan bawah dengan animasi breathing halus.
   - **Sticky WhatsApp Mobile**: Bar konversi bawah fixed yang menghormati safe-area insets mobile tanpa menutupi konten penting.

3. **10 Bagian Sesuai Spesifikasi**:
   - **Section 1: Hero** (Value proposition, dual CTA, mockup WhatsApp chat & dashboard)
   - **Section 2: Problems** (4 kartu interaktif kendala pembukuan UMKM)
   - **Section 3: Introducing FlowNesia** (Penjelasan integrasi WhatsApp, AI, n8n, & Sheets)
   - **Section 4: How It Works** (Timeline 4 langkah terhubung dengan screenshot asli)
   - **Section 5: Product Showcase** (Grid responsive 4 tangkapan layar asli + modal lightbox zoom)
   - **Section 6: Pricing** (Paket utama Rp750.000 sekali bayar + transparansi biaya operasional server Rp30.000/bln & token AI)
   - **Section 7: Why FlowNesia?** (5 kartu fitur keunggulan & batasan akuntansi beretika)
   - **Section 8: FAQ** (Akordeon 8 pertanyaan lengkap)
   - **Section 9: Final CTA** (Ajakan bertindak langsung ke WhatsApp)
   - **Section 10: Footer** (Branding, kontak, kebijakan privasi, syarat ketentuan, dan copyright)

---

## ⚙️ Cara Mengubah Nomor WhatsApp & Pengaturan

Buka file `src/config/flownesia.ts`:

```typescript
export const FLOWNESIA_CONFIG = {
  contact: {
    whatsappNumber: '6281234567890', // Masukkan nomor WhatsApp bisnis Anda di sini (format 628xxxxxxxxxx)
    whatsappDisplay: '+62 812-3456-7890',
    email: 'kontak@flownesia.com',
  },
  // ...
};
```
Semua tombol CTA dan tautan konsultasi akan secara otomatis mengarah ke nomor WhatsApp yang telah Anda tentukan.

---

## 🚀 Panduan Deployment ke Cloudflare Pages

Project ini 100% kompatibel dengan **Cloudflare Pages** (Static Site Generator via Vite):

### Langkah-langkah:
1. Hubungkan repository GitHub Anda ke Cloudflare Dashboard.
2. Buat project baru di **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Pilih repository project ini.
4. Pada bagian **Build settings**:
   - **Framework preset**: `Vite` (atau `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` atau `20`
5. Klik **Save and Deploy**.
6. Website FlowNesia Kas Basic akan langsung aktif secara global melalui jaringan CDN Cloudflare berkecepatan tinggi!

---

## 🛠️ Pengembangan Lokal

```bash
# Install dependencies
npm install

# Jalankan server development
npm run dev

# Jalankan uji build produksi
npm run build

# Preview build produksi secara lokal
npm run preview
```
