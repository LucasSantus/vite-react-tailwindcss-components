import { FC } from "react";
import { Modal } from "../../components/Modal";

export const Dashboard: FC = () => {
    const handleOnClickConfirm = () => {
        console.log("boiiolamen")
    }
    return (
        <div className="p-8">
            <div className="flex">
                
                <Modal 
                    textButton="Open Modal" 
                    title="Are you sure?" 
                    description="Do you really want to delete these records? This process cannot be undone." 
                    onClickConfirm={handleOnClickConfirm}
                />
            </div>
        </div>
    )
}