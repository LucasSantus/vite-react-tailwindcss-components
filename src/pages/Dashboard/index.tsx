import { FC } from "react";
import { Table } from "../../components/Table";
import { datas } from "../../mocks/datas";

export const Dashboard: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Table values={datas.slice(0, 10)} />
    </div>
  );
};
