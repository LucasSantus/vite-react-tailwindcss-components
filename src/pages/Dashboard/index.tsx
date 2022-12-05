import { FC } from "react";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";

export const Dashboard: FC = () => {
    return (
        <div className="p-8">
            <div></div>
            <div className="grid grid-cols-12">
                {/* <Card> */}
                    <Modal text="Open Modal" />

                    <Modal text="Open 2 Modal" />
                {/* </Card> */}
            </div>
        </div>
    )
}