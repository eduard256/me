"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Sky Craft                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Sick fever. Grunge black, dirty white type, off-balance baseline,
 *     a thermometer-red accent. Headline literally tilted.
 *   - Looks unfinished on purpose — the project IS unfinished.
 *   - The video is the centrepiece because it is the only thing that ever
 *     actually ran.
 */

interface SkycraftProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "08 · Личный · Rust · Заброшен", en: "08 · Personal · Rust · Abandoned" },
  title: { ru: "Sky Craft", en: "Sky Craft" },
  quote: {
    ru: "«Сделал за один день при температуре 39.5°C в паре с AI. В тот день был не в себе и не понимал, что делаю.»",
    en: "“Wrote it in one day at 39.5°C fever, hand in hand with AI. That day I just lost my mind and had no idea what I was doing.”",
  },
  facts: [
    { k: { ru: "Срок", en: "Built in" }, v: { ru: "1 день", en: "1 day" } },
    { k: { ru: "Температура", en: "Fever" }, v: "39.5°C" },
    { k: { ru: "Стек", en: "Stack" }, v: "Rust · wgpu · tokio · QUIC" },
    { k: { ru: "Статус", en: "Status" }, v: { ru: "Заброшен", en: "Abandoned" } },
  ],
  reallyWorks: {
    head: { ru: "Что реально работает", en: "What actually runs" },
    items: [
      { ru: "Регистрация через Telegram-бота", en: "Telegram bot signup" },
      { ru: "Вход по 6-значному коду", en: "Login via a 6-digit code" },
      { ru: "Можно бегать", en: "You can run around" },
      { ru: "Деревья на месте", en: "Trees are in their places" },
    ],
  },
  videoCaption: {
    ru: "Видео — единственный артефакт, доказывающий, что игра существовала.",
    en: "The video is the only artefact proving the game ever existed.",
  },
  links: { github: "github.com/eduard256/sky-craft" },
} as const;

const VIDEO = { src: "/assets/skycraft/clip.mp4", w: 1280, h: 720 };
const GALLERY: LightboxItem[] = [
  { kind: "video", src: VIDEO.src, width: VIDEO.w, height: VIDEO.h },
];

export function SkycraftProject({ lang }: SkycraftProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sweat = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={ref}
      id="skycraft"
      className="relative isolate overflow-hidden bg-[#08080a] py-32 text-[#f3eee6] sm:py-44"
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      {/* Fever-red bleed */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] z-0 h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full bg-[radial-gradient(closest-side,#ef3a3a55,transparent_70%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ y: sweat }}
        className="pointer-events-none absolute top-20 left-1/3 z-0 h-[4px] w-[4px] rounded-full bg-[#ef3a3a]/60 blur-sm"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#f3eee6]/55">
            <span aria-hidden className="block h-2 w-2 animate-pulse rounded-full bg-[#ef3a3a]" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2
            className="mt-6 font-[var(--font-space-grotesk)] text-[16vw] leading-[0.88] font-medium tracking-[-0.045em] sm:text-[12vw] lg:text-[180px]"
            style={{ transform: "rotate(-1.2deg)", transformOrigin: "0 100%" }}
          >
            Sky&nbsp;
            <span className="italic text-[#ef3a3a]">Craft</span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-[800px] border-l-2 border-[#ef3a3a] pl-6 font-[var(--font-instrument)] text-2xl italic leading-snug text-[#f3eee6]/90 sm:mt-20 sm:text-3xl lg:text-4xl"
        >
          {COPY.quote[lang]}
        </motion.blockquote>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-white/50">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-medium leading-tight sm:text-3xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="video"
            src={VIDEO.src}
            width={VIDEO.w}
            height={VIDEO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#ef3a3a]/30 shadow-[0_60px_140px_-40px_rgba(239,58,58,0.45)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-white/65"
          >
            {COPY.videoCaption[lang]}
          </motion.p>
        </div>

        {/* What actually runs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid items-start gap-10 sm:mt-28 sm:grid-cols-[1fr_2fr]"
        >
          <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#ef3a3a]">
            {COPY.reallyWorks.head[lang]}
          </div>
          <ul className="space-y-3 font-[var(--font-space-grotesk)] text-2xl text-white/85 sm:text-3xl">
            {COPY.reallyWorks.items.map((item) => (
              <li key={item.ru} className="flex items-baseline gap-4">
                <span aria-hidden className="text-[#ef3a3a]">✓</span>
                <span>{item[lang]}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-white/90 transition hover:border-[#ef3a3a] hover:bg-[#ef3a3a] hover:text-black"
          >
            <span>{COPY.links.github}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
