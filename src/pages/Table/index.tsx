import { FC } from "react";
import { Table } from "../../components/Table";
import { datas } from "../../mocks/datas";

export const PageTable: FC = () => {
  return (
    <div className="container w-full">
      <Table title="Dinamic Table" values={datas.slice(0, 10)} />
    </div>
  );
};
