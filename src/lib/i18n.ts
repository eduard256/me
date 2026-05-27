/**
 * Tiny in-house i18n.
 *
 * The site has exactly two locales — Russian at `/` and English at `/en` —
 * and the translations live inline next to the components that use them,
 * so a heavy library (next-intl, lingui) would add weight without value.
 *
 * Convention:
 *   - Every component that renders user-facing copy receives `lang: Lang`.
 *   - Strings live in a local `const COPY: Bilingual<...>` literal in the
 *     component file. There is no global dictionary.
 *   - Look up a phrase with `t(COPY.something, lang)`.
 */

export type Lang = "ru" | "en";

export type Bilingual<T = string> = Record<Lang, T>;

export const isLang = (value: string): value is Lang =>
  value === "ru" || value === "en";

export function t<T>(entry: Bilingual<T>, lang: Lang): T {
  return entry[lang];
}

/** Returns the absolute href for the other locale, preserving the path. */
export function altLangHref(currentLang: Lang, pathname: string): string {
  if (currentLang === "ru") {
    // From `/` (or `/anything/`) go to `/en/...`.
    return pathname === "/" ? "/en/" : `/en${pathname}`;
  }
  // From `/en/...` strip the prefix.
  const stripped = pathname.replace(/^\/en/, "");
  return stripped || "/";
}
