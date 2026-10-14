import type { CSSProperties } from "react";
import { GraduationCap } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

const EDUCATION = [
  {
    degree: "Mastère Développement et Management Fullstack",
    school: "EFREI, Bordeaux",
    period: "2024 — 2026",
    description:
      "Conserver la maîtrise et la souveraineté des données face à la généralisation des solutions en ligne ?",
    accent: "var(--brand)",
    glow: "var(--panel-clay-to)",
  },
  {
    degree: "BUT Informatique",
    school: "IUT de Bordeaux",
    period: "2021 — 2024",
    description:
      "Formation généraliste en informatique : développement logiciel, bases de données, réseaux et gestion de projet.",
    accent: "var(--panel-slate-to)",
    glow: "var(--panel-slate-to)",
  },
];

export default function Education() {
  return (
    <section
      id="formation"
      className="mx-auto flex min-h-screen w-full max-w-7xl snap-start snap-always flex-col justify-center px-6 py-20 lg:px-8"
    >
      <Reveal>
        <SectionEyebrow>FORMATION</SectionEyebrow>
        <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Formation
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {EDUCATION.map((item, index) => (
          <Reveal key={item.degree} delay={index * 120}>
            <article
              className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--item-border)] hover:shadow-[0_20px_40px_-20px_var(--item-shadow)]"
              style={
                {
                  "--item-border": `color-mix(in srgb, ${item.accent} 45%, transparent)`,
                  "--item-shadow": `color-mix(in srgb, ${item.accent} 35%, transparent)`,
                } as CSSProperties
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `color-mix(in srgb, ${item.glow} 35%, transparent)`,
                  opacity: 0.5,
                }}
              />

              <div className="relative flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `color-mix(in srgb, ${item.accent} 35%, transparent)`,
                    backgroundColor: `color-mix(in srgb, ${item.accent} 14%, transparent)`,
                    color: item.accent,
                  }}
                >
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  {item.period}
                </span>
              </div>

              <div className="relative">
                <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground sm:text-[1.7rem]">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm font-medium" style={{ color: item.accent }}>
                  {item.school}
                </p>
              </div>

              <p className="relative text-sm italic leading-[1.75] text-muted-foreground">
                « {item.description} »
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
