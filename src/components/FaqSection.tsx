import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FLOWNESIA_CONFIG, getWhatsAppUrl, trackMetaLead } from '../config/flownesia';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskOther = () => {
    trackMetaLead('FAQ Custom Question CTA');
    window.open(
      getWhatsAppUrl('Halo kak, saya punya pertanyaan mengenai FlowNesia Kas Basic: '),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#FFF9EB] border-t border-[#063B2D]/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087F5B] mb-3">
            <HelpCircle className="h-4 w-4 text-[#D9AE52]" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#063B2D] sm:text-4xl lg:text-5xl text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#182820]/75">
            Semua hal yang perlu Anda ketahui tentang sistem FlowNesia Kas Basic sebelum memulai.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FLOWNESIA_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#063B2D]/15 bg-white transition-all duration-200 hover:border-[#D9AE52]/80 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#063B2D] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF9EB] border border-[#063B2D]/10 text-[#063B2D] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#087F5B] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#063B2D]/5 px-5 pb-6 pt-3 sm:px-6 text-sm sm:text-base leading-relaxed text-[#182820]/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 rounded-3xl border border-[#063B2D]/10 bg-white p-6 sm:p-8 text-center shadow-sm">
          <h3 className="text-lg font-bold text-[#063B2D]">
            Punya pertanyaan lain seputar kebutuhan usaha Anda?
          </h3>
          <p className="mt-2 text-sm text-[#182820]/75">
            Tim kami dengan senang hati membantu menjelaskan secara langsung melalui chat WhatsApp.
          </p>
          <button
            type="button"
            onClick={handleAskOther}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#087F5B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#063B2D] hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-[#D9AE52]" />
            <span>Tanya Tim Kami via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
