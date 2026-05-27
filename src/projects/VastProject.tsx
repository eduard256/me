"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  vast — Video AI Streaming Torrent                                         */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Deep cinema-blue gradient — the colour of a darkened living room.
 *   - Lime-green accent the colour of a torrent download bar.
 *   - "Replaces six containers" punchline is the entire pitch — typography
 *     does the lifting.
 */

interface VastProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "09 · Open source · Go", en: "09 · Open source · Go" },
  title: "vast",
  tagline: {
    ru: "Plex, Sonarr, Radarr, Jackett, qBittorrent, Jellyfin — заменены одним Go-бинарником.",
    en: "Plex, Sonarr, Radarr, Jackett, qBittorrent, Jellyfin — collapsed into one Go binary.",
  },
  replaces: ["Plex", "Sonarr", "Radarr", "Jackett", "qBittorrent", "Jellyfin"],
  with: { ru: "→ один бинарь", en: "→ one binary" },
  facts: [
    { k: { ru: "Источник", en: "Source" }, v: { ru: "Кинопоиск API", en: "Kinopoisk API" } },
    { k: { ru: "Трекеры", en: "Trackers" }, v: { ru: "Русские, через Exfreedomist", en: "Russian, via Exfreedomist" } },
    { k: { ru: "Стриминг", en: "Streaming" }, v: { ru: "Транскод в HLS на лету", en: "On-the-fly HLS transcode" } },
    { k: { ru: "Пульт", en: "Remote" }, v: { ru: "LG TV · Apple TV", en: "LG TV · Apple TV" } },
  ],
  captions: [
    { ru: "Поиск, библиотека, продолжить с того же места.", en: "Search, library, resume where you left off." },
    { ru: "Раздачи через встроенный BitTorrent. Никаких отдельных клиентов.", en: "Torrents handled by the embedded BitTorrent stack. No external client." },
  ],
  links: { github: "github.com/eduard256/vast" },
} as const;

const SHOTS = [
  { src: "/assets/vast/01.webp", w: 2880, h: 1628 },
  { src: "/assets/vast/04.webp", w: 2880, h: 1628 },
];

const GALLERY: LightboxItem[] = SHOTS.map((s, i) => ({
  kind: "image" as const,
  src: s.src,
  alt: `vast ${i + 1}`,
  width: s.w,
  height: s.h,
}));

export function VastProject({ lang }: VastProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      id="vast"
      className="relative isolate overflow-hidden bg-[#06101a] py-32 text-[#e8f0f7] sm:py-44"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {/* Cinema glow */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-[30%] left-1/2 z-0 h-[120%] w-[140%] -translate-x-1/2 bg-[radial-gradient(closest-side,#2461a833,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#9ed28f]">
            <span aria-hidden className="h-px w-10 bg-[#9ed28f]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[var(--font-jetbrains)] text-[20vw] leading-[0.86] font-light tracking-[-0.05em] sm:text-[14vw] lg:text-[220px]">
            {COPY.title}
            <span className="text-[#9ed28f]">.</span>
          </h2>

          <p className="mt-6 max-w-[760px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#e8f0f7]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Replaces wall */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#e8f0f7]/55">
            {lang === "ru" ? "Заменяет" : "Replaces"}
          </div>
          <ul className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-3 font-[var(--font-inter-tight)] text-3xl leading-none text-[#e8f0f7]/70 sm:gap-x-8 sm:text-5xl">
            {COPY.replaces.map((r, i) => (
              <li key={r} className="flex items-baseline gap-6">
                <span className="line-through decoration-[#9ed28f] decoration-[3px]">{r}</span>
                {i !== COPY.replaces.length - 1 && (
                  <span aria-hidden className="text-[#e8f0f7]/25">·</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 font-[var(--font-jetbrains)] text-base uppercase tracking-[0.22em] text-[#9ed28f] sm:text-lg">
            {COPY.with[lang]}
          </div>
        </motion.div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.facts.map((f) => (
            <div key={f.k.ru}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#e8f0f7]/45">
                {f.k[lang]}
              </div>
              <div className="mt-3 font-[var(--font-inter-tight)] text-xl leading-snug text-[#e8f0f7] sm:text-2xl">
                {f.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Two screenshots */}
        <div className="mt-20 grid gap-12 sm:mt-28 sm:grid-cols-2 sm:gap-8">
          {SHOTS.map((s, i) => (
            <div key={s.src}>
              <Media
                kind="image"
                src={s.src}
                alt={`vast ${i + 1}`}
                width={s.w}
                height={s.h}
                gallery={GALLERY}
                index={i}
                className="rounded-xl ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(36,97,168,0.35)]"
              />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#e8f0f7]/65">
                {COPY.captions[i][lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-16">
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#9ed28f] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#06101a] transition hover:bg-white"
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
