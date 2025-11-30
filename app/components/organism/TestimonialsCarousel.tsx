"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { testimonials } from "../../utils/data";
import Button from "../atoms/Button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileStep, setMobileStep] = useState(0); // step size for mobile slide

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (typeof window === "undefined") return;

      const isMob = window.innerWidth < 768;
      setIsMobile(isMob);

      // Card is w-[65vw] on mobile + gap/margins (~24px)
      const cardWidth = window.innerWidth * 0.65;
      const gapAndMargin = 24; // approximate spacing (gap + mx-2)
      setMobileStep(cardWidth + gapAndMargin);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;

    const distance = touchStartXRef.current - touchEndXRef.current;
    const threshold = 50; // minimum swipe distance in px

    if (distance > threshold) {
      // swipe left -> next
      handleNext();
    } else if (distance < -threshold) {
      // swipe right -> prev
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section className="w-full md:h-[1019px] h-auto bg-[#155ADA] md:py-20 py-14 md:pl-22 px-4 md:px-0 overflow-hidden">
      <div className="flex md:flex-row flex-col justify-between items-start md:items-center md:mb-12 mb-8 gap-6 md:pr-22">
        <div className="text-white max-w-3xl space-y-5 md:space-y-7">
          <div className="md:leading-snug leading-11">
            <p className="md:text-head2desktop text-head2mobile font-medium">
              Join Our Rider Community
            </p>
            <h2 className="md:text-head1desktop text-head1mobile font-bold md:mb-4 mb-2 md:leading-snug leading-8">
              REAL STORIES FROM THE ROAD
            </h2>
          </div>
          <p className="md:text-para1desktop text-para1mobile leading-relaxed opacity-90">
            Discover why thousands of riders choose our motorcycles for their
            daily commutes and weekend adventures. Experience the difference
            that precision engineering and rider-focused design makes on every
            journey.
          </p>
        </div>

        <div className="flex gap-x-16">
          <Button
            buttonText="Read More Stories"
            buttonStyle="bg-white text-[#155ADA] md:text-para3desktop text-para3mobile  rounded-[5px] md:mb-20 mb-8 font-inter font-semibold px-6 py-3 hover:scale-105 shadow-md hover:shadow-3xl transition-all md:w-auto text-center"
          />

          <div className="flex md:hidden justify-center gap-6  ">
            <Button
              onClick={handlePrev}
              leftIcon={<FaArrowLeft />}
              buttonText=""
              buttonStyle="size-12 rounded-full border-2 border-white text-white flex items-center justify-center active:bg-white active:text-[#1959AC] active:shadow-md active:shadow-white/60  hover:scale-110 cursor-pointer transition-all"
            />

            <Button
              onClick={handleNext}
              rightIcon={<FaArrowRight />}
              buttonText=""
              buttonStyle="size-12 rounded-full border-2 border-white text-white flex items-center justify-center active:bg-white active:text-[#1959AC] active:shadow-md active:shadow-white/60 hover:scale-110 cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-x-8 md:mb-12 justify-start">
        <Button
          onClick={handlePrev}
          leftIcon={<FaArrowLeft />}
          buttonText=""
          buttonStyle="md:size-12 size-10 rounded-full border-2 border-white text-white flex items-center justify-center active:bg-white active:text-[#1959AC] hover:shadow-md hover:shadow-white/40     hover:scale-110 cursor-pointer transition-all"
        />

        <Button
          onClick={handleNext}
          rightIcon={<FaArrowRight />}
          buttonText=""
          buttonStyle="md:size-12 size-10 rounded-full border-2 border-white text-white flex items-center justify-center active:bg-white active:text-[#1959AC] hover:shadow-md hover:shadow-white/40  hover:scale-110 cursor-pointer transition-all"
        />
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex md:gap-6 gap-4 items-center"
          animate={{
            x: isMobile
              ? -currentIndex * mobileStep
              : -currentIndex * (364 + 24),
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 70,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => {
            const displayIndex =
              (index - currentIndex + testimonials.length) %
              testimonials.length;
            const isFirst = displayIndex === 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl flex flex-col flex-shrink-0 transition-all duration-500
                  w-[65vw] h-[340px] px-6 py-8 shadow-lg mx-2
                  md:mx-0 md:shadow-lg
                  md:data-[first=true]:w-[400px] md:data-[first=true]:h-[520px]
                  md:data-[first=true]:px-8 md:data-[first=true]:py-14
                  md:data-[first=true]:shadow-2xl
                  md:data-[first=false]:w-[364px] md:data-[first=false]:h-[443px]
                  md:data-[first=false]:px-6 md:data-[first=false]:py-10`}
                data-first={isFirst && !isMobile}
              >
                <div className="mb-4 md:mb-6 flex items-center">
                  {testimonial.icon && (
                    <Image
                      src={testimonial.icon}
                      alt="Icon"
                      className="size-10 md:size-14 md:data-[first=true]:size-16"
                      data-first={isFirst && !isMobile}
                    />
                  )}

                  {!testimonial.icon && testimonial.ReactIcon && (
                    <testimonial.ReactIcon
                      className="text-3xl text-[#155ADA] md:text-4xl md:data-[first=true]:text-5xl"
                      data-first={isFirst && !isMobile}
                    />
                  )}
                </div>

                <p
                  className={`text-gray-900 mb-4 md:mb-6 flex-grow leading-relaxed 
                    text-para3mobile overflow-y-auto
                    md:data-[first=true]:text-para1desktop
                    md:data-[first=false]:text-para3desktop`}
                  data-first={isFirst && !isMobile}
                >
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="size-12 relative rounded-full overflow-hidden 
                      md:data-[first=true]:size-16 
                      md:data-[first=false]:size-14"
                    data-first={isFirst && !isMobile}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span
                    className="text-sm text-gray-900
                      md:data-[first=true]:text-base md:data-[first=true]:font-semibold md:data-[first=true]:text-gray-950"
                    data-first={isFirst && !isMobile}
                  >
                    {testimonial.name}
                    <p
                      className="text-xs text-gray-600
                        md:data-[first=true]:text-sm md:data-[first=true]:text-gray-700"
                      data-first={isFirst && !isMobile}
                    >
                      {testimonial.role}
                    </p>
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
