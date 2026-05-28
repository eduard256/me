"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Beaver Notes                                                              */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Charcoal canvas with paper-warm typography (Fraunces). The product is
 *     a quiet writing tool; the slide must read quiet.
 *   - A cascade of devices (Mac → iPad → iPhone) drifts into view, each at
 *     a slightly different scroll-tied parallax depth so the three screens
 *     feel like a single object photographed from above.
 *   - Web screenshot lives further down as a separate "and also a web client"
 *     beat.
 */

interface BeaverNotesProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "06 · Open source · Self-hosted", en: "06 · Open source · Self-hosted" },
  title: { ru: "Beaver Notes", en: "Beaver Notes" },
  tagline: {
    ru: "Saved Messages, которому можно доверять. Сервер на Go с веб-клиентом и PWA, плюс нативное приложение на SwiftUI для iOS / iPadOS / macOS.",
    en: "A Saved Messages you can actually trust. A Go server with a web client and PWA, plus a native SwiftUI app for iOS / iPadOS / macOS.",
  },
  pillars: [
    { k: { ru: "Сервер", en: "Server" }, v: { ru: "Go · web · PWA", en: "Go · web · PWA" } },
    { k: { ru: "Нативно", en: "Native" }, v: { ru: "SwiftUI · iOS · iPadOS · macOS", en: "SwiftUI · iOS · iPadOS · macOS" } },
    { k: { ru: "Файлы", en: "Files" }, v: { ru: "До 40 ГБ", en: "Up to 40 GB" } },
    { k: { ru: "MCP", en: "MCP" }, v: { ru: "Claude читает и пишет", en: "Claude reads and writes" } },
  ],
  devicesCaption: {
    ru: "Нативное приложение на SwiftUI: один markdown, три экрана.",
    en: "Native SwiftUI app: one markdown, three screens.",
  },
  webCaption: {
    ru: "И веб-PWA, если телефон не под рукой.",
    en: "And a PWA when the phone isn't around.",
  },
  links: {
    server: "github.com/eduard256/beaver-notes",
    mcp: "github.com/eduard256/beaver-notes-mcp",
  },
} as const;

const MAC = { src: "/assets/beaver-notes/mac/01-wall.webp", w: 2880, h: 1800 };
const IPAD = { src: "/assets/beaver-notes/ipad/01-wall-sidebar.webp", w: 2064, h: 2752 };
const IPHONE = { src: "/assets/beaver-notes/iphone/01-wall.webp", w: 1320, h: 2868 };
const WEB = { src: "/assets/beaver-notes/web/main.webp", w: 2880, h: 1626 };

const GALLERY: LightboxItem[] = [
  { kind: "image", src: MAC.src, alt: "Beaver Notes — macOS", width: MAC.w, height: MAC.h },
  { kind: "image", src: IPAD.src, alt: "Beaver Notes — iPad", width: IPAD.w, height: IPAD.h },
  { kind: "image", src: IPHONE.src, alt: "Beaver Notes — iPhone", width: IPHONE.w, height: IPHONE.h },
  { kind: "image", src: WEB.src, alt: "Beaver Notes — Web", width: WEB.w, height: WEB.h },
];

export function BeaverNotesProject({ lang }: BeaverNotesProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const macY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const ipadY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <section
      ref={ref}
      id="beaver-notes"
      className="relative isolate overflow-hidden bg-[#181613] py-32 text-[#f4ece0] sm:py-44"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      {/* Warm paper light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[60%] bg-[radial-gradient(120%_70%_at_50%_0%,#3a2f23_0%,transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#f4ece0]/55">
            <span aria-hidden className="h-px w-10 bg-[#f4ece0]/30" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2
            className="mt-6 font-[family-name:var(--font-fraunces)] text-[14vw] leading-[0.9] font-light italic tracking-[-0.02em] sm:text-[10vw] lg:text-[150px]"
            style={{ fontFeatureSettings: '"ss01"' }}
          >
            {COPY.title[lang]}
          </h2>

          <p className="mt-6 max-w-[760px] font-[family-name:var(--font-inter-tight)] text-xl leading-snug text-[#f4ece0]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#f4ece0]/15 pt-10 sm:grid-cols-4 sm:gap-x-10"
        >
          {COPY.pillars.map((p) => (
            <div key={p.k.ru}>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#f4ece0]/50">
                {p.k[lang]}
              </div>
              <div className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl leading-tight text-[#f4ece0] sm:text-3xl">
                {p.v[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Device cascade — desktop: 3 panels with parallax. Mobile: stacked. */}
        <div className="mt-24 sm:mt-32">
          {/* Desktop */}
          <div className="relative hidden h-[760px] sm:block">
            <motion.div
              style={{ y: macY }}
              className="absolute left-0 top-0 w-[58%] cursor-zoom-in"
            >
              <Media
                kind="image"
                src={MAC.src}
                alt="Beaver Notes — macOS"
                width={MAC.w}
                height={MAC.h}
                gallery={GALLERY}
                index={0}
                className="rounded-xl ring-1 ring-white/10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.65)]"
              />
              <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#f4ece0]/55">
                macOS · 01-wall
              </p>
            </motion.div>

            <motion.div
              style={{ y: ipadY }}
              className="absolute right-[14%] top-[18%] w-[28%] cursor-zoom-in"
            >
              <Media
                kind="image"
                src={IPAD.src}
                alt="Beaver Notes — iPad"
                width={IPAD.w}
                height={IPAD.h}
                gallery={GALLERY}
                index={1}
                className="rounded-2xl ring-1 ring-white/10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.65)]"
              />
              <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#f4ece0]/55">
                iPad · 01-sidebar
              </p>
            </motion.div>

            <motion.div
              style={{ y: phoneY }}
              className="absolute right-0 bottom-0 w-[18%] cursor-zoom-in"
            >
              <Media
                kind="image"
                src={IPHONE.src}
                alt="Beaver Notes — iPhone"
                width={IPHONE.w}
                height={IPHONE.h}
                gallery={GALLERY}
                index={2}
                className="rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)]"
              />
              <p className="mt-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#f4ece0]/55">
                iPhone
              </p>
            </motion.div>
          </div>

          {/* Mobile fallback */}
          <div className="grid gap-12 sm:hidden">
            <Media
              kind="image"
              src={MAC.src}
              alt="Beaver Notes — macOS"
              width={MAC.w}
              height={MAC.h}
              gallery={GALLERY}
              index={0}
              className="rounded-xl ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
            />
            <div className="grid grid-cols-2 gap-4">
              <Media
                kind="image"
                src={IPAD.src}
                alt="Beaver Notes — iPad"
                width={IPAD.w}
                height={IPAD.h}
                gallery={GALLERY}
                index={1}
                className="rounded-xl ring-1 ring-white/10"
              />
              <Media
                kind="image"
                src={IPHONE.src}
                alt="Beaver Notes — iPhone"
                width={IPHONE.w}
                height={IPHONE.h}
                gallery={GALLERY}
                index={2}
                className="rounded-2xl ring-1 ring-white/10"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 max-w-[640px] font-[family-name:var(--font-instrument)] text-xl italic text-[#f4ece0]/80 sm:text-2xl"
          >
            {COPY.devicesCaption[lang]}
          </motion.p>
        </div>

        {/* Web screenshot */}
        <div className="mt-24 sm:mt-32">
          <Media
            kind="image"
            src={WEB.src}
            alt="Beaver Notes — Web"
            width={WEB.w}
            height={WEB.h}
            gallery={GALLERY}
            index={3}
            className="rounded-xl ring-1 ring-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.6)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[640px] font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#f4ece0]/65"
          >
            {COPY.webCaption[lang]}
          </motion.p>
        </div>

        {/* Links */}
        <div className="mt-16 flex flex-wrap gap-3">
          <a
            href={`https://${COPY.links.server}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#f4ece0] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#181613] transition hover:bg-white"
          >
            <span>{COPY.links.server}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
          <a
            href={`https://${COPY.links.mcp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#f4ece0]/25 px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#f4ece0]/85 transition hover:border-[#f4ece0] hover:bg-[#f4ece0] hover:text-[#181613]"
          >
            {COPY.links.mcp}
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
