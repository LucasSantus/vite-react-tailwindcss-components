import { Triangle } from "phosphor-react";
import { FC } from "react";
import { ICollapseSummaryProps } from "../../types/types";

export const CollapseSummary: FC<ICollapseSummaryProps> = ({
  title,
  isActive,
  setIsActive,
}) => {
  const rotate = isActive ? " rotate-180" : " ";

  return (
    <button
      className="flex items-center justify-between w-full gap-8 transition duration-150 ease-in-out rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      onClick={() => setIsActive((current) => !current)}
    >
      <span>{title}</span>
      <span className={"transform ease-in-out duration-300" + rotate}>
        <Triangle size={12} />
      </span>
    </button>
  );
};
