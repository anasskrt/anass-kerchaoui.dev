import { Mail, Phone, Download } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.25 8.75h3.38V21H3.25V8.75ZM9.5 8.75h3.24v1.68h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.2V21h-3.38v-6.4c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.45 1.66-2.45 3.37V21H9.5V8.75Z" />
    </svg>
  );
}

const EMAIL = "anass.kerchaoui33@gmail.com";
const PHONE_DISPLAY = "+33 6 02 73 17 73";
const PHONE_TEL = "+33602731773";
// TODO: replace with the real profile URL once shared.
const LINKEDIN_URL = "https://www.linkedin.com/in/anass-kerchaoui";

const fieldClasses =
  "group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/[0.06] hover:shadow-[0_0_30px_-6px_var(--brand)] active:scale-[0.97]";

const linkClasses =
  "group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_24px_-8px_rgba(255,255,255,0.35)] active:scale-[0.97]";

const iconBadgeClasses =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:border-brand/50 group-hover:bg-brand/20";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl snap-start snap-always flex-col items-center justify-center overflow-hidden px-6 py-20 text-center lg:px-8"
    >
      <div
        aria-hidden
        className="contact-glow pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 16%, transparent) 0%, transparent 70%)",
        }}
      />

      <Reveal className="relative flex flex-col items-center">
        <SectionEyebrow>CONTACT</SectionEyebrow>
        <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Contactez<span className="text-brand">-moi</span>
        </h2>
      </Reveal>

      <div className="relative mt-12 flex w-full max-w-md flex-col">
        <Reveal delay={100}>
          <a href={`mailto:${EMAIL}`} className={fieldClasses}>
            <span className={iconBadgeClasses}>
              <Mail className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-mono text-base text-foreground sm:text-lg">
              {EMAIL}
            </span>
          </a>
        </Reveal>

        <Reveal delay={220} className="mt-8">
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Vous souhaitez échanger directement avec moi ?
          </p>
          <a href={`tel:${PHONE_TEL}`} className={`${fieldClasses} mt-3`}>
            <span className={iconBadgeClasses}>
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-mono text-base text-foreground sm:text-lg">
              {PHONE_DISPLAY}
            </span>
          </a>
        </Reveal>

        <Reveal delay={340} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/Anass-Kerchaoui.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <Download
              className="h-4 w-4 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
            <span className="text-sm font-semibold text-foreground">
              Mon CV
            </span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <LinkedinIcon className="h-4 w-4 text-brand transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="text-sm font-semibold text-foreground">
              LinkedIn
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
