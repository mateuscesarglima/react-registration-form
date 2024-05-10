import { InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputType) => {
  return <input {...rest}></input>;
};
