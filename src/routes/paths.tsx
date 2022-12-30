import {
  Aperture,
  ArrowCircleDown,
  House,
  HouseLine,
  HouseSimple,
} from "phosphor-react";
import { ReactNode } from "react";
import { PageBreadcrumb } from "../pages/Breadcrumb";
import { PageCollapse } from "../pages/Collapse";
import { Dashboard } from "../pages/Dashboard";
import { PageModal } from "../pages/Modal";
import { NotFound } from "../pages/NotFound";
import { PageTable } from "../pages/Table";

interface IRoutesType {
  id: number;
  title?: string;
  icon?: JSX.Element;
  subItem?: IRoutesType[];
  notification?: ReactNode;
  path?: string;
  element?: JSX.Element;
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
    icon: <House size={20} />,
    path: "/",
    element: <Dashboard />,
  },
  {
    id: 3,
    title: "Modal",
    icon: <House size={20} />,
    path: "/modal",
    element: <PageModal />,
  },
  {
    id: 4,
    title: "Table",
    icon: <House size={20} />,
    path: "/table",
    element: <PageTable />,
  },
  {
    id: 5,
    title: "Breadcrumb",
    icon: <House size={20} />,
    path: "/breadcrumb",
    element: <PageBreadcrumb />,
  },
  {
    id: 6,
    title: "Collapse",
    icon: <House size={20} />,
    path: "/collapse",
    element: <PageCollapse />,
  },
  // {
  //   id: 10,
  //   title: "Components",
  //   icon: <ArrowCircleDown size={20} />,
  //   subItem: [
  //     {
  //       id: 3,
  //       title: "Modals",
  //       path: "/modal",
  //       element: <PageModal />,
  //     },
  //     {
  //       id: 4,
  //       title: "Tables",
  //       path: "/table",
  //       element: <PageTable />,
  //     },
  //     {
  //       id: 5,
  //       title: "Breadcrumbs",
  //       path: "/breadcrumbs",
  //       element: <PageBreadcrumb />,
  //     },
  //   ],
  // },
];
