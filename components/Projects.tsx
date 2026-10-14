import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import ProjectFlipCard from "@/components/ProjectFlipCard";

const PROJECTS = [
  {
    title: "digiK",
    status: "Agence web · 15+ projets livrés",
    stage: "Publié",
    stageColor: "#34d399",
    role: "Dirigeant & développeur",
    description:
      "Agence de création de sites web sur mesure que j'ai fondée et que je développe. Plus de 10 projets menés à bien pour des clients variés, de la conception à la mise en ligne.",
    tags: ["Agence web", "Sites sur mesure", "15+ projets"],
    image: "/digiK.png",
    gradient:
      "radial-gradient(130% 110% at 20% 15%, var(--panel-clay-from) 0%, var(--panel-clay-to) 100%)",
    accent: "var(--brand)",
  },
  {
    title: "INFAC",
    status: "En pause · Conformité facture électronique",
    stage: "En cours de développement",
    stageColor: "#fbbf24",
    role: "Facturation, comptabilité & OCR par IA",
    description:
      "Application de facturation et de suivi comptable, avec un module OCR propulsé par IA pour analyser automatiquement marchandises, contacts, clients et fournisseurs. Développement mis en pause le temps de m'adapter à l'évolution de la réglementation sur la facture électronique.",
    tags: ["Facturation", "OCR / IA", "Comptabilité"],
    gradient:
      "radial-gradient(130% 110% at 20% 15%, var(--panel-slate-from) 0%, var(--panel-slate-to) 100%)",
    accent: "var(--panel-slate-to)",
  },
];

export default function Projects() {
  return (
    <section
      id="projets"
      className="mx-auto flex min-h-screen w-full max-w-7xl snap-start snap-always flex-col justify-center px-6 py-20 lg:px-8"
    >
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>PROJETS PERSONNELS</SectionEyebrow>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Projets
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-muted-foreground">
            Une agence que je dirige et développe, et un projet personnel en
            cours autour de la facturation et de l&apos;IA. Survole une carte
            pour en savoir plus.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <ProjectFlipCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
