interface IButtonProps {
  title: string;
  icon?: JSX.Element;
  onClick?: () => void;

  backgroundColor?:
    | "btn-primary"
    | "btn-secondary"
    | "btn-success"
    | "btn-danger"
    | "btn-warning"
    | "btn-info"
    | "btn-light"
    | "btn-dark";

  textColor?:
    | "text-primary"
    | "text-secondary"
    | "text-success"
    | "text-danger"
    | "text-warning"
    | "text-info"
    | "text-light"
    | "text-dark";
}
