import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8 sm:py-10">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <p className="text-base font-bold gradient-text mb-0.5">Nafeez Ahamed</p>
            <p className="text-slate-500 text-xs">Software Engineer · ASU MS SE · Accenture Alumni</p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: "https://github.com/Heynafeezhere", icon: <GithubIcon size={17} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/nafeez-ahamed/", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
              { href: "mailto:nmoham46@asu.edu", icon: <Mail size={17} />, label: "Email" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="icon-button w-9 h-9"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copy */}
          <p className="text-slate-600 text-xs text-center lg:text-right">
            © {year} Nafeez Ahamed. Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
