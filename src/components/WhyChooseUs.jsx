import { MessageCircle } from 'lucide-react';
import React from 'react';
import { benefits, buildWhatsAppUrl, ctaLabels } from '../data/siteData.js';

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="personal-capacitado">
      <div className="container why-grid">
        <div className="why-intro">
          <span className="section-kicker">Por que elegirnos</span>
          <h2>Personal Capacitado</h2>
          <p>
            Nuestro equipo tecnico cuenta con certificacion OS10 vigente, experiencia comprobada en
            terreno y preparacion para ejecutar instalaciones, mantenciones y soporte de seguridad
            electronica.
          </p>
          <a className="button button-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            {ctaLabels.quoteNow}
          </a>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div className="benefit-item" key={benefit.title}>
                <Icon size={22} aria-hidden="true" />
                <span>{benefit.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
