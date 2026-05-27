"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

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
  kicker: { ru: "13 · Демо · Услуги", en: "13 · Demo · Services" },
  title: { ru: "VECTOR Academy", en: "VECTOR Academy" },
  tagline: {
    ru: "Демо-лендинг выдуманной академии коучинга. Полная типовая структура продающего сайта услуг.",
    en: "Demo landing for a fictional coaching academy. The full template of a service-business sales page.",
  },
  facts: [
    { k: { ru: "Секций", en: "Sections" }, v: "9" },
    { k: { ru: "Подача", en: "Format" }, v: { ru: "One-page", en: "One-page" } },
    { k: { ru: "Бренд", en: "Brand" }, v: { ru: "Выдуман", en: "Fictional" } },
    { k: { ru: "Зачем", en: "Why" }, v: { ru: "Аргумент для заказчиков", en: "Argument for prospects" } },
  ],
  shotCaption: {
    ru: "«Трансформируйте свою жизнь.» — типовая структура услугового лендинга.",
    en: "“Transform your life.” — the canonical structure of a services landing.",
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
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#5b3fb8]">
            <span aria-hidden className="h-px w-10 bg-[#5b3fb8]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[var(--font-inter-tight)] text-[12vw] leading-[0.92] font-light tracking-[-0.045em] sm:text-[8vw] lg:text-[120px]">
            VECTOR{" "}
            <span className="font-[var(--font-fraunces)] italic text-[#5b3fb8]">
              Academy
            </span>
          </h2>

          <p className="mt-8 max-w-[640px] text-xl leading-snug text-[#231a3e]/80 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#231a3e]/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#231a3e]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 text-2xl leading-tight text-[#231a3e] sm:text-3xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Screenshot */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={HERO.src}
            alt="VECTOR Academy"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-2xl ring-1 ring-[#231a3e]/10 shadow-[0_50px_120px_-40px_rgba(91,63,184,0.35)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[var(--font-instrument)] text-xl italic text-[#231a3e]/80 sm:text-2xl"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#5b3fb8] px-7 py-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#231a3e]"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
