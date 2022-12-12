import { FC, useState } from "react";
import { Modal } from "..";
import { DoubleButton } from "../components/DoubleButton";
import { ModalFooter } from "../layouts/ModalFooter";
import { ModalHeader } from "../layouts/ModalHeader";
import { IModalContentProps } from "../types/types";

export const ModalContent: FC<IModalContentProps> = ({
  button,
  buttonConfirmModal,
  buttonCancelModal,
  modal,
  children
}) => {
  const [active, setActive] = useState(false);

  return (
    <Modal
      title={modal.title}
      description={modal.description}
      isDisabledOnClickModal={modal.isDisabledOnClickModal}
      size={modal.size}
      button={button}
      active={active}
      setActive={setActive}
    >
      <ModalHeader title={modal.title} />

      <div className="border-b border-t border-gray-200 py-4 overflow-auto">
        {children}
      </div>

      <ModalFooter>
        <DoubleButton
          buttonConfirmModal={buttonConfirmModal}
          buttonCancelModal={buttonCancelModal}
          setActive={setActive}
          active={active}
        />
      </ModalFooter>
    </Modal>
  );
};
