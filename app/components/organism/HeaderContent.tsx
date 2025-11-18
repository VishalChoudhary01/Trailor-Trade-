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
      <h2 className={`text-head2  font-semibold  lg:text-head2desktop md:text-[20px] text-head2mobile font-roboto_condensed`}>
        {primaryContent}
      </h2>
      <h3 className={`text-head1 uppercase text-head1mobile md:text-head1desktop font-roboto_condensed  font-bold`}>
        {secondaryContent}
      </h3>
      <p className='md:text-head3desktop  text-head3mobile text-head3'>{descript}</p>
    </div>
  );
}

export default HeaderContent;
