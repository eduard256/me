"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Журнал переводов (dz)                                                     */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Beige paper, school-notebook spirit. Hairline red rule like a teacher's
 *     pen runs under the title. Mono captions read as study notes.
 *   - A small "private" badge respects the client's privacy: the tool is one
 *     person's prototype, not a public product.
 */

interface DzProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "16 · Клиент · Приватный · → hw", en: "16 · Client · Private · → hw" },
  title: { ru: "Журнал переводов", en: "Translation Journal" },
  tagline: {
    ru: "Заказной инструмент для репетитора. AI читает русскую домашку и английский перевод ученика — и за 25 секунд выдаёт пронумерованный разбор ошибок.",
    en: "Custom tool for an English tutor. AI reads the Russian source and the student's translation — and returns a numbered breakdown in 25 seconds.",
  },
  evolution: {
    head: { ru: "Как вырос", en: "How it evolved" },
    body: {
      ru: "Этот проект — версия 1, под одного клиента. Из неё вырос полноценный B2B-сервис — см. соседний слайд: hw.",
      en: "Version 1, built for one client. It grew into a full B2B service — see the next slide: hw.",
    },
  },
  shotCaption: {
    ru: "Слева — задание, справа — ответ ученика, снизу — готовый разбор для отправки.",
    en: "Task on the left, student's answer on the right, ready-to-send feedback below.",
  },
} as const;

const HERO = { src: "/assets/dz/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "Translation Journal", width: HERO.w, height: HERO.h },
];

export function DzProject({ lang }: DzProjectProps) {
  return (
    <section
      id="dz"
      className="relative isolate overflow-hidden bg-[#f1ebdd] py-32 text-[#1c1812] sm:py-44"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#9b2316]">
            <span aria-hidden className="h-px w-10 bg-[#9b2316]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2 className="mt-6 font-[var(--font-fraunces)] text-[10vw] leading-[0.95] font-light italic tracking-[-0.02em] sm:text-[7vw] lg:text-[110px]">
            {COPY.title[lang]}
          </h2>
          <div aria-hidden className="mt-3 h-px w-32 bg-[#9b2316]" />

          <p className="mt-8 max-w-[700px] font-[var(--font-inter-tight)] text-xl leading-snug text-[#1c1812]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* Screenshot */}
        <div className="mt-16 sm:mt-24">
          <Media
            kind="image"
            src={HERO.src}
            alt="Translation Journal"
            width={HERO.w}
            height={HERO.h}
            gallery={GALLERY}
            index={0}
            className="rounded-md ring-1 ring-[#1c1812]/15 shadow-[0_40px_100px_-40px_rgba(28,24,18,0.4)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[640px] font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#1c1812]/65"
          >
            {COPY.shotCaption[lang]}
          </motion.p>
        </div>

        {/* Evolution note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-[720px] border-l-2 border-[#9b2316] pl-6"
        >
          <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#9b2316]">
            {COPY.evolution.head[lang]}
          </div>
          <p className="mt-4 font-[var(--font-fraunces)] text-2xl italic leading-snug sm:text-3xl">
            {COPY.evolution.body[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
