import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
    return (
        <div className="container mx-auto px-8">

            <Outlet />
        </div>
    )
}