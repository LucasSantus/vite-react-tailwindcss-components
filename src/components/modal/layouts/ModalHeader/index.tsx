import { FC } from "react";
import { IModalHeaderProps } from "../../types/types";

export const ModalHeader: FC<IModalHeaderProps> = ({
  title
}) => {
  return (
    <div className="w-full">
      <h2 className="font-medium text-lg flex pb-5">{ title }</h2>
    </div>
  )
}