import fs from 'node:fs';
import path from 'node:path';
import {
  benefits,
  buildWhatsAppUrl,
  company,
  defaultWhatsAppMessage,
  footerServices,
  installationKits,
  metrics,
  services,
  trustPoints
} from '../src/data/siteData.js';

const rootDir = process.cwd();
const indexPath = path.join(rootDir, 'index.html');

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const listItems = (items) => items.map((item) => `              <li>${escapeHtml(item)}</li>`).join('\n');

const serviceHtml = services
  .map(
    (service) => `          <article>
            <h3>${escapeHtml(service.title)}</h3>
            <p>${escapeHtml(service.description)}</p>
          </article>`
  )
  .join('\n');

const kitHtml = installationKits
  .map(
    (kit) => `          <article>
            <h3>${escapeHtml(kit.name)}</h3>
            <p><strong>${escapeHtml(kit.badge)}</strong></p>
            <p>${escapeHtml(kit.summary)}</p>
            <ul>
${listItems(kit.includes)}
            </ul>
          </article>`
  )
  .join('\n');

const metricsHtml = metrics
  .map((metric) => `              <li><strong>${escapeHtml(metric.value)}</strong>: ${escapeHtml(metric.label)}</li>`)
  .join('\n');

const benefitsHtml = benefits.map((benefit) => `              <li>${escapeHtml(benefit.title)}</li>`).join('\n');
const trustHtml = trustPoints.map((point) => `              <li>${escapeHtml(point)}</li>`).join('\n');
const footerServicesHtml = footerServices.map((service) => `              <li>${escapeHtml(service)}</li>`).join('\n');

const crawlableBody = `<!-- CRAWLABLE_CONTENT_START -->
      <article class="crawlable-content" aria-label="Contenido principal de MT Technology">
        <header>
          <p>Seguridad electronica y telecomunicaciones</p>
          <h1>MT Technology</h1>
          <p>Tu seguridad es nuestra prioridad</p>
          <p>
            Seguridad electronica profesional para empresas, hogares y comunidades. Alarmas, CCTV,
            control de acceso, cercos electricos, deteccion de incendios y telecomunicaciones.
          </p>
          <p>
            Cotizaciones por WhatsApp:
            <a href="${escapeHtml(buildWhatsAppUrl(defaultWhatsAppMessage))}">${escapeHtml(company.phones[0])}</a>
          </p>
        </header>

        <section id="servicios-html">
          <h2>Servicios de seguridad electronica y telecomunicaciones</h2>
          <p>
            Instalamos, reparamos y mantenemos sistemas confiables para clientes residenciales,
            comunitarios, comerciales e industriales.
          </p>
${serviceHtml}
        </section>

        <section id="kits-instalacion-html">
          <h2>Soluciones instaladas</h2>
          <p>
            Producto correcto, instalacion profesional y sistema funcionando. MT Technology realiza
            levantamiento, materiales, montaje, configuracion, pruebas y capacitacion.
          </p>
${kitHtml}
        </section>

        <section id="quienes-somos-html">
          <h2>Quienes somos</h2>
          <p>
            MT Technology es una empresa de seguridad electronica y telecomunicaciones con trayectoria
            desde el ano ${escapeHtml(company.since)}, especializada en reparacion, instalacion y mantencion de
            sistemas electronicos de seguridad y conectividad.
          </p>
          <p>
            La empresa entrega soporte tecnico en terreno y soluciones integrales para clientes
            residenciales, comunitarios, comerciales e industriales.
          </p>
          <p><strong>Cobertura operativa:</strong> ${escapeHtml(company.coverage)}.</p>
          <ul>
${metricsHtml}
          </ul>
        </section>

        <section id="personal-capacitado-html">
          <h2>Personal capacitado</h2>
          <p>
            Nuestro equipo tecnico cuenta con experiencia comprobada en terreno y preparacion para
            ejecutar instalaciones, mantenciones y soporte de seguridad electronica, redes y
            telecomunicaciones.
          </p>
          <h3>Beneficios destacados</h3>
          <ul>
${benefitsHtml}
          </ul>
          <h3>Indicadores de confianza</h3>
          <ul>
${trustHtml}
          </ul>
        </section>

        <section id="contacto-html">
          <h2>Contacto</h2>
          <p>Conversemos sobre la seguridad que necesitas instalar o mantener.</p>
          <ul>
            <li>Direccion: ${escapeHtml(company.address)}</li>
            <li>Telefonos: ${escapeHtml(company.phones.join(' / '))}</li>
            <li>Representante legal: ${escapeHtml(company.legalRepresentative)}</li>
          </ul>
          <h3>Servicios destacados</h3>
          <ul>
${footerServicesHtml}
          </ul>
        </section>
      </article>
      <!-- CRAWLABLE_CONTENT_END -->`;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  alternateName: company.fantasyName,
  url: 'https://www.technologymt.cl/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address,
    addressLocality: 'Santiago',
    addressCountry: 'CL'
  },
  telephone: company.phones,
  foundingDate: String(company.since),
  areaServed: company.coverage,
  description:
    'MT Technology instala alarmas, CCTV, control de acceso, cercos electricos, deteccion de incendios y telecomunicaciones para empresas, hogares y comunidades.',
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.description
    }
  }))
};

const crawlableHead = `<!-- CRAWLABLE_HEAD_START -->
    <meta property="og:title" content="MT Technology | Seguridad electronica profesional" />
    <meta
      property="og:description"
      content="Instalacion de alarmas, CCTV, control de acceso, cercos electricos, deteccion de incendios y telecomunicaciones en Chile."
    />
    <meta property="og:url" content="https://www.technologymt.cl/" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://www.technologymt.cl/" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!-- CRAWLABLE_HEAD_END -->`;

function replaceBetweenMarkers(html, startMarker, endMarker, replacement) {
  const pattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
  if (!pattern.test(html)) {
    throw new Error(`No se encontraron los marcadores ${startMarker} y ${endMarker} en index.html`);
  }
  return html.replace(pattern, replacement);
}

let html = fs.readFileSync(indexPath, 'utf8');
html = replaceBetweenMarkers(html, '<!-- CRAWLABLE_HEAD_START -->', '<!-- CRAWLABLE_HEAD_END -->', crawlableHead);
html = replaceBetweenMarkers(html, '<!-- CRAWLABLE_CONTENT_START -->', '<!-- CRAWLABLE_CONTENT_END -->', crawlableBody);

fs.writeFileSync(indexPath, html);
console.log('Contenido HTML indexable generado desde src/data/siteData.js');
