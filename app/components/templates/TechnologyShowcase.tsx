import React from 'react'
import MotorcycleMosaic from '../organism/MotorcycleMosaic'
import Image from 'next/image'
import bgImage from '../../../public/images/background/Bg-Graphic.svg'
import RiderCommunity from '../organism/RiderCommunity'
import TestimonialsCarousel from '../organism/TestimonialsCarousel'

const TechnologyShowcase = () => {
  return (
    <div className='w-full   relative overflow-hidden  space-y-40'>
      <MotorcycleMosaic />
      <Image src={bgImage} alt="Background Graphic" fill className="absolute object-cover  -z-50   inset-0 " />
      <RiderCommunity />
      <TestimonialsCarousel />
    </div>
  )
}

export default TechnologyShowcase