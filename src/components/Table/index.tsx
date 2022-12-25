import { FC, useState } from "react";

interface ITableProps {
  values: any[];
}

export const Table: FC<ITableProps> = ({ values }) => {
  const keys = values.length > 0 ? Object.keys(values[0]) : [];

  const [search, setSearch] = useState("");

  const filteredValues =
    search.length > 0
      ? values.filter((value) => {
          const isValid = keys.find((key) =>
            value[key].toString().toLowerCase().includes(search.toLowerCase())
          );

          if (!!isValid) return [];
        })
      : values;

  return (
    <div className="overflow-x-auto rounded-md w-full">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <div className="relative mt-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            i
          </div>
          <input
            type="text"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
            onChange={(event) => setSearch(event.target.value)}
          ></input>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {keys.map((item) => (
              <th key={item} className="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredValues.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {keys.map((key) => (
                <td key={key} className="py-4 px-6">
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
