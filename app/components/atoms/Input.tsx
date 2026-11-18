import React from "react";

type InputType =| "text"| "email"| "password"| "number"| "tel"| "url"| "date"| "search";

/** Native input attributes (name, id, required, aria-*, autoComplete, ...). */
type NativeInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "children" | "type" | "value" | "onChange" | "className" | "placeholder"
>;

export type InputProps = NativeInputProps & {
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
};

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
  ...inputProps
}: InputProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        {...inputProps}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
