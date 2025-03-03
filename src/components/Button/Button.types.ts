import { ButtonHTMLAttributes } from "react";
import { Color } from "../../types/color";
import { Variant } from "../../types/variant";
import { Size } from "../../types/size";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
  variant: Variant;
  size: Size;
  fullWidth: boolean;
}
