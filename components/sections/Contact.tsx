import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export function Contact() {
  return (
    <Section id="contact">
      <p className="text-muted font-mono text-sm">04 / contact</p>
      <h2 className="font-display text-chalk mt-4 text-2xl">Get in touch</h2>

      <p className="text-muted mt-6 max-w-xl font-sans text-base">
        {site.about}
      </p>

      <ul className="mt-12 flex flex-wrap gap-8">
        <li>
          <a
            href={`mailto:${site.email}`}
            className={`text-chalk flex items-center gap-2 font-mono text-sm ${focusRing}`}
          >
            <Mail size={16} />
            {site.email}
          </a>
        </li>
        <li>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-chalk flex items-center gap-2 font-mono text-sm ${focusRing}`}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </li>
        <li>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-chalk flex items-center gap-2 font-mono text-sm ${focusRing}`}
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </li>
      </ul>
    </Section>
  );
}
