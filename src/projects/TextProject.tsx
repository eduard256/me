"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Text Normalizer                                                           */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - True terminal: near-black background, single mono font, no decoration.
 *   - The "before / after" is shown as actual ragged text, not as a fancy
 *     diagram. The tool exists to flatten ugly text — the slide demonstrates
 *     the ugliness it removes.
 */

interface TextProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "21 · Утилита · Docker", en: "21 · Utility · Docker" },
  title: { ru: "text-normalizer", en: "text-normalizer" },
  tagline: {
    ru: "Срезает мусорные пробелы и переносы строк из вывода Claude Code, ssh-логов и pdf-вырезок.",
    en: "Strips trash whitespace and line breaks from Claude Code output, SSH logs and PDF clipboard junk.",
  },
  before: `Your retain is set to days: 1 with mode: motion - this means Frigate only keeps segments
  where motion was actually detected. If there was no motion during those hours, the segments
  get cleaned up even though the day hasn't passed yet.`,
  after: `Your retain is set to days: 1 with mode: motion — this means Frigate only keeps segments where motion was actually detected. If there was no motion during those hours, the segments get cleaned up even though the day hasn't passed yet.`,
  shotCaption: {
    ru: "Вставил слева — справа готовый текст. Без облака.",
    en: "Paste on the left — clean text on the right. No cloud.",
  },
  links: { site: "text.webaweba.com", github: "github.com/eduard256/text-normalizer" },
} as const;

const HERO = { src: "/assets/text/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "text-normalizer", width: HERO.w, height: HERO.h },
];

export function TextProject({ lang }: TextProjectProps) {
  return (
    <section
      id="text"
      className="relative isolate overflow-hidden bg-[#0b0b0e] py-32 text-[#d6dadd] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#7eddc6]">
            <span aria-hidden className="h-px w-10 bg-[#7eddc6]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[8vw] leading-[0.92] font-light tracking-[-0.04em] sm:text-[5vw] lg:text-[80px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[720px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#d6dadd]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Before / After in real type */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-[#7eddc6]/15 bg-[#13131a] p-5 sm:p-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#d6dadd]/50">
              {lang === "ru" ? "Было" : "Before"}
            </div>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-[13px] leading-relaxed text-[#d6dadd]/70 sm:text-sm">
              {COPY.before}
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="rounded-xl border border-[#7eddc6]/40 bg-[#0d1716] p-5 sm:p-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#7eddc6]">
              {lang === "ru" ? "Стало" : "After"}
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-[#d6dadd]/95 sm:text-sm">
              {COPY.after}
            </p>
          </motion.div>
        </div>

        {/* Screenshot */}
        <div className="mt-16">
          <Media
            kind="image"
            src={HERO.src}
            alt="text-normalizer UI"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#7eddc6]/20 shadow-[0_40px_100px_-30px_rgba(126,221,198,0.25)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[640px] text-sm uppercase tracking-[0.18em] text-[#d6dadd]/65"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#7eddc6] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0b0b0e] transition hover:bg-white"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d6dadd]/25 px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#d6dadd]/85 transition hover:border-white hover:bg-white hover:text-black"
          >
            {COPY.links.github}
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
