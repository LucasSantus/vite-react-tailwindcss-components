import { FC } from "react";

interface IItemProps {
  title: string;
  icon: JSX.Element;
  onClick: () => void;
}

export const Item: FC<IItemProps> = ({ title, icon, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 sm:justify-start sm:w-full px-5 py-2 rounded-lg text-base font-normal transition duration-75 gap-4 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
    >
      <span className="">{icon}</span>
      <span className="hidden sm:flex">{title}</span>
    </a>
  );
};
