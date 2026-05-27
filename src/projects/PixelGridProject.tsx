"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  PixelGrid                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Designer's lightbox: cool indigo dark mode, a faint grid overlay that
 *     mirrors what the tool draws on user images, and a "1280 × 720" target
 *     spec sitting next to the title like a print order.
 */

interface PixelGridProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "22 · Утилита · Браузерная", en: "22 · Utility · Browser" },
  title: "PixelGrid",
  size: "1280 × 720",
  tagline: {
    ru: "Кадрирование под жёсткие размеры. Выделил объект — паддинг достроится из оригинала.",
    en: "Cropping to strict sizes. Pick the subject — padding is auto-completed from the original.",
  },
  facts: [
    { k: { ru: "Где", en: "Where" }, v: "GitHub Pages" },
    { k: { ru: "Зависимости", en: "Dependencies" }, v: { ru: "Нет", en: "None" } },
    { k: { ru: "Сервер", en: "Server" }, v: { ru: "Не используется", en: "Not used" } },
    { k: { ru: "Для чего", en: "For" }, v: { ru: "Umbrel App Store, CasaOS", en: "Umbrel App Store, CasaOS" } },
  ],
  links: { site: "eduard256.github.io/PixelGrid" },
} as const;

const HERO = { src: "/assets/pixelgrid/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "PixelGrid", width: HERO.w, height: HERO.h },
];

export function PixelGridProject({ lang }: PixelGridProjectProps) {
  return (
    <section
      id="pixelgrid"
      className="relative isolate overflow-hidden bg-[#0c1226] py-32 text-[#dce5ff] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#7c8cd8 1px, transparent 1px), linear-gradient(90deg, #7c8cd8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#7c8cd8]">
            <span aria-hidden className="h-px w-10 bg-[#7c8cd8]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <h2 className="text-[12vw] leading-[0.9] font-light tracking-[-0.04em] sm:text-[8vw] lg:text-[110px]">
              {COPY.title}
            </h2>
            <span className="font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.25em] text-[#7c8cd8] sm:text-base">
              TARGET · {COPY.size}
            </span>
          </div>

          <p className="mt-6 max-w-[720px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#dce5ff]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#7c8cd8]/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#dce5ff]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-inter-tight)] text-base leading-snug sm:text-lg">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <Media
            kind="image"
            src={HERO.src}
            alt="PixelGrid"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#7c8cd8]/25 shadow-[0_40px_100px_-30px_rgba(124,140,216,0.4)]"
          />
        </div>

        <div className="mt-12">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#7c8cd8] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0c1226] transition hover:bg-white"
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
