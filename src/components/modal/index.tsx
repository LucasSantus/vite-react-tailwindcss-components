import { FC, useState } from "react"
import { CloudArrowDown, Trash } from "phosphor-react"
import { Button } from "../Button";

interface IModalProps {
  textButton: string
  title: string;
  description: string;
  onClickConfirm?: () => void;
}

export const Modal: FC<IModalProps> = ({
  textButton, title, description, onClickConfirm
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <>
      <Button
        variant="btn-primary"
        description={textButton}
        onClick={() => setActive(!active)}
        icon={<CloudArrowDown size={22} className="text-light" />}
        textVariant="text-light"
      />

      {active ? (
        <div
          onClick={() => setActive(!active)}
          className="absolute top-0 bottom-0 right-0 left-0 z-10 flex justify-center items-center bg-black/50" 
        >
          <div 
            onClick={(event) => event.stopPropagation()}
            className="w-[500px] bg-white rounded-lg p-8 flex flex-col items-center justify-center text-center"
          >
            <Trash size={80} color={"red"} />
            <span className="text-3xl mt-5">{title}</span>
            <span className="text-gray-600 mt-2">{description}</span>
            <div className="flex justify-center gap-4 p-5">
              <Button
                description="Cancel"
                onClick={() => setActive(!active)}
                variant="btn-light"
              />
              <Button
                description="Delete"
                onClick={() => {
                  if( onClickConfirm ) onClickConfirm()
                  setActive(!active)
                }}
                variant="btn-danger"
                textVariant="text-light"
              />
            </div>
          </div>
        </div>
        ) : null}
    </>
  )
}