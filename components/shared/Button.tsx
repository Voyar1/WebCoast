import React from "react";
interface Props {
  text: string;
  className?: string;
}
const Button = ({ text, className }: Props) => {
  return (
    <button
      className={`primary-gradient rounded-xl px-6 py-2 text-center text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
