import styles from "./Button.module.css";

import clsx from "clsx";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  variant = "filled",
  size = "small",
  fullWidth = false,
  ...props
}) => {
  const className = clsx(
    "button",
    styles.button,
    styles[color],
    styles[variant],
    styles[size],
    { [styles["fullWidth"]]: fullWidth },
  );

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export { Button };
