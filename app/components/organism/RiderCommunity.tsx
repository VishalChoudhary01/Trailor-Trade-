"use client";
import React from "react";
import Image from "next/image";
// import RiderImage from "../../../public/images/riders/community.jpg"; 
import RiderImage from "../../../public/images/trust-partner.png"; 
import HeaderContent from "../organism/HeaderContent";
import Button from "../atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const RiderCommunity = () => {
  return (
    <section className="flex md:justify-start justify-center md:py-10 w-full ">
      <div className="md:w-[92%] w-full relative md:pb-20 pb-12 bg-[#F8F8F8]">
        <div className="flex md:flex-row flex-col justify-between items-center md:pr-24 md:gap-0 gap-8">
          {/* Left - Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0, filter: "blur(180px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-[550px] md:h-[550px] w-full h-64  relative md:bottom-20 bottom-16  md:left-0 justify-start"
          >
            <Image
              src={RiderImage}
              alt="rider community"
              className="absolute object-contain"
              fill
            />
          </motion.div>

          {/* Right content */}
          <div className="md:w-[620px] w-full  md:px-0 px-6 space-y-6 md:space-y-8 justify-end-safe">
            <div>
            <h2 className="text-[#0546D2] font-semibold font-inter md:text-head2desktop text-head2mobile md:text-left text-center">Performance</h2>
            <h1 className="font-roboto_condensed md:text-head1desktop text-head1mobile leading-8 md:leading-12 font-bold text-[#222222] text-center md:text-left">
             <motion.span
  className="text-[#1959AC] inline-block"
  initial={{ 
    opacity: 0,
    filter: "blur(10px)",
    scale: 10,
    letterSpacing: "0.5em"
  }}
  whileInView={{ 
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    letterSpacing: "0em"
  }}
  transition={{
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94],
    letterSpacing: {
      duration: 0.8,
      ease: "easeOut"
    }
  }}
>
  ENGINEERED
</motion.span>  FOR UNMATCHED RIDING DYNAMICS
            </h1>
            </div>
            <p className="md:text-para1desktop text-para1 text-para1mobile text-center md:text-left">
              Every motorcycle is precision-crafted to deliver exceptional performance across all conditions. Our advanced engineering ensures optimal power delivery, handling, and reliability that transforms every journey.
            </p>
          
            <div className="w-full flex md:flex-row flex-col md:gap-x-42 gap-6 md:gap-0">
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }} 
              className="space-y-3 md:w-auto w-full">
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Advanced Powertrain</p>
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Smart Connectivity</p>
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Adaptive Suspension</p>
              </motion.div>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }} 
              className="space-y-3 md:w-auto w-full">
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Eco Efficiency</p>
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Safety Systems</p>
                <p className="text-[#222222] md:text-head3desktop text-head3mobile font-semibold font-inter text-center md:text-left">Comfort Engineering</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }} 
            className="flex justify-center md:justify-start">
              <Button 
                buttonText="Explore Features" 
                buttonStyle="flex items-center gap-x-2 bg-[#1959AC] hover:bg-blue-600 text-white px-5 py-2 rounded-md group transition-all text-sm md:text-base" 
                rightStyle="group-hover:translate-x-1 transition-all" 
                rightIcon={<FaArrowRight />}
              />
            </motion.div>
          </div>
        </div>
        <div className="bg-linear-90 from-[#043898] via-[#079902] to-[#170041] md:w-[96%] w-full md:h-5 h-3 absolute bottom-0"></div>
      </div>
    </section>
  );
};

export default RiderCommunity;