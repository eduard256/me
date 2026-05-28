"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  FLOW PARX                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Sunset-water gradient lifted from the client's own hero shot.
 *   - One huge image-first composition: the screenshot owns the page, with
 *     a single "1 DAY · $800" badge that brags about the speed/price.
 *   - Italic Fraunces "под ключ" mirrors the headline on the live site.
 */

interface FlowparxProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "10 · Клиент · Срочно", en: "10 · Client · Rush" },
  title: { ru: "FLOW PARX", en: "FLOW PARX" },
  subtitle: { ru: "Спортивная инфраструктура на воде", en: "Watersports infrastructure" },
  tagline: {
    ru: "Имиджевый сайт ООО «ФЛОУ». Один день, срочный заказ.",
    en: "Imagework for ООО «ФЛОУ». One day, rush brief.",
  },
  badge: { ru: "1 день · $800", en: "1 day · $800" },
  facts: [
    { k: { ru: "Объекты", en: "Projects" }, v: { ru: "Подмосковье · Крым · Геленджик", en: "Moscow · Crimea · Gelendzhik" } },
    { k: { ru: "Партнёры", en: "Partners" }, v: "RIXEN · UNIT · SPIN" },
    { k: { ru: "Стек", en: "Stack" }, v: "Next.js" },
    { k: { ru: "Языки", en: "Languages" }, v: { ru: "RU · EN", en: "RU · EN" } },
  ],
  links: { site: "flowparx.com" },
} as const;

const HERO = { src: "/assets/flowparx/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "FLOW PARX hero", width: HERO.w, height: HERO.h },
];

export function FlowparxProject({ lang }: FlowparxProjectProps) {
  return (
    <section
      id="flowparx"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#1a3142] via-[#2d4458] to-[#e8a78f] py-32 text-white sm:py-44"
      style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-white/65">
            <span aria-hidden className="h-px w-10 bg-white/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-inter-tight)] text-[14vw] leading-[0.88] font-light tracking-[-0.04em] sm:text-[10vw] lg:text-[150px]">
            {COPY.title[lang]}
          </h2>

          <div className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl italic text-white/80 sm:text-3xl">
            <span className="italic">{COPY.subtitle[lang]}</span>
          </div>

          <p className="mt-6 max-w-[640px] text-lg text-white/85 sm:text-xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Big hero shot with floating badge */}
        <div className="relative mt-16 sm:mt-24">
          <Media
            kind="image"
            src={HERO.src}
            alt="FLOW PARX"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-lg ring-1 ring-white/20 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.5)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 left-4 origin-center rounded-md bg-[#e8a78f] px-5 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#1a3142] shadow-xl sm:-bottom-8 sm:left-10 sm:px-7 sm:py-4 sm:text-base"
          >
            {COPY.badge[lang]}
          </motion.div>
        </div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/25 pt-10 sm:mt-28 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-white/65">
                {f.k[lang]}
              </div>
              <div className="mt-3 text-lg leading-snug text-white sm:text-xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#1a3142] transition hover:bg-[#e8a78f]"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
