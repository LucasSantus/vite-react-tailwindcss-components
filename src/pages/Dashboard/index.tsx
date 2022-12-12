import { WarningOctagon } from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "../../components/Modal";
import { ModalAlert } from "../../components/Modal/ModalAlert";
import { ModalContent } from "../../components/Modal/ModalContent";
import { ModalDelete } from "../../components/Modal/ModalDelete";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { ModalWarning } from "../../components/Modal/ModalWarning";

export const Dashboard: FC = () => {
  const [active, setActive] = useState(false);

  const handleOnClickConfirm = () => {
    console.log("selected click");
  };

  return (
    <div className="p-8">
      <div className="flex">
        {/* <Modal
          active={active}
          setActive={setActive}
          textButton="Open Modal Custom"
          isDisabledOnClickModal={true}
          size="large"
          colorButton="btn-dark"
        >
          <span>modal vazio</span>
        </Modal> */}

        {/* <Tooltip message="Modal de Deleção"> */}
        
        {/* </Tooltip> */}

        <ModalDelete
          modal={{
            title: "Are you sure?",
            description: "Do you really want to delete these records? This process cannot be undone.",
            isDisabledOnClickModal: false,
          }}
          button={{
            title: "Delete Modal",
            icon: <WarningOctagon size={18} className="text-light" />,
            backgroundColor: "btn-danger",
            textColor: "text-light",
          }}
          buttonConfirmModal={{
            title: "Confirmar",
            onClick: () => handleOnClickConfirm,
            backgroundColor: "btn-danger",
            textColor: "text-light",
          }}
        />

        <ModalAlert
          modal={{
            title: "Are you sure?",
            description: "Do you really want to delete these records? This process cannot be undone.",
            isDisabledOnClickModal: false,
          }}
          button={{
            title: "Alert Modal",
            icon: <WarningOctagon size={18} className="text-light" />,
            backgroundColor: "btn-primary",
            textColor: "text-light",
          }}
          buttonConfirmModal={{
            title: "Confirmar",
            icon: <WarningOctagon size={18} className="text-light" />,
            onClick: () => handleOnClickConfirm,
            backgroundColor: "btn-info",
            textColor: "text-light",
          }}
        />

        <ModalSuccess
          modal={{
            title: "Good job!",
            description: "You clicked the button!",
            isDisabledOnClickModal: false,
          }}
          button={{
            title: "Success Modal",
            icon: <WarningOctagon size={18} className="text-light" />,
            backgroundColor: "btn-success",
            textColor: "text-light",
          }}
          buttonConfirmModal={{
            title: "Confirmar",
            onClick: () => handleOnClickConfirm,
            backgroundColor: "btn-success",
            textColor: "text-light",
          }}
        />

        <ModalWarning
          modal={{
            title: "Oops...",
            description: "Something went wrong!",
            isDisabledOnClickModal: false,
          }}
          button={{
            title: "Warning Modal",
            icon: <WarningOctagon size={18} className="text-light" />,
            backgroundColor: "btn-warning",
            textColor: "text-light",
          }}
          buttonConfirmModal={{
            title: "Confirmar",
            onClick: () => handleOnClickConfirm,
            backgroundColor: "btn-warning",
            textColor: "text-light",
          }}
        />

        <ModalContent
          button={{
            title: "Alert Modal",
            icon: <WarningOctagon size={18} className="text-light" />,
            backgroundColor: "btn-primary",
            textColor: "text-light",
          }}
          buttonConfirmModal={{
            title: "Confirmar",
            onClick: () => handleOnClickConfirm,
            backgroundColor: "btn-info",
            textColor: "text-light",
          }}
          modal={{
            title: "Are you sure?",
            description: "Do you really want to delete these records? This process cannot be undone.",
            size: "sm"
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          recusandae expedita in illo delectus, qui vitae sed quas aliquid
          dolorum, animi non quo eligendi veritatis accusamus iusto sunt
          quibusdam voluptas minima odio, fugit fugiat amet itaque accusantium.
        </ModalContent>
      </div>
    </div>
  );
};
