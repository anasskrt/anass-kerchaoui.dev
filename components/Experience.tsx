"use client";

import { useEffect, useRef, useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

const EXPERIENCES = [
  {
    role: "Développeur Full-Stack (Stage)",
    company: "ENSC — École Nationale Supérieure de Cognitique",
    period: "Mai 2023 — Juin 2024",
    description:
      "Migration d'une application de simplification textuelle de Python vers une application web Django. Maintenance d'un environnement Moodle (PHP) et définition de la stratégie de migration associée.",
    swatch: "var(--panel-slate-to)",
    gradient:
      "radial-gradient(50% 50% at 88% 15%, color-mix(in srgb, var(--panel-slate-to) 55%, transparent) 0%, transparent 72%)",
  },
  {
    role: "Développeur Full-Stack (Alternance)",
    company: "École Nationale de la Magistrature",
    period: "Sept. 2023 — Sept. 2024",
    description:
      "Développement d'une application web de formation utilisée par 1 300 juristes, composée de plusieurs modules ludiques. Conception de l'architecture Angular / Java et déploiement sur serveur Nginx. Sécurisation des données confidentielles (firewall, captchas) et UX conforme au RGAA 4.0 pour des utilisateurs avec troubles cognitifs.",
    swatch: "var(--panel-to)",
    gradient:
      "radial-gradient(50% 50% at 88% 15%, color-mix(in srgb, var(--panel-to) 55%, transparent) 0%, transparent 72%)",
  },
  {
    role: "Développeur Full-Stack (Alternance)",
    company: "Expertalya",
    period: "Nov. 2024 — Nov. 2026",
    description:
      "Développement d'un CRM sur mesure centralisant la gestion de plus de 400 clients pour 40 collaborateurs, avec des données sensibles. Architecture full-stack Next.js / NestJS autour d'une API REST, contrôle des accès et persistance sécurisée. Mise en place d'une pipeline CI/CD avec tests end-to-end Playwright et conteneurisation Docker.",
    swatch: "var(--brand)",
    gradient:
      "radial-gradient(50% 50% at 88% 15%, color-mix(in srgb, var(--panel-clay-to) 55%, transparent) 0%, transparent 72%)",
  },
];

const COUNT = EXPERIENCES.length;

// Pin geometry, expressed in multiples of one viewport height (1 = 100vh).
// BUFFER adds a dead zone at the start and end of the pin so the hand-off
// between normal vertical scroll and the horizontal takeover feels eased
// in and out rather than snapping the instant it pins.
const BUFFER = 0.5;
const PANEL_TRAVEL = 1.35; // vh-equivalents of scroll per panel transition — higher = slower
const ACTIVE_SPAN = (COUNT - 1) * PANEL_TRAVEL;
const PIN_SPAN = 2 * BUFFER + ACTIVE_SPAN;
const BUFFER_FRACTION = PIN_SPAN > 0 ? BUFFER / PIN_SPAN : 0;
const ACTIVE_FRACTION = PIN_SPAN > 0 ? ACTIVE_SPAN / PIN_SPAN : 1;

function rawFractionForPanel(index: number) {
  if (COUNT <= 1) return 0;
  return BUFFER_FRACTION + (index / (COUNT - 1)) * ACTIVE_FRACTION;
}

const SHAFT_HEIGHT = 50;
const HEAD_DEPTH = 130;
const HEAD_HEIGHT = 140;

function ChronoThread() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-10"
    >
      <div
        className="relative mx-6 flex items-center lg:mx-20"
        style={{ height: HEAD_HEIGHT }}
      >
        <div
          className="flex-1 rounded-l-full"
          style={{
            height: SHAFT_HEIGHT,
            background:
              "linear-gradient(to right, var(--panel-slate-to), var(--panel-to), var(--brand))",
            boxShadow:
              "0 0 50px 10px color-mix(in srgb, var(--brand) 25%, transparent)",
          }}
        />

        <svg
          width={HEAD_DEPTH}
          height={HEAD_HEIGHT}
          viewBox={`0 0 ${HEAD_DEPTH} ${HEAD_HEIGHT}`}
          className="-ml-px shrink-0"
          style={{
            filter:
              "drop-shadow(0 0 28px color-mix(in srgb, var(--brand) 55%, transparent))",
          }}
        >
          <path
            d={`M0,0 L0,${HEAD_HEIGHT} L${HEAD_DEPTH},${HEAD_HEIGHT / 2} Z`}
            fill="var(--brand)"
          />
        </svg>

        {EXPERIENCES.map((exp, i) => (
          <span
            key={exp.company}
            className="absolute top-1/2 h-8 w-8 rounded-full ring-[6px] ring-background"
            style={{
              left: `${((i + 0.5) / COUNT) * 100}%`,
              backgroundColor: exp.swatch,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PanelContent({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) {
  return (
    <div
      className="relative flex h-full w-screen shrink-0 items-center overflow-hidden px-6 pb-36 sm:pb-44 lg:px-20"
      style={{ background: exp.gradient }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-6 select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.04] sm:text-[13rem] lg:right-16"
      >
        0{index + 1}
      </span>

      <div className="relative max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-muted-foreground">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: exp.swatch }}
          />
          {exp.period}
        </span>

        <h3 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {exp.company}
        </h3>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
          {exp.role}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-muted-foreground sm:text-xl">
          {exp.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrolly, setScrolly] = useState(false);

  useEffect(() => {
    const motionOk = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    const wideEnough = window.matchMedia("(min-width: 1024px)").matches;
    setScrolly(motionOk && wideEnough);
  }, []);

  useEffect(() => {
    if (!scrolly) return;
    let frame = 0;

    const update = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const rawFraction =
          total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;

        let p: number;
        if (rawFraction <= BUFFER_FRACTION) {
          p = 0;
        } else if (rawFraction >= 1 - BUFFER_FRACTION) {
          p = 1;
        } else {
          p = (rawFraction - BUFFER_FRACTION) / ACTIVE_FRACTION;
        }
        setProgress(p);
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [scrolly]);

  // This section can be far taller than one viewport (the pinned desktop
  // track, or the stacked mobile fallback), so page-level scroll snapping
  // must stand down while the user is inside it — otherwise mandatory snap
  // would yank them straight back to its top on every small scroll tick.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const insideExperience = rect.top < viewportCenter && rect.bottom > viewportCenter;
      document.documentElement.style.scrollSnapType = insideExperience
        ? "none"
        : "";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.documentElement.style.scrollSnapType = "";
    };
  }, [scrolly]);

  const activeIndex = Math.round(progress * (COUNT - 1));

  const goToPanel = (target: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const clamped = Math.min(COUNT - 1, Math.max(0, target));
    const rect = el.getBoundingClientRect();
    const sectionTopAbsolute = window.scrollY + rect.top;
    const total = el.offsetHeight - window.innerHeight;
    const targetScroll =
      sectionTopAbsolute + rawFractionForPanel(clamped) * total;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const header = (
    <div className="flex flex-wrap items-end justify-between gap-6 px-6 pt-14 lg:px-8">
      <div>
        <SectionEyebrow>PARCOURS · DU PASSÉ VERS LE PRÉSENT</SectionEyebrow>
        <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Expérience professionnelle
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 sm:flex">
          {EXPERIENCES.map((exp, i) => (
            <span
              key={exp.company}
              className="h-1.5 rounded-full bg-white/15 transition-all duration-300"
              style={{
                width: i === activeIndex ? "28px" : "8px",
                backgroundColor:
                  i === activeIndex ? "var(--brand)" : undefined,
              }}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Expérience précédente"
          onClick={() => goToPanel(activeIndex - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-white/30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Expérience suivante"
          onClick={() => goToPanel(activeIndex + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-white/30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );

  if (!scrolly) {
    return (
      <section
        id="experience"
        ref={sectionRef}
        className="w-full snap-start snap-always py-28"
      >
        <Reveal className="px-6 lg:px-8">
          <SectionEyebrow>PARCOURS · DU PASSÉ VERS LE PRÉSENT</SectionEyebrow>
          <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Expérience professionnelle
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 px-6 lg:px-8">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 120}>
              <article
                className="overflow-hidden rounded-[28px] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                style={{ background: exp.gradient }}
              >
                <div className="p-8 sm:p-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-muted-foreground">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: exp.swatch }}
                    />
                    {exp.period}
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    {exp.company}
                  </h3>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {exp.role}
                  </p>
                  <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
                    {exp.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ height: `${(1 + PIN_SPAN) * 100}vh` }}
      className="relative snap-start snap-always"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        {header}

        <div className="relative mt-10 flex-1 overflow-hidden">
          <div
            className="relative flex h-full"
            style={{
              width: `${COUNT * 100}vw`,
              transform: `translateX(-${progress * (COUNT - 1) * 100}vw)`,
            }}
          >
            {EXPERIENCES.map((exp, index) => (
              <PanelContent key={exp.company} exp={exp} index={index} />
            ))}
            <ChronoThread />
          </div>
        </div>
      </div>
    </section>
  );
}
