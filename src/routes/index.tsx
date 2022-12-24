import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { routes } from "./paths";

export const PathRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, element, subItem }) => (
          <Route key={id} path={path} element={element} />
          // {subItem?.map((item: any) => <></>)}
        ))}
      </Route>
    </Routes>
  );
};
