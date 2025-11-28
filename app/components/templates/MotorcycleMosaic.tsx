"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

// Import actual images
import bike1 from "../../../public/images/mosic_grid_banner/bike1.png";
import bike2 from "../../../public/images/mosic_grid_banner/bike2.png";
import bike3 from "../../../public/images/mosic_grid_banner/bike3.png";
import bike4 from "../../../public/images/mosic_grid_banner/bike4.png";
import horibike1 from "../../../public/images/mosic_grid_banner/horibike.png";
import horibike2 from "../../../public/images/mosic_grid_banner/horibike2.png";
import horibike3 from "../../../public/images/mosic_grid_banner/horibike3.png";
import horibike4 from "../../../public/images/mosic_grid_banner/horibike4.png";
import Button from "../atoms/Button";

export default function MotorcycleMosaic() {
  return (
    <section className="w-full bg-blue-50 py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Main Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ========== LEFT SIDE ========== */}
          <div className="flex flex-col gap-y-6 lg:gap-y-7">
            {/* Top Section - Content + Small Portrait Image */}
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-x-12">
              {/* Text Content */}
              <div className="lg:col-span-9 space-y-4 lg:space-y-8 text-center lg:text-left">
                <motion.p
                  initial={{ opacity: 0, scale: 10,  }}
                  whileInView={{ opacity: 1, scale: 1,}}
                  transition={{ duration: 1.2, delay: 0.5 }}
                 className="text-sm lg:text-[20px] font-inter text-gray-500 tracking-widest font-semibold uppercase">
                  NO LIMITS
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 80, filter: "blur(24px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.5 }} 
                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-head1 uppercase [word-spacing:0.1em] lg:[word-spacing:0.2em] leading-tight">
                  PUSH BEYOND CONVENTIONAL BOUNDARIES
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 80, filter: "blur(24px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                 className="text-para1 text-sm sm:text-base lg:text-para2desktop leading-relaxed [word-spacing:0.2em] lg:[word-spacing:0.5em] px-2 lg:px-0 lg:pr-2">
                  Discover motorcycles engineered to defy expectations. With
                  cutting-edge technology and precision craftsmanship, we
                  deliver unmatched performance that transforms every ride into
                  an extraordinary experience.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                 className="flex justify-center lg:justify-start md:mb-0 mb-14">
                  <Button
                    buttonText="Book Test Ride"
                    buttonStyle="bg-[#1959AC] hover:bg-blue-700 text-white font-semibold px-5 py-3 lg:px-7 lg:py-3 rounded-md flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg w-fit text-sm lg:text-base"
                    rightIcon={<FaArrowRightLong />}
                    rightStyle="text-lg"
                  />
                </motion.div>
              </div>

              {/* Small Portrait Image - bike2 */}
              <motion.div
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center lg:block lg:top-[45%] w-full lg:w-[140px] h-[241px] relative order-first lg:order-0 overflow-hidden"
              >
                <Image
                  src={bike2}
                  alt="Lead motorcycle rider"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500 ease-in-out"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Section - Small Portrait + Horizontal Image */}
            <div className="flex flex-col sm:flex-row lg:grid lg:grid-cols-12 gap-4 lg:gap-0">
              {/* Small Portrait - bike3 */}
              <motion.div
                initial={{ opacity: 0, y: 80, filter: "blur(24px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="md:flex hidden justify-center sm:justify-start lg:block lg:col-span-3 lg:self-end-safe relative h-[120px] sm:h-[140px] lg:h-[162px] w-full sm:w-[120px] lg:w-[135px] overflow-hidden"
              >
                <Image
                  src={bike3}
                  alt="Urban motorcyclists"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </motion.div>

              {/* Horizontal Image - horibike4 */}
              <motion.div
                initial={{ opacity: 0, x: -180 ,filter: 'blur(24px)'}}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)'}}
                transition={{ duration: 0.4,delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              className="lg:col-span-9 relative h-[180px] sm:h-[200px] lg:h-[236px] w-full lg:w-[518px] lg:self-end-safe overflow-hidden md:rounded-none rounded-md">
                <Image
                  src={horibike1}
                  alt="Motorcycle group ride"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            </div>
          </div>

          {/* ========== RIGHT SIDE ========== */}
          <div className="flex flex-col gap-y-6 lg:gap-y-12">
            {/* Top Row - Small Portrait + Horizontal */}
            <div className="flex flex-col sm:flex-row lg:grid lg:grid-cols-12 gap-4 lg:gap-2">
              {/* Small Portrait - bike1 */}
              <motion.div 
                initial={{ opacity: 0, y: -80, filter: "blur(24px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              className="md:flex hidden justify-center sm:justify-start lg:block lg:col-span-3 relative h-[120px] sm:h-40 lg:h-[210px] w-full sm:w-[120px] lg:w-[135px] lg:self-end-safe overflow-hidden">
                <Image
                  src={bike1}
                  alt="Motorcycle rider"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </motion.div>
              

              {/* Horizontal Image - horibike3 */}
              <motion.div
                initial={{ opacity: 0, x: 180 ,filter: 'blur(24px)'}}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)'}}
                transition={{ duration: 0.4,delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              className="lg:col-span-9 relative h-[180px] sm:h-[200px] lg:h-60 w-full lg:w-[465px] overflow-hidden md:rounded-none rounded-md">
                <Image
                  src={horibike4}
                  alt="Night riders"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            </div>

            {/* Middle Row - Large Horizontal Image */}
            <motion.div
              initial={{ opacity: 0, scale:0 ,filter: 'blur(24px)'}}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)'}}
              transition={{ duration: 0.8,delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
             className="relative w-full h-[200px] sm:h-[250px] lg:h-[312px] lg:w-[640px] overflow-hidden md:rounded-none rounded-md">
              <Image
                src={horibike2}
                alt="Sunset motorcycle ride"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </motion.div>

            {/* Bottom Row - Small Portrait + Horizontal */}
            <motion.div 
              initial={{ opacity: 0, y: 80 ,filter: 'blur(24px)'}}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)'}}
              transition={{ duration: 0.4,delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            className="md:flex hidden flex-col sm:flex-row lg:grid lg:grid-cols-12 gap-4 lg:gap-0">
              {/* Small Portrait - horibike1 */}
              <div className="flex justify-center sm:justify-start lg:block lg:col-span-3 lg:self-end-safe relative w-full sm:w-[100px] lg:w-[135px] h-[80px] sm:h-[60px] lg:h-[72px] overflow-hidden">
                <Image
                  src={bike4}
                  alt="Motorcycle detail"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Horizontal Image - bike4 */}
              <div className="lg:col-span-9 lg:self-end-safe relative h-[80px] sm:h-[60px] lg:h-[72px] w-full lg:w-[469px] overflow-hidden">
                <Image
                  src={horibike3}
                  alt="Parked motorcycles"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}