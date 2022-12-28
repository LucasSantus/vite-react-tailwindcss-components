import { MagnifyingGlass } from "phosphor-react";
import { FC, useState } from "react";

interface ITableProps {
  title: string;
  values: any[];
}

export const Table: FC<ITableProps> = ({ title, values }) => {
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
    <div className="overflow-x-auto overflow-y-auto rounded-md xs:w-full md:w-full md:min-w-[600px] lg:min-w-[700px] xl:min-w-[900px]">
      <div className="p-3 px-4 bg-white dark:bg-gray-900 rounded-t-md sm:flex sm:justify-between xs:grid gap-2">
        <div>
          <span className="text-gray-400 text-lg font-medium tracking-wide font-sans h-full flex justify-start items-center">
            {title}
          </span>
        </div>
        <div>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlass size={20} className="text-gray-400" />
            </span>
            <input
              type="text"
              className="py-2 text-sm rounded-md pl-10 text-gray-900 bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline focus:outline-offset-1 focus:outline-1 focus:outline-gray-500"
              placeholder="Search for items"
              onChange={(event) => setSearch(event.target.value)}
            ></input>
          </div>
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
