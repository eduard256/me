import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Fraunces,
  Inter_Tight,
  Archivo_Black,
  Space_Grotesk,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "@/components/Lightbox";

/* -------------------------------------------------------------------------- */
/*  Fonts                                                                     */
/* -------------------------------------------------------------------------- */
/*
 * Every project on the site is allowed to bring its own typography. To keep
 * the bundle reasonable we ship a small curated set of variable fonts from
 * Google Fonts via next/font (self-hosted, no runtime fetch).
 *
 * Each project file picks the variable that matches its mood:
 *   - jetbrains → terminal / code-heavy projects (Strix, claudecode2api, …)
 *   - archivo   → industrial / commerce (Vs82, vast)
 *   - fraunces  → editorial / food / luxury (the med, vector, yagopere)
 *   - instrument-serif → editorial display, soft / boutique (paluba, hw)
 *   - inter-tight → neutral utility text (Hero metrics, nav, captions)
 *   - space-grotesk → playful technical (frinklip, mqtt-mcp, mcp-js)
 */

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const fontArchivo = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fontFraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const fontInstrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fontInter = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const fontSpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://me.webaweba.com"),
  title: "eduard256",
  description: "28 projects. One person.",
  openGraph: {
    title: "eduard256",
    description: "28 projects. One person.",
    siteName: "eduard256",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eduard256",
    description: "28 projects. One person.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    fontMono.variable,
    fontArchivo.variable,
    fontFraunces.variable,
    fontInstrument.variable,
    fontInter.variable,
    fontSpaceGrotesk.variable,
  ].join(" ");

  return (
    <html lang="en" className={`${fontVars} antialiased`}>
      <body className="min-h-screen">
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
