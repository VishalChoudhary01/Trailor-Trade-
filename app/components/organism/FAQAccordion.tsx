"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="w-full bg-[#F5F5F5] md:py-20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between md:px-12 px-6 md:py-8 py-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="md:text-xl text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className="text-2xl font-light text-gray-900 flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3, ease: "easeInOut" }
                }}
                className="overflow-hidden"
              >
                <div className="md:px-12 px-6 pb-8 pt-2">
                  <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;