import { FC } from "react";

interface IButtonProps {
  variant: "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-light" | "btn-dark"; 
  textVariant?: "text-primary" | "text-secondary" | "text-success" | "text-danger" | "text-warning" | "text-info" | "text-light" | "text-dark"; 
  description: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = (
  { variant, textVariant, description, icon, onClick}
) => {
  return (
    <div className="flex">
      <button
        className={ "btn " + variant }
        onClick={ onClick }
      >
        {icon}
        <span className={"font-medium text-sm " + textVariant}>{ description }</span>
      </button>
    </div>
  )
}