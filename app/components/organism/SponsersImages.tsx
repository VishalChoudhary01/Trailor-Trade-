"use client";
import React from "react";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

// Import all brand logos
import Ather from "../../../public/images/brands/AtherLogo.png";
import Bajaj from "../../../public/images/brands/Bajaj.png";
import TORK from "../../../public/images/brands/TORK.png";
import Hero from "../../../public/images/brands/Hero.png";
import Honda from "../../../public/images/brands/Honda.png";
import Ola from "../../../public/images/brands/Ola-Electric.png";
import KTM from "../../../public/images/brands/KTM.png";
import TVS from "../../../public/images/brands/TVS.png";
import Yamaha from '../../../public/images/brands/yamaha.png';
import Ulta from "../../../public/images/brands/Ultraviolette.png";
import royal from "../../../public/images/brands/royal.png";
import revolt from "../../../public/images/brands/royal.png";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SponsersImages = () => {
  const brands = [
    { name: "Hero", image: Hero },
    { name: "Honda", image: Honda },
    { name: "Bajaj", image: Bajaj },
    { name: "TVS", image: TVS },
    { name: "Royal Enfield", image: royal },
    { name: "Yamaha", image: Yamaha },
    { name: "KTM", image: KTM },
    { name: "Ather", image: Ather },
    { name: "OLA ELECTRIC", image: Ola },
    { name: "Revolt", image: revolt },
    { name: "Ultraviolette", image: Ulta },
    { name: "TORK", image: TORK },
  ];

  // Create three distinct rows for mobile
  const row1Brands = [...brands.slice(0, 4), ...brands.slice(0, 4), ...brands.slice(0, 4)];
  const row2Brands = [...brands.slice(4, 8), ...brands.slice(4, 8), ...brands.slice(4, 8)];
  const row3Brands = [...brands.slice(8, 12), ...brands.slice(8, 12), ...brands.slice(8, 12)];

  return (
    <section className="w-full py-10 max-w-[1112px] mx-auto">
      <div
        className={`text-center mb-6 flex justify-center ${roboto_Condensed.className}`}
      >
        <h2 className="md:text-[42px] max-w-[665px] leading-9 text-[30px] font-bold text-black uppercase">
          Trusted by Leading Motorcycle Brands.
        </h2>
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
            <div key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between md:w-[1112px]">
          {brands.slice(4, 8).map((brand, index) => (
            <div key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between md:w-[1040px]">
          {brands.slice(8, 12).map((brand, index) => (
            <div key={index} className="flex items-center justify-center relative">
              <Image
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsersImages;