"use client";

import { Children, type ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { fadeUp, slideUp, stagger as staggerVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  /** Above-the-fold content: entrance uses transform only, never opacity,
   * so it's visible at first paint instead of hidden until hydration. */
  preserveOpacity?: boolean;
}

export function Reveal({
  children,
  className,
  stagger,
  preserveOpacity,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const itemVariant = preserveOpacity ? slideUp : fadeUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerVariants}
      >
        {Children.map(children, (child) => (
          <m.div variants={itemVariant}>{child}</m.div>
        ))}
      </m.div>
    );
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={itemVariant}
    >
      {children}
    </m.div>
  );
}
