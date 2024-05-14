import { ButtonHTMLAttributes } from "react";

type ButtonType = {
  buttonStyle: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ buttonStyle, ...rest }: ButtonType) => {
  if (buttonStyle === "primary") {
    return (
      <button className="border border-red-600" {...rest}>
        Salvar respostas
      </button>
    );
  }

  return (
    <button className="bg-red-500" {...rest}>
      Fazer matrícula
    </button>
  );
};
