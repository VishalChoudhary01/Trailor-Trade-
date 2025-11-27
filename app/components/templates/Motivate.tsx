"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <section className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-14">
        
        {/* Main Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ========== LEFT SIDE ========== */}
          <div className=" flex flex-col gap-y-9 ">
            
            {/* Top Section - Content + Small Portrait Image */}
            <div className="grid grid-cols-12  gap-x-12 ">
              {/* Text Content */}
              <div className="col-span-11 lg:col-span-9 space-y-8  ">
                <p className="text-[20px] font-inter text-gray-500 tracking-widest font-semibold  uppercase">
                  NO LIMITS
                </p>
                
                <h1 className="md:text-5xl font-bold text-head1 uppercase [word-spacing:0.2em] ">
                  PUSH BEYOND CONVENTIONAL BOUNDARIES
                </h1>
                
                <p className="text-para1 text-para2desktop leading-relaxed [word-spacing:0.5em] pr-2">
                 Discover motorcycles engineered to defy expectations. With cutting-edge technology and precision craftsmanship, we deliver unmatched performance that transforms every ride into an extraordinary experience.
                </p>
                
                  <Button buttonText="Book Test Ride" buttonStyle="bg-[#1959AC] hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-md flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg w-fit" rightIcon={<FaArrowRightLong  />} rightStyle="text-lg" />
               
              </div>

              {/* Small Portrait Image - bike2 */}
              <div className="top-[45%]  w-[140px] h-[241px]  col-span-3  relative  ">
                <Image
                  src={bike2}
                  alt="Lead motorcycle rider"
                  fill
                  className="object-contain  "
                />
              </div>
            </div>

            {/* Bottom Section - Small Portrait + Horizontal Image */}
            <div className="grid grid-cols-12     ">
              {/* Small Portrait - bike3 */}
              <div className="col-span-3 self-end-safe relative h-[162px]  w-[135px] overflow-hidden ">
                <Image
                  src={bike3}
                  alt="Urban motorcyclists"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Horizontal Image - horibike4 */}
              <div className=" col-span-9 relative h-[236px] w-[518px] self-end-safe  overflow-hidden">
                <Image
                  src={horibike1}
                  alt="Motorcycle group ride"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE ========== */}
          <div className="flex flex-col gap-y-9">
            
            {/* Top Row - Small Portrait + Horizontal */}
            <div className="grid grid-cols-12 gap-2">
              {/* Small Portrait - bike1 */}
              <div className="col-span-3 relative h-[210px] self-end-safe w-[135px] ">
                <Image
                  src={bike1}
                  alt="Motorcycle rider"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Horizontal Image - horibike3 */}
              <div className="col-span-9 relative h-[240px] w-[465px] ">
                <Image
                  src={horibike4}
                  alt="Night riders"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle Row - Large Horizontal Image */}
            <div className="relative w-[640px] h-[312px] ">
              <Image
                src={horibike2}
                alt="Sunset motorcycle ride"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Row - Small Portrait + Horizontal */}
            <div className="grid grid-cols-12 ">
              {/* Small Portrait - horibike1 */}
              <div className="col-span-3 self-end-safe relative w-[135px] h-[72px] ">
                <Image
                  src={bike4}
                  alt="Motorcycle detail"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Horizontal Image - bike4 */}
              <div className="col-span-9 self-end-safe relative h-[72px] w-[469px] ">
                <Image
                  src={horibike3}
                  alt="Parked motorcycles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}