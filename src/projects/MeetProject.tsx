"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  meet.webaweba.com                                                         */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Pure black background. The page is mostly architecture text on a void.
 *   - A red caret blinks in the title — "live", "transmitting".
 *   - Type stack: Space Grotesk for display (playful technical), JetBrains
 *     Mono for facts. Numbers feel important.
 *
 * The hero screenshot is small and intentionally inset — this is a page about
 * what's *under the call*, not about the call's UI.
 */

interface MeetProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "05 · Личный · 5 микросервисов", en: "05 · Personal · 5 microservices" },
  title: { ru: "meet", en: "meet" },
  subtitle: { ru: "meet.webaweba.com", en: "meet.webaweba.com" },
  tagline: {
    ru: "Самописный Google Meet с торрент-кинотеатром, общей музыкой, AI-собеседником и эффектами для всех участников разом.",
    en: "A self-written Google Meet with a torrent cinema, shared music, an AI participant and effects that hit everyone at once.",
  },
  services: [
    {
      no: "01",
      name: { ru: "Фронт", en: "Front" },
      stack: "React 19 · Vite · LiveKit · hls.js · PWA",
      note: { ru: "Веб-клиент звонка.", en: "Call web client." },
    },
    {
      no: "02",
      name: "api",
      stack: "Hono 4 · Node · TS · Redis · MinIO",
      note: { ru: "Комнаты, токены, TTS, AI.", en: "Rooms, tokens, TTS, AI." },
    },
    {
      no: "03",
      name: "cinema",
      stack: "Node · ffmpeg · Transmission",
      note: { ru: "Торрент → HLS, синхронно у всех.", en: "Torrent → HLS, in sync for everyone." },
    },
    {
      no: "04",
      name: "whisper",
      stack: "Python · FastAPI · faster-whisper",
      note: { ru: "Распознаёт речь в комнате.", en: "Transcribes room speech." },
    },
    {
      no: "05",
      name: "bot · Anna",
      stack: "Python · LiveKit · Piper TTS · Claude",
      note: { ru: "AI как участник, не баббл.", en: "AI as a participant, not a bubble." },
    },
  ],
  hardLines: [
    { k: { ru: "Транспорт", en: "Transport" }, v: "LiveKit SFU · WebRTC" },
    { k: { ru: "Шифрование", en: "Encryption" }, v: { ru: "E2EE, ключ через URL #fragment", en: "E2EE, key via URL #fragment" } },
    { k: { ru: "Лимит", en: "Limit" }, v: { ru: "100 участников", en: "100 participants" } },
    { k: { ru: "Эффекты", en: "Effects" }, v: { ru: "Гимн, валентинки, Пин-самолёт", en: "Anthems, valentines, cartoon planes" } },
  ],
  shotCaption: {
    ru: "Тёмный UI, плотные элементы. Лица — необязательная часть звонка.",
    en: "Dark UI, dense controls. Faces are an optional layer of the call.",
  },
  links: { github: "github.com/eduard256/meet", site: "meet.webaweba.com" },
} as const;

const HERO = { src: "/assets/meet/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "meet.webaweba.com", width: HERO.w, height: HERO.h },
];

export function MeetProject({ lang }: MeetProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineX = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section
      ref={ref}
      id="meet"
      className="relative isolate overflow-hidden bg-black py-32 text-white sm:py-44"
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      {/* Animated red transmission line across the top */}
      <motion.div
        aria-hidden
        style={{ x: lineX }}
        className="pointer-events-none absolute top-10 left-0 z-0 h-px w-[200%] bg-gradient-to-r from-transparent via-[#ff3b3b]/40 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-white/55">
            <span aria-hidden className="block h-2 w-2 animate-pulse rounded-full bg-[#ff3b3b]" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 flex items-baseline gap-3 font-[family-name:var(--font-space-grotesk)] text-[18vw] leading-[0.86] font-medium tracking-[-0.04em] sm:text-[13vw] lg:text-[200px]">
            <span>{COPY.title[lang]}</span>
            <span className="text-[#ff3b3b]" aria-hidden>
              _
            </span>
          </h2>

          <div className="mt-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.25em] text-white/65">
            {COPY.subtitle[lang]}
          </div>

          <p className="mt-8 max-w-[720px] text-xl leading-snug text-white/80 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Five services rack-mounted */}
        <div className="mt-16 border-t border-white/10">
          {COPY.services.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="group flex flex-col gap-1 border-b border-white/10 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-white/35 sm:w-12 sm:flex-none">
                {s.no}
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-white sm:w-56 sm:flex-none sm:text-2xl">
                {typeof s.name === "string" ? s.name : s.name[lang]}
              </span>
              <span className="flex-1 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                {s.stack}
              </span>
              <span className="text-sm text-white/55 sm:w-72 sm:flex-none sm:text-base">
                {s.note[lang]}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hard line specs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10"
        >
          {COPY.hardLines.map((h) => (
            <div key={h.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-white/45">
                {h.k[lang]}
              </div>
              <div className="mt-2 text-lg leading-snug text-white sm:text-xl">
                {typeof h.v === "string" ? h.v : h.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Screenshot inset */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={HERO.src}
            alt="meet"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(255,59,59,0.25)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[640px] font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-white/65"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-wrap gap-3"
        >
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#ff3b3b] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-black transition hover:bg-white"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
          <a
            href={`https://${COPY.links.github}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/25 px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
          >
            {COPY.links.github}
          </a>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
