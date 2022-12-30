import { PropsWithChildren } from "react";

interface IItemsType {
  title: string;
  onClick: () => void;
}

export interface IDropdownProps extends PropsWithChildren {
  isActive: boolean;
  items: IItemsType[];
}
