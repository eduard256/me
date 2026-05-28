"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

/* -------------------------------------------------------------------------- */
/*  Ягопере                                                                   */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Burgundy serif on cream, an emoji-pictogram strip pulled straight
 *     from the client site's category tabs (🫐 🍑 🥜 🌱 🐦) — diegetic.
 *   - Warm and personal: "family farm" is not a tagline here, it's the
 *     reason the entire page is calm.
 */

interface YagopereProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "Клиент · Крым", en: "Client · Crimea" },
  title: { ru: "Yagopere", en: "Yagopere" },
  tagline: {
    ru: "Сайт-витрина крымского семейного хозяйства.",
    en: "Storefront for a Crimean family farm.",
  },
  links: { site: "yagopere.webaweba.com" },
} as const;

const HERO = { src: "/assets/yagopere/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "Yagopere catalogue", width: HERO.w, height: HERO.h },
];

export function YagopereProject({ lang }: YagopereProjectProps) {
  return (
    <section
      id="yagopere"
      className="relative isolate overflow-hidden bg-[#fbf3e5] py-32 text-[#3b1f2b] sm:py-44"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#3b1f2b]/65">
            <span aria-hidden className="h-px w-10 bg-[#3b1f2b]/40" />
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-[18vw] leading-[0.9] font-light tracking-[-0.02em] text-[#5b1e2e] sm:text-[13vw] lg:text-[200px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[660px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#3b1f2b]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-16 sm:mt-24">
          <Media
            kind="image"
            src={HERO.src}
            alt="Yagopere"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-md ring-1 ring-[#3b1f2b]/15 shadow-[0_50px_120px_-40px_rgba(59,31,43,0.35)]"
          />
        </div>

        {/* Link */}
        <div className="mt-12">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#5b1e2e] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#fbf3e5] transition hover:bg-[#3b1f2b]"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
