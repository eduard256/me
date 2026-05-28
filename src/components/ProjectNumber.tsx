"use client";

import {
  createContext,
  useContext,
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type ReactElement,
} from "react";

/* -------------------------------------------------------------------------- */
/*  Project numbering                                                          */
/* -------------------------------------------------------------------------- */
/*
 * Project kickers show a running number ("05 · Личный · …"). Hardcoding it in
 * each file means every reorder desyncs the sequence. Instead the number is
 * derived from the block's position in <Home>.
 *
 * <ProjectList> walks its direct children, hands each one a 1-based index via
 * context, and each project reads it with useProjectNumber() to prefix its
 * kicker. Reordering blocks in Home is now the single source of truth.
 */

const ProjectNumberContext = createContext<number | null>(null);

/** Returns this project's 1-based number as a zero-padded string, e.g. "05".
 *  Falls back to "" when rendered outside a <ProjectList> (shouldn't happen). */
export function useProjectNumber(): string {
  const n = useContext(ProjectNumberContext);
  if (n === null) return "";
  return String(n).padStart(2, "0");
}

/** Wraps the ordered list of project elements and injects each one's number.
 *  Non-element children (whitespace, comments) are passed through untouched
 *  and do not consume a number. */
export function ProjectList({ children }: { children: ReactNode }) {
  let counter = 0;
  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        counter += 1;
        const n = counter;
        return (
          <ProjectNumberContext.Provider value={n}>
            {child as ReactElement}
          </ProjectNumberContext.Provider>
        );
      })}
    </>
  );
}
