"use client";

import { useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn, container } from "@/lib/utils";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  return (
    <header
      className={cn(
        "border-rule/40 z-50 border-b",
        isOpen
          ? "bg-ground fixed inset-0 overflow-y-auto"
          : cn(
              !reduceMotion && "transition-colors duration-200",
              isScrolled ? "bg-ground/80 backdrop-blur-md" : "bg-ground",
              "sticky top-0",
            ),
      )}
    >
      <nav
        className={cn(
          container,
          "flex items-center justify-between",
          !reduceMotion && "transition-[padding] duration-200",
          isOpen || !isScrolled ? "py-6" : "py-4",
        )}
      >
        <a href="#" className={`font-display text-chalk text-sm ${focusRing}`}>
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-muted font-mono text-sm ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.links.cv}
          download
          className={`text-muted hidden items-center gap-2 font-mono text-sm md:flex ${focusRing}`}
        >
          <Download size={14} />
          CV
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={`text-chalk -mr-3 p-3 md:hidden ${focusRing}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-rule/40 border-t md:hidden">
          <ul className={`${container} flex flex-col py-4`}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-muted block py-3 font-mono text-sm ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.links.cv}
                download
                onClick={() => setIsOpen(false)}
                className={`text-muted flex items-center gap-2 py-3 font-mono text-sm ${focusRing}`}
              >
                <Download size={14} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
