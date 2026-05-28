"use client";

import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
/*
 * The first screen of the site. No photo of the author — the work speaks
 * for him. The background is a slow, continuous wall of every project's
 * primary thumbnail, drifting upward. The foreground is three numbers and
 * two contacts. Nothing else.
 *
 * Why this is loud enough on its own:
 *   - The eye reads "28" immediately and then needs to count the wall.
 *   - The numbers admit nothing emotional. Reader supplies the emotion.
 *   - Telegram and Max are the only CTAs because that's the only way you
 *     can hire him right now.
 */

interface HeroProps {
  lang: Lang;
}

/** Each tile points at a pre-encoded WebP thumbnail in /public/assets.
 *  Order is intentional: the eye lands on Strix's demo first, then sweeps
 *  through the most visually interesting frames before settling. */
const TILES: { src: string; alt: string }[] = [
  { src: "/assets/strix/05-results.webp", alt: "Strix — stream results" },
  { src: "/assets/vs82/main.webp", alt: "Vs82 storefront" },
  { src: "/assets/imgable/01.webp", alt: "Imgable gallery" },
  { src: "/assets/meet/main.webp", alt: "Meet" },
  { src: "/assets/gostrix/main.webp", alt: "GoStrix landing" },
  { src: "/assets/beaver-notes/mac/01-wall.webp", alt: "Beaver Notes on macOS" },
  { src: "/assets/vast/01.webp", alt: "Vast media server" },
  { src: "/assets/jamperhub/01-dashboard.webp", alt: "JamperHUB dashboard" },
  { src: "/assets/strix/04-testing.webp", alt: "Strix testing" },
  { src: "/assets/flowparx/main.webp", alt: "FlowParx" },
  { src: "/assets/paluba/main.webp", alt: "Paluba QR menu" },
  { src: "/assets/the-med/main.webp", alt: "The Med bakery" },
  { src: "/assets/yagopere/main.webp", alt: "Yagopere catalog" },
  { src: "/assets/vector/main.webp", alt: "VECTOR Academy" },
  { src: "/assets/cam-webaweba/main.webp", alt: "cam.webaweba.com" },
  { src: "/assets/panel/main.webp", alt: "Home Panel" },
  { src: "/assets/text/main.webp", alt: "Text Normalizer" },
  { src: "/assets/dz/main.webp", alt: "Журнал переводов" },
  { src: "/assets/hw/main.webp", alt: "HW homework" },
  { src: "/assets/pixelgrid/main.webp", alt: "PixelGrid" },
  { src: "/assets/frinklip/hero.webp", alt: "Frinklip" },
  {
    src: "/assets/mcp-openai-images-audio/example.webp",
    alt: "MCP gpt-image",
  },
  { src: "/assets/imgable/03.webp", alt: "Imgable detail" },
  { src: "/assets/strix/07-frigate-result.webp", alt: "Strix Frigate result" },
  { src: "/assets/the-zolto/iphone/01.webp", alt: "THE ZOLTO on iPhone" },
  {
    src: "/assets/beaver-notes/iphone/01-wall.webp",
    alt: "Beaver Notes on iPhone",
  },
  { src: "/assets/jamperhub/03-latency.webp", alt: "JamperHUB latency" },
  { src: "/assets/strix/demo.mp4", alt: "Strix discovery demo" },
];

export function Hero({ lang }: HeroProps) {
  /** We double the tile list so the upward drift can loop seamlessly: when the
   *  animation reaches translateY(-50%) the second half is in the same place
   *  the first half started. */
  const looped = [...TILES, ...TILES];

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050505] text-white">
      {/* ---------------------------------------------------- background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 select-none"
      >
        <div className="hero-grid grid w-full grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3 lg:grid-cols-7 lg:gap-4">
          {looped.map((tile, i) => (
            <HeroTile key={`${tile.src}-${i}`} src={tile.src} alt={tile.alt} />
          ))}
        </div>
        {/* Vignette + dimming so foreground typography always wins. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/85" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_0%,#050505_85%)]" />
      </div>

      {/* ---------------------------------------------------- foreground */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        {/* Top: handle */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-between"
        >
          <span
            className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-white/55"
          >
            me.webaweba.com
          </span>
          <LangSwitch lang={lang} />
        </motion.div>

        {/* Middle: name + numbers */}
        <div className="flex flex-1 flex-col items-start justify-center pt-10 sm:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="font-[family-name:var(--font-fraunces)] text-[16vw] leading-[0.88] font-light tracking-[-0.045em] sm:text-[13vw] lg:text-[180px]"
            style={{ fontFeatureSettings: '"ss01", "ss02", "liga"' }}
          >
            eduard
            <span className="italic font-light text-white/85">256</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 sm:mt-10 lg:gap-x-10"
          >
            <Metric value="17" label={lang === "ru" ? "лет" : "y.o."} />
            <MetricDivider />
            <Metric value="76 000" label={lang === "ru" ? "загрузок" : "downloads"} />
            <MetricDivider />
            <Metric value="28" label={lang === "ru" ? "проектов" : "projects"} />
          </motion.div>
        </div>

        {/* Bottom: contacts + scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <ContactPill
              href="https://t.me/eduard226"
              label="Telegram"
            />
            <ContactPill
              href="https://max.ru/u/f9LHodD0cOKfMoBgasXNhcolTswbFNqa-B8-q0c53-3Hh1AqH7Xj1ny6fpU"
              label="Max"
            />
            <ContactPill href="https://github.com/eduard256" label="GitHub" />
          </div>

          <ScrollHint lang={lang} />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function HeroTile({ src, alt }: { src: string; alt: string }) {
  const isVideo = src.endsWith(".mp4");
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md sm:rounded-lg">
      {isVideo ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          src={src}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-90"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90"
          draggable={false}
        />
      )}
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-[family-name:var(--font-jetbrains)] text-2xl tabular-nums text-white sm:text-3xl lg:text-4xl">
        {value}
      </span>
      <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">
        {label}
      </span>
    </span>
  );
}

function MetricDivider() {
  return (
    <span
      aria-hidden
      className="hidden h-6 w-px bg-white/20 sm:inline-block"
    />
  );
}

function ContactPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-[family-name:var(--font-jetbrains)] text-sm tracking-wide text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.08]"
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="translate-x-0 text-white/45 transition group-hover:translate-x-0.5 group-hover:text-white"
      >
        ↗
      </span>
    </a>
  );
}

function ScrollHint({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-white/40">
      <span>{lang === "ru" ? "Скролл" : "Scroll"}</span>
      <span aria-hidden className="block h-px w-10 bg-white/30" />
    </div>
  );
}

function LangSwitch({ lang }: { lang: Lang }) {
  // Both sides are statically generated, so plain anchors work.
  return (
    <div className="flex items-center gap-1 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.25em]">
      <a
        href="/"
        className={
          lang === "ru"
            ? "text-white"
            : "text-white/40 transition hover:text-white"
        }
      >
        RU
      </a>
      <span className="text-white/30">·</span>
      <a
        href="/en/"
        className={
          lang === "en"
            ? "text-white"
            : "text-white/40 transition hover:text-white"
        }
      >
        EN
      </a>
    </div>
  );
}
