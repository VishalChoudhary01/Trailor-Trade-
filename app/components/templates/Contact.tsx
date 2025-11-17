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

  const baseInputStyle = "bg-[#f4f4f4] focus:outline-none focus:ring focus:ring-gray-500 transition-all px-3 caret-gray-500 ring ring-[#9f9f9f] h-[46px] w-[535px] rounded-[6px]";
  const textAreaStyle = "bg-[#f4f4f4] focus:outline-none focus:ring focus:ring-gray-500 transition-all px-3 caret-gray-500 ring ring-[#9f9f9f] rounded-[6px] w-full";
  const containerStyle = 'flex flex-col max-w-[535px] gap-y-2';
  const labelStyle = 'font-inter text-[14px] text-[#0E0D0D]';

  const modelOptions = [
    { value: 'urban', label: 'Urban Commander' },
    { value: 'adventure', label: 'Adventure Seeker' },
    { value: 'touring', label: 'Touring Edition' },
    { value: 'eco', label: 'Eco Innovator' }
  ];

  const experienceOptions = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' }
  ];

  const usageOptions = [
    { value: 'commuting', label: 'Daily Commuting' },
    { value: 'adventure', label: 'Weekend Adventures' },
    { value: 'touring', label: 'Long Distance Touring' },
    { value: 'mixed', label: 'Mixed Use' }
  ];

  return (
    <div>
      <HeaderBanner 
        heading='Ready to experience the perfect ride? Our experts will help you find the ideal model for your needs.' 
        backgroundImageSet={marshal.src}
      />
      <div className='text-center pt-40'>
        <h2 className='text-[#222222] font-bold text-[42px] font-roboto_condensed mb-20 tracking-wide'>REQUEST A QUOTE</h2>
        
        <div className='w-full flex justify-center text-left'>
          <form onSubmit={handleSubmit} className='w-full flex justify-center flex-col items-center'>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center max-w-6xl gap-x-6 gap-y-9'>
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
              
              <div className="col-span-1 md:col-span-2">
                <TextArea 
                  label='Tell Us About Your Riding Needs'
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  placeholder="Describe your riding style, preferred features, budget, or any specific requirements..."
                  rows={8}
                  required
                  labelClassName={labelStyle}
                  className={`${textAreaStyle} px-5 py-3`}
                  containerClassName="flex flex-col gap-y-2 w-full " 
                />
              </div>
            </div>
            <div className='flex flex-col items-center gap-y-8 py-20'>
              <p className='text-[#3C3C3C] text-[18px] font-inter'>By submitting this form you agree to our <span className='underline-offset-4 underline'>Terms of Service</span> and <span className='underline-offset-4 underline'>Privacy Policy</span>.</p>
              <Button buttonType='submit' rightStyle='text-2xl' rightIcon={<FaArrowRightLong/>} buttonText='Submit Request' buttonStyle='bg-[#1959AC] flex items-center gap-x-2 text-white rounded-[5px] font-inter font-semibold px-4 py-2'/>
            </div>
          </form>
          
        </div>
      </div>

      {/* Banner */}
      <div className='w-full flex justify-center items-center  bg-[#F3F3F3] h-[530px]'>
        <div className='w-[525px] space-y-3'>
          <p className='text-[#0546D2] font-inter text-3xl font-bold'>Download The App Today</p>
          <p className='text-[42px] font-extrabold text-[#000000] font-inter '>Available on All Devices</p>
          <p className='text-neutral-800 text-xl'>Transform your riding experience with our powerful companion app. Join thousands of riders who already enhanced their journey.</p>
          <div className='flex gap-x-5 mt-16'>
            <Link 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Image className='hover:scale-105 transition-all duration-150 cursor-pointer' src={google.src} width={140} height={42}  alt="google"/>
            </Link>
            <Link 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
            >

            <Image className='hover:scale-105 transition-all duration-150 cursor-pointer' src={apple.src} width={140} height={42}  alt="apple"/>
            </Link>
          </div>
        </div>
        <div className='self-end relative w-[58%] h-full'>
          <Image  className="object-contain" layout='fill' objectFit="contain" alt='banner' src={smartphonehand.src} />
        </div>

      </div>
    </div>
  );
}

export default Contact;