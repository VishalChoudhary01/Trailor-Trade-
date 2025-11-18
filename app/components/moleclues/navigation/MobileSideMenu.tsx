"use client"
import React from 'react';
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';
import Button from '../../atoms/Button';
import { MdPhone } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";

interface MenuItem {
  label: string;
  options: string[];
}

interface MobileSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openDropdown: number | null;
  onToggleDropdown: (index: number) => void;
  menuItems: MenuItem[];
}

const MobileSideMenu: React.FC<MobileSideMenuProps> = ({
  isOpen,
  onClose,
  openDropdown,
  onToggleDropdown,
  menuItems
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-40 w-[260px] bg-white shadow-xl md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-linear-to-l from-[#1959accc] to-[#164a8f] px-2 py-4 text-white">

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-sm">TR</span>
                  </div>
                  <span className="font-semibold text-lg font-roboto_condensed tracking-widest">Trailor Ride</span>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
                >
                  <IoMdClose className="text-xl" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <ul className='space-y-1'>
                {menuItems.map((item, index) => (
                  <div key={index} className={`font-inter border-b border-gray-100 last:border-b-0`}>
                    <div
                      className="cursor-pointer text-gray-800 py-3 px-3 text-base font-semibold flex items-center justify-between hover:bg-gray-50 rounded-lg transition-all duration-200"
                      onClick={() => onToggleDropdown(index)}
                    >
                      <span className="text-[15px]">{item.label}</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 text-gray-400 ${openDropdown === index ? 'rotate-180 text-[#1959AC]' : ''}`}
                      />
                    </div>

                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 space-y-1 pl-3">
                            {item.options.map((option, i) => (
                              <p 
                                key={i} 
                                className="text-gray-600 hover:text-[#1959AC] cursor-pointer px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-all duration-200"
                                onClick={onClose}
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
              <div className="flex flex-col items-center mt-6 space-y-3 px-1">
                <Button 
                  buttonText='Book Test Ride' 
                  buttonStyle={`w-[95%] text-center bg-[#1959AC] text-white py-3 rounded-lg text-[15px] font-semibold font-inter hover:bg-[#164a8f] transition-all duration-200 shadow-md`} 
                  onClick={onClose}
                />
                <Button 
                  buttonText='Contact Sales' 
                  buttonStyle={`w-[95%] text-center bg-transparent text-[#1959AC] border border-[#1959AC] py-3 rounded-lg text-[15px] font-semibold font-inter hover:bg-[#1959AC] hover:text-white transition-all duration-200`} 
                  onClick={onClose}
                />
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 px-2">
                <p className="text-gray-500 text-xs font-medium mb-3 uppercase tracking-wider">Need Help?</p>
                <div className="space-y-2">
                  <p className="text-[#1959AC] font-semibold text-sm flex items-center gap-x-1.5">
                    <MdPhone className='text-xl'/>
                   <span>+91 (999) 999-9999</span> 
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-x-1.5">
                    <IoMailUnreadOutline className='text-xl'/>
                    <span>support@trailoride.com</span>
                  </p>
                </div>

                
                {/* Social/App Links */}
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-medium transition-all duration-200">
                    Download App
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-medium transition-all duration-200">
                    Find Dealer
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <p className="text-gray-500 text-xs text-center">
                © 2025 TrailorRide. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSideMenu;