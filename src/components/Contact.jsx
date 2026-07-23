import { MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { buildWhatsAppUrl, company, ctaLabels, services } from '../data/siteData.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: services[0].title,
  message: ''
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitToWhatsApp = (event) => {
    event.preventDefault();
    const message = [
      'Hola, quiero cotizar con MT Technology.',
      `Nombre: ${form.name}`,
      `Telefono: ${form.phone}`,
      `Correo: ${form.email}`,
      `Servicio de interes: ${form.service}`,
      `Mensaje: ${form.message}`
    ].join('\n');

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="section-kicker">Contacto</span>
          <h2>Conversemos sobre la seguridad que necesitas instalar o mantener</h2>
          <p>
            Completa los datos y el formulario preparara un mensaje para WhatsApp con tu solicitud.
          </p>

          <div className="contact-details">
            <a href={`tel:${company.phones[0].replace(/\s/g, '')}`}>
              <Phone size={20} aria-hidden="true" />
              <span>{company.phones.join(' / ')}</span>
            </a>
            {company.emails.length > 0 && (
              <a href={`mailto:${company.emails[0]}`}>
                <Mail size={20} aria-hidden="true" />
                <span>{company.emails.join(' / ')}</span>
              </a>
            )}
            <span>
              <MapPin size={20} aria-hidden="true" />
              {company.address}
            </span>
          </div>

          <a className="button button-whatsapp wide-cta" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            {ctaLabels.advisor}
          </a>
        </div>

        <form className="contact-form" onSubmit={submitToWhatsApp}>
          <label>
            Nombre
            <input name="name" value={form.name} onChange={updateField} placeholder="Tu nombre" required />
          </label>
          <label>
            Telefono
            <input name="phone" value={form.phone} onChange={updateField} placeholder="+56 9..." required />
          </label>
          <label>
            Correo
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="correo@empresa.cl" />
          </label>
          <label>
            Servicio de interes
            <select name="service" value={form.service} onChange={updateField}>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label className="full-field">
            Mensaje
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Cuentanos que necesitas proteger o mantener"
              rows="5"
            />
          </label>
          <button className="button button-whatsapp form-submit" type="submit">
            <Send size={19} aria-hidden="true" />
            Enviar cotizacion por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
