"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

/* -------------------------------------------------------------------------- */
/*  mcp-openai-images-audio                                                   */
/* -------------------------------------------------------------------------- */
/*
 * Text-only slide. No screenshot — the project is a single MCP tool, so the
 * page leads with the tool call itself (one code block) plus the facts.
 * Pastel gradient mesh sampled from gpt-image output keeps the AI-image
 * personality without showing a generated picture.
 */

interface McpOpenaiImagesAudioProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "MCP · PyPI", en: "MCP · PyPI" },
  title: { ru: "mcp-openai-images-audio", en: "mcp-openai-images-audio" },
  tagline: {
    ru: "Один MCP-tool `image`. gpt-image-2 / gpt-image-1.5 прямо в Claude Code. Файлы пишутся на диск — контекст остаётся чистым.",
    en: "One MCP tool `image`. gpt-image-2 / gpt-image-1.5 inside Claude Code. Files land on disk — the context stays clean.",
  },
  facts: [
    { k: { ru: "Tools", en: "Tools" }, v: "1" },
    { k: { ru: "Режим", en: "Mode" }, v: { ru: "Авто-выбор по входу", en: "Auto-picked from input" } },
    { k: { ru: "Транспорт", en: "Transport" }, v: "stdio" },
    { k: { ru: "Релиз", en: "Release" }, v: "v0.1.0 · PyPI" },
  ],
  links: { github: "github.com/eduard256/mcp-openai-images-audio" },
} as const;

const SNIPPET = `image(
  prompt="github, reimagined by instagram's team",
  output_path="/abs/path/mockup.webp",
  size="2048x1152",
  quality="high",
)
→ { path, bytes, model: "gpt-image-2",
    has_alpha: false, estimated_cost_usd: 0.21 }`;

export function McpOpenaiImagesAudioProject({
  lang,
}: McpOpenaiImagesAudioProjectProps) {
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
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[8vw] leading-[0.95] font-light tracking-[-0.04em] sm:text-[5vw] lg:text-[72px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#1c1820]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* The tool call — this replaces the screenshot. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <pre className="overflow-x-auto rounded-2xl bg-[#1c1820]/90 p-6 text-[12px] leading-relaxed text-[#f5f0e6] ring-1 ring-[#1c1820]/20 sm:p-8 sm:text-sm">
            <code>{SNIPPET}</code>
          </pre>
        </motion.div>

        {/* Facts */}
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
              <div className="mt-3 font-[family-name:var(--font-inter-tight)] text-lg sm:text-xl">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

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
    </section>
  );
}
