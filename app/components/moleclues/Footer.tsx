"use client";

import { useRef } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import TrailorTradeLogo from "@/app/components/atoms/TrailorTradeLogo";

const footerColumns = [
  {
    title: "Models",
    href: "#models",
    links: ["Urban Commander", "Adventure Seeker", "Touring Edition", "Eco Innovator"],
  },
  {
    title: "Technology",
    href: "#technology",
    links: ["Performance", "Safety Features", "Smart Connectivity", "Eco Technology"],
  },
  {
    title: "Support",
    href: "#support",
    links: ["Service Centers", "Owner Manuals", "Warranty", "Contact Support"],
  },
  {
    title: "Company",
    href: "#company",
    links: ["Our Story", "Careers", "Press", "Sustainability"],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  // Scroll-driven reveal of the footer shell. Ends when the footer's bottom
  // reaches the viewport bottom, so it always finishes at opacity 1.
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Smooth the raw scroll value so the reveal glides instead of stepping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  const shellY = useTransform(smoothProgress, [0, 1], [40, 0]);
  const shellOpacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);

  // Entrance choreography on the inner content (a separate element from the
  // shell, so Y transforms never conflict)
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.6, ease: EASE },
    },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.2 : 0.6,
        ease: EASE,
        delayChildren: reduce ? 0 : 0.12,
        staggerChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.4, ease: EASE },
    },
  };

  return (
    <section ref={footerRef} className="relative mt-20 md:sticky md:bottom-0">
      <m.footer
        style={reduce ? undefined : { y: shellY, opacity: shellOpacity }}
        className="relative transform-gpu overflow-hidden bg-[#171E2B] text-white xl:h-[546px]"
      >
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-2 gap-x-6 gap-y-10 px-6 py-10
            sm:px-10
            md:grid-cols-4 md:gap-x-8 md:py-12
            xl:h-full xl:grid-cols-[27.22%_19.65%_14.79%_13.06%_1fr] xl:gap-0 xl:p-0
          "
        >
          {/* Logo: full row below xl, own column at xl+ */}
          <m.div
            variants={logoVariants}
            className="col-span-2 md:col-span-4 xl:col-span-1 xl:pl-[81px] xl:pt-10"
          >
            <TrailorTradeLogo  />
          </m.div>

          {/* Navigation columns (data-driven) */}
          {footerColumns.map((column) => (
            <m.nav
              key={column.title}
              aria-label={column.title}
              variants={columnVariants}
              className="flex min-w-0 flex-col gap-4 xl:gap-[47px] xl:pt-[98px]"
            >
              <h3 className="font-figtree text-base font-bold leading-[23px] tracking-[-0.04em] text-white xl:text-xl">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start gap-3 xl:gap-[22px]">
                {column.links.map((link) => (
                  <m.li key={link} variants={linkVariants}>
                    <FooterLink label={link} href={column.href} />
                  </m.li>
                ))}
              </ul>
            </m.nav>
          ))}
        </m.div>
      </m.footer>
    </section>
  );
}

interface FooterLinkProps {
  label: string;
  href: string;
}

function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="
        group inline-block py-0.5 font-figtree text-base leading-6 text-white/90
        transition-colors duration-300 ease-out
        hover:text-white focus-visible:text-white
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
        xl:text-lg xl:leading-[25px]
      "
    >
      {/* Only the text moves; the <a> hit area stays put, so hover can't flicker */}
      <span
        className="
          inline-block transition-transform duration-300 ease-out
          group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]
          motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0
        "
      >
        {label}
      </span>
    </a>
  );
}