import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, MessageCircle, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

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
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  const handleAskAboutFeature = () => {
    trackMetaLead(`Modal Question: ${title}`);
    window.open(
      getWhatsAppUrl(`Halo kak, saya ingin tanya mengenai fitur "${title}" pada FlowNesia Kas Basic.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[95vh] max-w-5xl w-full flex flex-col rounded-3xl bg-[#063B2D] border border-white/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#04241B]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D9AE52]" />
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-[280px] sm:max-w-md">
              {title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition-colors"
              title="Perbesar gambar"
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
              <span>{isZoomed ? 'Standar' : 'Perbesar'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-white/80 hover:bg-white/15 hover:text-white transition-colors focus-visible:outline-none"
              aria-label="Tutup tampilan gambar"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal Image Viewer with scroll if large */}
        <div className="relative flex-1 overflow-auto bg-black/40 p-3 sm:p-6 flex items-center justify-center min-h-[300px] max-h-[68vh]">
          <img
            src={imageSrc}
            alt={title}
            className={`transition-all duration-200 rounded-xl object-contain shadow-2xl ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'max-h-[60vh] w-auto cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Bottom Bar with Caption & Action */}
        <div className="p-4 sm:p-5 bg-[#04241B] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
            {caption}
          </p>
          <button
            type="button"
            onClick={handleAskAboutFeature}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#087F5B] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#D9AE52] hover:text-[#063B2D] transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Tanya Fitur Ini via WA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
