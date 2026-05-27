"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

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
  kicker: { ru: "12 · Клиент · Крым", en: "12 · Client · Crimea" },
  title: { ru: "Ягопере", en: "Yagopere" },
  tagline: {
    ru: "Сайт-витрина крымского семейного хозяйства. Ягоды, фрукты, орехи, саженцы, перепелиная продукция.",
    en: "Storefront for a Crimean family farm. Berries, fruit, nuts, saplings, quail products.",
  },
  cats: [
    { icon: "🫐", ru: "Ягоды", en: "Berries" },
    { icon: "🍑", ru: "Фрукты", en: "Fruit" },
    { icon: "🥜", ru: "Орехи", en: "Nuts" },
    { icon: "🌱", ru: "Саженцы", en: "Saplings" },
    { icon: "🐦", ru: "Птица", en: "Poultry" },
  ],
  shotCaption: {
    ru: "Каталог по сезону 2025. Заказ — в Telegram.",
    en: "2025 season catalogue. Orders go through Telegram.",
  },
  facts: [
    { k: { ru: "Сбор", en: "Picking" }, v: { ru: "100% вручную", en: "100% by hand" } },
    { k: { ru: "Локаций", en: "Locations" }, v: { ru: "3 точки в Крыму", en: "3 in Crimea" } },
    { k: { ru: "Заказ", en: "Order via" }, v: { ru: "Telegram", en: "Telegram" } },
  ],
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
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#3b1f2b]/65">
            <span aria-hidden className="h-px w-10 bg-[#3b1f2b]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[var(--font-fraunces)] text-[18vw] leading-[0.9] font-light tracking-[-0.02em] text-[#5b1e2e] sm:text-[13vw] lg:text-[200px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[660px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#3b1f2b]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Category pictogram strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-5 gap-2 border-y border-[#3b1f2b]/20 py-8 text-center sm:gap-8"
        >
          {COPY.cats.map((c) => (
            <div key={c.icon}>
              <div className="text-3xl sm:text-5xl" aria-hidden>
                {c.icon}
              </div>
              <div className="mt-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#3b1f2b]/70 sm:text-sm">
                {c[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Screenshot */}
        <div className="mt-20 sm:mt-28">
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[var(--font-instrument)] text-xl italic text-[#3b1f2b]/85 sm:text-2xl"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-x-6 gap-y-8 border-t border-[#3b1f2b]/20 pt-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#3b1f2b]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-fraunces)] text-xl leading-tight sm:text-2xl">
                {f.v[lang]}
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
            className="group inline-flex items-center gap-3 rounded-full bg-[#5b1e2e] px-7 py-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#fbf3e5] transition hover:bg-[#3b1f2b]"
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
