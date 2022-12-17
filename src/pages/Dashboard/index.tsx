import {
  Article,
  CheckCircle,
  CodeSimple,
  Info,
  Trash,
  WarningOctagon,
} from "phosphor-react";
import { FC, useState } from "react";
import { Modal } from "../../components/Modal";
import { ModalContent } from "../../components/Modal/ModalContent";
import { ModalInformation } from "../../components/Modal/ModalInformation";
import { Table } from "../../components/Table";
import { datas } from "../../mocks/datas";

export const Dashboard: FC = () => {
  const [active, setActive] = useState(false);

  const handleOnClickConfirm = () => {
    console.log("selected click");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-100 dark:bg-slate-800">
      <ModalInformation
        modal={{
          title: "Are you sure?",
          description:
            "Do you really want to delete these records? This process cannot be undone.",
          icon: <Trash size={80} className="text-danger" />,
          isDisabledOnClickModal: false,
        }}
        button={{
          title: "Delete Modal",
          icon: <Trash size={18} className="text-light" />,
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

      <ModalInformation
        modal={{
          title: "Are you sure?",
          description:
            "Do you really want to delete these records? This process cannot be undone.",
          icon: <Info size={80} className="text-info" />,
          isDisabledOnClickModal: false,
        }}
        button={{
          title: "Alert Modal",
          icon: <Info size={18} className="text-light" />,
          backgroundColor: "btn-primary",
          textColor: "text-light",
        }}
        buttonConfirmModal={{
          title: "Confirmar",
          onClick: () => handleOnClickConfirm,
          backgroundColor: "btn-info",
          textColor: "text-light",
        }}
      />

      <ModalInformation
        modal={{
          title: "Good job!",
          description: "You clicked the button!",
          icon: <CheckCircle size={80} className="text-success" />,
          isDisabledOnClickModal: false,
        }}
        button={{
          title: "Success Modal",
          icon: <CheckCircle size={18} className="text-light" />,
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

      <ModalInformation
        modal={{
          title: "Oops...",
          description: "Something went wrong!",
          icon: <WarningOctagon size={80} className="text-warning" />,
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
          title: "Content Modal",
          icon: <Article size={18} className="text-light" />,
          backgroundColor: "btn-secondary",
          textColor: "text-light",
        }}
        buttonConfirmModal={{
          title: "Confirmar",
          onClick: () => handleOnClickConfirm,
          backgroundColor: "btn-secondary",
          textColor: "text-light",
        }}
        modal={{
          title: "Are you sure?",
          description:
            "Do you really want to delete these records? This process cannot be undone.",
          size: "sm",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        recusandae expedita in illo delectus, qui vitae sed quas aliquid
        dolorum, animi non quo eligendi veritatis accusamus iusto sunt quibusdam
        voluptas minima odio, fugit fugiat amet itaque accusantium.
      </ModalContent>

      <Modal
        title="test"
        description="teste"
        button={{
          title: "Simple Modal",
          icon: <CodeSimple size={18} className="text-light" />,
          backgroundColor: "btn-dark",
          textColor: "text-light",
        }}
        active={active}
        setActive={setActive}
      >
        modal vazio
      </Modal>

      <div className="container mx-auto p-6">
        <Table values={datas.slice(0, 10)} />
      </div>
    </div>
  );
};
