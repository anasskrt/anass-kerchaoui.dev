import { IconCloud } from "@/components/ui/icon-cloud";
import SectionEyebrow from "@/components/SectionEyebrow";

const STACK_ICONS = [
  "https://cdn.simpleicons.org/typescript",
  "https://cdn.simpleicons.org/javascript",
  "https://cdn.simpleicons.org/openjdk",
  "https://cdn.simpleicons.org/python",
  "https://cdn.simpleicons.org/angular",
  "https://cdn.simpleicons.org/nextdotjs",
  "https://cdn.simpleicons.org/react",
  "https://cdn.simpleicons.org/vuedotjs",
  "https://cdn.simpleicons.org/nestjs",
  "https://cdn.simpleicons.org/nodedotjs",
  "https://cdn.simpleicons.org/django",
  "https://cdn.simpleicons.org/symfony",
  "https://cdn.simpleicons.org/mysql",
  "https://cdn.simpleicons.org/postgresql",
  "https://cdn.simpleicons.org/docker",
  "https://cdn.simpleicons.org/nginx",
  "https://cdn.simpleicons.org/git",
];

const enter =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <div className={`${enter} motion-safe:slide-in-from-bottom-2`}>
            <SectionEyebrow>
              DÉVELOPPEUR FULL-STACK · BORDEAUX, FRANCE
            </SectionEyebrow>
          </div>

          <h1
            className={`${enter} motion-safe:slide-in-from-bottom-4 motion-safe:delay-100 mt-8 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground [hyphens:auto] sm:text-7xl lg:text-8xl`}
          >
            Je conçois
            <br />
            ce qui
            <br />
            <span className="text-brand">tient</span> en
            <br />
            production.
          </h1>

          <p
            className={`${enter} motion-safe:slide-in-from-bottom-4 motion-safe:delay-200 mt-10 max-w-md text-lg leading-[1.75] text-muted-foreground`}
          >
            3 ans d&apos;expérience full-stack : backend Node.js / NestJS et
            Java, frontend Angular, Next.js et React — de la conception à la
            mise en production.
          </p>

          <div
            className={`${enter} motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 mt-10 flex flex-wrap items-center gap-6`}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[15px] font-semibold text-background transition-all duration-200 hover:scale-[1.03] hover:bg-white active:scale-95"
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
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a
              href="#projets"
              className="flex items-center gap-2 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Voir mes projets
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <div
          className={`${enter} motion-safe:zoom-in-95 motion-safe:delay-200 motion-safe:duration-1000 relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/10`}
          style={{
            background:
              "radial-gradient(55% 55% at 50% 42%, color-mix(in srgb, var(--brand) 26%, transparent) 0%, transparent 72%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 1.6px) 0 0/28px 28px, var(--background)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: "inset 0 0 120px 20px rgba(0,0,0,0.55)",
            }}
          />
          <IconCloud images={STACK_ICONS} showControl={false} size={620} />
        </div>
      </div>
    </section>
  );
}
