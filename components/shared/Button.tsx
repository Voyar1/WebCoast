import React from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return (
    <button className="primary-gradient rounded-xl px-6 py-2 text-center text-white">
      {text}
    </button>
  );
};

export default Button;
