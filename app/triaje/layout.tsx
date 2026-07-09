import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuestionario de Triaje Emocional',
  description:
    'Cinco preguntas breves para identificar qué programa BioReset360 resuena mejor con tu momento actual. Confidencial y sin costo.',
};

export default function TriajeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
