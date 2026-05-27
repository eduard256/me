import { Hero } from "./Hero";
import { StrixProject } from "@/projects/StrixProject";
import { Vs82Project } from "@/projects/Vs82Project";
import type { Lang } from "@/lib/i18n";

/**
 * Home — the entire page is a vertical stream of independent project blocks.
 *
 * Each project is its own file with its own typography, palette and rhythm,
 * so this component is intentionally a thin shell. Adding a new project is
 * one import and one JSX line — see the documented order below.
 *
 * Project order:
 *   - First, the loudest: Strix and Vs82 are the locked first two.
 *   - Then the rest by "wildness" (most ambitious first, smallest demos last).
 *   - Last, the asset-less infrastructure projects shown as typography-only.
 */
export function Home({ lang }: { lang: Lang }) {
  return (
    <main>
      <Hero lang={lang} />
      <StrixProject lang={lang} />
      <Vs82Project lang={lang} />
      {/* TODO: imgable, meet, beaver-notes, skycraft, vast, jamperhub, ... */}
    </main>
  );
}
