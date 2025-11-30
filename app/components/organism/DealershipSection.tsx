"use client";
import React from "react";
import Image from "next/image";
// import DealershipImage from "../../../public/images/dealership/showroom.jpg"; // Update with your actual image path
import Button from "../atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import PinIcon from "../../../public/icons/pin.svg"; // Update with your actual icon path

const DealershipSection = () => {
  const contentItems = [
    "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.",
    "Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.",
    "Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo."
  ];

  return (
    <section className="flex md:justify-start justify-center md:py-16 w-full overflow-hidden bg-[#F5F5F5]">
      <div className="shadow-2xl w-[92%] relative pb-20 bg-white">
        <div className="flex md:flex-row justify-center flex-col md:p-8 px-3 py-5">
          {/* Left - Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 w-full max-w-[620px] md:p-2 relative flex flex-col md:gap-y-6 gap-y-4 md:pr-16"
          >
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-[#1959AC] md:text-[40px] text-[28px] font-bold leading-tight">
                LOREM IPSUM DOLOR SIT AMET CONSECTETEUR. DIGNISSIM TELLUS.
              </h2>
              <p className="md:text-para1desktop text-para1mobile text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
                laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
                ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in
                facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex w-full md:justify-start justify-center mt-4"
            >
              <Button
                buttonText={`Loerum Ipsum`}
                buttonStyle={`font-inter bg-[#1959AC] rounded-[5px] md:text-para2desktop text-para1mobile text-white flex items-center gap-x-2 md:px-6 md:py-2.5 px-4 py-2`}
                rightIcon={<FaArrowRight />}
              />
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 mt-8 relative"
            >
              {/* Pin Icon */}
              <div className="absolute -top-4 right-8">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lorem ipsum dolor sit
              </h3>

              <div className="space-y-4">
                {contentItems.map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="text-gray-700 md:text-para1desktop text-para1mobile leading-relaxed"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(180px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 w-full md:mt-0 mt-6"
          >
            {/* <Image
              src={DealershipImage}
              alt="dealership showroom"
              className="w-full h-auto object-cover rounded-lg"
              layout="responsive"
              width={800}
              height={600}
            /> */}
          </motion.div>
        </div>
        <div className="bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] md:w-[96%] w-full md:h-5 h-3 absolute bottom-0"></div>
      </div>
    </section>
  );
};

export default DealershipSection;