"use client";
import React, { useState } from 'react';
import HeaderBanner from '../organism/HeaderBanner';
import marshal from '../../../public/images/banner/josh-marshal.jpg';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import smartphonehand from '../../../public/images/banner/smartphonehand.png';
import google from '../../../public/images/social/Google_Play.svg';
import apple from '../../../public/images/social/AppleStore.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { modelOptions, experienceOptions, usageOptions } from '@/app/utils/data/Options'
import { motion } from 'framer-motion';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredModel: string;
  ridingExperience: string;
  primaryUse: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    preferredModel: '', 
    ridingExperience: '',      
    primaryUse: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const baseInputStyle = "bg-[#f4f4f4] focus:outline-none focus:ring md:text-para2desktop text-para3mobile focus:ring-gray-500 transition-all px-3 caret-gray-500 ring ring-[#9f9f9f] md:h-[46px] h-[38px] w-full md:w-[565px] rounded-[6px]";
  const textAreaStyle = "bg-[#f4f4f4] focus:outline-none focus:ring md:text-para2desktop text-para3mobile focus:ring-gray-500 transition-all px-3 caret-gray-500 ring ring-[#9f9f9f] rounded-[6px] w-full";
  const containerStyle = 'flex flex-col w-full md:max-w-[555px] gap-y-2';
  const labelStyle = 'font-inter md:text-para2desktop text-para3mobile text-[#0E0D0D]';

  return (
    <div className='overflow-hidden'>
      <HeaderBanner 
        heading='Ready to experience the perfect ride? Our experts will help you find the ideal model for your needs.' 
        backgroundImageSet={marshal.src}
      />
      <div className='text-center pt-20 md:pt-40 px-4 md:px-0'>
        <h2 className='text-[#222222] font-bold text-3xl md:text-head1desktop text-head1mobile font-roboto_condensed mb-10 md:mb-20 tracking-wide'>REQUEST A QUOTE</h2>
        
        <div className='w-full flex justify-center text-left'>
          <form onSubmit={handleSubmit} className='w-full flex justify-center flex-col items-center max-w-full '>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center w-full md:max-w-6xl gap-x-6 gap-y-6 md:gap-y-9 md:px-0 px-6'>
              <Input 
                label='Name' 
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle} 
              />
              <Input 
                label='E-mail' 
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle} 
              />
              <Input 
                label='Phone Number' 
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle} 
              />
              
              <Select 
                value={formData.preferredModel}
                onChange={(value) => handleInputChange('preferredModel', value)}
                placeholder='Select Model' 
                options={modelOptions} 
                label='Preferred Model' 
                required 
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle}
              />
              <Select 
                value={formData.ridingExperience}
                onChange={(value) => handleInputChange('ridingExperience', value)}
                placeholder='Select Experience' 
                options={experienceOptions} 
                label='Riding Experience' 
                required 
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle}
              />
              <Select 
                value={formData.primaryUse}
                onChange={(value) => handleInputChange('primaryUse', value)}
                placeholder='Select Primary Use' 
                options={usageOptions} 
                label='Primary Use' 
                required 
                labelClassName={labelStyle} 
                className={baseInputStyle} 
                containerClassName={containerStyle}
              />
              
              <div className="col-span-1 md:col-span-2 w-full">
                <TextArea 
                  label='Tell Us About Your Riding Needs'
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  placeholder="Describe your riding style, preferred features, budget, or any specific requirements..."
                  rows={6}
                  required
                  labelClassName={labelStyle}
                  className={`${textAreaStyle} px-5 py-3`}
                  containerClassName="flex flex-col gap-y-2 w-full" 
                />
              </div>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: 20,filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex flex-col items-center gap-y-6 md:gap-y-8 py-10 md:py-20 px-4 md:px-0'>
              <p className='text-[#3C3C3C] text-sm md:text-para2desktop text-para3mobile font-inter text-center'>
                By submitting this form you agree to our <span className='underline-offset-4 underline'>Terms of Service</span> and <span className='underline-offset-4 underline'>Privacy Policy</span>.
              </p>
              <Button 
                buttonType='submit' 
                rightStyle='text-xl md:text-2xl' 
                rightIcon={<FaArrowRightLong/>} 
                buttonText='Submit Request' 
                buttonStyle='bg-[#1959AC] flex items-center gap-x-2 text-white rounded-[5px] font-inter font-semibold px-6 py-3 md:px-4 md:py-2 md:text-para2desktop text-para3mobile md:w-auto justify-center'
              />
            </motion.div>
          </form>
          
        </div>
      </div>

      {/* Banner */}
      <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center bg-[#F3F3F3] md:h-[530px] py-10 md:py-0 px-4 md:px-0'>
        <div className='w-full md:w-[525px] space-y-3 text-center md:text-left order-2 md:order-1'>
          <p className='text-[#0546D2] font-inter md:text-head2desktop text-head2mobile font-bold'>Download The App Today</p>
          <p className='md:text-head1desktop text-head1mobile font-extrabold text-[#000000] font-inter'>Available on All Devices</p>
          <p className='text-neutral-800 md:text-para1desktop text-para1mobile text-center md:text-left'>
            Transform your riding experience with our powerful companion app. Join thousands of riders who already enhanced their journey.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20,filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5,delay: 0.2 }}
          className='flex  gap-4 md:gap-x-5 md:mt-10 mt-6 justify-center md:justify-start'>
            <Link 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image 
                className='hover:scale-105 transition-all duration-150 cursor-pointer mx-auto md:mx-0' 
                src={google.src} 
                width={140} 
                height={42}  
                alt="google"
              />
            </Link>
            <Link 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image 
                className='hover:scale-105 transition-all duration-150 cursor-pointer mx-auto md:mx-0' 
                src={apple.src} 
                width={140} 
                height={42}  
                alt="apple"
              />
            </Link>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40,filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5,delay: 0.3 }}
        className='self-end relative w-full md:w-[58%] h-64 md:h-full mb-6 md:mb-0 order-1 md:order-2'>
          <Image  
            className="object-contain" 
            layout='fill' 
            objectFit="contain" 
            alt='banner' 
            src={smartphonehand.src} 
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
