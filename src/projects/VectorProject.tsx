"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

/* -------------------------------------------------------------------------- */
/*  VECTOR Academy                                                            */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Lavender-violet on near-white. Premium, calm, just enough refinement
 *     to read "услуги/коучинг", not enough to be cliché.
 *   - The fact that the brand is fictional is owned, not hidden.
 */

interface VectorProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "Демо · Услуги", en: "Demo · Services" },
  title: { ru: "VECTOR", en: "VECTOR" },
  tagline: {
    ru: "Демо-лендинг для услуг и коучинга. Выдуманный бренд.",
    en: "A demo landing for services and coaching. Fictional brand.",
  },
  links: { site: "vector.webaweba.com" },
} as const;

const HERO = { src: "/assets/vector/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "VECTOR Academy demo", width: HERO.w, height: HERO.h },
];

export function VectorProject({ lang }: VectorProjectProps) {
  return (
    <section
      id="vector"
      className="relative isolate overflow-hidden bg-[#f4f1ff] py-32 text-[#231a3e] sm:py-44"
      style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
    >
      {/* Subtle violet halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 z-0 h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full bg-gradient-to-br from-[#bca4ff] via-transparent to-transparent opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] rounded-full bg-gradient-to-br from-[#e6def8] via-transparent to-transparent opacity-80 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#5b3fb8]">
            <span aria-hidden className="h-px w-10 bg-[#5b3fb8]/40" />
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-inter-tight)] text-[16vw] leading-[0.92] font-light tracking-[-0.045em] text-[#5b3fb8] sm:text-[11vw] lg:text-[150px]">
            {COPY.title[lang]}
          </h2>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-16 sm:mt-24">
          <Media
            kind="image"
            src={HERO.src}
            alt="VECTOR"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-2xl ring-1 ring-[#231a3e]/10 shadow-[0_50px_120px_-40px_rgba(91,63,184,0.35)]"
          />
        </div>

        {/* Link */}
        <div className="mt-12">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#5b3fb8] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#231a3e]"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
