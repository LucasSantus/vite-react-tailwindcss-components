import { FC } from "react";
import { routes } from "../../routes/paths";
import { Item } from "./components/Item";
import { useNavigate } from "react-router-dom";

export const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-auto sm:w-64 bg-gray-50 dark:bg-gray-800 h-screen hidden xs:block overflow-y-auto gap-2 px-4 pt-1">
      <ul className="space-y-2">
        {routes.map(({ id, title, notification, icon, subItem, path }) => {
          return (
            <li key={id}>
              {title && icon && path && (
                <Item
                  title={title}
                  icon={icon}
                  onClick={() => {
                    navigate(path);
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
