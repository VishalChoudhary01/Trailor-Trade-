import React, { type ReactNode } from 'react';

/**
 * Native button attributes (disabled, aria-*, name, form, onFocus, ...) stay
 * available; only the attributes this component owns are replaced.
 */
export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'className' | 'type'
> & {
  buttonText: string;
  buttonStyle?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftStyle?: string;
  rightStyle?: string;
  buttonType?: 'button' | 'submit' | 'reset';
};

function Button({buttonText,buttonStyle = '',leftIcon,rightIcon,leftStyle = '',rightStyle = '',buttonType, ...rest }: ButtonProps) {
  return (
    <button {...rest} type={buttonType} className={`${buttonStyle} hover:scale-105 duration-300 transition-all cursor-pointer`}>
      {leftIcon && <span className={leftStyle}>{leftIcon}</span>}
      <span>{buttonText}</span>
      {rightIcon && <span className={rightStyle}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
