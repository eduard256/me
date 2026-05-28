"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Bamboo Tunnel                                                             */
/* -------------------------------------------------------------------------- */
/*
 * Text-only slide. The hero is the ASCII diagram of the inverted topology —
 * that's the entire IP of the project compressed into ten lines of mono.
 */

interface BambooTunnelProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "25 · OSS · Сетевой софт", en: "25 · OSS · Network software" },
  title: { ru: "Bamboo Tunnel", en: "Bamboo Tunnel" },
  tagline: {
    ru: "Обратный туннель, который для DPI выглядит как поток видеоконференций. 110–150 Мбит/с через HTTP/2.",
    en: "A reverse tunnel that looks like a video-conferencing stream to DPI. 110–150 Mbit/s over HTTP/2.",
  },
  facts: [
    { k: { ru: "Топология", en: "Topology" }, v: { ru: "VPS → Дом", en: "VPS → Home" } },
    { k: { ru: "Транспорт", en: "Transport" }, v: "HTTP/2" },
    { k: { ru: "Throughput", en: "Throughput" }, v: "110–150 Mbit/s" },
    { k: { ru: "Heartbeats", en: "Heartbeats" }, v: { ru: "Маскированы под аудио", en: "Masked as audio frames" } },
  ],
  links: { github: "github.com/eduard256/Bamboo-Tunnel" },
} as const;

const DIAGRAM = `[ Устройства дома ]                  [ Дом · сервер ]              [ VPS за границей ]
                                          |
DHCP IP            LAN ────────────────→  | ←────────── HTTP/2 ─────────→  TUN 172.29.0.2
10.98.10.x                                |  (looks like a video call)     NAT
gw 10.98.10.1                             |                                |
                                     iptables FORWARD                      ↓
                                     LAN → TUN 172.29.0.1            [ free internet ]`;

const DIAGRAM_EN = `[ home devices ]                     [ home · server ]             [ overseas VPS ]
                                          |
DHCP IP            LAN ────────────────→  | ←────────── HTTP/2 ─────────→  TUN 172.29.0.2
10.98.10.x                                |  (looks like a video call)     NAT
gw 10.98.10.1                             |                                |
                                     iptables FORWARD                      ↓
                                     LAN → TUN 172.29.0.1            [ free internet ]`;

export function BambooTunnelProject({ lang }: BambooTunnelProjectProps) {
  return (
    <section
      id="bamboo-tunnel"
      className="relative isolate overflow-hidden bg-[#0a1410] py-32 text-[#cce6d0] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#7ed0a4]">
            <span aria-hidden className="h-px w-10 bg-[#7ed0a4]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[12vw] leading-[0.9] font-light tracking-[-0.04em] sm:text-[7vw] lg:text-[130px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#cce6d0]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* ASCII diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-x-auto rounded-xl border border-[#7ed0a4]/20 bg-[#091812] p-5 sm:p-8"
        >
          <pre className="whitespace-pre text-[11px] leading-relaxed text-[#cce6d0]/85 sm:text-sm lg:text-base">
            {lang === "ru" ? DIAGRAM : DIAGRAM_EN}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#cce6d0]/55">
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
            className="group inline-flex items-center gap-3 rounded-full bg-[#7ed0a4] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0a1410] transition hover:bg-white"
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
