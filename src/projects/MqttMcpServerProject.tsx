"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  mqtt-mcp-server                                                           */
/* -------------------------------------------------------------------------- */
/*
 * Text-only slide. Four tools laid out as four cards — that's the API surface.
 */

interface MqttMcpServerProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "28 · MCP · PyPI 1.0.7", en: "28 · MCP · PyPI 1.0.7" },
  title: { ru: "mqtt-mcp-server", en: "mqtt-mcp-server" },
  tagline: {
    ru: "Любой MQTT-брокер становится доступным AI-ассистенту. Четыре инструмента — discover, read, publish, monitor.",
    en: "Any MQTT broker becomes addressable by an AI assistant. Four tools — discover, read, publish, monitor.",
  },
  tools: [
    {
      name: "topics",
      desc: { ru: "Поиск активных топиков", en: "Discover active topics" },
    },
    {
      name: "value",
      desc: { ru: "Чтение значений с кэшем", en: "Cached value reads" },
    },
    {
      name: "publish",
      desc: { ru: "Отправка команд устройствам", en: "Send commands to devices" },
    },
    {
      name: "record",
      desc: { ru: "Realtime-мониторинг событий", en: "Realtime event monitoring" },
    },
  ],
  facts: [
    { k: { ru: "Брокеры", en: "Brokers" }, v: "Mosquitto · EMQX · HiveMQ" },
    { k: { ru: "Клиенты", en: "Clients" }, v: "Claude · Codex · Cursor · Cline" },
    { k: { ru: "Транспорт", en: "Transport" }, v: "stdio" },
    { k: { ru: "Стек", en: "Stack" }, v: "Python · aiomqtt · pydantic" },
  ],
  links: { github: "github.com/eduard256/mqtt-mcp-server" },
} as const;

export function MqttMcpServerProject({ lang }: MqttMcpServerProjectProps) {
  return (
    <section
      id="mqtt-mcp-server"
      className="relative isolate overflow-hidden bg-[#0e1626] py-32 text-[#dcefff] sm:py-44"
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#7fe6ff]">
            <span aria-hidden className="h-px w-10 bg-[#7fe6ff]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[10vw] leading-[0.9] font-medium tracking-[-0.04em] sm:text-[6vw] lg:text-[100px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#dcefff]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* 4 tools */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {COPY.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="rounded-xl border border-[#7fe6ff]/15 bg-[#13203a] p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-jetbrains)] text-2xl text-[#7fe6ff] sm:text-3xl">
                  {tool.name}
                </span>
                <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#dcefff]/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 font-[family-name:var(--font-inter-tight)] text-base text-[#dcefff]/85 sm:text-lg">
                {tool.desc[lang]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#dcefff]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[family-name:var(--font-inter-tight)] text-base leading-snug sm:text-lg">
                {f.v}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#7fe6ff] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#0e1626] transition hover:bg-white"
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
