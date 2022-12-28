import { FC, useState } from "react";
import { Dropdown } from "../../components/Dropdown";

export const Dashboard: FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Dropdown
        isActive={isActive}
        items={[
          {
            title: "Teste",
            onClick: () => {
              console.log("teste");
            },
          },
        ]}
      >
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
          type="button"
          onClick={() => setIsActive((current) => !current)}
        >
          Dropdown
        </button>
      </Dropdown>
    </div>
  );
};
