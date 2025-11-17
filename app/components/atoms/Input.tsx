import React from "react";

type InputType =| "text"| "email"| "password"| "number"| "tel"| "url"| "date"| "search";

interface InputProps {
  label?: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
  className?: string; 
  labelClassName?: string; 
  containerClassName?: string; 
  onChange?: (value: string) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  required,
  error,
  className,
  labelClassName,
  containerClassName,
  onChange,
}: InputProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
