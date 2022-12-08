import { FC, PropsWithChildren } from "react"

export const Card: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="rounded p-3 bg-slate-500">
            { children }
        </div>
    )
}