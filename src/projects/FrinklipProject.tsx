"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Frinklip                                                                  */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Mint paper, charcoal type. A weekend tool: silly name, useful job.
 *   - Two screenshots laid as a comic strip — drop on the left, paths on
 *     the right — with a "→" between them. The arrow IS the explanation.
 */

interface FrinklipProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "20 · AI-tooling · Go", en: "20 · AI tooling · Go" },
  title: { ru: "frinklip", en: "frinklip" },
  tagline: {
    ru: "Кидаешь файл в браузер из любого устройства в LAN — получаешь абсолютный путь, готовый для вставки в Claude Code.",
    en: "Drag a file into the browser from anywhere on your LAN — receive an absolute path ready to paste into Claude Code.",
  },
  captionLeft: { ru: "Бросил.", en: "Dropped." },
  captionRight: { ru: "Получил путь.", en: "Got the path." },
  facts: [
    { k: { ru: "Зачем", en: "Why" }, v: { ru: "SSH-терминал не принимает drag-n-drop", en: "An SSH terminal doesn't accept drag-and-drop" } },
    { k: { ru: "Порт", en: "Port" }, v: "3467" },
    { k: { ru: "Установка", en: "Install" }, v: "one bash line" },
    { k: { ru: "PWA", en: "PWA" }, v: { ru: "Да, ставится в док", en: "Yes, dock-installable" } },
  ],
  links: { github: "github.com/eduard256/frinklip" },
} as const;

const SHOTS = [
  { src: "/assets/frinklip/hero.webp", w: 1600, h: 906 },
  { src: "/assets/frinklip/paths.webp", w: 1600, h: 902 },
];

const GALLERY: LightboxItem[] = SHOTS.map((s, i) => ({
  kind: "image" as const,
  src: s.src,
  alt: `frinklip ${i + 1}`,
  width: s.w,
  height: s.h,
}));

export function FrinklipProject({ lang }: FrinklipProjectProps) {
  return (
    <section
      id="frinklip"
      className="relative isolate overflow-hidden bg-[#dff2e7] py-32 text-[#0f2a1e] sm:py-44"
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#0f2a1e]/65">
            <span aria-hidden className="h-px w-10 bg-[#0f2a1e]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[18vw] leading-[0.88] font-medium tracking-[-0.04em] sm:text-[12vw] lg:text-[180px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[720px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#0f2a1e]/80 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Drop → path comic strip */}
        <div className="mt-16 grid items-center gap-6 sm:mt-24 sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <Media
              kind="image"
              src={SHOTS[0].src}
              alt="frinklip drop"
              width={SHOTS[0].w}
              height={SHOTS[0].h}
              gallery={GALLERY}
              index={0}
              className="rounded-xl ring-1 ring-[#0f2a1e]/15 shadow-[0_30px_70px_-30px_rgba(15,42,30,0.3)]"
            />
            <p className="mt-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#0f2a1e]/65">
              {COPY.captionLeft[lang]}
            </p>
          </div>

          <div
            className="text-center font-[var(--font-space-grotesk)] text-5xl font-medium text-[#0f2a1e] sm:text-7xl"
            aria-hidden
          >
            →
          </div>

          <div>
            <Media
              kind="image"
              src={SHOTS[1].src}
              alt="frinklip paths"
              width={SHOTS[1].w}
              height={SHOTS[1].h}
              gallery={GALLERY}
              index={1}
              className="rounded-xl ring-1 ring-[#0f2a1e]/15 shadow-[0_30px_70px_-30px_rgba(15,42,30,0.3)]"
            />
            <p className="mt-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#0f2a1e]/65">
              {COPY.captionRight[lang]}
            </p>
          </div>
        </div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#0f2a1e]/20 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#0f2a1e]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 text-base leading-snug text-[#0f2a1e] sm:text-lg">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0f2a1e] px-7 py-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#dff2e7] transition hover:bg-[#1f5340]"
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
