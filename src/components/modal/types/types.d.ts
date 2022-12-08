import { PropsWithChildren } from "react";

interface IOnClickModalProps {
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

interface IActiveProps {
  setActive: (active: boolean) => void;
  active: boolean;
}

interface ITitleProps {
  title: string;
}

interface ITextButtonProps {
  textButton: string;
}

interface IDescriptionProps {
  description: string;
}

export interface IModalProps
  extends IDescriptionProps,
    IOnClickModalProps,
    ITitleProps,
    ITextButtonProps {}

export interface IModalActiveProps extends IOnClickModalProps, IActiveProps {}

export interface ISimpleModal extends PropsWithChildren {}

export interface IModalHeaderProps extends ITitleProps {}

export interface IModalContentProps extends IModalProps, PropsWithChildren {}

export interface IModalMainProps
  extends ITextButtonProps,
    IActiveProps,
    PropsWithChildren {}

export interface IStructureModalProps
  extends ITitleProps,
    IDescriptionProps,
    PropsWithChildren {}
