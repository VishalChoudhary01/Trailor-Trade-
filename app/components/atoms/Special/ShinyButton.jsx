import React from 'react';

const ShinyButton = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-900 rounded-lg group">
      {/* Button text */}
      <span className="relative z-10">Shiny Button</span>
      
      {/* Shining border effect */}
      <div className="absolute inset-0 transition-all duration-300 rounded-lg opacity-75 group-hover:opacity-100 animate-shine">
        <div className="absolute inset-0 rounded-lg bg-conic-shine"></div>
      </div>
    </button>
  );
};

export default ShinyButton;

// Add this to your global CSS file (e.g., tailwind.css)
const customCSS = `
  @keyframes shine {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .animate-shine {
    animation: shine 3s linear infinite;
  }
  
  .bg-conic-shine {
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      #ffffff 30deg,
      transparent 60deg,
      transparent 120deg,
      #ffffff 150deg,
      transparent 180deg,
      transparent 240deg,
      #ffffff 270deg,
      transparent 300deg
    );
    filter: blur(10px);
  }
  
  .group:hover .bg-conic-shine {
    filter: blur(8px);
    opacity: 0.8;
  }
`;
