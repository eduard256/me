"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  mcp-openai-images-audio                                                   */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Pastel gradient mesh sampled from gpt-image's own output — pinks,
 *     teals, dust-yellow. The slide IS a generated image.
 *   - Black mono type sits on top like a photo book caption.
 */

interface McpOpenaiImagesAudioProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "23 · MCP · PyPI", en: "23 · MCP · PyPI" },
  title: { ru: "mcp-openai-images-audio", en: "mcp-openai-images-audio" },
  tagline: {
    ru: "Один MCP-tool `image`. gpt-image-2 / gpt-image-1.5 прямо в Claude Code. Файлы пишутся на диск, контекст остаётся чистым.",
    en: "One MCP tool `image`. gpt-image-2 / gpt-image-1.5 inside Claude Code. Files land on disk; the context stays clean.",
  },
  facts: [
    { k: { ru: "Tools", en: "Tools" }, v: "1" },
    { k: { ru: "Эндпоинтов", en: "Endpoints" }, v: { ru: "Авто-выбор по входу", en: "Auto-picked from input" } },
    { k: { ru: "Транспорт", en: "Transport" }, v: "stdio" },
    { k: { ru: "Релиз", en: "Release" }, v: "v0.1.0 · PyPI" },
  ],
  shotCaption: {
    ru: "Тот самый «GitHub, переосмысленный командой Instagram». Сгенерирован одним вызовом.",
    en: "The original example: “GitHub, reimagined by Instagram's team.” One call, one image.",
  },
  links: { github: "github.com/eduard256/mcp-openai-images-audio" },
} as const;

const HERO = { src: "/assets/mcp-openai-images-audio/example.webp", w: 2048, h: 1152 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "MCP image example", width: HERO.w, height: HERO.h },
];

export function McpOpenaiImagesAudioProject({ lang }: McpOpenaiImagesAudioProjectProps) {
  return (
    <section
      id="mcp-openai-images-audio"
      className="relative isolate overflow-hidden py-32 text-[#1c1820] sm:py-44"
      style={{
        fontFamily: "var(--font-jetbrains), ui-monospace, monospace",
        background:
          "radial-gradient(60% 50% at 20% 20%, #ffd4b8 0%, transparent 60%), radial-gradient(70% 60% at 80% 30%, #b6e2d6 0%, transparent 65%), radial-gradient(80% 70% at 50% 90%, #d8c9ff 0%, transparent 70%), #f5f0e6",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#1c1820]/60">
            <span aria-hidden className="h-px w-10 bg-[#1c1820]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[8vw] leading-[0.95] font-light tracking-[-0.04em] sm:text-[5vw] lg:text-[72px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#1c1820]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#1c1820]/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#1c1820]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-inter-tight)] text-lg sm:text-xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <Media
            kind="image"
            src={HERO.src}
            alt="MCP image example"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-2xl ring-1 ring-[#1c1820]/15 shadow-[0_50px_120px_-40px_rgba(28,24,32,0.35)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] text-xs uppercase tracking-[0.18em] text-[#1c1820]/70"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        <div className="mt-12">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1c1820] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#f5f0e6] transition hover:bg-black"
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
