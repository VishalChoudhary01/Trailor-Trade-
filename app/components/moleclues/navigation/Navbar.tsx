"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import Button from '../../atoms/Button';
import TrailorTradeLogo from '@/app/components/atoms/TrailorTradeLogo';
import MobileSideMenu from './MobileSideMenu'; 
import { AnimatePresence, motion } from 'motion/react';
import menuItems from '@/app/utils/data/menu';



const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <div className={`flex justify-center`}>
        <nav className={`fixed z-30 ${isScrolled ? "w-[95%]" : "w-full"} flex items-center justify-between xl:px-[6.5rem] py-1 px-2 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md rounded-full mx-auto mt-4 shadow-lg border border-gray-200' 
            : 'bg-transparent'
        }`}>
          <TrailorTradeLogo scrolled={isScrolled} />
          
          {/* Desktop Menu */}
          <ul className='md:flex hidden gap-x-[2.5rem] items-center'>
            {menuItems.map((item, index) => (
              <div key={index} className={`relative font-inter`}>
                <div
                  className="cursor-pointer text-[#1959AC] lg:text-[18px] md:text-[1rem] font-medium flex items-center space-x-2 hover:text-[#164a8f] transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.label}</span>
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`}
                  />
                </div>

                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute mt-2 bg-white rounded-lg shadow-lg w-48 z-10 overflow-hidden border border-gray-200"
                    >
                      <div className="py-2">
                        {item.options.map((option, i) => (
                          <p 
                            key={i} 
                            className="px-4 py-2 hover:bg-[#1959AC] hover:text-white cursor-pointer text-gray-700 transition-all duration-200"
                          >
                            {option}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </ul>
          
          <div className="hidden md:block">
            <Button 
              buttonText='Book Test Ride' 
              buttonStyle={`text-[15px] bg-[#1959AC] lg:px-[2.625rem] py-[0.813rem] rounded-full shadow-md text-white font-inter font-bold hover:bg-[#164a8f] transition-colors`} 
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[24px] p-2 z-40 transition-all duration-200 hover:bg-white/20 rounded-lg"
            onClick={toggleMobileMenu}
          >
            <IoMdMenu className={isScrolled ? "text-[#1959AC]" : "text-neutral-800 "} />
          </button>
        </nav>
      </div>

      {/* Mobile Side Menu Component */}
      <MobileSideMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        openDropdown={openDropdown}
        onToggleDropdown={toggleDropdown}
        menuItems={menuItems}
      />
    </>
  );
};

export default Navbar;