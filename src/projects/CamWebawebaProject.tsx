"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

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
  kicker: { ru: "Бренд · B2B услуга", en: "Brand · B2B service" },
  title: { ru: "Все камеры. Одна система.", en: "Every camera. One system." },
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
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-10 sm:mt-14">
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
        </div>

        <div className="mt-12">
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
    </section>
  );
}
