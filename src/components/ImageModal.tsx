import React, { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ZoomOut, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackMetaContact } from '../config/flownesia';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Reset zoom whenever image changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIsZoomed(false);
    }
  }, [isOpen, imageSrc]);

  // Focus trap, escape key, and scroll lock management
  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore focus on close
    previousActiveElement.current = document.activeElement as HTMLElement | null;

    // Save previous overflow style to restore correctly
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move initial focus to close button
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

      // Restore focus to trigger element
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAskAboutFeature = () => {
    trackMetaContact(`Screenshot Inquiry: ${title}`);
    window.open(
      getWhatsAppUrl(`Halo kak, saya ingin tanya mengenai tampilan "${title}" pada FlowNesia Kas Basic.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div
        ref={modalRef}
        className="relative max-h-[92dvh] max-w-5xl w-full flex flex-col rounded-2xl sm:rounded-3xl bg-[#063B2D] border border-white/20 shadow-2xl overflow-hidden modal-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar - optimized for small 320px screens */}
        <div className="flex items-center justify-between gap-2 px-3 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-[#04241B] shrink-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="h-2 w-2 rounded-full bg-[#087F5B] shrink-0" aria-hidden="true" />
            <h3
              id="image-modal-title"
              className="text-sm sm:text-base md:text-lg font-bold text-white truncate min-w-0"
            >
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
              title="Ubah perbesaran gambar"
            >
              {isZoomed ? <ZoomOut className="h-3.5 w-3.5" /> : <ZoomIn className="h-3.5 w-3.5" />}
              <span>{isZoomed ? 'Standar' : 'Perbesar'}</span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 sm:p-2 text-white/80 hover:bg-white/15 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer shrink-0"
              aria-label="Tutup tampilan gambar"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Scrollable image viewing area */}
        <div className="relative flex-1 overflow-auto bg-black/50 p-2 sm:p-4 flex items-center justify-center min-h-[180px] max-h-[58dvh] sm:max-h-[64dvh]">
          <div className="max-w-full max-h-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt={title}
              className={`transition-all duration-200 rounded-lg sm:rounded-xl object-contain ${
                isZoomed
                  ? 'scale-125 sm:scale-150 cursor-zoom-out max-h-none'
                  : 'max-h-[50dvh] sm:max-h-[58dvh] w-auto cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Modal Bottom Bar with Caption & Direct Action */}
        <div className="p-3 sm:p-5 bg-[#04241B] border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
            {caption}
          </p>
          <button
            type="button"
            onClick={handleAskAboutFeature}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#087F5B] px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#063B2D] hover:border hover:border-[#D9AE52]/50 transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-[#D9AE52]" />
            <span>Tanya via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
