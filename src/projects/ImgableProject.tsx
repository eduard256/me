"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  imgable                                                                   */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Bone-white milky background. Big, soft, unambiguously friendly.
 *   - One sharp serif headline that contradicts the softness — like the
 *     project itself: "cute outside, monster inside".
 *   - A teal-violet accent for the AI pipeline numbers, pulled from the
 *     real release demo's UI palette.
 *
 * Rhythm:
 *   1. Title + tagline.
 *   2. Two-column block: a sharp "what's inside" fact wall + the demo video.
 *   3. Single full-width hero screenshot.
 *   4. Diagonal photo strip (3 screenshots, slightly different tilts).
 *
 * Captions stay between media, never overlap them.
 */

interface ImgableProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "03 · Демонстрация навыка · Go + Python + TS", en: "03 · Skill demo · Go + Python + TS" },
  title: { ru: "imgable", en: "imgable" },
  tagline: {
    ru: "Своя фото-галерея в духе Nextcloud и Immich. Каждое фото проходит предобработку и оптимизацию в один универсальный формат, чтобы лента листалась мгновенно.",
    en: "A self-hosted photo gallery in the spirit of Nextcloud and Immich. Every photo is pre-processed and optimised into one universal format so the feed scrolls instantly.",
  },
  note: {
    ru: "Масштабный проект как демонстрация навыка, а не продукт для прода.",
    en: "A large project built to demonstrate skill, not a production product.",
  },
  facts: [
    { k: { ru: "Сервисов", en: "Services" }, v: "5" },
    { k: { ru: "Языков", en: "Languages" }, v: "3" },
    { k: { ru: "Конвейер", en: "Pipeline" }, v: { ru: "Всё → WebP", en: "Everything → WebP" } },
    { k: { ru: "Скорость", en: "Throughput" }, v: { ru: "49 фото/сек", en: "49 photos/sec" } },
  ],
  shotCaption: {
    ru: "Альтернатива Nextcloud и Immich. Локальный AI, без облаков.",
    en: "An alternative to Nextcloud and Immich. Local AI, no clouds.",
  },
  links: { github: "github.com/eduard256/imgable" },
} as const;

const MEDIA = {
  hero: { src: "/assets/imgable/01.webp", w: 2880, h: 1628 },
  strip: [
    { src: "/assets/imgable/02.webp", w: 2880, h: 1628 },
    { src: "/assets/imgable/03.webp", w: 2880, h: 1628 },
    { src: "/assets/imgable/04.webp", w: 2880, h: 1628 },
  ],
};

const GALLERY: LightboxItem[] = [
  { kind: "image", src: MEDIA.hero.src, alt: "imgable gallery", width: MEDIA.hero.w, height: MEDIA.hero.h },
  ...MEDIA.strip.map((s, i) => ({
    kind: "image" as const,
    src: s.src,
    alt: `imgable detail ${i + 1}`,
    width: s.w,
    height: s.h,
  })),
];

export function ImgableProject({ lang }: ImgableProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={ref}
      id="imgable"
      className="relative isolate overflow-hidden bg-[#f4efe6] py-32 text-[#0d0d10] sm:py-44"
      style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
    >
      {/* Soft floating colour dots that move with the scroll. */}
      <motion.div
        aria-hidden
        style={{ y: dotY }}
        className="pointer-events-none absolute -top-32 -right-24 z-0 h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] rounded-full bg-gradient-to-br from-[#a4d4c8] via-[#dac3ff] to-transparent opacity-50 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: dotY }}
        className="pointer-events-none absolute bottom-0 -left-32 z-0 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full bg-gradient-to-br from-[#ffd6c7] via-[#ffc1e3] to-transparent opacity-50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#0d0d10]/55">
            <span aria-hidden className="h-px w-10 bg-[#0d0d10]/30" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2
            className="mt-6 font-[family-name:var(--font-fraunces)] text-[18vw] leading-[0.86] font-light tracking-[-0.045em] sm:text-[13vw] lg:text-[200px]"
            style={{ fontFeatureSettings: '"ss01", "liga"' }}
          >
            {COPY.title[lang]}
            <span className="text-[#7c4dff]">.</span>
          </h2>

          <p className="mt-6 max-w-[680px] text-xl leading-snug text-[#0d0d10]/80 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
          <p className="mt-4 max-w-[560px] font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#0d0d10]/55 sm:text-sm">
            {COPY.note[lang]}
          </p>
        </motion.div>

        {/* Facts row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#0d0d10]/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[family-name:var(--font-fraunces)] text-4xl text-[#0d0d10] tabular-nums sm:text-5xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
              <div className="mt-2 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#0d0d10]/55">
                {f.k[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Hero screenshot */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={MEDIA.hero.src}
            alt="imgable gallery"
            width={MEDIA.hero.w}
            height={MEDIA.hero.h}
            gallery={GALLERY}
            index={0}
            className="rounded-2xl ring-1 ring-[#0d0d10]/10 shadow-[0_50px_140px_-50px_rgba(13,13,16,0.45)]"
          />
          <Caption text={COPY.shotCaption[lang]} className="mt-6" />
        </div>

        {/* Strip of three with subtle tilts */}
        <div className="mt-20 grid gap-12 sm:mt-28 sm:grid-cols-3 sm:gap-8">
          {MEDIA.strip.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <Media
                kind="image"
                src={s.src}
                alt={`imgable ${i + 2}`}
                width={s.w}
                height={s.h}
                gallery={GALLERY}
                index={i + 1}
                className="rounded-xl ring-1 ring-[#0d0d10]/10 shadow-[0_30px_70px_-30px_rgba(13,13,16,0.3)]"
              />
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0d0d10] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#f4efe6] transition hover:bg-[#7c4dff]"
          >
            <span>{COPY.links.github}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}

function Caption({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-[680px] font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#0d0d10]/75 sm:text-base ${className}`}
    >
      {text}
    </motion.p>
  );
}
