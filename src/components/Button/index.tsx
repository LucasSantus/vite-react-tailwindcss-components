import { FC } from "react";
import { IButtonProps } from "./types/types";

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