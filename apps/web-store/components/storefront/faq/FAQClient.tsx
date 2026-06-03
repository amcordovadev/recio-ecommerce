'use client';
import { useState } from 'react';

type FAQ = { pregunta: string; respuesta: string };

export default function FAQClient({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-border">
          <button
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center py-6 text-left hover:opacity-90 transition-recio"
          >
            <span className="font-sans font-medium text-foreground text-lg">{faq.pregunta}</span>
            <span className="text-sm font-display">{openIndex === index ? '—' : '+'}</span>
          </button>

          {openIndex === index && (
            <div className="pb-6 text-neutral-600 font-sans leading-relaxed border-b border-border">
              {faq.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
