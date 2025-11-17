'use client'

import React from 'react'
import { Russo_One } from 'next/font/google'
import { FaCog } from 'react-icons/fa'

const russoOne = Russo_One({
  subsets: ['latin'],
  weight: ['400']
})

interface LogoProps {
  scrolled?: boolean
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <div
      className={`
        xl:w-[260px] rounded xl:h-[70px] md:w-[180px] md:h-[55px] w-[160px] h-[50px]
       xl:text-[2rem] lg:text-[1.8rem] md:text-[1.5rem] text-[1.25rem] font-semibold tracking-wider
        uppercase flex items-center justify-center gap-3
        ${scrolled?"bg-transparent":"bg-stone-200/35 backdrop-blur-xl"}
        ${russoOne.className}
      `}
    >
      
      <p
        className={`bg-gradient-to-r from-[#00b894] to-[#0984e3] bg-clip-text text-transparent `}
      >
        TailorRide
      </p>
    </div>
  )
}

export default Logo
