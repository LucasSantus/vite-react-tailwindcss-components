import { FC } from "react"
import { Button } from "../../../Button"
import { IModalActiveProps } from "../../types/types"

export const DoubleButton: FC<IModalActiveProps> = ({
  onClickCancel,
  onClickConfirm,
  setActive,
  active
}) => {
  return (
    <>
      <Button
        description="Cancel"
        onClick={() => {
          if( onClickCancel ) onClickCancel()
          setActive(!active)
        }}
        variant="btn-light"
      />
      <Button
        description="Save"
        onClick={() => {
          if( onClickConfirm ) onClickConfirm()
          setActive(!active)
        }}
        variant="btn-danger"
        textVariant="text-light"
      />
    </>
  )
}