import { FC, PropsWithChildren } from "react";

export const ModalFooter: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div className="w-full flex justify-end items-end gap-2 p-3">
      { children }
    </div>
  )
}