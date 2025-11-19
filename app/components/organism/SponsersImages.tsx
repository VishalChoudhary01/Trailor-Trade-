"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import brands from "@/app/utils/data/sponsers";

const SponsersImages = () => {
  // Create three distinct rows for mobile
  const row1Brands = [...brands.slice(0, 4), ...brands.slice(0, 4), ...brands.slice(0, 4), ...brands.slice(0, 4)];
  const row2Brands = [...brands.slice(4, 8), ...brands.slice(4, 8), ...brands.slice(4, 8), ...brands.slice(4, 8)];
  const row3Brands = [...brands.slice(8, 12), ...brands.slice(8, 12), ...brands.slice(8, 12), ...brands.slice(8, 12)];

  return (
    <section className="w-full py-10 max-w-[1112px] mx-auto">
      <div
        className={`text-center mb-6 flex justify-center font-roboto_condensed`}
      >
        <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
        className="md:text-head1desktop max-w-[665px] leading-9 text-[30px] font-bold text-black uppercase">
          Trusted by Leading Motorcycle Brands.
        </motion.h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden overflow-hidden relative space-y-4">
        {/* Row 1  */}
        <div className="h-24 overflow-hidden">
          <div className="flex min-w-fit whitespace-nowrap animate-marquee">
            {row1Brands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                className="inline-flex items-center justify-center mx-4 min-w-[100px]"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={80}
                    height={60}
                    className="object-contain max-h-[60px] w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2  */}
        <div className="h-24 overflow-hidden">
          <div className="flex min-w-fit whitespace-nowrap animate-marquee-reverse">
            {row2Brands.map((brand, index) => (
              <div
                key={`row2-${index}`}
                className="inline-flex items-center justify-center mx-4 min-w-[100px]"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={80}
                    height={60}
                    className="object-contain max-h-[60px] w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="h-24 overflow-hidden">
          <div className="flex min-w-fit whitespace-nowrap animate-marquee">
            {row3Brands.map((brand, index) => (
              <div
                key={`row3-${index}`}
                className="inline-flex items-center justify-center mx-4 min-w-[100px]"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={80}
                    height={60}
                    className="object-contain max-h-[60px] w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View  */}
      <div className="hidden md:flex flex-col items-center md:my-[115px] md:gap-y-9">
        <div className="flex justify-between md:w-[950px]">
          {brands.slice(0, 4).map((brand, index) => (
            <motion.div
            viewport={{once:true}}
              initial={{ opacity: 0,scale: 15 }}
              whileInView={{ opacity: 1 , scale: 1 }}
              transition={{ duration: 0.5, delay:index + 0.4 * 0.6 }} 
              
             key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
        initial={{ opacity: 0,y: 20 }}
        whileInView={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.1 }}  
        className="flex justify-between md:w-[1112px]">
          {brands.slice(4, 8).map((brand, index) => (
            <motion.div
             viewport={{once:true}}
              initial={{ opacity: 0,scale: 10 }}
              whileInView={{ opacity: 1 , scale: 1 }}
              transition={{ duration: 0.5, delay:index + 0.4 * 0.8 }} 
                key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
        initial={{ opacity: 0,y: 20 }}
        whileInView={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.1 }} 
        className="flex justify-between md:w-[1040px]">
          {brands.slice(8, 12).map((brand, index) => (
            <motion.div
            viewport={{once:true}}
              initial={{ opacity: 0,scale: 10 }}
              whileInView={{ opacity: 1 , scale: 1 }}
              transition={{ duration: 0.5, delay:index + 0.4 * 2 }} 
            key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsersImages;