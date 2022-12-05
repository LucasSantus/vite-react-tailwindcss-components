import { FC } from "react";
import { ModalAlert } from "../../components/Modal/ModalAlert";
import { ModalDelete } from "../../components/Modal/ModalDelete";

export const Dashboard: FC = () => {
  const handleOnClickConfirm = () => {
    console.log("selected click")
  }

  return (
    <div className="p-8">
      <div className="flex">
        <ModalDelete 
          textButton="Open Modal Delete" 
          title="Are you sure?" 
          description="Do you really want to delete these records? This process cannot be undone." 
          onClickConfirm={ handleOnClickConfirm }
        />    

        <ModalAlert                    
          textButton="Open Modal Alert" 
          title="Are you sure?" 
          description="Do you really want to delete these records? This process cannot be undone." 
          onClickConfirm={ handleOnClickConfirm }
        />
      </div>
    </div>
  )
}