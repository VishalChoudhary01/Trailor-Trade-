"use client";
import React, { useState } from "react";
import { m, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I choose the right motorcycle for my riding needs",
    answer: "Choosing the right motorcycle starts with understanding your riding style, experience, and everyday requirements. Explore our lineup, compare features, comfort, and performance, and consider whether you need a bike for daily commuting, weekend rides, or long-distance adventures.",
  },
  {
    question: "Can I book a test ride before choosing a motorcycle?",
    answer: "Absolutely! You can submit a test ride request through our Book Test Ride form. Select your preferred model, share your riding experience and primary usage, and provide your contact details to get started.. Pellentesque ultricies ipsum.",
  },
  {
    question: "What types of motorcycles can I explore at TailorRide?",
    answer: "Explore a diverse motorcycle lineup designed for different riding preferences, from sporty performance-focused machines to comfortable cruisers and touring motorcycles. Browse our Models section to discover the available options and find a ride that suits your style.",
  },
  {
    question: "What features and technologies should I look for in a motorcycle?",
    answer: "Look for features that match your priorities, including engine performance, handling, suspension, safety systems, comfort, and smart connectivity. Available technologies and specifications vary by model, so review individual model details before making your choice. Pellentesque ultricies ipsum.",
  },
  {
    question: "Does TailorRide provide after-sales service and customer support?",
    answer: "Customer support and after-sales assistance are important parts of the riding experience. TailorRide highlights its service network and customer support offerings. Visit our Support section for information about available assistance and service options.",
  },
];

const EASE = [0.4, 0, 0.2, 1] as const;
const ENTER_EASE = [0.22, 1, 0.36, 1] as const;

const Icon = ({ open, reduce }: { open: boolean; reduce: boolean | null }) => (
  <span
    aria-hidden="true"
    className="pointer-events-none relative flex h-6 w-6 shrink-0 items-center justify-center md:h-[25px]"
  >
    {/* horizontal bar: always visible */}
    <span className="absolute h-[2px] w-4 bg-[#111111]" />
    {/* vertical bar: rotates into the horizontal one, so + becomes − */}
    <m.span
      className="absolute h-4 w-[2px] bg-[#111111]"
      initial={false}
      animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
      transition={{
        rotate: { duration: reduce ? 0 : 0.3, ease: EASE },
        opacity: { duration: reduce ? 0 : 0.3, ease: EASE, delay: open && !reduce ? 0.1 : 0 },
      }}
    />
  </span>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open, as in Figma
  const reduce = useReducedMotion();

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  // Entry animation: heading, then rows stagger in once when scrolled into view
  const listVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.15 } },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.5, ease: ENTER_EASE },
    },
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-white px-4 py-12 md:px-10 md:py-16 xl:pb-[123px] xl:pt-[17px]"
    >
      <div className="mx-auto max-w-[1199px]">
        <m.h2
          id="faq-heading"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0.2 : 0.5, ease: ENTER_EASE }}
          className="mb-8 font-roboto_condensed text-[28px] font-bold uppercase leading-[1.17] text-[#111111] md:mb-12 md:text-4xl xl:mb-[110px] xl:text-[42px] xl:leading-[49px]"
        >
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </m.h2>

        <m.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <m.li
                key={faq.question}
                variants={rowVariants}
                className="relative border-t border-[#111111]/20 px-4 pb-5 pt-[19px] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-[#1959AC] md:px-8 md:pb-7 md:pt-[27px] xl:px-[41px] xl:pb-8 xl:pt-[31px]"
              >
                {/* Question + icon share one line, so the icon is anchored to the
                    question and never follows the answer's height */}
                <div className="flex items-start justify-between gap-4 md:gap-8">
                  <h3 className="min-w-0 flex-1">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      // after: stretches the click target across the whole row
                      className="block w-full cursor-pointer text-left text-base font-semibold leading-6 text-[#111111] outline-none after:absolute after:inset-0 after:content-[''] md:text-lg md:leading-[25px]"
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <Icon open={open} reduce={reduce} />
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: reduce ? 0 : 0.3, ease: EASE },
                        opacity: { duration: reduce ? 0 : 0.25, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[760px] pr-10 pt-[10px] text-base leading-6 text-[#111111] md:pr-16 md:text-lg md:leading-[25px] xl:pr-0">
                        {faq.answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
};

export default FAQAccordion;