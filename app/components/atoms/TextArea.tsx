import React from "react";

/** Native textarea attributes (name, id, required, aria-*, maxLength, ...). */
type NativeTextAreaProps = Omit<
  React.ComponentPropsWithoutRef<"textarea">,
  | "children"
  | "value"
  | "onChange"
  | "className"
  | "placeholder"
  | "rows"
>;

export type TextAreaProps = NativeTextAreaProps & {
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
};

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
  ...textAreaProps
}: TextAreaProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        {...textAreaProps}
        placeholder={placeholder}
        value={value}
        rows={rows}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextArea;
