// FAQ del home — fuente única para la sección y el JSON-LD (FAQPage).
export interface HomeFaq {
  q: string;
  a: string;
}

export const HOME_FAQS: HomeFaq[] = [
  {
    q: '¿Cuál es el enfoque de la Dra. Rozo?',
    a: 'El Método Enfoque 360 es un proceso de psicología clínica con estructura, dirección y cierre real. No es terapia indefinida: cada nivel — Essencial, Vital o Quantum — tiene fases, entregables y un final concreto definidos desde el inicio, diseñados y ejecutados personalmente por la Dra. Rozo.',
  },
  {
    q: '¿Cómo agendo una consulta?',
    a: 'Puedes adquirir tu plan directamente en nuestra sección de precios y ser redirigido al checkout seguro. La Dra. Rozo se pondrá en contacto contigo en las 24 horas siguientes para coordinar tu primera sesión.',
  },
  {
    q: '¿Aceptan pago en cuotas?',
    a: 'Sí. Todos los planes ofrecen la posibilidad de pago en dos o tres momentos. Consúltalo al adquirir tu plan para acordar el esquema más adecuado para ti.',
  },
  {
    q: '¿Cuántas sesiones necesito para ver resultados?',
    a: 'Depende de tu momento vital. Algunos consultantes resuelven crisis puntuales en el Plan Essencial (4 sesiones). Otros buscan transformaciones más profundas que requieren el Vital o el Quantum. El cuestionario te orienta sin compromiso.',
  },
  {
    q: '¿Las sesiones son presenciales o virtuales?',
    a: 'Ambas modalidades están disponibles. La virtualidad no reduce la profundidad del trabajo cuando el encuadre clínico y el enfoque son sólidos.',
  },
];
