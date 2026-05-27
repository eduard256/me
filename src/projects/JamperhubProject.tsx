"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  JamperHUB                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Console-green on near-black, like a network operator's screen.
 *   - The priority ladder (Primary / Recommended / Backup) is the centrepiece
 *     fact set — type is the diagram.
 *   - Three screenshots laid out as a control panel: dashboard wide on top,
 *     two narrower panels below.
 */

interface JamperhubProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "11 · Open source · Go", en: "11 · Open source · Go" },
  title: { ru: "JamperHUB", en: "JamperHUB" },
  tagline: {
    ru: "Несколько VPN-туннелей сразу. Балансировщик сам выбирает живой и быстрый. Падает один — переключается за миллисекунды.",
    en: "Multiple VPN tunnels at once. The balancer picks the live and fast one. If a tunnel dies — failover in milliseconds.",
  },
  priorities: [
    {
      tier: { ru: "Priority 1 — Primary", en: "Priority 1 — Primary" },
      body: { ru: "Свой сервер. Всегда включён. Уходим, только если упал.", en: "Your own server. Always up. Only leave it if it dies." },
    },
    {
      tier: { ru: "Priority 2 — Recommended", en: "Priority 2 — Recommended" },
      body: { ru: "Резерв в постоянной разогретой готовности. Балансировка по скорости.", en: "Hot standby. Speed-based balancing between members." },
    },
    {
      tier: { ru: "Priority 3 — Backup", en: "Priority 3 — Backup" },
      body: { ru: "Спит, пока остальные живы. Стартует парами при чёрном дне.", en: "Asleep while the others live. Wakes in pairs on a bad day." },
    },
  ],
  facts: [
    { k: { ru: "Протоколы", en: "Protocols" }, v: "AmneziaWG · Xray VLESS/VMess/Reality" },
    { k: { ru: "Платформ", en: "Platforms" }, v: "Linux amd64/arm64/arm/mips" },
    { k: { ru: "Зависимости", en: "Dependencies" }, v: "dnsmasq" },
    { k: { ru: "Конфиг", en: "Config" }, v: { ru: "Один JSON, портативный", en: "One JSON, portable" } },
  ],
  captions: [
    { ru: "Дашборд. Статус каждого туннеля в реальном времени.", en: "Dashboard. Each tunnel's status in real time." },
    { ru: "Настройки сетевых интерфейсов и приоритетов.", en: "Network interface + priority configuration." },
    { ru: "Графики латентности — на чём система решает.", en: "Latency graphs — the data behind every decision." },
  ],
  links: { github: "github.com/eduard256/JamperHUB" },
} as const;

const SHOTS = [
  { src: "/assets/jamperhub/01-dashboard.webp", w: 2880, h: 1626 },
  { src: "/assets/jamperhub/02-settings.webp", w: 2880, h: 1626 },
  { src: "/assets/jamperhub/03-latency.webp", w: 2880, h: 1626 },
];

const GALLERY: LightboxItem[] = SHOTS.map((s, i) => ({
  kind: "image" as const,
  src: s.src,
  alt: `JamperHUB ${i + 1}`,
  width: s.w,
  height: s.h,
}));

export function JamperhubProject({ lang }: JamperhubProjectProps) {
  return (
    <section
      id="jamperhub"
      className="relative isolate overflow-hidden bg-[#04080a] py-32 text-[#d6f5d8] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#3df57e 1px, transparent 1px), linear-gradient(90deg, #3df57e 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#3df57e]">
            <span aria-hidden className="block h-2 w-2 animate-pulse rounded-full bg-[#3df57e]" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[14vw] leading-[0.88] font-light tracking-[-0.05em] sm:text-[10vw] lg:text-[160px]">
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[720px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#d6f5d8]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Priority ladder */}
        <div className="mt-16 space-y-4 border-y border-[#3df57e]/15 py-6 sm:py-10">
          {COPY.priorities.map((p, i) => (
            <motion.div
              key={p.tier.ru}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="grid items-baseline gap-2 sm:grid-cols-[260px_1fr]"
            >
              <div className="text-sm uppercase tracking-[0.22em] text-[#3df57e]">
                {p.tier[lang]}
              </div>
              <div className="font-[var(--font-inter-tight)] text-lg text-[#d6f5d8]/90 sm:text-xl">
                {p.body[lang]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facts row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#d6f5d8]/55">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-inter-tight)] text-base leading-snug text-[#d6f5d8] sm:text-lg">
                {typeof f.v === "string" ? f.v : f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Screenshots — dashboard wide, two below */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={SHOTS[0].src}
            alt="JamperHUB Dashboard"
            width={SHOTS[0].w}
            height={SHOTS[0].h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#3df57e]/20 shadow-[0_50px_120px_-40px_rgba(61,245,126,0.25)]"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#d6f5d8]/65">
            {COPY.captions[0][lang]}
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {SHOTS.slice(1).map((s, i) => (
              <div key={s.src}>
                <Media
                  kind="image"
                  src={s.src}
                  alt={`JamperHUB ${i + 2}`}
                  width={s.w}
                  height={s.h}
                  gallery={GALLERY}
                  index={i + 1}
                  className="rounded-xl ring-1 ring-[#3df57e]/15 shadow-[0_30px_80px_-30px_rgba(61,245,126,0.2)]"
                />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#d6f5d8]/65">
                  {COPY.captions[i + 1][lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#3df57e] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#04080a] transition hover:bg-white"
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
