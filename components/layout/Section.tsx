import type { ReactNode } from "react";
import { cn, container } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionProps {
  id?: string;
  className?: string;
  reveal?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  className,
  reveal = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div className={container}>
        {reveal ? <Reveal>{children}</Reveal> : children}
      </div>
    </section>
  );
}
