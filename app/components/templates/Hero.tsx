"use client";
import React from "react";
import Image from "next/image";
import hero from '../../../public/images/hero/Hero.png';
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import bluetick from "../../../public/icons/bluetick.svg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";


const Hero = () => {
  return (
    <section className="w-full flex flex-col md:pb-24 pb-14  overflow-hidden ">
      <div className="w-full flex items-center ">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-[60%] w-full   flex justify-center items-center md:pt-24 pt-24  md:px-0 px-2.5"
        >
          <div className="md:w-[696px] md:space-y-9 space-y-8">
            <h1
              className={` max-w-[528px] md:h-[140px]  md:leading-16 leading-11 md:text-justify text-center font-bold xl:text-[64px] lg:text-[62px] md:text-[55px] font-roboto_condensed  text-[30px]`}
            >
              Experience the Thrill of the Ride
            </h1>
            <p className={`max-w-[520px] md:text-justify text-center font-inter md:px-0 px-4 md:text-[18px] text-[14px] md:leading-7 leading-6 text-[#4F4F4F]`}>
              Join thousands of riders who trust our bikes for speed, power, and
              reliability. From city streets to open highways, feel the rush
              like never before. Explore our latest models, exclusive gear, and
              rider community.
            </p>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2 md:justify-start justify-center  ">
                <Input placeholder="Enter your email to get updates" className="outline-none placeholder:italic placeholder:text-gray-400  border border-[#C3C3C3] max-w-[342px] max-h-[46px] xl:w-[342px] w-[228px] h-[45px] xl:h-[46px] rounded-md p-2 caret-gray-500 md:text-lg text-[14px]" />
                <Button
                  buttonText="Submit"
                  buttonStyle={`flex items-center gap-x-2 rounded-[5px] md:text-[15px] text-[14px] max-w-[127px] md:w-[127px] w-[100px] h-[45px] md:px-0 px-4 justify-center bg-[#1959AC] text-white  `}
                  rightStyle="md:text-[15px] text-[14px]"
                  rightIcon={<FaArrowRight />}
                />
              </div>
              <motion.div
                initial={{ y: 180, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center md:justify-start justify-center md:gap-x-2 gap-x-1.5  text-[15px]`}
              >
                <Image
                  src={bluetick}
                  alt="checked"
                  className="md:size-5 size-[18px] object-contain"
                />
                <p className="md:text-[15px] text-[12px] text-[#1959AC]">No credit card required!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 120, opacity: 0,filter: 'blur(250px)',background: 'white' }}
          whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)', background: 'rgba(255, 255, 255, 0)' }}
          transition={{ duration: 0.9 }}
          className="w-[40%] h-auto md:block hidden clip-diagonal "
        >
          <Image src={hero} alt="hero" className="object-fill" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full h-[60px] md:block hidden bg-linear-to-t from-white to-transparent  "></div>
    </section>
  );
};

export default Hero;
