"use client";

import { LazyMotion, domAnimation } from "motion/react";

type MotionProviderProps = {
  children: React.ReactNode;
};

/**
 * Loads only the animation features the landing page uses (animations,
 * variants, exit animations and hover/tap/focus gestures) instead of the full
 * `motion` component bundle. Children use the lightweight `m` components.
 */
export default function MotionProvider({ children }: MotionProviderProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
