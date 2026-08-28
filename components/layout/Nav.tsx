import { Download } from "lucide-react";
import { site } from "@/data/site";
import { container } from "@/lib/utils";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-rule/40 bg-ground sticky top-0 z-50 border-b">
      <nav className={`${container} flex items-center justify-between py-6`}>
        <a href="#" className={`font-display text-chalk text-sm ${focusRing}`}>
          {site.name}
        </a>

        <ul className="flex items-center gap-8">
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
          className={`text-muted flex items-center gap-2 font-mono text-sm ${focusRing}`}
        >
          <Download size={14} />
          CV
        </a>
      </nav>
    </header>
  );
}
