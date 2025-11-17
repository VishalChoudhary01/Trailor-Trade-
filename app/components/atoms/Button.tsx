import React, { ReactNode } from 'react';

interface ButtonProps {
  buttonText: string;
  buttonStyle?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftStyle?: string;
  rightStyle?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;

}

function Button({buttonText,buttonStyle = '',leftIcon,rightIcon,leftStyle = '',rightStyle = '',buttonType, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={buttonType} className={`${buttonStyle} hover:scale-105 duration-300 transition-all cursor-pointer`}>
      {leftIcon && <span className={leftStyle}>{leftIcon}</span>}
      <span>{buttonText}</span>
      {rightIcon && <span className={rightStyle}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
