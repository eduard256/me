"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";

/* -------------------------------------------------------------------------- */
/*  Vs82 — Вечная Стройка                                                     */
/* -------------------------------------------------------------------------- */
/*
 * Visual identity:
 *   - Brand orange (#F36C13-ish, sampled from the real site) on a paper-cream
 *     stage. We pull the orange straight from the client's brand because
 *     authenticity outranks novelty for a commerce kicker case.
 *   - Display type: Archivo Black for the hard headlines that the proudly
 *     non-design-conscious target audience reads as "serious shop". Body
 *     and metadata use JetBrains Mono — receipts read in mono.
 *   - One enormous number ("100 000") owns the page. The screenshot of the
 *     real production store is the proof.
 *
 * Why so few screenshots: the project's interesting surface area is not the
 * pixels, it's the architecture story. Numbers and a short fact list do the
 * work that more screenshots would do for a UX-heavy project.
 */

interface Vs82ProjectProps {
  lang: Lang;
}

const COPY = {
  kicker: { ru: "02 · Клиентский e-commerce", en: "02 · Client e-commerce" },
  title: { ru: "Вечная Стройка", en: "Vs82.ru" },
  domain: "vs82.ru",
  tagline: {
    ru: "Магазин стройматериалов на 100 000 SKU с двусторонней синхронизацией 1С каждые 5 минут.",
    en: "A 100,000-SKU hardware store with two-way 1C sync every 5 minutes.",
  },
  hugeNumber: "100 000",
  hugeLabel: {
    ru: "товаров в каталоге",
    en: "products in catalogue",
  },
  screenshotCaption: {
    ru: "Боевой прод. Реальные заказы. Реальные деньги через ЮKassa.",
    en: "Live in production. Real orders. Real money through YooKassa.",
  },
  facts: [
    {
      heading: { ru: "Стек", en: "Stack" },
      value: { ru: "8 микросервисов на Go", en: "8 Go microservices" },
      detail: {
        ru: "Без Bitrix, без OpenCart. Каждый сервис — своя ответственность.",
        en: "No Bitrix, no OpenCart. Each service owns its concern.",
      },
    },
    {
      heading: { ru: "Фронт", en: "Front-end" },
      value: { ru: "Next.js", en: "Next.js" },
      detail: {
        ru: "Намеренно скучный. Аудитория — строители, не дизайнеры.",
        en: "Intentionally boring. The audience is builders, not designers.",
      },
    },
    {
      heading: { ru: "Сток", en: "Stock" },
      value: { ru: "Синк с 1С", en: "1C sync" },
      detail: {
        ru: "Каждые 5 минут. Только дельта. Заказы летят в 1С — статусы обратно.",
        en: "Every 5 minutes. Diff only. Orders flow into 1C — statuses come back.",
      },
    },
    {
      heading: { ru: "Поиск", en: "Search" },
      value: { ru: "Подбор аналогов", en: "Alternatives finder" },
      detail: {
        ru: "Если нужного нет в наличии — система предложит похожее.",
        en: "Out of stock? The system offers similar items by spec.",
      },
    },
    {
      heading: { ru: "Изображения", en: "Images" },
      value: { ru: "S3 + WebP", en: "S3 + WebP" },
      detail: {
        ru: "Авто-оптимизация под viewport. Карточек тысячи — отдача быстрая.",
        en: "Auto-optimised per viewport. Thousands of cards stay snappy.",
      },
    },
    {
      heading: { ru: "Корзина", en: "Cart" },
      value: { ru: "Реал-тайм наличие", en: "Live availability" },
      detail: {
        ru: "Пока думаешь — позиция могла кончиться. Корзина пересоберётся сама.",
        en: "While you ponder, stock may run out. The cart self-corrects.",
      },
    },
  ],
  receipt: {
    title: { ru: "Контракт", en: "Contract" },
    rows: [
      {
        k: { ru: "Цена", en: "Price" },
        v: "350 000 ₽",
      },
      {
        k: { ru: "Срок", en: "Timeline" },
        v: { ru: "5 месяцев", en: "5 months" },
      },
      {
        k: { ru: "Код сам", en: "Coding by me" },
        v: { ru: "≈ 4 дня", en: "≈ 4 days" },
      },
      {
        k: { ru: "Остальные 5 месяцев", en: "The other 5 months" },
        v: { ru: "Ждал разработчика 1С", en: "Waiting on their 1C dev" },
      },
    ],
  },
  cta: {
    site: { ru: "Открыть магазин", en: "Open the store" },
    phone: "+7 978 007 04 44",
  },
} as const;

const SCREENSHOT = {
  src: "/assets/vs82/main.webp",
  w: 2880,
  h: 1626,
};

const GALLERY: LightboxItem[] = [
  {
    kind: "image",
    src: SCREENSHOT.src,
    alt: "Vs82.ru storefront",
    width: SCREENSHOT.w,
    height: SCREENSHOT.h,
  },
];

export function Vs82Project({ lang }: Vs82ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  /** Subtle horizontal sweep of the gigantic background numeral, so it
   *  doesn't feel locked when the user scrolls past. */
  const hugeX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={ref}
      id="vs82"
      className="relative isolate overflow-hidden bg-[#F36C13] py-32 text-[#1a0d04] sm:py-44"
      style={{
        fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
      }}
    >
      {/* Cross-hatched orange — subtle texture so the block isn't a flat panel. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1a0d04 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, #1a0d04 0 1px, transparent 1px 14px)",
        }}
      />

      {/* The huge "100 000" sits behind everything, parallax-shifted gently. */}
      <motion.div
        aria-hidden
        style={{ x: hugeX }}
        className="pointer-events-none absolute top-[12%] -right-[6%] z-0 select-none"
      >
        <div
          className="font-[var(--font-archivo)] text-[42vw] leading-[0.78] tracking-[-0.05em] text-[#1a0d04]/[0.07] sm:text-[34vw] lg:text-[400px]"
          aria-hidden
        >
          {COPY.hugeNumber}
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* -------------------------------------------------------- header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#1a0d04]/80">
            <span aria-hidden className="h-px w-10 bg-[#1a0d04]/40" />
            <span>{COPY.kicker[lang]}</span>
          </div>

          <h2
            className="mt-6 font-[var(--font-archivo)] text-[14vw] leading-[0.88] tracking-[-0.03em] sm:text-[10vw] lg:text-[160px]"
            style={{ textTransform: "uppercase" }}
          >
            {COPY.title[lang]}
          </h2>

          <div className="mt-3 inline-flex items-center gap-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.25em] text-[#1a0d04]/80 sm:text-base">
            <span>{COPY.domain}</span>
            <span aria-hidden className="h-px w-8 bg-[#1a0d04]/40" />
            <span>{COPY.cta.phone}</span>
          </div>

          <p className="mt-8 max-w-[700px] text-xl leading-snug text-[#1a0d04]/85 sm:text-2xl">
            {COPY.tagline[lang]}
          </p>
        </motion.div>

        {/* -------------------------------------------------------- huge num */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-baseline gap-5 border-t border-[#1a0d04]/15 pt-10 sm:mt-24"
        >
          <div className="font-[var(--font-archivo)] text-[24vw] leading-[0.85] tracking-[-0.04em] tabular-nums sm:text-[18vw] lg:text-[240px]">
            {COPY.hugeNumber}
          </div>
          <div className="font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#1a0d04]/80 sm:text-base">
            {COPY.hugeLabel[lang]}
          </div>
        </motion.div>

        {/* -------------------------------------------------------- screenshot */}
        <div className="mt-20 sm:mt-28">
          <Media
            kind="image"
            src={SCREENSHOT.src}
            alt="Vs82.ru storefront"
            width={SCREENSHOT.w}
            height={SCREENSHOT.h}
            gallery={GALLERY}
            index={0}
            className="rounded-lg ring-1 ring-[#1a0d04]/15 shadow-[0_50px_120px_-40px_rgba(26,13,4,0.45)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[640px] font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#1a0d04]/75 sm:text-base"
          >
            {COPY.screenshotCaption[lang]}
          </motion.p>
        </div>

        {/* -------------------------------------------------------- facts grid */}
        <div className="mt-24 grid gap-x-10 gap-y-10 sm:mt-32 sm:grid-cols-2 lg:grid-cols-3">
          {COPY.facts.map((fact, i) => (
            <FactCard
              key={fact.heading.ru}
              index={i}
              heading={fact.heading[lang]}
              value={fact.value[lang]}
              detail={fact.detail[lang]}
            />
          ))}
        </div>

        {/* -------------------------------------------------------- receipt */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 max-w-[700px] sm:mt-32"
        >
          <div className="border-t-2 border-b-2 border-[#1a0d04] bg-[#fff5e6] p-7 sm:p-9">
            <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#1a0d04]/60">
              {COPY.receipt.title[lang]}
            </div>
            <dl className="mt-5 divide-y divide-[#1a0d04]/15">
              {COPY.receipt.rows.map((row) => (
                <div
                  key={row.k.ru}
                  className="flex items-baseline justify-between gap-5 py-3"
                >
                  <dt className="font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.18em] text-[#1a0d04]/70">
                    {row.k[lang]}
                  </dt>
                  <dd className="text-right font-[var(--font-archivo)] text-lg tracking-tight text-[#1a0d04] sm:text-xl">
                    {typeof row.v === "string" ? row.v : row.v[lang]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* -------------------------------------------------------- ctas */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-wrap items-center gap-3"
        >
          <a
            href={`https://${COPY.domain}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1a0d04] px-7 py-3 font-[var(--font-jetbrains)] text-sm uppercase tracking-[0.22em] text-[#F36C13] transition hover:bg-black"
          >
            <span>{COPY.cta.site[lang]}</span>
            <span aria-hidden className="transition group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={`tel:${COPY.cta.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-[#1a0d04]/30 px-7 py-3 font-[var(--font-jetbrains)] text-sm tracking-[0.18em] text-[#1a0d04] transition hover:border-[#1a0d04] hover:bg-[#1a0d04] hover:text-[#F36C13]"
          >
            {COPY.cta.phone}
          </a>
        </motion.div>
      </div>

      {/* Fade-out to the next project. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#050505]"
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function FactCard({
  index,
  heading,
  value,
  detail,
}: {
  index: number;
  heading: string;
  value: string;
  detail: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      className="relative"
    >
      <div className="font-[var(--font-jetbrains)] text-xs uppercase tracking-[0.3em] text-[#1a0d04]/55">
        {String(index + 1).padStart(2, "0")} · {heading}
      </div>
      <div className="mt-3 font-[var(--font-archivo)] text-3xl uppercase leading-tight tracking-[-0.01em] text-[#1a0d04] sm:text-4xl">
        {value}
      </div>
      <p className="mt-3 max-w-[36ch] text-base leading-snug text-[#1a0d04]/75 sm:text-[17px]">
        {detail}
      </p>
    </motion.div>
  );
}
