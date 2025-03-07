import styles from "./TextField.module.css";

import clsx from "clsx";
import { TextFieldProps } from "./TextField.types";

const TextField: React.FC<TextFieldProps> = ({
  label,
  color,
  type,
  variant,
  ...props
}) => {
  const labelClassName = clsx(
    "label",
    styles["label"],
    color && styles[color],
    variant && styles[variant],
  );
  const inputClassName = clsx(
    "text-field",
    styles["text-field"],
    color && styles[color],
    variant && styles[variant],
  );

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input className={inputClassName} type={type} {...props} />
    </>
  );
};

export { TextField };
