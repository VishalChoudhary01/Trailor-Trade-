"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import research from '../../../public/images/research.png';
import plan from '../../../public/images/plan.jpg';
import design from '../../../public/images/desginnn.jpg';
import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react'

type TabId = "research" | "plan" | "design";  

const TabbedContentSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("research");

  const tabs: { id: TabId; label: string }[] = [
    { id: "research", label: "Research" },
    { id: "plan", label: "Plan" },
    { id: "design", label: "Design" }
  ];

  const content: Record<TabId, { text: string; image: string }> = {
    research: {
      text: "We begin with extensive market analysis and rider behavior studies. Our team analyzes performance data, safety requirements, and emerging technologies to define the perfect balance of power, efficiency, and rider experience for each motorcycle model.",
      image: research.src,
    },
    plan: {
      text: "Strategic development planning ensures every component meets our rigorous standards. We map out engineering specifications, material selection, manufacturing processes, and quality control protocols to deliver motorcycles that exceed performance expectations.",
      image: plan.src,
    },
    design: {
      text: "Our design process blends aesthetic excellence with functional innovation. From aerodynamic bodywork to ergonomic seating positions, every curve and component is meticulously crafted using advanced CAD modeling and real-world testing protocols.",
      image: design.src,
    },
  };

  return (
    <section className="w-full bg-gray-50 py-24 md:py-64   px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl md:text-head1desktop font-bold md:text-left text-center text-gray-900 mb-6 md:mb-8">
              OUR DEVELOPMENT PROCESS
            </h2>

            {/* Tabs - Responsive without disturbing desktop */}
            <div className="flex mb-6 md:mb-8 w-full max-w-full lg:max-w-[600px] h-fit justify-between overflow-x-auto lg:overflow-visible">
              {tabs.map((tab,index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 w-[120px] sm:w-[150px] md:w-[200px] py-2 md:py-2.5 border-gray-300 transition-all duration-200 cursor-pointer ${index===1 ? "border-y":"border"} font-medium text-sm sm:text-base md:text-lg transition-all ${index === 0 ? "rounded-l-lg" : index ===  2 ? "rounded-r-lg" : ""}  ${
                    activeTab === tab.id
                      ? "bg-gray-100  text-gray-900"
                      : "bg-white text-gray-600 hover:bg-white/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content with responsive height */}
            <div className="mb-6 md:mb-8 min-h-[140px] sm:min-h-[120px] md:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-text"}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 30, filter: "blur(4px)" }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {content[activeTab].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="text-[#1959AC] cursor-pointer font-semibold flex items-center gap-2 hover:gap-3 transition-all group text-base sm:text-lg">
              Check tools
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image with responsive sizing */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full perspective-distant max-w-full lg:max-w-[600px] mx-auto h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-image"}
                  initial={{ 
                    opacity: 0,
                    scale: 0.8,
                    rotateY: 90,
                    borderRadius: "50%"
                  }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    borderRadius: "0%"
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 1.2,
                    rotateY: -90,
                    borderRadius: "50%"
                  }}
                  transition={{ 
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1],
                    rotateY: {
                      duration: 0.6
                    },
                    borderRadius: {
                      duration: 0.4
                    }
                  }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={content[activeTab].image} 
                    alt={activeTab} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                  />
                  
                  
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TabbedContentSection;