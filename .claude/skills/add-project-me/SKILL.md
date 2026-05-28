---
name: add-project-me
description: Add a new project block (slide) to the me.webaweba.com portfolio. Use ONLY when the user explicitly asks to add a new project to this site. Teaches how to create a per-project file with its own unique design, wire it into Home with automatic numbering, and adapt the layout to the project's character and available assets.
disable-model-invocation: true
argument-hint: [project-name]
---

# Добавление нового проекта в портфолио me.webaweba.com

Этот скилл проводит тебя через добавление **нового блока проекта** на сайт. Каждый проект — это отдельный самодостаточный React-компонент со **своей уникальной стилистикой**: свой фон, свои цвета (как правило взятые из самого проекта), своя типографика, своя композиция и ритм. Универсального шаблона нет — есть принципы и эталоны.

## Железные правила проекта

1. **Один проект = один файл** в `src/projects/`. Имя файла — `<Name>Project.tsx`, экспорт — `export function <Name>Project({ lang }: ...)`.
2. **Каждый блок выглядит по-разному.** Не копируй чужой дизайн один-в-один. Бери приёмы из эталонов, но придумай свою сцену под характер проекта.
3. **Текста очень мало.** 90% — фото/видео. 7% — анимации. 3% — текст. Только заголовок + 5-7 слов tagline. У больших проектов — короткие подписи между медиа, но никогда «пакетом». У проектов с малым числом скринов можно дать чуть больше контекста (3-4 коротких факта), но без воды.
4. **Никаких контактов** (телефон, email) в блоках проектов. Только ссылка на сайт (если коммерческий/демо/в проде) или на GitHub (если open source). Приватные проекты — без ссылки.
5. **Цены — в долларах**, не в рублях.
6. **Номер в kicker НЕ пишется руками.** Он подставляется автоматически по позиции в `Home` (см. ниже). В строке kicker пиши только тип: `"Open source · Go"`, `"Клиент · QR-меню"` и т.п.
7. **Без мата и выпендрёжа** в текстах. Факты, цифры, прямая речь.
8. **i18n внутри файла**: весь текст — в объекте `COPY` с полями `{ ru, en }`. Никакого внешнего словаря.
9. **Все шрифтовые Tailwind-классы — через `font-[family-name:var(--font-X)]`** (НЕ `font-[var(--font-X)]` — он молча не применяется в Tailwind v4). Либо задавай `style={{ fontFamily: "var(--font-X), fallback" }}` на секции.
10. **Никаких fade-out снизу** (`bg-gradient-to-b ... to-[#050505]`) — переходы между блоками резкие. Не добавляй их.

## ШАГ 1 — Прочитай эталоны ПОЛНОСТЬЮ

Прежде чем писать, прочитай эти файлы **целиком** (не куски — полностью), чтобы впитать паттерны. Это обязательно.

Инфраструктура (общие компоненты, читай первыми):
- `src/components/Home.tsx` — как все проекты собираются в ленту и оборачиваются в `<ProjectList>` для автонумерации.
- `src/components/Media.tsx` — универсальный компонент фото/видео: lazy-load, autoplay в viewport, клик → lightbox. Любое медиа добавляй ТОЛЬКО через него.
- `src/components/ProjectNumber.tsx` — как работает автонумерация (`useProjectNumber()`).
- `src/lib/i18n.ts` — типы `Lang`, `Bilingual`.

Эталонные проекты (каждый — свой приём, изучи разные):
- `src/projects/StrixProject.tsx` — **тёмный, видео-герой + несколько скринов с подписями между ними.** Эталон проекта с большим числом медиа: hero-video full-bleed, число-стена, скрины пайплайна. Parallax-glow по скроллу.
- `src/projects/Vs82Project.tsx` — **клиентский e-commerce, один скрин + гигантская цифра «100 000» + факты + receipt-блок.** Эталон «мало медиа, много фактов как преимущество». Брендовый оранжевый.
- `src/projects/MeetProject.tsx` — **тёмный, один скрин + плотный «rack» из сервисов + hard-line спеки.** Эталон проекта с богатой архитектурой, поданной типографикой.
- `src/projects/VastProject.tsx` — **2 скрина в сетке + строка «заменяет 6 контейнеров» через line-through.** Эталон среднего проекта.
- `src/projects/PanelProject.tsx` — **приватный проект: 1 скрин + штамп «private, not for sale» + факты, без ссылки.** Эталон как подавать приватное.
- `src/projects/FlowparxProject.tsx` — **имиджевый клиентский: большой скрин + плавающий бейдж + факты на цветном градиенте.** Эталон «фото — герой».
- `src/projects/RussiaBlockedIpsProject.tsx` — **текстовый слайд БЕЗ ассетов: одна гигантская цифра + pillar'ы.** Эталон проекта без скриншотов (как и claudecode2api, bamboo-tunnel, mcp-js, mqtt-mcp-server).

## ШАГ 2 — Узнай у пользователя про проект

Если не передано в аргументах, спроси (коротко, через AskUserQuestion):
- Название и одна суть в 5-7 слов.
- Тип: open source / клиент / личный / демо / приватный.
- Ссылка: сайт или GitHub (или нет — приватный).
- Какие ассеты есть и где (фото/видео). Уточни ориентацию: PC-скрины (landscape) или мобильные (portrait).
- 2-4 факта/цифры, которыми проект силён.

## ШАГ 3 — Подготовь ассеты

- Все статичные изображения → **WebP** (q≈92, без мыла). Видео/GIF → **MP4 (H.264)**.
- Клади в `public/assets/<slug>/` (slug в kebab-case). Узнавай размеры (`identify`/`ffprobe`) — `width`/`height` обязательны для `<Media>`, иначе будет CLS.
- Если ассетов нет — делай текстовый слайд (см. RussiaBlockedIps): большая цифра / код-сниппет / ASCII-схема.

## ШАГ 4 — Выбери дизайн под характер проекта

Подумай, что проект «есть», и собери под него сцену:
- **Цвет** бери из самого проекта (бренд-цвет сайта, палитра UI). У сайта нет «своего» цвета — он живёт цветами проектов. Чередуй тёмные/светлые блоки относительно соседей в `Home`.
- **Шрифт** под настроение: `--font-jetbrains` (терминал/код), `--font-archivo` (индустрия/коммерция), `--font-fraunces` / `--font-instrument` (editorial/еда/люкс), `--font-space-grotesk` (игривый техно), `--font-dela` (жирный гротеск-логотип), `--font-inter-tight` (нейтральный текст). Все объявлены в `src/app/layout.tsx`.
- **Композиция** под число медиа:
  - 1 скрин → крупный hero + факты/receipt (как Vs82, Flowparx, Panel).
  - 2-4 скрина → сетка или strip (как Vast).
  - видео + скрины → видео full-bleed сверху, скрины с короткими подписями (как Strix).
  - мобильные скрины → показывай под лёгким углом / каскадом, БЕЗ рамок ноутбука.
  - нет ассетов → текст/цифры/код/ASCII (как RussiaBlockedIps).

## ШАГ 5 — Напиши файл проекта

Скелет (адаптируй под свою идею, НЕ копируй дословно):

```tsx
"use client";

import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { LightboxItem } from "@/components/Lightbox";
import type { Lang } from "@/lib/i18n";
import { useProjectNumber } from "@/components/ProjectNumber";

interface XProjectProps { lang: Lang; }

const COPY = {
  kicker: { ru: "Open source · Go", en: "Open source · Go" }, // БЕЗ номера
  title: { ru: "Name", en: "Name" },
  tagline: { ru: "5-7 слов сути.", en: "5-7 word essence." },
  // факты/подписи по необходимости — { ru, en }
  links: { site: "example.com" }, // или github, или ничего
} as const;

const HERO = { src: "/assets/x/main.webp", w: 2880, h: 1626 };
const GALLERY: LightboxItem[] = [
  { kind: "image", src: HERO.src, alt: "X", width: HERO.w, height: HERO.h },
];

export function XProject({ lang }: XProjectProps) {
  return (
    <section
      id="x"
      className="relative isolate overflow-hidden bg-[#РАЗ] py-32 text-[#ДВА] sm:py-44"
      style={{ fontFamily: "var(--font-...), system-ui, sans-serif" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.32em] text-[#...]/65">
            <span aria-hidden className="h-px w-10 bg-[#...]/40" />
            <span>{useProjectNumber()} · {COPY.kicker[lang]}</span>
          </div>
          <h2 className="mt-6 ...">{COPY.title[lang]}</h2>
          <p className="mt-6 max-w-[680px] ...">{COPY.tagline[lang]}</p>
        </motion.div>

        {/* Медиа через <Media kind="image|video" ... gallery={GALLERY} index={N} /> */}

        {/* Ссылка-кнопка (если есть) */}
      </div>
    </section>
  );
}
```

Требования к разметке:
- Секция: `relative isolate overflow-hidden`, отступы `py-32 sm:py-44`, контейнер `max-w-[1400px]` (или уже под идею), горизонтальные паддинги `px-5 sm:px-8 lg:px-16`.
- `id` секции = slug (для якорей).
- Заголовок крупный (адаптивный `vw` + `lg:` фикс).
- Анимации входа — `whileInView` с `ease: [0.16, 1, 0.3, 1]`, `viewport={{ once: true }}`.
- Все медиа — через `<Media>` с правильными `gallery` и `index` (index = позиция в массиве GALLERY).
- **Идеальная адаптация под телефон**: крупная типографика (не мельче 17px для текста), сетки превращаются в stack, PC-скрины под лёгким углом, ничего не наезжает на текст.

## ШАГ 6 — Подключи в Home

В `src/components/Home.tsx`:
1. Добавь импорт нового компонента рядом с остальными.
2. Вставь `<XProject lang={lang} />` внутрь `<ProjectList>` в нужную позицию (порядок = «по убыванию крутости»; проекты без ассетов — ближе к концу). Номер в kicker подставится сам.

## ШАГ 7 — Проверь

```bash
npm run build
```
Билд должен пройти без ошибок типов. Затем визуально проверь блок и его адаптацию на узком экране (dev-сервер). Убедись:
- номер kicker идёт по порядку,
- медиа кликается и открывается в lightbox,
- на мобиле всё читаемо и ничего не наезжает,
- переход к соседним блокам резкий (без fade-out).

## ШАГ 8 — Коммит

Закоммить и запушь. Сообщение коммита — на английском, без упоминаний AI/ассистента, без эмодзи, без Co-Authored-By.
