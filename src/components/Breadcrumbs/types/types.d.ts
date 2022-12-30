interface IBreadTypes {
  title: string;
  path: string;
}

export interface IBreadcrumbProps {
  breads: IBreadTypes[];
  simbol?: string;
}
