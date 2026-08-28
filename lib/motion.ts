import type { Variants } from "motion/react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
} as const;

export const staggerInterval = 0.08;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease },
  },
};

// Transform-only, no opacity — for above-the-fold content where hiding
// behind opacity: 0 would delay LCP until after hydration.
export const slideUp: Variants = {
  hidden: { y: 16 },
  visible: {
    y: 0,
    transition: { duration: duration.base, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerInterval },
  },
};
