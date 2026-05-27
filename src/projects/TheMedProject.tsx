"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  THE МЁД                                                                   */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Editorial print magazine: deep cream paper, oversized Instrument Serif
 *     display, hairline rules, captions in mono caps. Looks like a food zine
 *     spread, not a website.
 *   - Honest disclaimer of "AI photos, fictional brand" sits in the corner —
 *     no hiding what the project actually is.
 *
 * The page is mostly negative space and one big screenshot framed like a
 * portrait inside a gallery — that's the whole personality.
 */

interface TheMedProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "04 · Демо · Food", en: "04 · Demo · Food" },
  title: { ru: "THE МЁД", en: "THE МЁД" },
  tagline: {
    ru: "Выдуманная пекарня. Натуральный мёд. Все фото нарисованы AI.",
    en: "Fictional bakery. Real honey. Every photo is AI-generated.",
  },
  body: {
    ru: "Учебный проект, на котором отрабатывалась эстетика food-сайтов: кремовая палитра, тёплые деревянные подложки, сериф-типографика, минимум визуального шума.",
    en: "A study in food-site aesthetics: cream palette, warm wooden trays, serif typography, almost no visual noise.",
  },
  shotCaption: {
    ru: "«Выпечка, которой гордятся пчёлы.» — слоган, который не стыдно нести в живой бизнес.",
    en: "“Pastry the bees are proud of.” — a tagline ready for a real bakery.",
  },
  links: { site: "themed.webaweba.com" },
} as const;

const HERO = { src: "/assets/the-med/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "THE МЁД bakery demo", width: HERO.w, height: HERO.h },
];

export function TheMedProject({ lang }: TheMedProjectProps) {
  return (
    <section
      id="the-med"
      className="relative isolate overflow-hidden bg-[#f6efe1] py-32 text-[#231a0e] sm:py-44"
      style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
    >
      {/* Paper texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.07 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        {/* Magazine masthead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-4 border-b border-[#231a0e]/35 pb-4"
        >
          <span className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/70">
            {COPY.kicker[lang]}
          </span>
          <span className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/70">
            №04
          </span>
        </motion.div>

        {/* Title block (editorial centred) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center sm:mt-24"
        >
          <h2
            className="font-[var(--font-instrument)] text-[18vw] leading-[0.95] italic font-normal tracking-[-0.02em] sm:text-[13vw] lg:text-[180px]"
            style={{ fontFeatureSettings: '"liga", "dlig"' }}
          >
            {COPY.title[lang]}
          </h2>

          <p className="mx-auto mt-8 max-w-[640px] text-2xl leading-snug text-[#231a0e]/85 sm:text-3xl">
            {COPY.tagline[lang]}
          </p>

          <p className="mx-auto mt-8 max-w-[600px] font-[var(--font-inter-tight)] text-base leading-relaxed text-[#231a0e]/75 sm:text-lg">
            {COPY.body[lang]}
          </p>
        </motion.div>

        {/* Big framed screenshot */}
        <div className="mt-20 sm:mt-28">
          <div className="relative">
            <Media
              kind="image"
              src={HERO.src}
              alt="THE МЁД demo"
              width={HERO.w}
              height={HERO.h}
              gallery={GALLERY}
              index={0}
              className="rounded-sm ring-1 ring-[#231a0e]/20 shadow-[0_60px_140px_-40px_rgba(35,26,14,0.4)]"
            />
            {/* Decorative caption number */}
            <div className="absolute -top-6 -left-2 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/60">
              Plate 01
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-[640px] text-center font-[var(--font-instrument)] text-xl italic text-[#231a0e]/80 sm:text-2xl"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#231a0e]/35 pt-6"
        >
          <span className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/65">
            {lang === "ru" ? "Учебный проект · 2026" : "Personal study · 2026"}
          </span>
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.25em] text-[#231a0e] underline-offset-4 transition hover:underline"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
          </a>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
