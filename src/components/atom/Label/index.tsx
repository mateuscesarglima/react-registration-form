import { LabelHTMLAttributes } from "react";

type LabelType = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...rest }: LabelType) => {
  return <label {...rest}>{children}</label>;
};
