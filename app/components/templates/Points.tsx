import React from 'react'
import HeaderContent from '../organism/HeaderContent'
import Image from 'next/image'
import guys from '../../../public/images/guys.png';
import sureIcon from '../../../public/icons/Sure-Drive.svg'
import { pointsFeaturesList } from '@/app/utils/data/index';


const Points = () => {
  return (
    <section className='w-full flex md:justify-end justify-center   md:pl-10 my-16'>
        <div className='md:w-[94.5%] w-full bg-white shadow-2xl relative   '>
            <div className='w-full flex md:flex-row flex-col-reverse items-center md:justify-end justify-center gap-x-20 pb-11'>
                {/* left */}
                <div className='md:pt-28 pt-7 pl-2 pb-14  space-y-3.5'>
                <HeaderContent primaryContent='What Sets Us Apart' secondaryContent='It’s not just about the bikes ' descript='At ThunderRide, we build a community of passionate riders who crave adrenaline, performance, and camaraderie. Our commitment to innovation, customer service, and post-sale support sets us apart from the rest.'/>
                {/* feature Points */}
                <div className='max-w-[762px] p-2'>
                <div className='md:space-y-5'>
                  {pointsFeaturesList.map((item,index)=>(
                    <div key={index} className='flex gap-x-2.5  '>
                      <div className='relative md:w-[35px] md:h-[35px] w-[45px] h-[45px] '>
                      <Image src={sureIcon} alt='sure' className='absolute w-full h-full' />
                      </div>
                    <div className='md:space-y-2'>
                      <h4 className='text-[#151515] md:text-[1rem] text-[15px]'>{item.heading}</h4>
                      <p className='md:text-[15px] text-[14px] text-[#212020]'>{item.descp}</p>
                    </div>
                  </div>
                  ))}
                </div>
                </div>
                </div>
                {/* Right */}
                <div className='w-full md:w-[577px] md:h-[620px] items-center-safe '>
                <Image src={guys} alt='meeting' />
                 </div> 
            </div>
            <div className="bg-linear-90 from-[#043898] via-[#079902] to-[#170041]  w-full md:h-[20px] h-[12px] absolute bottom-0"></div>
        </div>
    </section>
  )
}

export default Points