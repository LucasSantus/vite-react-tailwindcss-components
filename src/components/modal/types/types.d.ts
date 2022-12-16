import { PropsWithChildren } from "react";

/**
 * Generic Interfaces
 */

interface IDescription {
  description: string;
}

interface IModalAttributeProps extends IDescription {
  title: string;
  isDisabledOnClickModal?: boolean;
  icon?: JSX.Element;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

interface IActiveProps {
  setActive: (active: boolean) => void;
  active: boolean;
}

interface IMainButtonProps {
  button: IButtonProps;
}

interface IButtonModalProps {
  buttonConfirmModal: IButtonProps;
  buttonCancelModal?: IButtonProps;
}

/**
 * Generic Types
 */
interface IModalTypeProps extends IModalAttributeProps, IDescription {}

interface IModalContentTypeProps extends IModalAttributeProps {}

/**
 * Modal
 */
export interface IModalActiveProps
  extends IModalTypeProps,
    IActiveProps,
    PropsWithChildren, 
    IMainButtonProps {}

/**
 * Modal Header
 */
 export interface IModalHeaderProps {
  title: string
}

/**
 * Modal Alert
 */
export interface IMountedModalProps extends IButtonModalProps, IMainButtonProps {
  modal: IModalTypeProps;
}

/**
 * Modal Content
 */
export interface IModalContentProps extends IButtonModalProps, IMainButtonProps, PropsWithChildren {
  modal: IModalContentTypeProps
}

/**
 * Double Button
 */
export interface IDoubleButtonProps extends IActiveProps, IButtonModalProps {}