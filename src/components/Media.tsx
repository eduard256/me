"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useLightbox, type LightboxItem } from "./Lightbox";

/**
 * Media — the universal image/video tile used by every project.
 *
 * Responsibilities:
 *   - Lazy-loads off-screen content (native lazy for <img>, IntersectionObserver
 *     gate for autoplay <video> to avoid burning bandwidth on a tab in the
 *     background).
 *   - Animates into place from below with a small stagger when first revealed.
 *   - Hooks click → open the project's gallery in the global lightbox.
 *
 * `gallery` is the full list of media inside the current project; `index` is
 * this tile's position inside it. When the user clicks any tile, the lightbox
 * opens with the correct neighbours so left/right keys keep working.
 */

type Common = {
  className?: string;
  /** When true this tile sits above the fold and should load immediately. */
  priority?: boolean;
  /** Click-to-open gallery context. */
  gallery: LightboxItem[];
  index: number;
};

type ImageProps = Common & {
  kind: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

type VideoProps = Common & {
  kind: "video";
  src: string;
  poster?: string;
  width: number;
  height: number;
};

type MediaProps = ImageProps | VideoProps;

export function Media(props: MediaProps) {
  const { className = "", priority = false, gallery, index } = props;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const lightbox = useLightbox();

  const handleOpen = useCallback(() => {
    lightbox.open(gallery, index);
  }, [lightbox, gallery, index]);

  return (
    <motion.div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      className={`media-tile ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {props.kind === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
        />
      ) : (
        <AutoplayVideo
          src={props.src}
          poster={props.poster}
          width={props.width}
          height={props.height}
          priority={priority}
        />
      )}
    </motion.div>
  );
}

function AutoplayVideo({
  src,
  poster,
  width,
  height,
  priority,
}: {
  src: string;
  poster?: string;
  width: number;
  height: number;
  priority: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  // Only attach the real <source> once the element is anywhere near the
  // viewport. This is more aggressive than the browser's lazy heuristics:
  // we trigger ~600px before entry to avoid a stutter when the user scrolls
  // quickly through several project blocks.
  useEffect(() => {
    if (shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
            return;
          }
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  // Pause when off-screen so we don't decode video the user isn't watching.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      // The browser default `controls` UI breaks the editorial feel — videos
      // are silent looping art on the page and become regular videos only in
      // the lightbox where controls are explicitly enabled.
    />
  );
}
