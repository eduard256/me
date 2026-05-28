"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  gostrix.github.io                                                         */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Same Strix violet, but compact and quiet. The slide explicitly reads
 *     as an "appendix" to Strix — title is small, layout is sparse.
 *   - One screenshot, three quick facts, one link out.
 */

interface GostrixProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "19 · Маркетинг · Appendix к Strix", en: "19 · Marketing · Strix appendix" },
  title: { ru: "gostrix.github.io", en: "gostrix.github.io" },
  // Tagline is split so the word "Strix" can render as an anchor link back
  // to the Strix slide higher up the page.
  taglineBefore: {
    ru: "Промо-сайт для ",
    en: "Marketing site for ",
  },
  taglineAfter: {
    ru: " + публичный поиск по 67 000 моделей камер.",
    en: " + public search across 67,000 camera models.",
  },
  facts: [
    { k: { ru: "Фронт", en: "Front" }, v: "GitHub Pages" },
    { k: { ru: "Бэкенд", en: "Backend" }, v: { ru: "Отдельный домен", en: "Separate domain" } },
    { k: { ru: "База", en: "DB" }, v: { ru: "67k моделей камер", en: "67k camera models" } },
  ],
  links: { site: "gostrix.github.io" },
} as const;

const HERO = { src: "/assets/gostrix/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "gostrix", width: HERO.w, height: HERO.h },
];

export function GostrixProject({ lang }: GostrixProjectProps) {
  return (
    <section
      id="gostrix"
      className="relative isolate overflow-hidden bg-[#0c0717] py-32 text-white sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-violet-300/75">
            <span aria-hidden className="h-px w-10 bg-violet-300/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[6vw] leading-[0.95] font-light tracking-[-0.04em] sm:text-[4vw] lg:text-[60px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[720px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-white/85 sm:text-2xl">
            {COPY.taglineBefore[lang]}
            <a
              href="#strix"
              className="text-violet-300 underline decoration-violet-300/40 underline-offset-4 transition hover:text-violet-200 hover:decoration-violet-200"
            >
              Strix
            </a>
            {COPY.taglineAfter[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                {f.k[lang]}
              </div>
              <div className="mt-2 font-[family-name:var(--font-inter-tight)] text-lg leading-snug text-white sm:text-xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <Media
            kind="image"
            src={HERO.src}
            alt="gostrix"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-violet-300/20 shadow-[0_40px_100px_-30px_rgba(91,43,220,0.4)]"
          />
        </div>

        <div className="mt-12">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-violet-400 px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0c0717] transition hover:bg-white"
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
