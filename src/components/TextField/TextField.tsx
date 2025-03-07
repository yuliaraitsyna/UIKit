import styles from "./TextField.module.css";
import clsx from "clsx";
import { TextFieldProps } from "./TextField.types";
import { useEffect, useRef, useState } from "react";

const TextField: React.FC<TextFieldProps> = ({
  label,
  color = "primary",
  type = "text",
  variant = "outlined",
  id,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const labelClassName = clsx(
    "label",
    styles.label,
    color && styles[color],
    variant && styles[variant],
    isFocused && styles.focused,
  );

  const inputClassName = clsx(
    "text-field",
    styles.textField,
    color && styles[color],
    variant && styles[variant],
    isFocused && styles.focused,
  );

  const containerClassName = clsx(
    "container",
    styles.container,
    color && styles[color],
    variant && styles[variant],
  );

  useEffect(() => {
    if (props.value) {
      setIsFocused(true);
    }
  }, [props.value]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current && inputRef.current.value === "") {
      setIsFocused(false);
    }
    onBlur?.(event);
  };

  return (
    <div className={containerClassName}>
      <input
        ref={inputRef}
        id={id}
        className={inputClassName}
        type={type}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
    </div>
  );
};

export { TextField };
