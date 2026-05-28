"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  russia-blocked-ips                                                        */
/* -------------------------------------------------------------------------- */
/*
 * The slide is one giant number. The number is the product.
 */

interface RussiaBlockedIpsProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "26 · OSS · Данные", en: "26 · OSS · Data" },
  title: { ru: "russia-blocked-ips", en: "russia-blocked-ips" },
  tagline: {
    ru: "Регулярно обновляемый список CIDR из 146 источников и кросс-платформенный клиент-демон для роутера.",
    en: "A regularly updated CIDR list from 146 sources, plus a cross-platform daemon for routers.",
  },
  big: "401 874 816",
  bigLabel: {
    ru: "IPv4-адресов",
    en: "IPv4 addresses",
  },
  pillars: [
    { v: "44 148", k: { ru: "CIDR-блоков", en: "CIDR blocks" } },
    { v: "146", k: { ru: "источников", en: "sources" } },
    { v: "9.4%", k: { ru: "IPv4-пространства", en: "of IPv4 space" } },
    { v: "6h", k: { ru: "период обновления", en: "refresh cadence" } },
  ],
  links: { github: "github.com/eduard256/russia-blocked-ips" },
} as const;

export function RussiaBlockedIpsProject({ lang }: RussiaBlockedIpsProjectProps) {
  return (
    <section
      id="russia-blocked-ips"
      className="relative isolate overflow-hidden bg-[#0a0a0d] py-32 text-[#f3f3f3] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {/* Faint dotted "wall" texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#f3f3f3 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#f3f3f3]/55">
            <span aria-hidden className="h-px w-10 bg-[#f3f3f3]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[8vw] leading-[0.92] font-light tracking-[-0.04em] sm:text-[5vw] lg:text-[80px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#f3f3f3]/80 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* The number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28"
        >
          <div className="font-[var(--font-jetbrains)] text-[32vw] leading-[0.85] font-light tabular-nums tracking-[-0.05em] sm:text-[22vw] lg:text-[300px]">
            {COPY.big}
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.3em] text-[#f3f3f3]/65">
            {COPY.bigLabel[lang]}
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.pillars.map((p) => (
            <div key={p.v}>
              <div className="font-[var(--font-jetbrains)] text-4xl tabular-nums text-white sm:text-5xl">
                {p.v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[#f3f3f3]/55">
                {p.k[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0a0a0d] transition hover:bg-[#f3f3f3]"
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
