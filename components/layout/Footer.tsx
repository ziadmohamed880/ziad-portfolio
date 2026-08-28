import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { container } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export function Footer() {
  return (
    <footer className="border-rule/40 border-t">
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-4 py-8`}
      >
        <p className="text-muted font-mono text-xs">
          {site.name} — {new Date().getFullYear()}
        </p>

        <ul className="flex items-center gap-2">
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className={`text-muted block p-3 ${focusRing}`}
            >
              <Mail size={20} />
            </a>
          </li>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`text-muted block p-3 ${focusRing}`}
            >
              <GithubIcon size={20} />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`text-muted block p-3 ${focusRing}`}
            >
              <LinkedinIcon size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
