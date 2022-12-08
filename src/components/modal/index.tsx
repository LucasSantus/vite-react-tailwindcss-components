import { FC } from "react";
import { CloudArrowDown } from "phosphor-react";
import { Button } from "../Button";
import { IModalMainProps } from "./types/types";

export const Modal: FC<IModalMainProps> = ({
  children,
  active,
  setActive,
  textButton,
}) => {
  const handleIsActivate = () => {
    setActive(!active);
  };

  return (
    <>
      <Button
        variant="btn-primary"
        description={textButton}
        onClick={handleIsActivate}
        icon={<CloudArrowDown size={22} className="text-light" />}
        textVariant="text-light"
      />
      {active ? (
        <div
          onClick={() => setActive(!active)}
          className="absolute top-0 bottom-0 right-0 left-0 z-80 flex justify-center items-center bg-black/20"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-10/12 sm:w-[500px] h-auto max-h-[600px] bg-white rounded-lg flex flex-col items-center justify-center text-center drop-shadow-xl p-5"
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
