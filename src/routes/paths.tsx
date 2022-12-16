import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

interface IRoutesType {
  id: number;
  path: string;
  element: JSX.Element;
}

export const routes: IRoutesType[] = [
  {
    id: 1,
    path: "*",
    element: <NotFound />
  },
  {
    id: 2,
    path: "/",
    element: <Dashboard />
  },
]