"use client";

import { useEffect, useRef, useState } from "react";
import { animate, m, useInView, useReducedMotion } from "motion/react";
import { duration, ease } from "@/lib/motion";

interface MetricBarProps {
  label: string;
  from: number;
  to: number;
  className?: string;
}

export function MetricBar({ label, from, to, className }: MetricBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : from);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(from, to, {
      duration: duration.slow,
      ease,
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, from, to]);

  const basePercent = from * 100;
  const deltaPercent = (to - from) * 100;

  return (
    <div ref={ref} className={className}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-muted font-mono text-xs">{label}</span>
        <span className="text-chalk font-mono text-lg">{value.toFixed(2)}</span>
      </div>

      <div className="bg-rule/20 relative mt-2 h-1 w-full">
        <div
          className="bg-muted/40 absolute inset-y-0 left-0"
          style={{ width: `${basePercent}%` }}
        />
        <div
          className="absolute inset-y-0"
          style={{ left: `${basePercent}%`, width: `${deltaPercent}%` }}
        >
          <m.div
            className="bg-signal h-full w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView || reduceMotion ? 1 : 0 }}
            transition={{ duration: duration.slow, ease }}
          />
        </div>
      </div>
    </div>
  );
}
