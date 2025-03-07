import { InputHTMLAttributes } from "react";
import { Type } from "../../types/type";
import { Color } from "../../types/color";
import { Variant } from "../../types/variant";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: Type;
  color?: Color;
  variant?: Variant;
  label?: string;
}
