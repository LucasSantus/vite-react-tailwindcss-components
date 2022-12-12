import { FC } from "react"
import { Button } from "../../../Button"
import { IDoubleButtonProps } from "../../types/types"

export const DoubleButton: FC<IDoubleButtonProps> = ({
  buttonConfirmModal,
  buttonCancelModal,
  setActive,
  active
}) => {
  return (
    <>
      {buttonConfirmModal ? (
          <Button
            title={buttonConfirmModal.title}
            icon={buttonConfirmModal.icon}
            onClick={() => {
              if (buttonConfirmModal.onClick) buttonConfirmModal.onClick();
              setActive(!active);
            }}
            backgroundColor={buttonConfirmModal.backgroundColor}
            textColor={buttonConfirmModal.textColor}
          />
        ) : null}
        {buttonCancelModal ? (
          <Button
            title={buttonCancelModal.title}
            icon={buttonCancelModal.icon}
            onClick={() => {
              if (buttonCancelModal.onClick) buttonCancelModal.onClick();
              setActive(!active);
            }}
            backgroundColor={buttonCancelModal.backgroundColor}
            textColor={buttonCancelModal.textColor}
          />
        ) : null}
    </>
  )
}