import { Info } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IModalProps } from "../types";

export const ModalAlert: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={active} 
      setActive={setActive} 
      textButton={textButton}
    >
      <Info size={80} color="teal" />
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
          variant="btn-info"
          textVariant="text-light"
          />
      </StructureModal>
    </Modal>
  )
}