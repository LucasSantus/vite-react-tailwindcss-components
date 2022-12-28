import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IBreadTypes {
  title: string;
  path: string;
}

interface IBreadcrumbProps {
  breads: IBreadTypes[];
  simbol?: string;
}

export const Breadcrumbs: FC<IBreadcrumbProps> = ({ breads, simbol = "/" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 text-slate-600 bg-slate-200 rounded-md px-3 py-2">
      {breads.map(({ title, path }, index) => {
        simbol = index != breads.length - 1 ? simbol : "";

        return (
          <a key={title} onClick={() => navigate(path)}>
            {title} {simbol}
          </a>
        );
      })}
    </div>
  );
};
