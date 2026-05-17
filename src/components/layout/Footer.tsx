import { Code2, Link2, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const { contact } = site;

  return (
    <footer id="contact" className="border-t border-offwhite/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-offwhite">{site.brand}</p>
          <p className="mt-1 font-mono text-xs text-offwhite/50">
            Open to technical roles
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 font-mono text-sm text-offwhite/80 transition-colors hover:text-emerald-400"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-offwhite/80 transition-colors hover:text-emerald-400"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-offwhite/80 transition-colors hover:text-emerald-400"
          >
            <Link2 className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
