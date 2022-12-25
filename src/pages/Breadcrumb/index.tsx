import { FC } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const PageBreadcrumb: FC = () => {
  return (
    <div>
      <Breadcrumbs
        breads={[
          {
            title: "Dashboard",
            path: "/",
          },
          {
            title: "Tables",
            path: "/table",
          },
        ]}
      />
    </div>
  );
};
