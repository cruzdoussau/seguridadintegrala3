import { MessageCircle, ShieldCheck } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl, company, footerServices } from '../data/siteData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <span className="brand-mark">
              <ShieldCheck size={24} aria-hidden="true" />
            </span>
            <span>
              <strong>Seguridad Integral A3 LTDA</strong>
              <small>Seguridad electronica profesional</small>
            </span>
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
          <p>{company.emails.join(' / ')}</p>
          <p>{company.address}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {year} Seguridad Integral A3 LTDA. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
