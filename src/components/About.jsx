import React from 'react';
import { company, metrics } from '../data/siteData.js';

export default function About() {
  return (
    <section className="section about-section" id="quienes-somos">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="section-kicker">Quienes somos</span>
          <h2>Trayectoria tecnica, grandes clientes y presencia en terreno</h2>
          <p>
            MT Technology es una empresa de seguridad electronica y telecomunicaciones con trayectoria
            desde el ano 2010, especializada en reparacion, instalacion y mantencion de sistemas
            electronicos de seguridad y conectividad.
          </p>
          <p>
            La empresa ha prestado servicios para grandes clientes, entregando soporte tecnico en terreno
            y soluciones integrales para clientes residenciales, comunitarios, comerciales e industriales.
          </p>
          <div className="coverage-box">
            <strong>Cobertura operativa</strong>
            <span>{company.coverage}</span>
          </div>
        </div>

        <div className="metric-grid">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="metric-card" key={`${metric.value}-${metric.label}`}>
                <Icon size={24} aria-hidden="true" />
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
