import { ArrowRight, BadgeCheck, Camera, LockKeyhole, MessageCircle, ShieldCheck } from 'lucide-react';
import React from 'react';
import { buildWhatsAppUrl, ctaLabels } from '../data/siteData.js';

const heroPillars = [
  { icon: ShieldCheck, label: 'Seguridad' },
  { icon: LockKeyhole, label: 'Proteccion' },
  { icon: Camera, label: 'Vigilancia' }
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <BadgeCheck size={18} aria-hidden="true" />
            Empresa con OS10 vigente
          </div>
          <h1>Seguridad Integral A3</h1>
          <p className="hero-tagline">Tu seguridad es nuestra prioridad</p>
          <p className="hero-lead">
            Seguridad electronica profesional para empresas, hogares y comunidades. Alarmas, CCTV,
            control de acceso, cercos electricos y deteccion de incendios.
          </p>
          <div className="hero-divider" />
          <div className="hero-pillars" aria-label="Servicios principales">
            {heroPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.label}>
                  <Icon size={54} aria-hidden="true" />
                  <strong>{pillar.label}</strong>
                </div>
              );
            })}
          </div>
          <div className="hero-actions">
            <a className="button button-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              {ctaLabels.quoteNow}
            </a>
            <a className="button button-secondary" href="#servicios">
              Ver servicios
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
