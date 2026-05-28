import { Hero } from "./Hero";
import { StrixProject } from "@/projects/StrixProject";
import { Vs82Project } from "@/projects/Vs82Project";
import { ImgableProject } from "@/projects/ImgableProject";
import { TheMedProject } from "@/projects/TheMedProject";
import { MeetProject } from "@/projects/MeetProject";
import { BeaverNotesProject } from "@/projects/BeaverNotesProject";
import { PalubaProject } from "@/projects/PalubaProject";
import { SkycraftProject } from "@/projects/SkycraftProject";
import { VastProject } from "@/projects/VastProject";
import { FlowparxProject } from "@/projects/FlowparxProject";
import { JamperhubProject } from "@/projects/JamperhubProject";
import { YagopereProject } from "@/projects/YagopereProject";
import { VectorProject } from "@/projects/VectorProject";
import { PanelProject } from "@/projects/PanelProject";
import { TheZoltoProject } from "@/projects/TheZoltoProject";
import { DzProject } from "@/projects/DzProject";
import { HwProject } from "@/projects/HwProject";
import { CamWebawebaProject } from "@/projects/CamWebawebaProject";
import { GostrixProject } from "@/projects/GostrixProject";
import { FrinklipProject } from "@/projects/FrinklipProject";
import { TextProject } from "@/projects/TextProject";
import { PixelGridProject } from "@/projects/PixelGridProject";
import { McpOpenaiImagesAudioProject } from "@/projects/McpOpenaiImagesAudioProject";
import { Claudecode2apiProject } from "@/projects/Claudecode2apiProject";
import { BambooTunnelProject } from "@/projects/BambooTunnelProject";
import { RussiaBlockedIpsProject } from "@/projects/RussiaBlockedIpsProject";
import { McpJsProject } from "@/projects/McpJsProject";
import { MqttMcpServerProject } from "@/projects/MqttMcpServerProject";
import type { Lang } from "@/lib/i18n";

/**
 * Home — the entire page is a vertical stream of independent project blocks.
 *
 * Order:
 *   - Strongest first (Strix, Vs82, imgable, meet, beaver-notes, skycraft …)
 *   - Mood mixed: dark / light / dark / light, heavy media → compact.
 *   - Asset-less infrastructure projects appended last as typography-only
 *     slides (claudecode2api, Bamboo, russia-blocked-ips, mcp-js, mqtt).
 */
export function Home({ lang }: { lang: Lang }) {
  return (
    <main>
      <Hero lang={lang} />

      {/* Loud, asset-rich */}
      <StrixProject lang={lang} />
      <Vs82Project lang={lang} />
      <MeetProject lang={lang} />
      <BeaverNotesProject lang={lang} />
      <VastProject lang={lang} />
      <ImgableProject lang={lang} />
      <TheMedProject lang={lang} />
      <PalubaProject lang={lang} />
      <SkycraftProject lang={lang} />
      <FlowparxProject lang={lang} />
      <JamperhubProject lang={lang} />
      <YagopereProject lang={lang} />
      <VectorProject lang={lang} />
      <PanelProject lang={lang} />
      <TheZoltoProject lang={lang} />
      <DzProject lang={lang} />
      <HwProject lang={lang} />
      <CamWebawebaProject lang={lang} />
      <GostrixProject lang={lang} />
      <FrinklipProject lang={lang} />
      <TextProject lang={lang} />
      <PixelGridProject lang={lang} />
      <McpOpenaiImagesAudioProject lang={lang} />

      {/* Text-only infrastructure tail */}
      <Claudecode2apiProject lang={lang} />
      <BambooTunnelProject lang={lang} />
      <RussiaBlockedIpsProject lang={lang} />
      <McpJsProject lang={lang} />
      <MqttMcpServerProject lang={lang} />
    </main>
  );
}
