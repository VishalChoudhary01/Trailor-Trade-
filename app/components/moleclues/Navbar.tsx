"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';
import Button from '../atoms/Button';

const menuItems = [
  { 
    label: 'Models', 
    options: ['Urban Commander', 'Adventure Seeker', 'Touring Edition', 'Eco Innovator'] 
  },
  { 
    label: 'Technology', 
    options: ['Performance', 'Safety Features', 'Smart Connectivity', 'Eco Technology'] 
  },
  { 
    label: 'Support', 
    options: ['Service Centers', 'Owner Manuals', 'Warranty', 'Contact Support'] 
  },
  { 
    label: 'Company', 
    options: ['Our Story', 'Careers', 'Press', 'Sustainability'] 
  },
];

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
          {/* <Logo scrolled={isScrolled} /> */}
          
          {/* Desktop Menu */}
          <ul className='md:flex hidden gap-x-[3.2rem] items-center'>
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
            className="md:hidden text-3xl p-2 z-40"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="text-white" />
            ) : (
              <IoMdMenu className={isScrolled ? "text-[#1959AC]" : "text-white"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-80 bg-white shadow-2xl md:hidden"
            >
              {/* Header */}
              <div className="bg-[#1959AC] p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold font-roboto_condensed">Menu</h2>
                  <button 
                    onClick={closeMobileMenu}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <IoMdClose className="text-2xl" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 h-[calc(100vh-80px)] overflow-y-auto">
                <ul className='space-y-2'>
                  {menuItems.map((item, index) => (
                    <div key={index} className={`font-inter border-b border-gray-100 last:border-b-0`}>
                      <div
                        className="cursor-pointer text-gray-800 py-4 text-lg font-semibold flex items-center justify-between hover:text-[#1959AC] transition-colors"
                        onClick={() => toggleDropdown(index)}
                      >
                        <span>{item.label}</span>
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180 text-[#1959AC]' : 'text-gray-400'}`}
                        />
                      </div>

                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 space-y-3">
                              {item.options.map((option, i) => (
                                <p 
                                  key={i} 
                                  className="text-gray-600 hover:text-[#1959AC] cursor-pointer pl-4 py-2 border-l-2 border-[#1959AC] hover:bg-blue-50 rounded-r-lg transition-all"
                                  onClick={closeMobileMenu}
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
                
                {/* CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <Button 
                    buttonText='Book Test Ride' 
                    buttonStyle={`w-full text-center bg-[#1959AC] text-white py-4 rounded-lg text-lg font-bold font-inter hover:bg-[#164a8f] transition-colors`} 
                    
                    onClick={closeMobileMenu}
                  />
                  <Button 
                    buttonText='Contact Sales' 
                    buttonStyle={`w-full text-center bg-white text-[#1959AC] border border-[#1959AC] py-4 rounded-lg text-lg font-bold font-inter hover:bg-gray-50 transition-colors`} 
                    onClick={closeMobileMenu}
                  />
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm mb-2">Need help? Contact us:</p>
                  <p className="text-[#1959AC] font-semibold">+1 (555) 123-RIDE</p>
                  <p className="text-gray-600 text-sm mt-1">support@ridebeyond.com</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;