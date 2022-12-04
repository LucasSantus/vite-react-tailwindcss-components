import { FC, ReactNode } from "react"

interface ICardProps {
    children: ReactNode
}

export const Card: FC<ICardProps> = ({ children }) => {
    return (
        <div className="rounded p-3 bg-slate-500">
            { children }
        </div>
    )
}