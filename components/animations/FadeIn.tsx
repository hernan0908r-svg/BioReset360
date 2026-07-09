'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  amount?: 'some' | 'all' | number;
};

// prefers-reduced-motion se maneja vía CSS (.anim-reveal en globals.css)
// para mantener el render idéntico entre servidor y cliente.
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  className = '',
  amount = 'some',
}: FadeInProps) {
  const directions = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={`anim-reveal ${className}`}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
