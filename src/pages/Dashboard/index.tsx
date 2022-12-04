import { FC } from "react";
import { Card } from "../../components/Card";

export const Dashboard: FC = () => {
    return (
        <div className="p-8">
            <div></div>
            <div className="grid grid-cols-12">
                <Card>
                    Teste
                </Card>
            </div>
        </div>
    )
}