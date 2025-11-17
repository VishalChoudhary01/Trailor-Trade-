import React from 'react';

// Define prop types using a plain interface
interface HeaderContentProps {
  primaryContent: string;
  secondaryContent: string;
  descript?: string;
}

// Component without React.FC
function HeaderContent({
  primaryContent,
  secondaryContent,
  descript = '',
}: HeaderContentProps) {
  return (
    <div className=" space-y-3 md:text-justify text-center max-w-[800px] ">
      <h2 className={`text-[#0546D2]  font-semibold  lg:text-[24px] md:text-[20px] text-[18px]`}>
        {primaryContent}
      </h2>
      <h3 className={`text-[#222222] uppercase text-[42px] font-roboto_condensed  font-bold`}>
        {secondaryContent}
      </h3>
      <p className='lg:text-[19px] md:text-[15px] text-[14px] text-neutral-800'>{descript}</p>
    </div>
  );
}

export default HeaderContent;
