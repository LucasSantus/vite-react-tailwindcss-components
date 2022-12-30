import { FC, useState } from "react";
import { CollapseSummary } from "./components/CollapseSummary";
import { ICollapseProps } from "./types/types";

export const Collapse: FC<ICollapseProps> = ({ children, title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="grid grid-cols-1 w-full px-4 pt-4 rounded-2xl p-2">
      <CollapseSummary
        title={title}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      {isActive && (
        <div className="px-4 pt-4 pb-2 text-sm text-gray-500">{children}</div>
      )}
    </div>
  );
};
