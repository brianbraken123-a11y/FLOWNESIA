import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        ref={modalRef}
        className="relative max-h-[88dvh] max-w-2xl w-full flex flex-col rounded-2xl sm:rounded-3xl bg-[#FFF9EB] border border-[#063B2D]/20 shadow-2xl overflow-hidden modal-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[#063B2D]/10 bg-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <ShieldCheck className="h-5 w-5 text-[#087F5B] shrink-0" />
            <h3 id="legal-modal-title" className="text-base sm:text-lg font-bold text-[#063B2D] truncate">
              {type === 'privacy' ? 'Informasi Privasi & Data' : 'Ketentuan Layanan'}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#182820]/70 hover:bg-[#063B2D]/10 hover:text-[#063B2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer shrink-0"
            aria-label="Tutup jendela informasi"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6 text-xs sm:text-sm text-[#182820]/80 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Penyimpanan Data:</strong> Data transaksi yang berhasil dicatat oleh sistem disimpan di lembar kerja Google Sheets pada akun Google milik pengguna sendiri.
              </p>
              <p>
                <strong>2. Alur Pemrosesan Pesan:</strong> Pesan transaksi yang dikirimkan melalui WhatsApp diproses melalui alur kerja otomasi server n8n dan penyedia AI untuk mengekstrak informasi nominal, jenis transaksi, dan pos kategori, sebelum diteruskan ke Google Sheets pengguna.
              </p>
              <p>
                <strong>3. Kredensial & Akses:</strong> Integrasi akun dan token dihubungkan secara privat pada server otomasi masing-masing sistem pengguna sesuai prosedur setup.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Ruang Lingkup:</strong> Pembelian FlowNesia Kas Basic sebesar Rp750.000 (sekali bayar) mencakup lisensi sistem, workflow otomasi n8n, prompt AI kas dasar, template Google Sheets, serta pendampingan setup dan pengujian alur pencatatan sesuai SOP.
              </p>
              <p>
                <strong>2. Biaya Operasional Berjalan:</strong> Biaya operasional server otomasi (Rp30.000 per bulan) dan biaya token AI (sesuai volume pemakaian) merupakan biaya operasional terpisah dari biaya pembelian sistem. Biaya server otomasi ini juga terpisah dari hosting landing page di Cloudflare Pages.
              </p>
              <p>
                <strong>3. Batasan Akuntansi:</strong> FlowNesia Kas Basic merupakan alat bantu pencatatan transaksi operasional harian dan bukan merupakan pengganti jasa audit akuntansi resmi.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-white border-t border-[#063B2D]/10 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#063B2D] px-5 py-2 text-xs font-semibold text-white hover:bg-[#087F5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
