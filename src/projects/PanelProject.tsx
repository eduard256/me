"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Home Panel                                                                */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Cold violet dashboard chrome, sparkline-thin lines. Reads as a control
 *     room, not a marketing site.
 *   - "Private, not for sale" sits as a typewriter stamp in the corner so
 *     the visitor isn't tricked into thinking they can buy it.
 */

interface PanelProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "14 · Личный · Приватный", en: "14 · Personal · Private" },
  title: { ru: "Home Panel", en: "Home Panel" },
  tagline: {
    ru: "Личная панель для homelab автора. Серверы, виртуалки, камеры, умный дом, автоматизации — и AI, который всем этим управляет.",
    en: "A personal homelab dashboard. Servers, VMs, cameras, smart home, automations — and an AI that runs them by voice and text.",
  },
  stamp: {
    ru: "Приватный · не продаётся · не open source",
    en: "Private · not for sale · not open source",
  },
  facts: [
    { k: { ru: "Фронт", en: "Front" }, v: "React" },
    { k: { ru: "Бэк", en: "Back" }, v: "Python" },
    { k: { ru: "AI", en: "AI" }, v: { ru: "Чат-управление", en: "Chat-driven control" } },
    { k: { ru: "Замещает", en: "Replaces" }, v: { ru: "Proxmox · Frigate · HA", en: "Proxmox · Frigate · HA" } },
  ],
  shotCaption: {
    ru: "Карточки серверов с живыми графиками CPU/RAM/DISK/Network.",
    en: "Server cards with live CPU/RAM/DISK/Network sparklines.",
  },
} as const;

const HERO = { src: "/assets/panel/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "Home Panel", width: HERO.w, height: HERO.h },
];

export function PanelProject({ lang }: PanelProjectProps) {
  return (
    <section
      id="panel"
      className="relative isolate overflow-hidden bg-[#0e0a1f] py-32 text-[#e0d8ff] sm:py-44"
      style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
    >
      {/* Background violet starfield-ish glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_50%_at_70%_0%,#5b3fb833,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header with stamp */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-start justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#a896ff]">
              <span aria-hidden className="h-px w-10 bg-[#a896ff]/40" />
              <span>{COPY.kicker[lang]}</span>
            </div>

            <h2 className="mt-6 text-[12vw] leading-[0.9] font-light tracking-[-0.04em] sm:text-[8vw] lg:text-[140px]">
              {COPY.title[lang]}
            </h2>
          </div>

          <div
            className="rotate-[-2deg] border-2 border-dashed border-[#a896ff]/50 px-4 py-2 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#a896ff]/85"
            aria-label="Private project stamp"
          >
            {COPY.stamp[lang]}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-[720px] text-xl leading-snug text-[#e0d8ff]/85 sm:text-2xl"
        >
          {COPY.tagline[lang]}
        </motion.p>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#e0d8ff]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 text-lg leading-snug sm:text-xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Screenshot */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={HERO.src}
            alt="Home Panel dashboard"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#a896ff]/20 shadow-[0_50px_120px_-40px_rgba(91,63,184,0.4)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#e0d8ff]/70"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
