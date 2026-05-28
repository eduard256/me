"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

/* -------------------------------------------------------------------------- */
/*  claudecode2api                                                            */
/* -------------------------------------------------------------------------- */
/*
 * Text-only slide. There is no UI to screenshot — the project IS HTTP.
 * The page renders the HTTP request / SSE response that defines the product.
 */

interface Claudecode2apiProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "OSS · HTTP-шлюз", en: "OSS · HTTP gateway" },
  title: { ru: "claudecode2api", en: "claudecode2api" },
  tagline: {
    ru: "Локальный `claude` CLI превращается в HTTP-сервис: SSE-стриминг, параллельные сессии, тонкие пермишены, basic auth.",
    en: "Your local `claude` CLI as an HTTP service: SSE streaming, parallel sessions, tight permissions, basic auth.",
  },
  facts: [
    { k: { ru: "Транспорт", en: "Transport" }, v: "HTTP + SSE" },
    { k: { ru: "Установка", en: "Install" }, v: { ru: "Один curl-скрипт", en: "One curl script" } },
    { k: { ru: "Permission", en: "Permission" }, v: "Bash(git:*) · mcp__*" },
    { k: { ru: "Сервис", en: "Service" }, v: "systemd" },
  ],
  links: { github: "github.com/eduard256/claudecode2api" },
} as const;

const REQ = `POST /chat
Authorization: Basic ...
Content-Type: application/json

{
  "prompt": "Create hello.txt with Hello World",
  "cwd": "/home/user/projects/myapp",
  "model": "sonnet",
  "tools": ["Bash"],
  "allowed_tools": ["Bash(git:*)"]
}`;

const RES = `event: message
data: {"type":"system","subtype":"init","session_id":"…"}

event: message
data: {"type":"assistant","message":{"content":[…]}}

event: message
data: {"type":"result","subtype":"success","total_cost_usd":0.01}

event: done
data: {"process_id":"…"}`;

export function Claudecode2apiProject({ lang }: Claudecode2apiProjectProps) {
  return (
    <section
      id="claudecode2api"
      className="relative isolate overflow-hidden bg-[#0a0a0d] py-32 text-[#d6e0ec] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#7fb1e5]">
            <span aria-hidden className="h-px w-10 bg-[#7fb1e5]/40" />
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[12vw] leading-[0.9] font-light tracking-[-0.04em] sm:text-[7vw] lg:text-[120px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#d6e0ec]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Request / SSE response side by side */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-[#7fb1e5]/15 bg-[#10131b] p-5 sm:p-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#7fb1e5]">
              {lang === "ru" ? "Запрос" : "Request"}
            </div>
            <pre className="mt-3 overflow-x-auto whitespace-pre text-[12px] leading-relaxed text-[#d6e0ec]/85 sm:text-sm">
              {REQ}
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="rounded-xl border border-[#7fb1e5]/15 bg-[#10131b] p-5 sm:p-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#7fb1e5]">
              SSE
            </div>
            <pre className="mt-3 overflow-x-auto whitespace-pre text-[12px] leading-relaxed text-[#d6e0ec]/85 sm:text-sm">
              {RES}
            </pre>
          </motion.div>
        </div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#d6e0ec]/55">
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
            className="group inline-flex items-center gap-3 rounded-full bg-[#7fb1e5] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0a0a0d] transition hover:bg-white"
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
