import { FC, useState } from "react";
import { Modal } from "..";
import { DoubleButton } from "../components/DoubleButton";
import { ModalFooter } from "../layouts/ModalFooter";
import { ModalHeader } from "../layouts/ModalHeader";
import { IModalContentProps } from "../types/types";

export const ModalContent: FC<IModalContentProps> = ({
  textButton, title, onClickConfirm, onClickCancel, children
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <Modal 
      active={ active } 
      setActive={ setActive } 
      textButton={ textButton }
    >
      <ModalHeader 
        title={ title }
      />

      <div className="border-b border-t border-gray-200 py-4 overflow-auto">
        { children }
      </div>
      
      <ModalFooter>
        <DoubleButton
          onClickCancel={ onClickCancel }
          onClickConfirm={ onClickConfirm }
          setActive={ setActive }
          active={ active }
        />
      </ModalFooter>
    </Modal>
  )
}