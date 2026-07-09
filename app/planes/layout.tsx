import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programas y Planes',
  description:
    'Tres niveles de acompañamiento psicoterapéutico con la Dra. Patricia Rozo: Essencial (4 sesiones), Vital (8 sesiones) y Quantum (12 sesiones). Explora cada proceso en detalle.',
};

export default function PlanesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
