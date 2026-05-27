"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Lightbox — a single, globally-mounted fullscreen viewer used by every
 * project slide. Any image or video shown on the site can be passed into it.
 *
 * Why a context instead of per-slide modals: the lightbox is one of the few
 * pieces of UI that must survive layout changes (orientation rotation,
 * language switch via SPA navigation, etc.), so it lives at the root and
 * exposes an `open()` function via context.
 */

export type LightboxItem =
  | {
      kind: "image";
      src: string;
      /** Used as the visual placeholder until the full image decodes. */
      thumbSrc?: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "video";
      src: string;
      poster?: string;
      width: number;
      height: number;
    };

interface LightboxContextValue {
  /** Open the lightbox at `startIndex` within the provided gallery. */
  open: (items: LightboxItem[], startIndex: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

/** Hook used inside project slides to open the gallery for one of its media. */
export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used inside <LightboxProvider>");
  }
  return ctx;
}

interface OpenState {
  items: LightboxItem[];
  index: number;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OpenState | null>(null);

  const open = useCallback((items: LightboxItem[], startIndex: number) => {
    setState({ items, index: startIndex });
  }, []);

  const close = useCallback(() => setState(null), []);

  const next = useCallback(() => {
    setState((current) => {
      if (!current) return current;
      return {
        ...current,
        index: (current.index + 1) % current.items.length,
      };
    });
  }, []);

  const prev = useCallback(() => {
    setState((current) => {
      if (!current) return current;
      return {
        ...current,
        index:
          (current.index - 1 + current.items.length) % current.items.length,
      };
    });
  }, []);

  // Keyboard navigation while the lightbox is open.
  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll so the page underneath doesn't drift during gestures.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [state, close, next, prev]);

  const value = useMemo<LightboxContextValue>(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div
            key="lightbox"
            className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={close}
            // Lightbox swallows clicks so they don't reach the page below.
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-5 right-5 z-10 cursor-pointer rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide text-white/90 backdrop-blur transition hover:bg-white/20"
              aria-label="Close"
            >
              ESC
            </button>

            {state.items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 px-3 py-2 text-lg text-white/90 backdrop-blur transition hover:bg-white/20"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 px-3 py-2 text-lg text-white/90 backdrop-blur transition hover:bg-white/20"
                  aria-label="Next"
                >
                  →
                </button>
                <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-widest text-white/70 backdrop-blur">
                  {state.index + 1} / {state.items.length}
                </div>
              </>
            )}

            <motion.div
              key={state.index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[92vh] max-w-[94vw] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <LightboxBody item={state.items[state.index]} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

function LightboxBody({ item }: { item: LightboxItem }) {
  if (item.kind === "video") {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={item.src}
        poster={item.poster}
        controls
        autoPlay
        playsInline
        className="max-h-[92vh] max-w-[94vw] rounded-md"
        width={item.width}
        height={item.height}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      className="max-h-[92vh] max-w-[94vw] rounded-md object-contain"
      draggable={false}
    />
  );
}
