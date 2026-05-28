"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

/* -------------------------------------------------------------------------- */
/*  Палуба                                                                    */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Sun-bleached cream paper, hand-cut italic serif, a single sea-foam
 *     accent stripe that animates on scroll like a tide line.
 *   - The screenshot is tilted ever so slightly, as if a waiter handed you
 *     an iPad over the bungalow railing.
 *   - Tone: holiday, slow, never industrial.
 */

interface PalubaProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "Клиент · QR-меню", en: "Client · QR menu" },
  title: { ru: "Палуба", en: "Paluba" },
  tagline: {
    ru: "QR на лежаке → заказ летит на кухню. Общая корзина в реальном времени.",
    en: "QR on the sunbed → order flies to the kitchen. Shared cart, real time.",
  },
} as const;

const HERO = { src: "/assets/paluba/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "Paluba QR menu", width: HERO.w, height: HERO.h },
];

export function PalubaProject({ lang }: PalubaProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  /** A horizontal accent line that drifts as the user scrolls — a tide. */
  const tideX = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      id="paluba"
      className="relative isolate overflow-hidden bg-[#f1e7d6] py-32 text-[#1f2a2b] sm:py-44"
      style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
    >
      {/* Tide line */}
      <motion.div
        aria-hidden
        style={{ x: tideX }}
        className="pointer-events-none absolute top-32 left-0 z-0 h-px w-[140%] bg-[#1f2a2b]/30"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#1f2a2b]/65">
            <span aria-hidden className="h-px w-10 bg-[#1f2a2b]/40" />
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>

          <h2
            className="mt-6 font-[family-name:var(--font-instrument)] text-[18vw] leading-[0.92] italic font-normal tracking-[-0.02em] sm:text-[13vw] lg:text-[200px]"
            style={{ fontFeatureSettings: '"liga"' }}
          >
            {COPY.title[lang]}
            <span className="text-[#c66b50]">*</span>
          </h2>

          <p className="mt-8 max-w-[700px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#1f2a2b]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Tilted screenshot */}
        <div className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="origin-center"
          >
            <Media
              kind="image"
              src={HERO.src}
              alt="Paluba"
              width={HERO.w}
              height={HERO.h}
              gallery={GALLERY}
              index={0}
              className="rounded-md ring-1 ring-[#1f2a2b]/15 shadow-[0_60px_120px_-40px_rgba(31,42,43,0.35)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
