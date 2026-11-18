"use client";
import React from "react";
import Image from "next/image";
import DealershipImage from "../../../public/images/showroomdealer.png";
import Button from "../atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { m, useReducedMotion, type Variants } from "motion/react";
import PinIcon from "../../../public/icons/pin.svg";

const contentItems: string[] = [
  "Think about your everyday routes, weekend plans, and the distances you expect to cover.",
  "Consider the riding position, handling, and features that match your experience and priorities.",
  "Shortlist the motorcycles that interest you, then book a test ride to discover how they feel on the road.",
];

const EASE = [0.22, 1, 0.36, 1] as const;
const GRADIENT = "bg-linear-to-r from-[#043898] via-[#079902] to-[#170041]";

const DealershipSection = () => {
  const reduce = useReducedMotion();
  const viewport = { once: true, amount: 0.25 };

  // Simple one-off reveal for heading / paragraph / button / image
  const reveal = (delay = 0, y = 24, x = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport,
    transition: {
      duration: reduce ? 0.2 : 0.6,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  });

  // Card enters first, then its children (list items) stagger in
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.2 : 0.6,
        ease: EASE,
        delayChildren: reduce ? 0 : 0.35,
        staggerChildren: reduce ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0.2 : 0.5, ease: EASE },
    },
  };

  return (
    <section
      aria-labelledby="dealership-heading"
      className="relative w-full overflow-x-clip bg-white pb-12 md:pb-16 xl:pb-36 xl:pt-24"
    >
      {/* Layer 1: 1440 frame. At xl+ it's a fixed 706px canvas for the overlapping layers */}
      <div className="relative mx-auto max-w-[1440px] xl:h-[706px]">
        {/* Left column */}
        <div className="px-4 pt-12 md:px-10 md:pt-16 xl:pl-16 xl:pr-0 xl:pt-10">
          <m.h2
            id="dealership-heading"
            {...reveal(0)}
            className="mb-5 max-w-[486px] font-roboto_condensed text-[32px] font-bold leading-[1.17] text-[#1959AC] md:text-[42px]"
          >
            YOUR NEXT RIDE STARTS WITH THE RIGHT CHOICE
          </m.h2>

          <m.p
            {...reveal(0.15)}
            className="mb-8 max-w-[612px] text-base leading-[25px] text-black xl:mb-10"
          >
            Every rider has different priorities. Explore the lineup, consider where you ride most, and focus on the comfort, performance, and features that suit your needs. Shortlist your favourites and take the next step with confidence.
          </m.p>

          <m.div {...reveal(0.3, 16)} className="w-fit">
            <Button
              rightIcon={<FaArrowRight aria-hidden="true" />}
              buttonText="Explore Models"
              buttonStyle="bg-[#1959AC] flex items-center gap-[10px] text-white text-sm font-semibold leading-[18px] px-6 py-[10px] rounded-[5px] shadow-md"
            />
          </m.div>
        </div>

        {/* Layer 2: Image. Stacked below xl, absolute at xl+ */}
        <m.div
          {...reveal(0.2, 0, 24)}
          className="mt-10 px-4 md:px-10 xl:absolute xl:-top-[88px] xl:right-4 xl:mt-0 xl:w-[570px] xl:px-0"
        >
          <Image
            src={DealershipImage}
            alt="Dealership"
            width={570}
            height={570}
            sizes="(min-width: 1280px) 570px, 100vw"
            className="aspect-[4/3] h-auto w-full object-cover object-center md:aspect-[16/9] xl:aspect-square"
          />
        </m.div>

        {/* Layer 3: Card wrapper. Overlaps image bottom below xl, absolute at xl+ */}
        <div className="relative z-10 -mt-12 px-4 md:-mt-16 md:px-10 xl:absolute xl:left-16 xl:top-[433px] xl:mt-0 xl:w-[546px] xl:p-0">
          {/* Mobile/tablet gradient strip, passing behind the card */}
          <div
            aria-hidden="true"
            className={`${GRADIENT} absolute left-0 top-[64%] h-3 w-[92%] md:h-5 xl:hidden`}
          />

          <m.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative z-10 bg-white px-5 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:px-10 md:py-10 xl:py-[50px]"
          >
            <Image
              src={PinIcon}
              alt=""
              aria-hidden="true"
              className="absolute right-4 top-2 h-10 w-10 md:right-8 xl:right-[33px] xl:top-[2px] xl:h-[50px] xl:w-[50px]"
            />
            <h3 className="mb-5 pr-12 text-xl font-semibold leading-7 text-neutral-900 xl:mb-[35px] xl:pr-0">
              A FEW THINGS TO CONSIDER
            </h3>
            <ul className="flex flex-col gap-4">
              {contentItems.map((item) => (
                <m.li
                  key={item}
                  variants={itemVariants}
                  className="text-base leading-[25px] text-neutral-800"
                >
                  {item}
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>

        {/* Desktop gradient strip at the bottom of the 706px container */}
        <div
          aria-hidden="true"
          className={`${GRADIENT} absolute bottom-0 left-0 z-0 hidden h-5 w-[88.75%] xl:block`}
        />
      </div>
    </section>
  );
};

export default DealershipSection;