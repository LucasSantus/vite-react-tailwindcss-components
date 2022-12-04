
interface IRoutesProps {
    id: number;
    path: string;
    // element: JSX.Element;
}

export const routes: IRoutesProps[] = [
    {
        id: 0,
        path: "*",
        // element: <NotFound />,
    },
    {
        id: 1,
        path: "/",
        // element: <Dashboard />,
    },
]