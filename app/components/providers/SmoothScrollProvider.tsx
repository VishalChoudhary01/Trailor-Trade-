"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";


type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

/**
 * Single Lenis instance for the landing page, driven by Motion's frame loop.
 *
 * `autoRaf: false` keeps Lenis from starting its own rAF loop. Motion's
 * `frame.setup` callback runs before Motion measures scroll each frame, so
 * `useScroll` / scroll-linked animations read the position Lenis writes in the
 * same tick. This is the only requestAnimationFrame loop on the page.
 */
export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = ({ timestamp }: { timestamp: number }) => {
      lenisRef.current?.lenis?.raf(timestamp);
    };

    frame.setup(update, true);

    return () => {
      cancelFrame(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        // Leave room for the fixed navbar when anchor links are followed.
        anchors: { offset: -80 },
        // Native touch scrolling feels better than synced/damped touch.
        syncTouch: false,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
