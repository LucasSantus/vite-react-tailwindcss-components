import { CheckCircle } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "..";
import { Button } from "../../Button";
import { StructureModal } from "../components/StructureModal";
import { IMountedModalProps } from "../types/types";

export const ModalSuccess: FC<IMountedModalProps> = ({
  button,
  buttonConfirmModal,
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
      <CheckCircle size={80} className="text-success" />
      <StructureModal title={modal.title} description={modal.description}>
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
