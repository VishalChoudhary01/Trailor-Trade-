import React from "react";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string; // for <textarea>
  labelClassName?: string; // for <label>
  containerClassName?: string; // for outer <div>
  onChange?: (value: string) => void;
}

const TextArea = ({
  label,
  placeholder,
  value,
  required,
  error,
  rows = 4,
  className,
  labelClassName,
  containerClassName,
  onChange,
}: TextAreaProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextArea;
