import { type Variants, type Transition } from 'framer-motion';

/**
 * Transitions constants for consistent feel
 */
export const SMOOTH_TRANSITION: Transition = { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] };

/**
 * Staggered container variants
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

/**
 * Slower staggered for premium feel
 */
export const slowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Encore plus calme (premium++)
    },
  },
};

/**
 * Individual item entrance variants comme pour le hero
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: SMOOTH_TRANSITION
  },
};

/**
 * Viewport configuration for whileInView 
 */
export const defaultViewport = { once: true, amount: 0.1 };

/**
 * Scroll reveal variants (fade + slide up) 
 */
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: SMOOTH_TRANSITION
  },
};

/**
 * Stat card hover variants 
 */
export const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: SMOOTH_TRANSITION 
  },
  hover: { 
    y: -10,
    scale: 1.02,
    borderColor: "rgba(251, 191, 36, 0.8)", // amber-400
    backgroundColor: "rgba(251, 191, 36, 0.05)",
    boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.1), 0 10px 10px -5px rgba(251, 191, 36, 0.04)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

/**
 * Badge animation pour skill technologies 
 */
export const badgeVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};
