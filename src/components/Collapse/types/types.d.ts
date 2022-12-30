import { PropsWithChildren } from "react";

export interface ICollapseProps extends PropsWithChildren {
  title: string;
}

export interface ICollapseSummaryProps {
  title: string;
  isActive: boolean;
  setIsActive: (value: React.SetStateAction<boolean>) => void;
}
