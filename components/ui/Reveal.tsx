"use client";

import { Children, type ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { fadeUp, stagger as staggerVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function Reveal({ children, className, stagger }: RevealProps) {
  const reduceMotion = useReducedMotion();

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
          <m.div variants={fadeUp}>{child}</m.div>
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
      variants={fadeUp}
    >
      {children}
    </m.div>
  );
}
