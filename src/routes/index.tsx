import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { routes } from "./paths";

export const PathRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, element, subItem }) => {
          if (subItem) {
            subItem.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ));
          } else if (path && element) {
            return <Route key={id} path={path} element={element} />;
          }
        })}
      </Route>
    </Routes>
  );
};
