'use client'

import React from 'react'


interface LogoProps {
  scrolled?: boolean
}

const TrailorTradeLogo = ({ scrolled }: LogoProps) => {
  return (
    <div
      className={`
        xl:w-[260px] rounded xl:h-[70px] md:w-[180px] md:h-[55px] w-[160px] h-[50px]
       xl:text-[2rem] lg:text-[1.8rem] md:text-[1.5rem] text-[1.25rem] font-semibold tracking-wider
        uppercase flex items-center justify-center gap-3
        ${scrolled?"bg-transparent":"bg-stone-200/35 backdrop-blur-xl"}
      `}
    >
      
      <p
        className={`bg-gradient-to-r font-ruso font-bold  from-[#00b894] to-[#0984e3] bg-clip-text text-transparent `}
      >
        TailorRide
      </p>
    </div>
  )
}

export default TrailorTradeLogo
