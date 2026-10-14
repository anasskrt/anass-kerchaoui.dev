"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectFlipCardProps {
  title: string;
  status: string;
  stage: string;
  stageColor: string;
  role: string;
  description: string;
  tags: string[];
  image?: string;
  gradient: string;
  accent: string;
}

export default function ProjectFlipCard({
  title,
  status,
  stage,
  stageColor,
  role,
  description,
  tags,
  image,
  gradient,
  accent,
}: ProjectFlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // Touch devices can leave a phantom :hover stuck "on" after the first tap
  // (no mouseleave ever fires), which would swallow a second tap meant to
  // flip the card back. So hover only drives the flip where hover is a real
  // pointer signal; touch/tap devices rely on the click toggle instead.
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    setSupportsHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const isFlipped = supportsHover
    ? isHovered || hasKeyboardFocus
    : isClicked || hasKeyboardFocus;

  return (
    // biome-ignore lint/a11y/useSemanticElements: a labelled card group, not a form fieldset
    <div
      aria-label={title}
      className="group relative aspect-square w-full cursor-pointer rounded-[28px] outline-hidden [perspective:2000px] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setHasKeyboardFocus(false);
        }
      }}
      onClick={() => {
        if (!supportsHover) setIsClicked((v) => !v);
      }}
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) {
          setHasKeyboardFocus(true);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="group"
      // biome-ignore lint/a11y/noNoninteractiveTabindex: keyboard focus is what flips the card
      tabIndex={0}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-[transform] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
          isFlipped && "motion-safe:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front — image */}
        <div
          aria-hidden={isFlipped || undefined}
          className={cn(
            "absolute inset-0 h-full w-full overflow-hidden rounded-[28px]",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "border border-white/10",
            "motion-reduce:transition-opacity motion-reduce:duration-150",
            isFlipped && "motion-reduce:opacity-0"
          )}
          inert={isFlipped}
        >
          {image ? (
            <Image
              src={image}
              alt={`Aperçu du projet ${title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full" style={{ background: gradient }} />
          )}

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
            }}
          />

          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
            <span className="font-display text-xl font-bold text-white">
              {title}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: stageColor }}
              />
              {stage}
            </span>
          </div>

          <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm">
            <Repeat2 aria-hidden className="h-4 w-4" />
          </span>
        </div>

        {/* Back — text */}
        <div
          aria-hidden={!isFlipped || undefined}
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col justify-center",
            "[backface-visibility:hidden] motion-safe:[transform:rotateY(180deg)]",
            "rounded-[28px] border border-white/10 bg-white/[0.03] p-8 sm:p-10",
            "motion-reduce:transition-opacity motion-reduce:duration-150",
            !isFlipped && "motion-reduce:opacity-0"
          )}
          inert={!isFlipped}
        >
          <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            {status}
          </span>

          <h3 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h3>

          <p
            className="mt-3 text-lg font-semibold sm:text-xl"
            style={{ color: accent }}
          >
            {role}
          </p>

          <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
                  color: accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
