import { MessageCircle } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl, company, footerServices } from '../data/siteData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <img className="brand-mark-img" src="/assets/mt-technology-mark.svg" alt="" aria-hidden="true" />
            <span className="brand-word">Technology</span>
          </div>
          <a className="button button-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <div>
          <h2>Servicios</h2>
          <ul>
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contacto</h2>
          <p>{company.phones.join(' / ')}</p>
          {company.emails.length > 0 && <p>{company.emails.join(' / ')}</p>}
          <p>{company.address}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {year} MT Technology. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
