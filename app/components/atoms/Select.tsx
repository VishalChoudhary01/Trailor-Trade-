import React from "react";
import { FaChevronDown } from "react-icons/fa";

export interface SelectOption {
  label: string;
  value: string;
}

/** Native select attributes (name, id, required, aria-*, disabled, ...). */
type NativeSelectProps = Omit<
  React.ComponentPropsWithoutRef<"select">,
  | "children"
  | "value"
  | "defaultValue"
  | "onChange"
  | "className"
  | "multiple"
>;

export type SelectProps = NativeSelectProps & {
  label?: string;
  value?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  onChange?: (value: string) => void;
};

const Select = ({
  label,
  value,
  options,
  placeholder = "Select an option",
  required,
  error,
  className = "",
  labelClassName = "",
  containerClassName = "",
  onChange,
  ...selectProps
}: SelectProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          {...selectProps}
          value={value}
          required={required}
          onChange={(e) => onChange?.(e.target.value)}
          className={`appearance-none cursor-pointer transition-all duration-200 ease-in-out  w-full ${className} ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option  value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option className="text-gray-800" key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <FaChevronDown className="w-4 h-4 transition-transform duration-200" />
        </div>
      </div>

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;