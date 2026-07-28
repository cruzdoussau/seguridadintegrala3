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
  RadioTower,
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
  { label: 'Soluciones', href: '#kits-instalacion' },
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
    icon: RadioTower,
    title: 'Telecomunicaciones',
    description:
      'Instalacion y ordenamiento de redes, cableado estructurado, enlaces, puntos de datos y soporte para conectividad.'
  },
  {
    icon: Wrench,
    title: 'Mantencion y soporte tecnico',
    description:
      'Servicios tecnicos en terreno para reparacion, instalacion y mantencion de sistemas electronicos de seguridad.'
  }
];

export const installationKits = [
  {
    icon: AlarmClockCheck,
    name: 'Alarma WiFi hogar',
    badge: 'Dahua WiFi',
    summary:
      'Solucion inalambrica para casas, departamentos y oficinas pequenas, basada en kits WiFi tipo Dahua.',
    includes: [
      'Panel de alarma WiFi y app movil',
      'Sensores magneticos y PIR segun puntos criticos',
      'Sirena, bateria y puesta en marcha',
      'Instalacion, pareo de dispositivos y pruebas de disparo',
      'Capacitacion para armado, desarmado y notificaciones'
    ]
  },
  {
    icon: AlarmClockCheck,
    name: 'Alarma profesional WiFi + 4G',
    badge: 'Dahua o equivalente',
    summary:
      'Solucion de alarma inalambrica con respaldo de comunicacion GSM/3G/4G para negocios, bodegas y oficinas.',
    includes: [
      'Panel AX PRO o equivalente con comunicacion dual',
      'Contactos magneticos, sensores PIR y controles remotos',
      'Sirena interior/exterior y bateria de respaldo',
      'Programacion de zonas, usuarios y alertas',
      'Instalacion y prueba completa de evento'
    ]
  },
  {
    icon: Flame,
    name: 'Deteccion incendio inalambrica',
    badge: 'Ajax FireProtect',
    summary:
      'Solucion para deteccion temprana con sensores inalambricos de humo, calor o monoxido segun riesgo del recinto.',
    includes: [
      'Sensores de humo/calor/CO segun requerimiento',
      'Boton manual inalambrico de emergencia',
      'Sirena integrada o asociada al sistema',
      'Ubicacion tecnica de puntos de deteccion',
      'Configuracion de alertas y pruebas con usuario'
    ]
  },
  {
    icon: Camera,
    name: 'Camara IP WiFi exterior',
    badge: '2MP, IR y audio',
    summary:
      'Solucion puntual para vigilancia exterior/interior con camara IP WiFi, vision nocturna y audio bidireccional.',
    includes: [
      'Camara IP WiFi tipo bullet o domo',
      'Fuente, soporte y proteccion de conexion',
      'Configuracion de app y acceso remoto',
      'Ajuste de angulo, zonas y notificaciones',
      'Prueba de vision nocturna y audio'
    ]
  },
  {
    icon: Camera,
    name: 'CCTV 4 camaras Full HD',
    badge: 'XVR/DVR + cableado',
    summary:
      'Solucion cableada para vigilancia continua en hogar, local comercial o comunidad, con grabacion local.',
    includes: [
      'XVR/DVR de 4 canales o superior',
      '4 camaras Full HD interiores/exteriores',
      'Disco duro, fuentes, cables y conectores',
      'Canalizacion EMT/conduit si el proyecto lo requiere',
      'App movil, respaldo de grabacion y capacitacion'
    ]
  },
  {
    icon: Fingerprint,
    name: 'Control de acceso facial/huella',
    badge: 'Dahua o equivalente',
    summary:
      'Solucion para administrar ingreso de personas con reconocimiento facial, huella, tarjeta o clave.',
    includes: [
      'Terminal facial/huella con pantalla',
      'Chapa electrica, electroiman o cerradura compatible',
      'Fuente, boton de salida y accesorios',
      'Alta de usuarios, horarios y permisos',
      'Instalacion en puerta y pruebas de apertura'
    ]
  },
  {
    icon: Zap,
    name: 'Cerco electrico 50 metros',
    badge: 'Perimetro 24/7',
    summary:
      'Solucion perimetral residencial, comunitaria o industrial basada en kits de energizador y accesorios por metraje.',
    includes: [
      'Energizador dimensionado por metros lineales',
      'Postes, aisladores, tensores y cable acerado',
      'Sirena, bateria, puesta a tierra y letreros',
      'Montaje sobre muro o estructura existente',
      'Pruebas de voltaje e integracion opcional con alarma'
    ]
  },
  {
    icon: Flame,
    name: 'Incendio convencional 4 zonas',
    badge: 'Central + detectores',
    summary:
      'Solucion cableada para locales, bodegas y edificios pequenos con central convencional ampliable.',
    includes: [
      'Central convencional de 4 zonas o superior',
      'Detectores de humo con base y pulsador manual',
      'Sirena interior/exterior y baterias de respaldo',
      'Cableado, canalizacion y rotulacion de zonas',
      'Pruebas funcionales y entrega operativa'
    ]
  }
];

export const metrics = [
  { icon: CalendarCheck2, value: 'Desde 2010', label: 'trayectoria comprobada' },
  { icon: Users, value: '25', label: 'tecnicos en terreno' },
  { icon: Building2, value: '5', label: 'personas en equipo administrativo' },
  { icon: ClipboardCheck, value: '+1.000', label: 'actividades mensuales' },
  { icon: RadioTower, value: 'Redes', label: 'telecomunicaciones y conectividad' },
  { icon: MapPinned, value: '7 zonas', label: 'cobertura operativa en Chile' }
];

export const benefits = [
  { icon: Award, title: 'Experiencia comprobada' },
  { icon: BadgeCheck, title: 'Equipo tecnico especializado' },
  { icon: MapPinned, title: 'Cobertura en distintas ciudades' },
  { icon: Home, title: 'Soluciones para hogares, empresas y comunidades' },
  { icon: ShieldCheck, title: 'Instalacion profesional' },
  { icon: MessagesSquare, title: 'Atencion personalizada' },
  { icon: Headset, title: 'Respuesta tecnica en terreno' },
  { icon: Factory, title: 'Capacidad para recintos industriales' }
];

export const trustPoints = [
  'Equipo tecnico especializado',
  'Cobertura en distintas ciudades de Chile',
  'Mas de 1.000 actividades mensuales'
];

export const footerServices = [
  'Alarmas',
  'CCTV',
  'Control de acceso',
  'Cercos electricos',
  'Deteccion de incendios',
  'Telecomunicaciones',
  'Mantencion'
];

export const ctaLabels = {
  quote: 'Cotizar por WhatsApp',
  quoteNow: 'Cotizar ahora por WhatsApp',
  request: 'Solicitar cotizacion',
  kit: 'Cotizar solucion instalada',
  advisor: 'Hablar con un asesor por WhatsApp'
};
