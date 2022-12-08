import { WarningCircle } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IModalProps } from "../types/types";

export const ModalWarning: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={active} 
      setActive={setActive} 
      textButton={textButton}
    >
      <WarningCircle size={80} className="text-warning" />
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
          variant="btn-warning"
          textVariant="text-light"
          />
      </StructureModal>
      <div className="border-t border-t-slate-300">

      </div>
    </Modal>
  )
}