import { FC, useState } from "react"
import { Trash } from "phosphor-react"
import { Button } from "../Button";

interface IModalProps {
  text: string
}

export const Modal: FC<IModalProps> = ({
  text
}) => {
  const [ active, setActive ] = useState(false);

  return (
    <>
      <Button
        className="btn btn-danger"
        text={text}
        onClick={() => setActive(!active)}
      />
    
      {active ? (
        <div 
          onClick={() => setActive(!active)}
          className="absolute top-0 bottom-0 right-0 left-0 z-10 flex justify-center items-center bg-black" 
        >
          <div 
            onClick={(event) => event.stopPropagation()}
            className="w-[500px] h-[400px] bg-white rounded-lg p-5 flex flex-col items-center opacity-100"
          >
            <Trash size={60} color={"red"} />
            <span className="text-3xl mt-5">Are you sure?</span>
            <span className="text-gray-600 mt-2">Do you really want to delete these records? This process cannot be undone.</span>
            <div className="flex justify-center gap-4 p-5">
              <Button
                text="Cancel"
                onClick={() => {}}
                className="btn btn-danger"
              />
              <Button
                text="Delete"
                onClick={() => {}}
                className="btn btn-danger"
              />
            </div>
          </div>
        </div>
        ) : null}
    </>
  )
}