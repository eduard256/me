"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  hw                                                                        */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - The same beige paper as dz, but the typography matures into a
 *     textbook: tight Fraunces display, large progress numeral, and a
 *     receipt-style "Subscription" block (paying customers). This is the
 *     productised version of dz, and that promotion is encoded in the type.
 */

interface HwProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "17 · B2B SaaS · Подписка", en: "17 · B2B SaaS · Subscription" },
  title: { ru: "hw", en: "hw" },
  subtitle: { ru: "Домашки для репетиторов английского", en: "Homework for English tutors" },
  tagline: {
    ru: "Двусторонняя платформа: репетитор выдаёт ссылку, ученик решает, AI проверяет, разбор сразу попадает к преподавателю.",
    en: "A two-sided platform: the tutor sends a link, the student fills it in, AI grades, and the breakdown is on the tutor's desk before the lesson.",
  },
  evolution: {
    head: { ru: "Вырос из", en: "Grew out of" },
    body: {
      ru: "dz — приватная заказная версия v1. hw — v2: уроки, ссылки, прогресс, подписки. Двое репетиторов уже платят.",
      en: "dz — the v1 private tool. hw — v2: lessons, links, progress, subscriptions. Two paying tutors so far.",
    },
  },
  progress: { value: "21%", label: { ru: "5 из 24", en: "5 of 24" } },
  shotCaption: {
    ru: "Страница ученика. Красным подчёркнуты ошибки, под ними — комментарии AI.",
    en: "Student page. Errors underlined in red, AI comments beneath each one.",
  },
} as const;

const HERO = { src: "/assets/hw/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "hw homework", width: HERO.w, height: HERO.h },
];

export function HwProject({ lang }: HwProjectProps) {
  return (
    <section
      id="hw"
      className="relative isolate overflow-hidden bg-[#e9ddc7] py-32 text-[#231a12] sm:py-44"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#231a12]/65">
            <span aria-hidden className="h-px w-10 bg-[#231a12]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[var(--font-fraunces)] text-[22vw] leading-[0.85] font-light tracking-[-0.04em] sm:text-[18vw] lg:text-[260px]">
            {COPY.title[lang]}
          </h2>

          <div className="mt-3 font-[var(--font-fraunces)] text-2xl italic text-[#231a12]/80 sm:text-3xl">
            {COPY.subtitle[lang]}
          </div>

          <p className="mt-8 max-w-[700px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#231a12]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Big progress numeric */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-baseline gap-5 border-t border-[#231a12]/20 pt-10"
        >
          <div className="font-[var(--font-fraunces)] text-[20vw] leading-[0.85] tabular-nums sm:text-[14vw] lg:text-[180px]">
            {COPY.progress.value}
          </div>
          <div>
            <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.22em] text-[#231a12]/55">
              {lang === "ru" ? "Прогресс ученика" : "Student progress"}
            </div>
            <div className="mt-1 font-[var(--font-fraunces)] text-lg italic">
              {COPY.progress.label[lang]}
            </div>
          </div>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-16 sm:mt-24">
          <Media
            kind="image"
            src={HERO.src}
            alt="hw homework"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-md ring-1 ring-[#231a12]/15 shadow-[0_40px_100px_-40px_rgba(35,26,18,0.45)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[640px] font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#231a12]/70"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Evolution */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-[720px] border-l-2 border-[#231a12]/60 pl-6"
        >
          <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#231a12]/70">
            {COPY.evolution.head[lang]}
          </div>
          <p className="mt-4 font-[var(--font-fraunces)] text-2xl italic leading-snug sm:text-3xl">
            {COPY.evolution.body[lang]}
          </p>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
