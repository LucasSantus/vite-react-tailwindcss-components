import { Trash } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IModalProps } from "../types";

export const ModalDelete: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={active} 
      setActive={setActive} 
      textButton={textButton}
    >
      <Trash size={80} color={"red"} />
      <StructureModal
        title={title}
        description={description}
      >
        <Button
          description="Cancel"
          onClick={() => setActive(!active)}
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