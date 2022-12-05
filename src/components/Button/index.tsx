import { FC } from "react";

interface IButtonProps {
  className: string;
  text: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = (
  { className, text, icon, onClick}
) => {
  return (
    <button
      className={ className + " flex" } 
      onClick={ onClick }
    >
      <span className="font-medium text-sm">{ text }</span>
    </button>
  )
}