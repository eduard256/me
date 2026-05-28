"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  mcp-js                                                                    */
/* -------------------------------------------------------------------------- */
/*
 * Text-only slide. The data flow diagram (Claude → stdio → Node → WS →
 * Chrome → eval) is the entire personality of the project.
 */

interface McpJsProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "27 · MCP · Chrome Extension", en: "27 · MCP · Chrome Extension" },
  title: { ru: "mcp-js", en: "mcp-js" },
  tagline: {
    ru: "Один tool `execute_js`. Claude получает руль в активной вкладке Chrome.",
    en: "One tool: `execute_js`. Claude gets the wheel in your active Chrome tab.",
  },
  flow: [
    "Claude Code",
    "stdio JSON-RPC",
    "MCP Server · Node",
    "WebSocket :18432",
    "Chrome Extension · MV3",
    "chrome.scripting.executeScript",
    "eval() on the page",
  ],
  facts: [
    { k: { ru: "Реализация", en: "Build" }, v: { ru: "JSON-RPC руками", en: "JSON-RPC by hand" } },
    { k: { ru: "Keep-alive", en: "Keep-alive" }, v: { ru: "offscreen + alarms", en: "offscreen + alarms" } },
    { k: { ru: "Reconnect", en: "Reconnect" }, v: { ru: "Каждые 3 секунды", en: "Every 3 seconds" } },
    { k: { ru: "Зависимости", en: "Dependencies" }, v: "ws · uuid" },
  ],
  links: { github: "github.com/eduard256/mcp-js" },
} as const;

export function McpJsProject({ lang }: McpJsProjectProps) {
  return (
    <section
      id="mcp-js"
      className="relative isolate overflow-hidden bg-[#13110b] py-32 text-[#ffe9a8] sm:py-44"
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#e9c96d]">
            <span aria-hidden className="h-px w-10 bg-[#e9c96d]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[14vw] leading-[0.88] font-medium tracking-[-0.04em] sm:text-[10vw] lg:text-[140px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[700px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#ffe9a8]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Flow as a vertical stack of pills with arrows */}
        <div className="mt-14 grid gap-3 sm:gap-2">
          {COPY.flow.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#e9c96d]/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-jetbrains)] text-base text-[#ffe9a8] sm:text-lg">
                {step}
              </span>
              {i < COPY.flow.length - 1 && (
                <span aria-hidden className="hidden text-[#e9c96d]/40 sm:inline">
                  ↓
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#ffe9a8]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[family-name:var(--font-inter-tight)] text-base leading-snug sm:text-lg">
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
            className="group inline-flex items-center gap-3 rounded-full bg-[#e9c96d] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#13110b] transition hover:bg-[#ffe9a8]"
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
