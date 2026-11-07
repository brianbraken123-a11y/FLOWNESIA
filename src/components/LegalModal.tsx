import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[85vh] max-w-2xl w-full flex flex-col rounded-3xl bg-[#FFF9EB] border border-[#063B2D]/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#063B2D]/10 bg-white">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-[#087F5B]" />
            <h3 className="text-lg font-bold text-[#063B2D]">
              {type === 'privacy' ? 'Kebijakan Privasi FlowNesia' : 'Ketentuan Layanan FlowNesia'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#182820]/70 hover:bg-[#063B2D]/10 hover:text-[#063B2D]"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 text-sm text-[#182820]/80 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Kepemilikan Data:</strong> Seluruh data transaksi, catatan keuangan, dan file Google Sheets yang dihubungkan dengan FlowNesia Kas Basic adalah 100% milik pengguna. Data tersimpan di akun Google Drive / Google Cloud milik pengguna sendiri.
              </p>
              <p>
                <strong>2. Penggunaan Pesan WhatsApp:</strong> Pesan teks transaksi yang Anda kirimkan ke nomor bot hanya diproses untuk tujuan ekstraksi data keuangan (tanggal, kategori, nominal, keterangan) dan diteruskan ke Google Sheets Anda.
              </p>
              <p>
                <strong>3. Keamanan & Token:</strong> Kredensial API dan akses token dikonfigurasikan secara privat di server automasi Anda tanpa dibagikan kepada pihak ketiga yang tidak berwenang.
              </p>
              <p>
                <strong>4. Kerahasiaan Informasi Bisnis:</strong> FlowNesia tidak menjual, membagikan, atau memanfaatkan data transaksi keuangan bisnis Anda untuk tujuan periklanan pihak mana pun.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Ruang Lingkup Layanan:</strong> FlowNesia Kas Basic adalah sistem pembukuan kas dasar berbasis otomatisasi WhatsApp, n8n, dan Google Sheets. Pembelian Rp750.000 mencakup penyediaan sistem, workflow, prompt AI, template spreadsheet, dan panduan setup sesuai SOP.
              </p>
              <p>
                <strong>2. Biaya Operasional Berjalan:</strong> Biaya operasional server (Rp30.000/bln) dan biaya token AI (sesuai pemakaian) merupakan biaya pihak ketiga yang diperlukan untuk menjaga automasi berjalan 24 jam.
              </p>
              <p>
                <strong>3. Batasan Tanggung Jawab Akuntansi:</strong> FlowNesia Kas Basic berfungsi sebagai alat pencatatan administratif operasional harian dan bukan pengganti jasa audit akuntan publik tersertifikasi. Pengguna bertanggung jawab memastikan kebenaran input data transaksi.
              </p>
              <p>
                <strong>4. Dukungan & Setup:</strong> Kami menyediakan pendampingan setup hingga sistem teruji dan siap digunakan.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-white border-t border-[#063B2D]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#063B2D] px-5 py-2 text-xs font-semibold text-white hover:bg-[#087F5B] transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
