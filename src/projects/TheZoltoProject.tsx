"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  THE ZOLTO                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Heavy black with raw gold accents. Bullion bar gradient runs behind
 *     the title type. Looks expensive, deliberately a touch tacky — this is
 *     a gambling-themed game and it knows it.
 *   - Two parallel phone screenshots: iOS app on the left, Telegram bot on
 *     the right. Same product, two platforms, both real.
 */

interface TheZoltoProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "15 · Личный · Игра", en: "15 · Personal · Game" },
  title: { ru: "THE ZOLTO", en: "THE ZOLTO" },
  tagline: {
    ru: "Многопользовательский аукцион на золотые слитки. Тайные ставки. Все теряют, даже победитель.",
    en: "Multiplayer gold-bar auction. Sealed bids. Everyone loses — even the winner.",
  },
  rules: [
    { ru: "$100 в начале", en: "$100 to start" },
    { ru: "6 слитков для победы", en: "6 bars to win" },
    { ru: "Банкрот = проигрыш", en: "Bankrupt = lose" },
    { ru: "Точность ставки до $0.001", en: "Bid precision $0.001" },
  ],
  platforms: [
    { ru: "iOS · полностью локально", en: "iOS · fully on-device" },
    { ru: "Telegram-бот · в проде с 2023", en: "Telegram bot · live since 2023" },
  ],
  links: { bot: "t.me/the_zolto_bot" },
} as const;

const IOS = [
  { src: "/assets/the-zolto/iphone/01.webp", w: 1170, h: 2532 },
  { src: "/assets/the-zolto/iphone/02.webp", w: 1170, h: 2532 },
  { src: "/assets/the-zolto/iphone/03.webp", w: 1170, h: 2532 },
];

const TG = [
  { src: "/assets/the-zolto/telegram/01.webp", w: 1170, h: 2532 },
  { src: "/assets/the-zolto/telegram/02.webp", w: 1170, h: 2532 },
  { src: "/assets/the-zolto/telegram/03.webp", w: 1170, h: 2532 },
];

const GALLERY: LightboxItem[] = [
  ...IOS.map((s, i) => ({
    kind: "image" as const,
    src: s.src,
    alt: `THE ZOLTO iOS ${i + 1}`,
    width: s.w,
    height: s.h,
  })),
  ...TG.map((s, i) => ({
    kind: "image" as const,
    src: s.src,
    alt: `THE ZOLTO Telegram ${i + 1}`,
    width: s.w,
    height: s.h,
  })),
];

export function TheZoltoProject({ lang }: TheZoltoProjectProps) {
  return (
    <section
      id="the-zolto"
      className="relative isolate overflow-hidden bg-[#0a0905] py-32 text-[#f6e6a4] sm:py-44"
      style={{ fontFamily: "var(--font-archivo), system-ui, sans-serif" }}
    >
      {/* Gold light bleed */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[40%] bg-[radial-gradient(80%_50%_at_50%_0%,#c69845aa,transparent_70%)] opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#c69845]">
            <span aria-hidden className="h-px w-10 bg-[#c69845]/50" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-archivo)] text-[14vw] uppercase leading-[0.88] tracking-[-0.03em] sm:text-[10vw] lg:text-[180px]">
            <span className="bg-gradient-to-b from-[#f8e6a8] via-[#d4a64a] to-[#7a5a1f] bg-clip-text text-transparent">
              {COPY.title[lang]}
            </span>
          </h2>

          <p className="mt-6 max-w-[700px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#f6e6a4]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[#c69845]/30 py-8 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.rules.map((r, i) => (
            <div key={r.ru} className="flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#c69845]/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-inter-tight)] text-base leading-snug text-[#f6e6a4]/90 sm:text-lg">
                {r[lang]}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Two platforms side by side */}
        <div className="mt-20 grid gap-12 sm:mt-28 sm:grid-cols-2 sm:gap-10">
          {[IOS, TG].map((set, columnIdx) => (
            <div key={columnIdx}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#c69845]">
                {COPY.platforms[columnIdx][lang]}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                {set.map((s, i) => (
                  <Media
                    key={s.src}
                    kind="image"
                    src={s.src}
                    alt={`THE ZOLTO ${columnIdx === 0 ? "iOS" : "TG"} ${i + 1}`}
                    width={s.w}
                    height={s.h}
                    gallery={GALLERY}
                    index={columnIdx * 3 + i}
                    className="rounded-[20px] ring-1 ring-[#c69845]/30 shadow-[0_30px_70px_-30px_rgba(198,152,69,0.4)]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.bot}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#c69845] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#0a0905] transition hover:bg-[#f6e6a4]"
          >
            <span>{COPY.links.bot}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
