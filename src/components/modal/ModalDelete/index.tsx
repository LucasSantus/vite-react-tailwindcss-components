import { Trash } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IMountedModalProps } from "../types/types";

export const ModalDelete: FC<IMountedModalProps> = ({
  button,
  buttonConfirmModal,
  buttonCancelModal,
  modal,
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
      <Trash size={80} className="text-danger" />
      <StructureModal title={modal.title} description={modal.description}>
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
      </StructureModal>
    </Modal>
  );
};
