"use client"
import React from 'react';
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';
import Button from '../../atoms/Button';
import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";

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
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed inset-y-0 right-0 z-50 w-[280px] bg-white shadow-xl md:hidden flex flex-col border-l border-gray-100"
          >
            {/* Sleek Header */}
            <div className="bg-blue-50/45 border-b border-gray-100 px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-linear-to-br from-[#1959AC] to-[#043898] rounded-lg flex items-center justify-center shadow-sm">
                    <span className="font-bold text-white text-sm tracking-wide">TR</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg font-roboto_condensed tracking-tight">TRAILOR RIDE</span>
                    <p className="text-xs text-gray-500 font-light">Premium Mobility</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900"
                >
                  <IoMdClose className="text-xl" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4 bg-gray-50/50">
              <ul className='space-y-2'>
                {menuItems.map((item, index) => (
                  <div key={index} className={`font-inter bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100`}>
                    <div
                      className="cursor-pointer text-gray-800 py-3.5 px-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200 group"
                      onClick={() => onToggleDropdown(index)}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Left accent bar */}
                        <div className={`w-1 h-5 bg-linear-to-b from-[#1959AC] to-[#043898] rounded-full transition-all duration-300 ${openDropdown === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                        <span className="text-[15px] font-semibold text-gray-700">{item.label}</span>
                      </div>
                      <IoIosArrowDown
                        className={`transition-all duration-300 text-gray-400 ${openDropdown === index ? 'rotate-180 text-[#1959AC]' : ''}`}
                      />
                    </div>

                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden bg-gray-50/70"
                        >
                          <div className="py-2 space-y-1 pl-4 border-t border-gray-100">
                            {item.options.map((option, i) => (
                              <motion.div 
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="text-gray-600 hover:text-[#1959AC] cursor-pointer px-3 py-2.5 text-sm rounded-lg  transition-all duration-200 font-medium border-l-2 border-transparent hover:border-[#1959AC] hover:bg-blue-50/30 hover:pl-4 group"
                                onClick={onClose}
                              >
                                {option}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </ul>
              
              {/* CTA Buttons */}
              <div className="flex flex-col items-center mt-8 space-y-3 px-1">
                <Button 
                  buttonText='Book Test Ride' 
                  buttonStyle={`w-full bg-[#1959AC] text-white py-3.5 rounded-md text-[15px] font-semibold font-inter hover:bg-[#164a8f] transition-all duration-300 shadow-md hover:shadow-lg`} 
                  onClick={onClose}
                />
                <Button 
                  buttonText='Contact Sales' 
                  buttonStyle={`w-full bg-transparent text-[#1959AC] border border-[#1959AC] py-3.5 rounded-md text-[15px] font-semibold font-inter hover:bg-[#1959AC] hover:text-white transition-all duration-300 hover:shadow-md`} 
                  onClick={onClose}
                />
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 px-2">
                <p className="text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wider">Contact Support</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 bg-[#1959AC] rounded-lg flex items-center justify-center">
                      <MdPhone className='text-white text-base'/>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">+91 (999) 999-9999</p>
                      <p className="text-gray-500 text-xs">24/7 Support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 bg-[#1959AC] rounded-lg flex items-center justify-center">
                      <IoMailUnreadOutline className='text-white text-base'/>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">support@trailoride.com</p>
                      <p className="text-gray-500 text-xs">Quick Response</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-[#1959AC] text-gray-700 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 hover:shadow-sm group">
                    <FaDownload className="text-[#1959AC] text-sm" />
                    <span>Download App</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-[#1959AC] text-gray-700 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 hover:shadow-sm group">
                    <FaMapMarkerAlt className="text-[#1959AC] text-sm" />
                    <span>Find Dealer</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <p className="text-gray-500 text-xs text-center font-medium">
                © 2025 TrailorRide. All rights reserved.
              </p>
              <p className="text-gray-400 text-[10px] text-center mt-1">
                Premium Electric Mobility
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSideMenu;