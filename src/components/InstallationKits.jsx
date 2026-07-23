import { MessageCircle, PackageCheck } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl, ctaLabels, installationKits } from '../data/siteData.js';

export default function InstallationKits() {
  return (
    <section className="section kits-section" id="kits-instalacion">
      <div className="container">
        <div className="kits-intro">
          <div>
            <span className="section-kicker">
              <PackageCheck size={18} aria-hidden="true" />
              Soluciones instaladas
            </span>
            <h2>Producto correcto, instalacion profesional y sistema funcionando</h2>
          </div>
          <p>
            No somos ecommerce. Tomamos productos de referencia del mercado y los convertimos en una
            solucion completa: levantamiento, materiales, montaje, configuracion, pruebas y capacitacion.
          </p>
        </div>

        <div className="kits-grid">
          {installationKits.map((kit) => {
            const Icon = kit.icon;
            const message = `Hola, quiero cotizar la solucion instalada: ${kit.name} con MT Technology.`;

            return (
              <article className="kit-card" key={kit.name}>
                <div className="kit-card-top">
                  <div className="card-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <span>{kit.badge}</span>
                </div>
                <h3>{kit.name}</h3>
                <p>{kit.summary}</p>
                <ul>
                  {kit.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="button button-whatsapp kit-cta" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} aria-hidden="true" />
                  {ctaLabels.kit}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
