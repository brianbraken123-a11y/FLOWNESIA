import React from 'react';
import { MessageCircle, Mail, Clock, ArrowUp, Shield } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenTermsModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWaContact = () => {
    trackMetaLead('Footer WhatsApp Contact');
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-[#04241B] text-white/80 border-t border-white/10 pb-24 sm:pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={FLOWNESIA_CONFIG.assets.logo}
                alt="FlowNesia Logo"
                className="h-10 w-10 rounded-full border border-[#D9AE52]/50 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Flow<span className="text-[#087F5B]">Nesia</span>
                <span className="ml-1 text-xs font-semibold text-[#D9AE52]">Kas Basic</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              Solusi sistem pencatatan keuangan praktis untuk pengusaha UMKM Indonesia. Memudahkan rekap kas via WhatsApp, otomasi n8n, dan Google Sheets.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#D9AE52]">
              <Shield className="h-4 w-4" />
              <span>Sistem Setup Mandiri & SOP Pengujian Terstandar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9AE52] mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#masalah" className="hover:text-white transition-colors">
                  Tantangan Keuangan UMKM
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang FlowNesia Kas
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-white transition-colors">
                  Cara Kerja Sistem
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Showcase Screenshot Asli
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Harga & Biaya Operasional
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9AE52] mb-4">
              Kontak & Bantuan
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <button
                type="button"
                onClick={handleWaContact}
                className="flex items-center gap-2.5 hover:text-[#D9AE52] transition-colors text-left"
              >
                <MessageCircle className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>WhatsApp: {FLOWNESIA_CONFIG.contact.whatsappDisplay}</span>
              </button>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>Email: {FLOWNESIA_CONFIG.contact.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#087F5B] shrink-0" />
                <span>{FLOWNESIA_CONFIG.contact.operationalHours}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="hover:underline hover:text-white cursor-pointer"
              >
                Kebijakan Privasi
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={onOpenTermsModal}
                className="hover:underline hover:text-white cursor-pointer"
              >
                Ketentuan Layanan
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} FlowNesia. Hak cipta dilindungi undang-undang.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
