import { FC } from "react";
import { IStructureModalProps } from "../../types/types";

export const StructureModal: FC<IStructureModalProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <span className="text-3xl mt-5 font-semibold">{title}</span>
      <span className="text-gray-600 mt-2">{description}</span>
      <div className="flex justify-center gap-4 p-5">{children}</div>
    </>
  );
};
