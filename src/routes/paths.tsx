
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

interface IRoutesProps {
    id: number;
    path: string;
    element: JSX.Element;
}

export const routes: IRoutesProps[] = [
    {
        id: 1,
        path: "*",
        element: <NotFound />,
    },
    {
        id: 2,
        path: "/",
        element: <Dashboard/>,
    },
]