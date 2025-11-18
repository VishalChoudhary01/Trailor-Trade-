"use client";
import React from "react";
import Image from "next/image";
import BikeImage from "../../../public/images/hero/FZBikes.png";
import HeaderContent from "../organism/HeaderContent";
import Button from "../atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { motion } from "motion/react";
import { featuresList } from "@/app/utils/data/index";

const Bikes = () => {
  return (
    <section className=" flex md:justify-end justify-center md:py-16 w-full overflow-hidden  ">
      <div className=" shadow-2xl w-[92%] relative pb-20 bg-white">
        <div className="flex md:flex-row justify-center flex-col-reverse md:p-8 px-3 py-5 ">
          {/* left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 w-full max-w-[620px]  md:p-2 relative flex flex-col md:gap-y-6 gap-y-4 md:mt-0 mt-6 md:pr-16 "
          >
            <HeaderContent
              primaryContent="Why Riders Choose Us"
              secondaryContent="We’re more than just a motorcycle brand we’re a lifestyle."
              descript="Our bikes combine innovation, precision engineering, and aggressive styling to deliver an experience unlike any other. Whether you're a beginner or a seasoned rider, we've got the perfect machine for you."
            />
            {/* Feature Items */}
            <div className="md:pt-14 pt-10  max-w-[594px] space-y-6">
              {featuresList.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50, filter: "blur(50px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index}
                  className="flex md:items-center items-start md:gap-x-7 gap-x-2 "
                >
                  <Image
                    src={item.img}
                    alt="imga"
                    className="md:w-[146px] md:h-[146px] w-[100px] h-[100px] "
                  />
                  <p className="md:w-[380px] md:text-para1desktop text-para1mobile text-justify leading-tight tracking-tight">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* CTA */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }} 
            className="flex w-full md:justify-start justify-center gap-x-6 absolute md:-bottom-10 -bottom-16">
              <Button
                buttonText={`Explore Models`}
                buttonStyle={`font-inter bg-[#1959AC] rounded-[5px] md:text-para2desktop text-para1mobile text-white flex items-center gap-x-2 md:px-3.5 md:py-1.5 px-3 py-1.5`}
                rightIcon={<FaArrowRight />}
              />
              <Button
                buttonText={`123456789`}
                buttonStyle={`font-inter text-[#1959AC] outline outline-[#1959AC] rounded-sm  md:text-para2desktop text-para1mobile  flex items-center gap-x-2 md:px-7 px-6 py-1`}
                leftIcon={<BsTelephone />}
              />
            </motion.div>
          </motion.div>
          {/* Right */}
          <motion.div
            initial={{ scale: 0, opacity: 0, filter: "blur(180px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <Image
              src={BikeImage}
              alt="bikes"
              className="w-full h-auto object-contain"
              layout="responsive"
              width={800}
              height={600}
            />
          </motion.div>
        </div>
        <div className="bg-linear-90 from-[#043898] via-[#079902] to-[#170041] md:w-[96%] w-full md:h-5 h-3 absolute bottom-0"></div>
      </div>
    </section>
  );
};

export default Bikes;
