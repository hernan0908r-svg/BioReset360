'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type StaggerContainerProps = {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
};

// prefers-reduced-motion se maneja vía CSS (.anim-reveal en globals.css)
// para mantener el render idéntico entre servidor y cliente.
export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  className = '',
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      className={`anim-reveal ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}) {
  const directions = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
    none: { x: 0, y: 0 },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={`anim-reveal ${className}`}>
      {children}
    </motion.div>
  );
}
