import { FC } from "react";
import { Button } from "../Button";
import { IModalActiveProps } from "./types/types";

export const Modal: FC<IModalActiveProps> = ({
  children,
  active,
  setActive,
  isDisabledOnClickModal = false,
  size = "sm",
  button,
}) => {
  return (
    <>
      <Button
        title={button.title}
        icon={button.icon}
        onClick={() => {
          if (button.onClick) button.onClick;
          setActive(!active);
        }}
        backgroundColor={button.backgroundColor}
        textColor={button.textColor}
      />
      {active ? (
        <div
          onClick={() => {
            if (!isDisabledOnClickModal) setActive(!active);
          }}
          className="absolute top-0 bottom-0 right-0 left-0 z-90 flex justify-center items-center bg-black/20"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`w-10/12 h-auto max-h-[600px] bg-white rounded-lg flex flex-col items-center justify-center text-center drop-shadow-xl p-5 modal-${size} sm:w-[500px] `}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
