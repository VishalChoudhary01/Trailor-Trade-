"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const StoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const stories = [
    {
      image: "/api/placeholder/620/480",
      title: "Artist & Investor",
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ..."
    },
    {
      image: "/api/placeholder/620/480",
      title: "Adventure Seeker",
      description: "Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non. Habitant vestibulum vitae amet habitasse semper mauris..."
    },
    {
      image: "/api/placeholder/620/480",
      title: "Professional Rider",
      description: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium duis enim semper..."
    },
    {
      image: "/api/placeholder/620/480",
      title: "Mountain Explorer",
      description: "Hendrerit augue ut netus quis integer netus. Sed rhoncus magnis habitasse egestas amet habitasse tellus ornare hendrerit..."
    },
    {
      image: "/api/placeholder/620/480",
      title: "Road Warrior",
      description: "Purus maecenas quis elit eu, aliquet tellus porttitor ut sollicitudin sit non fringilla quam nunc volutpat senectus neque..."
    }
  ];

  const handleDotClick = (index: number) => {
  setCurrentIndex(index);
};

  return (
    <section className="w-full bg-white md:py-20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold text-gray-900 mb-6">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="md:text-base text-sm text-gray-700 leading-relaxed max-w-5xl mx-auto">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisl, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
          </p>
        </div>

{/* Carousel */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
            >
              {/* Image - Full Width on Mobile, Partial on Desktop */}
              <div className="w-full md:w-[65%] md:ml-0">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Card - Overlapping on Desktop */}
              <div className="w-full md:w-[50%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-0">
                <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 border border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {stories[currentIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {stories[currentIndex].description}
                  </p>
                  <button className="text-[#1959AC] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                    Read Full Story
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Pill Navigation */}
        <div className="flex justify-center items-center gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-[#1959AC] w-12 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesCarousel;