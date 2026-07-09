export interface PlanColor {
  primario: string;
  claro: string;
  oscuro: string;
  texto: string;
}

export interface ParaQuienItem {
  titulo: string;
  desc: string;
}

export interface Fase {
  num: string;
  semana: string;
  titulo: string;
  desc: string;
}

export interface Entregable {
  titulo: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Plan {
  id: string;
  nivel: string;
  nombre: string;
  tagline: string;
  badge: string;
  sesiones: number;
  semanas: number;
  duracion: string;
  precioTotal: number;
  precioSesion: number;
  color: PlanColor;
  destacado: boolean;
  incluye: string[];
  paraQuien: ParaQuienItem[];
  fases: Fase[];
  entregables: Entregable[];
  faq: FaqItem[];
  ctaTexto: string;
  ctaBoton: string;
}

export const PLANES: Plan[] = [
  {
    id: 'essencial',
    nivel: 'Nivel I',
    nombre: 'Essencial',
    tagline: 'Primer paso al bienestar',
    badge: 'Intervención focal',
    sesiones: 4,
    semanas: 4,
    duracion: "60'",
    precioTotal: 730000,
    precioSesion: 200000,
    color: {
      primario: '#2D5D5A',
      claro: '#E4EDEB',
      oscuro: '#1E423F',
      texto: '#1E423F',
    },
    destacado: false,
    incluye: [
      '4 sesiones individuales de 60 min',
      'Herramientas de trabajo intersesión',
      'Nota de cierre del terapeuta',
      'Orientación de continuidad',
      'Pago en dos momentos disponible',
    ],
    paraQuien: [
      { titulo: 'Atraviesas un momento de quiebre', desc: 'Una pérdida, una separación, un cambio de vida que te desestabilizó y necesita ser procesado con acompañamiento.' },
      { titulo: 'Sientes ansiedad o estrés desbordado', desc: 'El cuerpo y la mente empezaron a señalar sus límites y necesitas herramientas concretas, ya.' },
      { titulo: 'Quieres saber si la terapia es para ti', desc: 'Nunca has consultado y prefieres empezar con un compromiso acotado antes de un proceso más extenso.' },
      { titulo: 'Tienes un objetivo específico y claro', desc: 'Sabes exactamente qué quieres trabajar y buscas un espacio clínico eficiente para abordarlo.' },
    ],
    fases: [
      { num: 'I', semana: 'Semana 1 · Evaluación', titulo: 'Formulación del problema', desc: 'Escucha clínica profunda y construcción conjunta de qué ocurre, cómo se mantiene y cuál es el objetivo real. Al cerrar esta sesión ya tienes una explicación articulada — y eso solo produce alivio.' },
      { num: 'II', semana: 'Semana 2 · Intervención', titulo: 'Trabajo en el núcleo del malestar', desc: 'Intervención directa con herramientas de tercera generación (ACT, TCC, somático) — elegidas para ti, no para un protocolo genérico.' },
      { num: 'III', semana: 'Semana 3 · Consolidación', titulo: 'Herramientas para la autonomía', desc: 'Consolidas lo trabajado y te llevas recursos que puedes activar solo: protocolos de regulación, rutinas de anclaje, herramientas de clarificación.' },
      { num: 'IV', semana: 'Semana 4 · Cierre', titulo: 'Integración y proyección', desc: 'No es un repaso — es un encuentro de integración. Se revisa el recorrido, se consolidan los cambios y se define el siguiente paso. Nunca se cierra sin dirección.' },
    ],
    entregables: [
      { titulo: 'Comprensión articulada', desc: 'Una explicación clara de qué ocurrió y por qué — en tu lenguaje, no en el del clínico.' },
      { titulo: 'Herramientas de regulación activas', desc: 'Recursos que ya sabes usar — practicados durante el proceso y listos para la vida autónoma.' },
      { titulo: 'Cambio observable en tu situación', desc: 'Una transformación real en lo que motivó la consulta, verificable al momento del cierre.' },
      { titulo: 'Nota de cierre del terapeuta', desc: 'Una síntesis escrita de tu recorrido completo, entregada como documento de referencia.' },
    ],
    faq: [
      { q: '¿Necesito haber hecho terapia antes?', a: 'No. El modelo es adecuado tanto para quienes nunca han consultado como para quienes tienen recorrido previo. Lo que se requiere es disposición genuina. El proceso no reemplaza tratamientos médicos o psiquiátricos cuando estos son necesarios.' },
      { q: '¿Qué pasa si cuatro sesiones no son suficientes?', a: 'Es completamente válido. La sesión de cierre incluye orientación clara sobre si conviene continuar y en qué formato. No se realiza ningún cierre sin dirección — eso es un compromiso central del proceso.' },
      { q: '¿Presencial o virtual?', a: 'Ambas modalidades están disponibles. La virtualidad no reduce la profundidad del trabajo cuando el encuadre clínico y el enfoque son sólidos.' },
      { q: '¿Puedo pagar en dos momentos?', a: 'Sí. El pago en dos momentos está disponible. Consúltalo antes de comenzar para acordar el esquema que mejor se adapte a tu situación.' },
    ],
    ctaTexto: '¿Listo para dar el primer paso?',
    ctaBoton: 'Agendar Essencial',
  },
  {
    id: 'vital',
    nivel: 'Nivel II',
    nombre: 'Vital',
    tagline: 'Enfoque · Dirección · Propósito personal',
    badge: 'Propósito y dirección',
    sesiones: 8,
    semanas: 8,
    duracion: "60'",
    precioTotal: 1471000,
    precioSesion: 200000,
    color: {
      primario: '#C2724B',
      claro: '#F4E6DB',
      oscuro: '#8A4A2C',
      texto: '#8A4A2C',
    },
    destacado: true,
    incluye: [
      '8 sesiones individuales de 60 min',
      'Documento Tu Propósito Vital® sellado',
      'Mapa de identidad personal',
      'Guía de práctica 30 días personalizada',
      'Acompañamiento directo entre sesiones',
      'Nota de cierre del terapeuta',
    ],
    paraQuien: [
      { titulo: 'Sientes que perdiste el rumbo', desc: "Las cosas 'van bien' en el papel, pero algo se siente vacío o desalineado. Sabes que quieres algo diferente, pero no sabes qué." },
      { titulo: 'Estás en un momento de transición', desc: 'Cambio de carrera, de ciudad, de relación o de etapa de vida — y necesitas más que intuición para navegar lo que viene.' },
      { titulo: 'Tomas decisiones desde el miedo o la duda', desc: 'Las decisiones importantes se traban o dependen demasiado de la aprobación ajena. Quieres un criterio interno claro.' },
      { titulo: 'Quieres un proyecto consciente de vida', desc: 'No solo resolver un problema puntual — quieres construir una dirección real, con tus valores y tus talentos como base.' },
    ],
    fases: [
      { num: 'I–II', semana: 'Semanas 1–2 · Exploración', titulo: 'Evaluación y mapa de partida', desc: 'Escucha clínica profunda, identificación de patrones y construcción del mapa de situación actual — valores, creencias, bloqueos y recursos disponibles.' },
      { num: 'III–VI', semana: 'Semanas 3–6 · Trabajo central', titulo: 'Identidad, propósito y decisiones', desc: 'El núcleo del proceso: trabajo con la identidad personal, clarificación del propósito y construcción de un criterio interno para tomar decisiones desde lo propio.' },
      { num: 'VII–VIII', semana: 'Semanas 7–8 · Cierre', titulo: 'Integración y proyección', desc: 'Consolidación de los cambios generados, entrega de entregables y definición clara del siguiente paso — ya sea continuar de forma autónoma o profundizar con el Quantum®.' },
    ],
    entregables: [
      { titulo: 'Tu Propósito Vital® — documento sellado', desc: 'Una declaración de propósito construida durante el proceso, formulada en tus propias palabras y entregada como documento permanente.' },
      { titulo: 'Mapa de identidad personal', desc: 'Una representación visual de quién eres — valores, talentos, patrones y recursos — como punto de referencia para decisiones futuras.' },
      { titulo: 'Guía de práctica 30 días personalizada', desc: 'Un plan concreto para los primeros 30 días después del proceso — para que el cambio no se quede en el consultorio.' },
      { titulo: 'Acompañamiento directo entre sesiones', desc: 'Acceso a mensajería con el terapeuta durante todo el proceso. Para preguntas, momentos de duda o decisiones que no pueden esperar.' },
    ],
    faq: [
      { q: '¿En qué se diferencia del coaching o la terapia convencional?', a: 'El Vital no se centra en hablar del pasado de forma indefinida ni en motivación superficial. Integra acompañamiento psicoterapéutico, enfoque estratégico y entregables concretos — con estructura clínica, dirección y resultados observables.' },
      { q: '¿Qué pasa si ocho sesiones no son suficientes?', a: 'La sesión de cierre incluye orientación clara. Si el proceso revela que la situación requiere mayor profundidad, la continuidad hacia el Quantum® es directa — sin empezar desde cero, porque todo lo construido en el Vital alimenta el siguiente proceso.' },
      { q: '¿Necesito haber hecho el Essencial antes?', a: 'No es un requisito. El Vital es adecuado tanto para quienes vienen del Essencial como para quienes comienzan aquí. Lo que se evalúa es el momento y la disposición — no el recorrido previo.' },
      { q: '¿Presencial o virtual?', a: 'Ambas modalidades están disponibles. La virtualidad no reduce la profundidad del trabajo cuando el encuadre y el enfoque son sólidos.' },
    ],
    ctaTexto: '¿Listo para encontrar tu dirección?',
    ctaBoton: 'Iniciar Vital',
  },
  {
    id: 'quantum',
    nivel: 'Nivel III',
    nombre: 'Quantum',
    tagline: 'El nivel más profundo',
    badge: 'Reestructuración integral',
    sesiones: 12,
    semanas: 12,
    duracion: "60'",
    precioTotal: 2229000,
    precioSesion: 200000,
    color: {
      primario: '#A2762F',
      claro: '#F1E8D4',
      oscuro: '#6B4E1C',
      texto: '#6B4E1C',
    },
    destacado: false,
    incluye: [
      '12 sesiones individuales de 60 min',
      'Propósito Quantum® sellado',
      'Mapa de identidad Quantum® expandido',
      'Plan de vida — 12 meses',
      'Guía de práctica 60 días personalizada',
      'Mensajería prioritaria 12 semanas',
      'Nota de cierre y síntesis del proceso',
    ],
    paraQuien: [
      { titulo: 'Sientes que algo profundo no cambia', desc: 'Has hecho trabajo personal antes, pero ciertos patrones siguen apareciendo. Sabes que hay capas más profundas por explorar.' },
      { titulo: 'Quieres reestructurar tu identidad', desc: 'No se trata de resolver un problema — se trata de preguntarse quién quieres ser y construir desde ahí hacia adelante.' },
      { titulo: 'Te preguntas por tu legado', desc: 'La pregunta de qué quieres dejar en el mundo ya no puede esperar. El impacto más allá de uno mismo empieza a importar.' },
      { titulo: 'Estás listo para el trabajo más profundo', desc: 'Tienes disposición genuina para un proceso exigente, sostenido y sin atajos. Sabes que lo más importante toma tiempo.' },
    ],
    fases: [
      { num: 'I–III', semana: 'Semanas 1–3 · Exploración profunda', titulo: 'Evaluación, mapa y formulación', desc: 'Construcción del mapa completo de identidad — creencias, patrones, relaciones, recursos y zonas de sombra. La base de todo el trabajo que sigue.' },
      { num: 'IV–VIII', semana: 'Semanas 4–8 · Trabajo central', titulo: 'Reestructuración y trabajo somático', desc: 'Integración de la sombra, reestructuración de creencias nucleares y trabajo somático profundo. La memoria emocional vive en el cuerpo — y el Quantum trabaja con ella directamente.' },
      { num: 'IX–XI', semana: 'Semanas 9–11 · Propósito y legado', titulo: 'Dirección, contribución e impacto', desc: 'El único nivel de la familia que trabaja con la pregunta del legado y el impacto más allá de uno mismo. La dimensión más expansiva del propósito humano.' },
      { num: 'XII', semana: 'Semana 12 · Cierre ceremonial', titulo: 'Compromiso y proyección', desc: 'La sesión de cierre del Quantum es un acto de reconocimiento — no solo una revisión. Una manera de marcar con claridad que algo cambió de forma permanente.' },
    ],
    entregables: [
      { titulo: 'Propósito Quantum® — documento sellado', desc: 'La versión más completa y profunda de tu propósito personal, construida a lo largo de doce semanas de trabajo.' },
      { titulo: 'Mapa de identidad Quantum® expandido', desc: 'Incluye dimensiones de sombra, somáticas y de legado que los niveles anteriores no alcanzan.' },
      { titulo: 'Plan de vida — 12 meses', desc: 'Un plan concreto y personalizado para el año siguiente al proceso, construido sobre los cambios generados.' },
      { titulo: 'Guía de práctica 60 días personalizada', desc: 'El doble de tiempo que el Vital, con práctica más profunda para sostener la transformación en lo cotidiano.' },
      { titulo: 'Mensajería prioritaria — 12 semanas', desc: 'El acompañamiento más completo entre sesiones. Para los momentos que no pueden esperar a la próxima semana.' },
    ],
    faq: [
      { q: '¿Se requiere haber hecho el Vital® antes?', a: 'No es un requisito absoluto, pero sí se recomienda contar con un recorrido terapéutico previo equivalente. En la consulta de evaluación inicial se determina si el proceso es adecuado para tu momento específico.' },
      { q: '¿En qué se diferencia del Vital® más allá de las sesiones?', a: 'El Quantum trabaja la integración de la sombra, la dimensión somática profunda, la pregunta del legado y un nivel de reestructuración de creencias que solo doce semanas permiten construir. Es cualitativamente diferente — no solo más largo.' },
      { q: '¿Es posible acordar el pago en etapas?', a: 'Sí. Dada la magnitud de la inversión, se puede acordar un esquema en dos o tres momentos del proceso. Consúltalo directamente antes de comenzar.' },
      { q: '¿Las sesiones pueden ser virtuales?', a: 'Sí. Aunque se recomienda la presencialidad para las sesiones de trabajo somático, el proceso completo puede desarrollarse de forma virtual cuando la situación lo requiera.' },
    ],
    ctaTexto: '¿Listo para el trabajo más profundo?',
    ctaBoton: 'Comenzar Quantum',
  },
];

export const COMPARATIVA = [
  { label: 'Sesiones individuales 60 min', essencial: '4', vital: '8', quantum: '12' },
  { label: 'Herramientas intersesión', essencial: '✓', vital: '✓', quantum: '✓' },
  { label: 'Nota de cierre del terapeuta', essencial: '✓', vital: '✓', quantum: '✓' },
  { label: 'Documento de propósito sellado', essencial: '—', vital: '✓', quantum: '✓' },
  { label: 'Mapa de identidad personal', essencial: '—', vital: '✓', quantum: '✓' },
  { label: 'Acompañamiento entre sesiones', essencial: '—', vital: '✓', quantum: '✓' },
  { label: 'Guía de práctica personalizada', essencial: '—', vital: '30 días', quantum: '60 días' },
  { label: 'Plan de vida 12 meses', essencial: '—', vital: '—', quantum: '✓' },
  { label: 'Trabajo somático profundo', essencial: '—', vital: '—', quantum: '✓' },
  { label: 'Mensajería prioritaria', essencial: '—', vital: '—', quantum: '12 semanas' },
  { label: 'Pago en etapas', essencial: '2 momentos', vital: '2 momentos', quantum: '2–3 momentos' },
];
