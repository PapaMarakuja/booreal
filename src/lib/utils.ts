import { ClassValue, clsx } from "clsx";
import { MotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Sistema de animação Booreal
export const booreal = {
  // Duração padrão para transições
  duration: {
    fast: 0.2,
    medium: 0.5,
    slow: 0.8,
  },

  // Tipos de transição
  transition: {
    // Transição suave para elementos de UI
    smooth: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1], // Curva de easing personalizada
      duration: 0.5,
    },
    // Transição com efeito de mola para elementos interativos
    spring: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      mass: 1,
    },
    // Transição com efeito de mola mais suave para elementos maiores
    softSpring: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      mass: 1.2,
    },
  },

  // Variantes de animação
  variants: {
    // Fade in/out com movimento suave para cima/baixo
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    // Fade in/out com movimento suave para baixo/cima
    fadeInDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    // Fade in/out com escala
    fadeScale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    // Animação de entrada da esquerda
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    // Animação de entrada da direita
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    // Animação de rotação suave
    rotate: {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0 },
    },
    // Animação de pulsação para chamar atenção
    pulse: {
      hidden: { opacity: 0.8, scale: 1 },
      visible: {
        opacity: 1,
        scale: [1, 1.05, 1],
        transition: {
          scale: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }
        }
      },
    },
  },

  // Função para criar staggered children
  stagger: (staggerChildren = 0.1, delayChildren = 0) => ({
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }),
};

// Variantes legadas para compatibilidade
export const variantsScale = booreal.variants.fadeScale;
export const variantsY = booreal.variants.fadeInUp;