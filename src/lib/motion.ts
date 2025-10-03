import type { Variants, Transition } from "framer-motion";

/** Transiciones base reutilizables */
export const tFast: Transition = { duration: 0.25, ease: "easeOut" };
export const tBase: Transition = { duration: 0.4, ease: "easeOut" };
export const tSlow: Transition = { duration: 0.6, ease: "easeOut" };

/** Entradas */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: tBase },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show:   { opacity: 1, y: 0, transition: tBase },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0, transition: tBase },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: tBase },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: tFast },
};

/** Stagger helpers */
export const stagger = (each = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren } },
});

export const childUp: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: tFast },
};

/** Hovers comunes */
export const hoverLift: Variants = {
  hover: { y: -5, scale: 1.02, transition: tFast },
};

export const hoverGlow = {
  scale: 1.02,
  boxShadow: "0 0 25px rgba(168, 85, 247, 0.25)",
  transition: tFast,
};

/** Viewport default para entradas on-scroll */
export const onceViewport = { once: true, margin: "-80px" };
