import { FC } from "react";

interface IItemProps {
  title: string;
  icon: JSX.Element;
  onClick: () => void;
}

export const Item: FC<IItemProps> = ({ title, icon, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    >
      {icon}
      <span className="ml-3">{title}</span>
    </a>
  );
};
