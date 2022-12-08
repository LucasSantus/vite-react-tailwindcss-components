import { Trash } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IModalProps } from "../types/types";

export const ModalDelete: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm, onClickCancel
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={active} 
      setActive={setActive} 
      textButton={textButton}
    >
      <Trash size={80} className="text-danger"/>
      <StructureModal
        title={title}
        description={description}
      >
        <Button
          description="Cancel"
          onClick={() => {
            if( onClickCancel ) onClickCancel()
            setActive(!active)
          }}
          variant="btn-light"
        />
        <Button
          description="Delete"
          onClick={() => {
            if( onClickConfirm ) onClickConfirm()
            setActive(!active)
          }}
          variant="btn-danger"
          textVariant="text-light"
        />
      </StructureModal>
    </Modal>
  )
}