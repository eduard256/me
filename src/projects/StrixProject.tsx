"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Strix                                                                     */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Black canvas warmed by deep violet glow.
 *   - JetBrains Mono for everything textual — Strix lives in terminals.
 *   - The demo video is the hero. Everything else is the receipt.
 *
 * Rhythm:
 *   1. Number wall: 3,600 / 67,288 / 102,787 / 30s — typography first.
 *   2. demo.mp4 full-bleed, loops silently on entry.
 *   3. Seven product screenshots interleaved with terse captions.
 *   4. Closing card with the install one-liner.
 *
 * The whole section enters via a quiet, single-stage fade — no domino.
 * Strix is too serious to wink.
 */

interface StrixProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "01 · Open source · Go", en: "01 · Open source · Go" },
  title: { ru: "Strix", en: "Strix" },
  tagline: {
    ru: "Камеры, которых якобы не существует — за 30 секунд во Frigate.",
    en: "Cameras that supposedly don't exist — in Frigate in 30 seconds.",
  },
  numbers: [
    { value: "3 600", label: { ru: "брендов", en: "brands" } },
    { value: "67 288", label: { ru: "моделей", en: "models" } },
    { value: "102 787", label: { ru: "URL-паттернов", en: "URL patterns" } },
    { value: "30s", label: { ru: "поиск", en: "discovery" } },
  ],
  videoCaption: {
    ru: "Вводишь IP. Через секунду — производитель. Дальше — потоки.",
    en: "Type an IP. A second later — vendor. Then — streams.",
  },
  captions: [
    {
      ru: "Один шаг. Без документации, без RTSP-гадания.",
      en: "One step. No docs, no RTSP guessing.",
    },
    {
      ru: "Подбираем модель из базы на 3 600 брендов.",
      en: "We pick a model from 3,600 brands in the DB.",
    },
    {
      ru: "20 воркеров проверяют каждый URL — скриншот, кодек, латентность.",
      en: "20 workers test each URL — snapshot, codec, latency.",
    },
  ],
} as const;

/** Three screenshots out of the seven shipped — start, model match, and the
 *  visually most active middle frame. The video at the top carries the rest. */
const SHOTS = [
  { src: "/assets/strix/01-enter-ip.webp", w: 2878, h: 1626 },
  { src: "/assets/strix/02-camera-config.webp", w: 2878, h: 1626 },
  { src: "/assets/strix/04-testing.webp", w: 2878, h: 1626 },
];

const VIDEO = {
  src: "/assets/strix/demo.mp4",
  w: 1200,
  h: 676,
};

/** Gallery used by the lightbox when any tile in this section is clicked. */
const GALLERY: LightboxItem[] = [
  {
    kind: "video",
    src: VIDEO.src,
    width: VIDEO.w,
    height: VIDEO.h,
  },
  ...SHOTS.map((s, i) => ({
    kind: "image" as const,
    src: s.src,
    alt: `Strix step ${i + 1}`,
    width: s.w,
    height: s.h,
  })),
];

export function StrixProject({ lang }: StrixProjectProps) {
  const sectionRef = useRef<HTMLElement>(null);
  /** A slow parallax on the violet glow keeps the section visually alive even
   *  when no media is currently animating. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="strix"
      className="relative isolate overflow-hidden bg-[#06030d] py-32 text-white sm:py-44"
      style={{
        // Font scope: everything inside this section defaults to JetBrains.
        fontFamily: "var(--font-jetbrains), ui-monospace, monospace",
      }}
    >
      {/* Violet glow that follows the scroll. */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-[40%] left-1/2 z-0 h-[120%] w-[140%] -translate-x-1/2 opacity-90"
      >
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,#5b2bdc55,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,#8b5cf633,transparent_75%)] mix-blend-screen" />
      </motion.div>

      {/* Subtle grain — Strix is workshop-software, not silicon-valley. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* ----------------------------------------- header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-violet-300/80">
            <span aria-hidden className="h-px w-10 bg-violet-300/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-jetbrains)] text-[18vw] leading-[0.85] font-light tracking-[-0.04em] sm:text-[14vw] lg:text-[200px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[640px] text-lg leading-snug text-white/75 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* ----------------------------------------- number wall */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.numbers.map((n) => (
            <div key={n.value}>
              <div className="text-3xl tabular-nums text-white sm:text-5xl">
                {n.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">
                {n.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ------------------------------------------- demo video, full-bleed */}
      <div className="relative z-10 mt-20 px-5 sm:mt-28 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Media
            kind="video"
            src={VIDEO.src}
            width={VIDEO.w}
            height={VIDEO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-violet-400/20 shadow-[0_30px_120px_-30px_rgba(91,43,220,0.6)]"
          />
          <Caption text={COPY.videoCaption[lang]} className="mt-6" />
        </div>
      </div>

      {/* ------------------------------------------- screenshots + captions */}
      <div className="relative z-10 mx-auto mt-24 max-w-[1400px] px-5 sm:mt-32 sm:px-8 lg:px-16">
        <div className="space-y-20 sm:space-y-28">
          {SHOTS.map((s, i) => (
            <PipelineStep
              key={s.src}
              index={i}
              src={s.src}
              w={s.w}
              h={s.h}
              caption={COPY.captions[i][lang]}
              galleryIndex={i + 1 /* +1 because video is at 0 */}
            />
          ))}
        </div>
      </div>

      {/* Fade-out to the next project — softer transition than a hard cut. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]"
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function PipelineStep({
  index,
  src,
  w,
  h,
  caption,
  galleryIndex,
}: {
  index: number;
  src: string;
  w: number;
  h: number;
  caption: string;
  galleryIndex: number;
}) {
  return (
    <div className="relative">
      {/* Step number floating on the side. */}
      <div className="mb-4 flex items-baseline gap-3 text-xs uppercase tracking-[0.3em] text-violet-300/70">
        <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden className="h-px w-8 bg-violet-300/40" />
      </div>

      <Media
        kind="image"
        src={src}
        alt={caption}
        width={w}
        height={h}
        gallery={GALLERY}
        index={galleryIndex}
        className="rounded-xl ring-1 ring-white/10 shadow-[0_30px_80px_-40px_rgba(91,43,220,0.6)]"
      />

      <Caption text={caption} className="mt-5" />
    </div>
  );
}

function Caption({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-[640px] text-base leading-snug text-white/80 sm:text-lg ${className}`}
    >
      {text}
    </motion.p>
  );
}

