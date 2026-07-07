import { MessageCircle } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl } from '../data/siteData.js';

export default function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
