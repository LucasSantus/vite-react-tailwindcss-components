import { FC, PropsWithChildren } from "react";
import { IDropdownProps } from "./types/types";

export const Dropdown: FC<IDropdownProps> = ({ children, isActive, items }) => {
  return (
    <>
      <div>{children}</div>

      {isActive ? (
        <div className="mt-1 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {items.map(({ title, onClick }) => (
              <li key={title}>
                <a
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    onClick();
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          {/* <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Separated link
            </a>
          </div> */}
        </div>
      ) : null}
    </>
  );
};
