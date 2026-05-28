"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  cam.webaweba.com                                                          */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Same brand purple as the client's live landing, but the slide leads
 *     with the savings number — that's the entire offer.
 *   - A two-column comparison "Replace cameras vs. webaweba" — type does the
 *     job that a Stripe-style infographic usually does.
 */

interface CamWebawebaProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "18 · Бренд · B2B услуга", en: "18 · Brand · B2B service" },
  title: { ru: "Все камеры. Одна система.", en: "Every camera. One system." },
  tagline: {
    ru: "Лендинг услуги webaweba. Объединяем существующее видеонаблюдение бизнеса в один интерфейс — без замены оборудования.",
    en: "webaweba's service landing. Unify the business's existing CCTV into one dashboard — without swapping any cameras.",
  },
  compare: {
    head: { ru: "Например, 80 камер", en: "Example, 80 cameras" },
    left: { k: { ru: "Замена камер", en: "Replace cameras" }, v: "$10 700" },
    right: { k: { ru: "webaweba", en: "webaweba" }, v: "$2 300" },
    save: { k: { ru: "Экономия", en: "Savings" }, v: "$8 400" },
  },
  stack: {
    head: { ru: "На чём построено", en: "What runs under it" },
    items: [
      { name: "Strix", note: { ru: "обнаружение камер", en: "camera discovery" } },
      { name: "Frigate", note: { ru: "запись + детекция", en: "recording + detection" } },
      { name: "go2rtc", note: { ru: "транспорт", en: "transport" } },
    ],
  },
  shotCaption: {
    ru: "«50+ камер · 4–6 NVR · один экран.»",
    en: "“50+ cameras · 4–6 NVRs · one screen.”",
  },
  links: { site: "cam.webaweba.com" },
} as const;

const HERO = { src: "/assets/cam-webaweba/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "cam.webaweba.com", width: HERO.w, height: HERO.h },
];

export function CamWebawebaProject({ lang }: CamWebawebaProjectProps) {
  return (
    <section
      id="cam-webaweba"
      className="relative isolate overflow-hidden bg-[#0d0a17] py-32 text-[#ede9ff] sm:py-44"
      style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_30%_20%,#5b3fb833,transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#a896ff]">
            <span aria-hidden className="h-px w-10 bg-[#a896ff]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 text-[10vw] leading-[0.92] font-light tracking-[-0.04em] sm:text-[7vw] lg:text-[110px]">
            {lang === "ru" ? (
              <>
                Все камеры.{" "}
                <span className="bg-gradient-to-r from-[#a896ff] to-[#5b3fb8] bg-clip-text text-transparent">
                  Одна система.
                </span>
              </>
            ) : (
              <>
                Every camera.{" "}
                <span className="bg-gradient-to-r from-[#a896ff] to-[#5b3fb8] bg-clip-text text-transparent">
                  One system.
                </span>
              </>
            )}
          </h2>

          <p className="mt-8 max-w-[700px] text-xl leading-snug text-[#ede9ff]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3 sm:gap-10"
        >
          <Cmp k={COPY.compare.left.k[lang]} v={COPY.compare.left.v} dim />
          <Cmp k={COPY.compare.right.k[lang]} v={COPY.compare.right.v} />
          <Cmp k={COPY.compare.save.k[lang]} v={COPY.compare.save.v} accent />
        </motion.div>
        <div className="mt-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#ede9ff]/45">
          {COPY.compare.head[lang]}
        </div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#a896ff]">
            {COPY.stack.head[lang]}
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-2xl text-[#ede9ff]/90 sm:text-3xl">
            {COPY.stack.items.map((s) => (
              <li key={s.name} className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-fraunces)] italic">{s.name}</span>
                <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#ede9ff]/55">
                  · {s.note[lang]}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={HERO.src}
            alt="cam.webaweba.com"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-xl ring-1 ring-[#a896ff]/20 shadow-[0_50px_120px_-40px_rgba(91,63,184,0.4)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[family-name:var(--font-instrument)] text-xl italic text-[#ede9ff]/85 sm:text-2xl"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        <div className="mt-16">
          <a
            href={`https://${COPY.links.site}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#a896ff] px-7 py-3 font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#0d0a17] transition hover:bg-white"
          >
            <span>{COPY.links.site}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}

function Cmp({
  k,
  v,
  dim,
  accent,
}: {
  k: string;
  v: string;
  dim?: boolean;
  accent?: boolean;
}) {
  return (
    <div className={dim ? "opacity-60" : ""}>
      <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#ede9ff]/55">
        {k}
      </div>
      <div
        className={`mt-3 font-[family-name:var(--font-inter-tight)] text-4xl leading-tight tabular-nums sm:text-5xl ${
          accent ? "text-[#a896ff]" : "text-[#ede9ff]"
        } ${dim ? "line-through decoration-[#ede9ff]/40" : ""}`}
      >
        {v}
      </div>
    </div>
  );
}
