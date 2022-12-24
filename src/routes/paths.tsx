import { Aperture, ArrowCircleDown } from "phosphor-react";
import { ReactNode } from "react";
import { Dashboard } from "../pages/Dashboard";
import { PageModal } from "../pages/Modal";
import { NotFound } from "../pages/NotFound";

interface IRoutesType {
  id: number;
  title?: string;
  icon?: JSX.Element;
  subItem?: IRoutesType[];
  notification?: ReactNode;
  path: string;
  element: JSX.Element;
}

export const routes: IRoutesType[] = [
  {
    id: 1,
    path: "*",
    element: <NotFound />,
  },
  {
    id: 2,
    title: "Dashboard",
    icon: <Aperture size={20} />,
    path: "/",
    element: <Dashboard />,
  },
  {
    id: 3,
    title: "Modal",
    icon: <ArrowCircleDown size={20} />,
    path: "/modal",
    element: <PageModal />,
  },
];
