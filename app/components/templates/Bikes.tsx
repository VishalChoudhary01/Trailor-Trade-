"use client"
import React from "react";
import Image from "next/image";
import BikeImage from "../../../public/images/hero/FZBikes.png";

import Biker1 from "../../../public/images/features/biker1.png"; 
import Biker2 from "../../../public/images/features/handshake.png";
import Biker3 from "../../../public/images/features/threeHand.png";
import HeaderContent from "../organism/HeaderContent";
import Button from "../atoms/Button";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { motion } from "motion/react";


const featuresList=[{
            img: Biker1,
            text: "Every model is built for speed and control, optimized to dominate highways and urban roads alike.",
          }, {
            img: Biker2,
            text: "From sport to cruiser to touring — explore our diverse lineup designed to suit every riding style.",
          }, {
            img: Biker3,
            text: "Ergonomic design ensures comfort on long rides without sacrificing style or performance.",
          }]

const inter = Inter({ subsets: ["latin"] });

const Bikes = () => {
  return (
    <section className=" flex md:justify-end justify-center md:py-16 w-full overflow-hidden ">
        <div className=" shadow-2xl w-[92%] relative pb-20 bg-white">
            <div className="flex md:flex-row justify-center flex-col-reverse md:p-8 px-3 py-5 ">
            {/* left */}
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5}}
            className="md:w-1/2 w-full max-w-[620px]  md:p-2 relative flex flex-col md:gap-y-6 gap-y-4 ">
                <HeaderContent primaryContent="Why Riders Choose Us" secondaryContent="We’re more than just a motorcycle brand we’re a lifestyle."   descript="Our bikes combine innovation, precision engineering, and aggressive styling to deliver an experience unlike any other. Whether you're a beginner or a seasoned rider, we've got the perfect machine for you."/>
            {/* Feature Items */}
            <div className="md:pt-14  max-w-[594px] space-y-6">
                {featuresList.map((item,index)=>(
                <div key={index} className="flex md:items-center items-start md:gap-x-7 gap-x-2 ">
                    <Image src={item.img} alt="imga" className="md:w-[146px] md:h-[146px] w-[100px] h-[100px] "/>
                    <p className="md:w-[380px] lg:text-[20px] md:text-[18px] text-[13px] text-justify leading-tight tracking-tight  ">{item.text}</p>
                </div>
                ))}
            </div>
            {/* CTA */}
            <div
            
             className="flex w-full md:justify-start justify-center gap-x-6 absolute md:-bottom-10 -bottom-16">
                <Button buttonText={`Explore Models`} buttonStyle={`${inter.className} bg-[#1959AC] rounded-[5px] text-[15px] text-white flex items-center gap-x-2 md:px-3.5 md:py-1.5 px-3 py-1.5`} rightIcon={<FaArrowRight/>}/>
                <Button buttonText={`123456789`} buttonStyle={`${inter.className} text-[#1959AC]  flex items-center gap-x-2 px-2 py-1`} leftIcon={<BsTelephone/>}/>
            </div>
            </motion.div>
            {/* Right */}
            <motion.div
            initial={{scale:0,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:0.5,delay:0.2}} 
            className="md:w-1/2 w-full">
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
            <div className="bg-linear-90 from-[#043898] via-[#079902] to-[#170041] md:w-[96%] w-full md:h-[20px] h-[12px] absolute bottom-0"></div>
        </div>

    </section>
  );
};

export default Bikes;
