import { MessageCircle } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl, ctaLabels, services } from '../data/siteData.js';

export default function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Nuestros servicios</span>
          <h2>Soluciones de seguridad electronica para cada tipo de propiedad</h2>
          <p>
            Instalamos, reparamos y mantenemos sistemas confiables para clientes residenciales,
            comunitarios, comerciales e industriales.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const message = `Hola, quiero cotizar el servicio: ${service.title}`;

            return (
              <article className="service-card" key={service.title}>
                <div className="card-icon">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="inline-cta" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} aria-hidden="true" />
                  {ctaLabels.request}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
