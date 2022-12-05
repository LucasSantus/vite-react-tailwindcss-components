import { FC, ReactNode } from "react"
import { CloudArrowDown } from "phosphor-react"
import { Button } from "../Button";

interface IModalProps {
  children: ReactNode
  active: boolean
  setActive: (active: boolean) => void
  textButton: string
}

export const Modal: FC<IModalProps> = ({
  children,
  active,
  setActive,
  textButton
}) => {

  const handleIsActivate = () => {
    setActive(!active)
  }
  
  return (
    <>
      <Button
        variant="btn-primary"
        description={ textButton }
        onClick={ handleIsActivate }
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
            {children}
          </div>
        </div>
        ) : null}
    </>
  )
}