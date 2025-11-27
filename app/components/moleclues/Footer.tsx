"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const footerTranslateY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={footerRef}
      className="sticky bottom-0 h-[45vh] mt-20"
    >
      <motion.div
        style={{ y: footerTranslateY, opacity: footerOpacity }}
        className="relative h-full overflow-hidden border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl rounded-t-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Parallax BG */}
        <motion.div
          style={{ y: bgTranslateY }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_#0ea5e955,_transparent_55%),radial-gradient(circle_at_bottom,_#6366f155,_transparent_55%)] opacity-80"
        />

        {/* Header border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col md:flex-row gap-8 px-8 py-10">
          <div className="flex-1">
            <p className="text-xs uppercase text-sky-400/80 mb-2 tracking-widest">
              FOOTER
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Modern Parallax Footer
            </h2>
            <p className="text-slate-300 text-sm max-w-md">
              This footer reveals smoothly with scroll and has a subtle
              parallax background movement for a premium visual effect.
            </p>
          </div>

          <div className="w-full md:w-52">
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
              <FooterLink label="Home" />
              <FooterLink label="Features" />
              <FooterLink label="Pricing" />
              <FooterLink label="Docs" />
              <FooterLink label="Support" />
              <FooterLink label="Contact" />
            </div>

            <div className="flex items-center justify-between mt-5">
              <button className="rounded-full border border-sky-500/50 px-4 py-2 text-sm hover:bg-sky-500/20 transition">
                Get Started
              </button>

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-xs underline underline-offset-4 text-slate-400 hover:text-slate-100"
              >
                Top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 px-8 py-3 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Brand</span>
          <div className="flex gap-4">
            <button className="hover:text-slate-200">Privacy</button>
            <button className="hover:text-slate-200">Terms</button>
            <button className="hover:text-slate-200">Cookies</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <button className="text-left hover:text-sky-300 transition">
      {label}
    </button>
  );
}
