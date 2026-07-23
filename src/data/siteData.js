import {
  AlarmClockCheck,
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Fingerprint,
  Flame,
  Headset,
  Home,
  MapPinned,
  MessagesSquare,
  ShieldCheck,
  Users,
  Wrench,
  Zap
} from 'lucide-react';

export const whatsappNumber = '56967524299';

export const defaultWhatsAppMessage =
  'Hola, quiero cotizar un servicio con MT Technology';

export const company = {
  name: 'MT Technology',
  shortName: 'MT Technology',
  fantasyName: 'MT Technology',
  address: 'Acuario 5332, Lo Prado, Santiago, Chile',
  phones: ['+56 9 6752 4299', '+56 9 9430 1761'],
  emails: [],
  legalRepresentative: 'Raul Martinez Pena',
  since: 2010,
  coverage:
    'Santiago, Region Metropolitana, Valparaiso, Concepcion, Chillan, Antofagasta y Calama'
};

export function buildWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#quienes-somos' },
  { label: 'Personal Capacitado', href: '#personal-capacitado' },
  { label: 'Contacto', href: '#contacto' }
];

export const services = [
  {
    icon: AlarmClockCheck,
    title: 'Instalacion de sistemas de seguridad y alarmas',
    description:
      'Instalacion de centrales DSC, Visonic, Maxis, Essenciales y sistemas alambricos, inalambricos e hibridos.'
  },
  {
    icon: Camera,
    title: 'Circuito Cerrado de Television CCTV',
    description:
      'Instalacion de DVR, NVR, camaras interiores y exteriores, postaciones y obras civiles.'
  },
  {
    icon: Fingerprint,
    title: 'Control de accesos',
    description:
      'Soluciones con huella digital, conexion en red y sistemas de acceso para empresas, comunidades y recintos privados.'
  },
  {
    icon: Zap,
    title: 'Cercos electricos',
    description:
      'Primera barrera de seguridad perimetral para propiedades residenciales, comunitarias, agricolas e industriales, con proteccion 24/7.'
  },
  {
    icon: Flame,
    title: 'Sistemas de deteccion de incendios',
    description:
      'Instalacion de sistemas de deteccion, extincion, redes humedas, redes secas y redes de incendio.'
  },
  {
    icon: Wrench,
    title: 'Mantencion y soporte tecnico',
    description:
      'Servicios tecnicos en terreno para reparacion, instalacion y mantencion de sistemas electronicos de seguridad.'
  }
];

export const metrics = [
  { icon: CalendarCheck2, value: 'Desde 2010', label: 'trayectoria comprobada' },
  { icon: Users, value: '25', label: 'tecnicos en terreno' },
  { icon: Building2, value: '5', label: 'personas en equipo administrativo' },
  { icon: ClipboardCheck, value: '+1.000', label: 'actividades mensuales' },
  { icon: BadgeCheck, value: 'OS10', label: 'tecnicos certificados' },
  { icon: MapPinned, value: '7 zonas', label: 'cobertura operativa en Chile' }
];

export const benefits = [
  { icon: Award, title: 'Experiencia comprobada' },
  { icon: BadgeCheck, title: 'Tecnicos acreditados OS10' },
  { icon: MapPinned, title: 'Cobertura en distintas ciudades' },
  { icon: Home, title: 'Soluciones para hogares, empresas y comunidades' },
  { icon: ShieldCheck, title: 'Instalacion profesional' },
  { icon: MessagesSquare, title: 'Atencion personalizada' },
  { icon: Headset, title: 'Respuesta tecnica en terreno' },
  { icon: Factory, title: 'Capacidad para recintos industriales' }
];

export const trustPoints = [
  'Tecnicos certificados OS10',
  'Cobertura en distintas ciudades de Chile',
  'Mas de 1.000 actividades mensuales'
];

export const footerServices = [
  'Alarmas',
  'CCTV',
  'Control de acceso',
  'Cercos electricos',
  'Deteccion de incendios',
  'Mantencion'
];

export const ctaLabels = {
  quote: 'Cotizar por WhatsApp',
  quoteNow: 'Cotizar ahora por WhatsApp',
  request: 'Solicitar cotizacion',
  advisor: 'Hablar con un asesor por WhatsApp'
};
