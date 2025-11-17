import React from 'react';
import TrailorTradeLogo from '../atoms/TrailorTradeLogo';
import Button from '../atoms/Button';
import { FaArrowRightLong } from "react-icons/fa6";


type HeaderBannerProps = {
  heading: string;
  paragraph1?: string;
  paragraph2?: string;
  showButton?: boolean;
  buttonText?: string;
  backgroundImageSet: string; 
};

function HeaderBanner({
  heading,
  paragraph1,
  paragraph2,
  showButton = false,
  buttonText = '',
  backgroundImageSet,
}: HeaderBannerProps) {
  return (
    <div
      className="w-full h-[652px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageSet})` }}
    >
      <div className="w-full h-full px-8 py-6">
        <TrailorTradeLogo />
        <div className="w-full h-full text-center flex items-center justify-center">
          <div className="text-white flex flex-col items-center md:gap-y-5 gap-y-3 md:py-1 pt-3 ">
            <h1
              className={`font-roboto_condensed text-shadow-2xs text-shadow-white  md:max-w-[920px] md:text-[42px] text-[25px] leading-9 font-bold uppercase`}
            >
              {heading}
            </h1>

            {paragraph1 && (
              <p
                className={`max-w-[732px] font-semibold md:text-[18px] text-[15px] font-inter`}
              >
                {paragraph1}
              </p>
            )}

            {paragraph2 && (
              <p className={`font-inter max-w-[732px] md:text-[18px] text-[15px]`}>
                {paragraph2}
              </p>
            )}

            {showButton && (
              <Button
                buttonText={buttonText}
                buttonStyle={`bg-white px-3 py-1 flex text-[#1959AC] items-center gap-x-1 font-bold rounded font-inter`}
                rightIcon={<FaArrowRightLong className='text-[#1959AC]' />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
