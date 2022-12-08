import { CheckCircle } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IModalProps } from "../types/types";

export const ModalSuccess: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={active} 
      setActive={setActive} 
      textButton={textButton}
    >
      <CheckCircle size={80} className="text-success" />
      <StructureModal 
        title={title}
        description={description}
      >
        <Button
          description="Confirm"
          onClick={() => {
              if( onClickConfirm ) onClickConfirm()
              setActive(!active)
          }}
          variant="btn-success"
          textVariant="text-light"
          />
      </StructureModal>
    </Modal>
  )
}