import React from "react";

export interface LogoProps {
  /**
   * @deprecated Kept so existing <TailorRideLogo scrolled={...} /> calls still compile.
   * The new mark has no background, so it is unused.
   */
  scrolled?: boolean;
  /** Background the logo sits on. "light" = navbar, "dark" = footer. */
  variant?: "light" | "dark";
  /** Single-colour version. Colour comes from the text colour (text-black, text-white...). */
  mono?: boolean;
  /** Replaces the default responsive width. Height always follows the width. */
  className?: string;
}

/* Cap height is 100 units, stroke 18. Every glyph is a hand-built polygon
   (45° chamfers instead of curves), so nothing depends on a font. */
const VIEWBOX_W = 810;

const GLYPHS: Record<string, string> = {
  T: "M0.00 0.00L80.00 0.00L80.00 18.00L49.00 18.00L49.00 100.00L31.00 100.00L31.00 18.00L0.00 18.00Z",
  A: "M0.00 100.00L34.00 0.00L54.00 0.00L88.00 100.00L69.00 100.00L62.88 82.00L25.12 82.00L19.00 100.00ZM44.00 26.47L31.24 64.00L56.76 64.00Z",
  I: "M0.00 0.00L18.00 0.00L18.00 100.00L0.00 100.00Z",
  L: "M0.00 0.00L18.00 0.00L18.00 82.00L66.00 82.00L66.00 100.00L0.00 100.00Z",
  O: "M0.00 30.00L30.00 0.00L62.00 0.00L92.00 30.00L92.00 70.00L62.00 100.00L30.00 100.00L0.00 70.00ZM18.00 62.54L37.46 82.00L54.54 82.00L74.00 62.54L74.00 37.46L54.54 18.00L37.46 18.00L18.00 37.46Z",
  D: "M0.00 0.00L56.00 0.00L86.00 30.00L86.00 70.00L56.00 100.00L0.00 100.00ZM18.00 82.00L48.54 82.00L68.00 62.54L68.00 37.46L48.54 18.00L18.00 18.00Z",
  R: "M0.00 0.00L62.00 0.00L84.00 22.00L84.00 64.00L0.00 64.00ZM18.00 46.00L66.00 46.00L66.00 29.46L54.54 18.00L18.00 18.00ZM36.00 60.00L60.00 60.00L84.00 100.00L60.00 100.00Z",
  E: "M0.00 0.00L64.00 0.00L64.00 18.00L18.00 18.00L18.00 41.00L56.00 41.00L56.00 59.00L18.00 59.00L18.00 82.00L64.00 82.00L64.00 100.00L0.00 100.00Z",
};

/* [glyph, x offset]. The wider gap before the second R separates TAILOR | RIDE,
   and the T–A pair is tucked so the A sits under the T's crossbar. */
const LETTERS: [string, number][] = [["T", 0.00], ["A", 66.00], ["I", 164.00], ["L", 204.00], ["O", 272.00], ["R", 384.00], ["R", 498.00], ["I", 600.00], ["D", 640.00], ["E", 746.00]];

const COLORS = {
  light: { tailor: "#00B894", ride: "#0984E3" },
  dark: { tailor: "#FFFFFF", ride: "#00B894" },
} as const;

const DEFAULT_SIZE = "w-[150px] md:w-[190px] xl:w-[250px]";

const TailorRideLogo = ({ variant = "light", mono = false, className }: LogoProps) => {
  const tailor = mono ? "currentColor" : COLORS[variant].tailor;
  const ride = mono ? "currentColor" : COLORS[variant].ride;

  return (
    <svg
      role="img"
      aria-label="TailorRide"
      viewBox={`0 0 ${VIEWBOX_W} 100`}
      xmlns="http://www.w3.org/2000/svg"
      className={`block h-auto shrink-0 ${className ?? DEFAULT_SIZE}`}
    >
      <title>TailorRide</title>
      {LETTERS.map(([glyph, x], i) => (
        <path
          key={i}
          d={GLYPHS[glyph]}
          transform={`translate(${x} 0)`}
          fill={i < 6 ? tailor : ride}
        />
      ))}
    </svg>
  );
};

export default TailorRideLogo;