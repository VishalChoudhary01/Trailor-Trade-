"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { m, AnimatePresence, useReducedMotion } from "motion/react";

interface Story {
  image: string;
  title: string;
  description: string;
}

const stories: Story[] = [
  {
    image: "/images/testimonial_users/testimonal_banner/artist_investor.png",
    title: "Artist & Investor",
    description:
      "Driven by a passion for innovation and the freedom of the open road, our riders bring creativity, ambition, and vision to every journey. Discover the stories of individuals who turn their passion for riding into extraordinary experiences and inspire others along the way.",
  },
  {
    image: "/images/testimonial_users/testimonal_banner/lens-by-benji.jpg",
    title: "The Everyday Commuter",
    description:
      "For those who make every day a journey, the right motorcycle brings together comfort, confidence, and the freedom to move at your own pace.",
  },
  {
    image: "/images/testimonial_users/testimonal_banner/richard.jpg",
    title: "A New Beginning",
    description:
      "Every new motorcycle marks the beginning of something exciting. Find a ride that reflects your personality, preferences, and the journeys ahead.",
  },
  {
    image: "/images/testimonial_users/testimonal_banner/guanghao.jpg",
    title: "The Long-Distance Explorer",
    description:
      "Some journeys are about more than reaching a destination. Discover the freedom of open roads, changing landscapes, and unforgettable experiences.",
  },
  {
    image: "/images/testimonial_users/testimonal_banner/ronnzy-moto.jpg",
    title: "The Performance Enthusiast",
    description:
      "For riders who appreciate bold styling, responsive handling, and thoughtful engineering, every detail can make the riding experience special",
  },
];

const StoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const reduceMotion = useReducedMotion();
  const story = stories[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      aria-labelledby="stories-heading"
      className="w-full overflow-x-clip bg-white px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14 lg:mb-20">
          <h2
            id="stories-heading"
            className={`font-roboto_condensed mb-4 text-3xl font-bold uppercase leading-[1.2] tracking-[-0.01em] text-[#0D1B2E] md:mb-6 md:text-4xl lg:text-5xl`}
          >
            A BETTER RIDE, IN THEIR WORDS
          </h2>
          <p className="mx-auto max-w-5xl text-balance text-sm leading-relaxed text-gray-800 md:text-base md:leading-[25px]">
            Every rider has a different reason to ride. Discover experiences shaped by everyday journeys, weekend escapes, and adventures beyond the familiar.
          </p>
        </div>

        {/* Carousel */}
        <div role="region" aria-roledescription="carousel" aria-label="Rider stories">
          <AnimatePresence mode="wait">
            <m.div
              key={currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${currentIndex + 1} of ${stories.length}`}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -100 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
              className="relative"
            >
              {/* Layer 2: Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/10] lg:aspect-[679/411] lg:w-[53.05%]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 1280px) 679px, (min-width: 1024px) 53vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Layer 3: Card.
                  <lg: stacked, overlapping the image bottom.
                  lg+: right-aligned, vertically centred, ~80px horizontal overlap */}
              <m.div 
              initial={{ x: reduceMotion ? 0 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: reduceMotion ? 0 : -80, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.3,delay: reduceMotion ? 0 : 0.2 }}
              className="relative z-10 mx-4 -mt-10 md:mx-10 md:-mt-16 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[53.05%] lg:-translate-y-1/2">
                <div className="bg-white p-5 shadow-[0_8px_32px_rgba(16,24,40,0.10)] md:p-8 xl:p-12">
                  <h3 className="mb-3 text-lg font-medium tracking-[0.05em] text-[#1E3557] sm:text-xl md:mb-4 md:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mb-5 min-h-[6rem] line-clamp-4 text-base leading-6 text-gray-800 md:mb-6 md:min-h-[4.5rem] md:line-clamp-3">
                    {story.description}
                  </p>
                  <button
                    type="button"
                    className="group flex items-center gap-3 text-sm font-medium text-[#1959AC] transition-all hover:gap-4"
                  >
                    Read Full Story
                    <FaArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </m.div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Layer 5: Pill navigation */}
        <div
          role="group"
          aria-label="Choose a story"
          className="mt-8 flex items-center justify-center gap-2 md:mt-14 lg:mt-20"
        >
          {stories.map((s, index) => (
            <button
              key={s.title}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              className={`relative h-3 rounded-full transition-all duration-300 before:absolute before:-inset-2 ${
                index === currentIndex
                  ? "w-12 bg-[#1959AC]"
                  : "w-3 bg-[#1959AC]/60 hover:bg-[#1959AC]/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesCarousel;