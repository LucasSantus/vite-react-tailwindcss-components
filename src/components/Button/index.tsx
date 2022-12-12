import { FC } from "react";

export const Button: FC<IButtonProps> = ({
  title,
  icon,
  onClick,
  backgroundColor = "btn-primary",
  textColor = "text-light",
}) => {
  return (
    <div className="flex">
      <button className={"btn " + backgroundColor} onClick={onClick}>
        {icon}
        <span className={"font-medium text-sm " + textColor}>{title}</span>
      </button>
    </div>
  );
};
