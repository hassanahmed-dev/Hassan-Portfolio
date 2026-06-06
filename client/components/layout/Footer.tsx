"use client";

import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/hassanahmed-dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hassanahmed-dev", label: "LinkedIn" },
];

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <a
              href="#hero"
              className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]"
            >
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Hassan Khan
              </span>
            </a>
            <p className="mt-4 text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Full-Stack Developer crafting scalable web experiences with modern
              technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">
            &copy; {new Date().getFullYear()} Hassan Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
