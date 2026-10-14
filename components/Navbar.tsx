"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Projets", href: "#projets" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center">
          <span className="flex items-center rounded-xl bg-white px-3 py-2">
            <Image
              src="/ak-mark.png"
              alt="Anass Kerchaoui — Développeur Full-Stack"
              width={1350}
              height={1000}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Changer de thème"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-white/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[15px] font-semibold text-background transition-all duration-200 hover:scale-[1.03] hover:bg-white active:scale-95"
          >
            Me contacter
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-white/30 md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-20 border-t border-white/10 bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-[15px] font-semibold text-background transition-transform active:scale-95"
          >
            Me contacter
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}
