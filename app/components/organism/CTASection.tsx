"use client";
import React from "react";
import { m, useReducedMotion, type Variants } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import TrailorTradeLogo from "@/app/components/atoms/TrailorTradeLogo";

const EASE = [0.22, 1, 0.36, 1] as const;

const CTASection = () => {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.6, ease: EASE },
    },
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-white px-4 py-16 md:px-10 md:py-24 xl:py-[120px]"
    >
      <m.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto flex w-full max-w-[736px] flex-col items-center text-center"
      >
        <m.div variants={item} className="mb-4 flex justify-center md:mb-5">
          <TrailorTradeLogo />
        </m.div>

        <m.h2
          id="cta-heading"
          variants={item}
          className="mb-4 font-roboto_condensed text-[28px] font-bold uppercase leading-[1.17] tracking-[-0.02em] text-[#111111] sm:text-[34px] md:mb-5 md:text-[42px]"
        >
          YOUR NEXT RIDE STARTS HERE.
        </m.h2>

        <m.p
          variants={item}
          className="mb-8 max-w-[492px] text-base leading-6 text-black md:mb-10 md:text-lg md:leading-[25px]"
        >
          Explore our motorcycle lineup, find the ride that matches your style, and experience the thrill for yourself. Book a test ride and take the first step towards your next adventure.
        </m.p>

        <m.div variants={item}>
          <button
            type="button"
            className="group inline-flex h-[38px] items-center gap-[10px] rounded-[5px] bg-[#1959AC] px-6 text-sm font-semibold leading-[18px] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-[#144a91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1959AC]"
          >
            Book a Test Ride
            <FaArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </m.div>
      </m.div>
    </section>
  );
};

export default CTASection;