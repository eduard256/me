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
          <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/70">
            {COPY.kicker[lang]}
          </span>
          <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a0e]/70">
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
            className="text-[16vw] uppercase leading-[1.1] tracking-[-0.02em] text-[#2C2416] sm:text-[12vw] lg:text-[150px]"
            style={{ fontFamily: "var(--font-dela)" }}
          >
            {COPY.title[lang]}
          </h2>
        </motion.div>

        {/* Big framed screenshot */}
        <div className="mt-16 sm:mt-20">
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
        </div>

        {/* Link button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#231a0e] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#f6efe1] transition hover:bg-black"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
