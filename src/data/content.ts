/**
 * Contenido de la landing.
 * Todo el copy vive aquí para que el markup de cada sección quede limpio
 * y el texto se pueda editar (o migrar a un CMS) sin tocar componentes.
 */

export const site = {
  name: 'Wakanda Project',
  title: 'Wakanda Project · Academia de danza afro y urbana para niñas y niños',
  description:
    'Clases de danza afro y urbana para niñas y niños de 4 a 15 años. Disciplina, identidad cultural y comunidad en un espacio seguro. Reserva una clase de prueba.',
  whatsapp: '50600000000',
  email: 'hola@wakandaproject.com',
  instagram: 'https://instagram.com/wakandaproject',
  location: 'Limón, Costa Rica',
} as const;

export const nav = [
  { href: '#proyecto', label: 'El proyecto' },
  { href: '#clases', label: 'Clases' },
  { href: '#galeria', label: 'Galería' },
  { href: '#familias', label: 'Familias' },
  { href: '#preguntas', label: 'Preguntas' },
] as const;

export const hero = {
  eyebrow: 'Danza afro y urbana · 4 a 15 años',
  titleLines: ['Raíces', 'que se', 'mueven'],
  lead: 'Un espacio seguro donde la niñez crece con ritmo, disciplina y orgullo por su cultura.',
  primaryCta: { href: '#inscripcion', label: 'Reserva una clase de prueba' },
  secondaryCta: { href: '#proyecto', label: 'Conoce el proyecto' },
  stickerText: 'Afro · Urbano · Cultura · Comunidad · ',
} as const;

export const rhythms = ['Afro', 'Dancehall', 'Afrobeats', 'Hip-hop', 'Expresión corporal', 'Percusión'] as const;

export const manifesto = {
  label: 'El proyecto',
  statement:
    'Wakanda Project enseña danza afro y urbana a niñas y niños en Limón. Cada ensayo une técnica, trabajo en equipo y orgullo por nuestras raíces.',
  highlights: ['danza', 'disciplina', 'ritmos afro y urbanos'],
  pillars: [
    {
      title: 'Misión',
      text: 'Dar a la niñez una base técnica y rítmica sólida, donde aprendan a desenvolverse en un escenario con seguridad y respeto.',
    },
    {
      title: 'Visión',
      text: 'Construir un espacio en Limón donde las nuevas generaciones bailen conectadas con su identidad y su gente.',
    },
  ],
} as const;

export type ValueIconName = 'identity' | 'discipline' | 'community' | 'confidence';

export const values: ReadonlyArray<{
  icon: ValueIconName;
  title: string;
  text: string;
  tone: 'ochre' | 'earth' | 'sun' | 'cream';
}> = [
  {
    icon: 'identity',
    title: 'Identidad',
    text: 'Bailamos la historia de nuestros pueblos para que cada niña y niño sepa de dónde viene.',
    tone: 'ochre',
  },
  {
    icon: 'discipline',
    title: 'Disciplina',
    text: 'Cada paso se ensaya. Aprenden constancia, puntualidad y a superar sus propios retos.',
    tone: 'earth',
  },
  {
    icon: 'community',
    title: 'Comunidad',
    text: 'Nadie baila solo. El grupo se cuida, se escucha y celebra los logros de todos.',
    tone: 'sun',
  },
  {
    icon: 'confidence',
    title: 'Confianza',
    text: 'Subir al escenario cambia algo por dentro. Ganan voz propia y seguridad en sí mismos.',
    tone: 'cream',
  },
];

export const programs = [
  {
    name: 'Semillas',
    ages: '4–7 años',
    summary: 'Primer contacto con el ritmo a través del juego, la música y la coordinación.',
    rhythms: ['Juego rítmico', 'Afro inicial', 'Percusión corporal'],
    schedule: 'Sábados · 9:00',
    featured: false,
  },
  {
    name: 'Raíces',
    ages: '8–11 años',
    summary: 'Técnica de base, coreografías grupales y primeras presentaciones en público.',
    rhythms: ['Afro', 'Dancehall', 'Hip-hop'],
    schedule: 'Martes y jueves · 16:00',
    featured: true,
  },
  {
    name: 'Tribu',
    ages: '12–15 años',
    summary: 'Creación coreográfica, liderazgo y montaje de piezas para festivales.',
    rhythms: ['Afrobeats', 'Urbano', 'Composición'],
    schedule: 'Lunes y miércoles · 17:00',
    featured: false,
  },
] as const;

export const quote = {
  text: 'Un niño inculcado en su cultura nunca olvidará sus raíces.',
} as const;

export const families = {
  label: 'Para las familias',
  title: 'Un lugar seguro para crecer',
  points: [
    {
      title: 'Grupos pequeños',
      text: 'Máximo 15 por grupo para que cada niña y niño reciba atención.',
    },
    {
      title: 'Profes formados',
      text: 'Instructores con experiencia en danza y trabajo con la niñez.',
    },
    {
      title: 'Familias presentes',
      text: 'Muestras abiertas cada trimestre y comunicación directa por WhatsApp.',
    },
  ],
  testimonial: {
    text: 'Mi hija llegaba tímida y ahora es la primera en pedir pasar al frente. Volvió a casa hablando de África, de Limón y de su abuela.',
    author: 'Mamá de Ámbar, grupo Raíces',
  },
} as const;

export const enroll = {
  label: 'Inscripción',
  title: 'Tu primera clase es gratis',
  lead: 'Déjanos tus datos y te escribimos por WhatsApp para coordinar el día y el grupo ideal.',
  submitLabel: 'Reservar clase de prueba',
  successMessage: 'Listo. Abrimos WhatsApp con tu mensaje para confirmar la clase.',
} as const;
