import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "../layouts"
import { routes } from "./paths"

const PathRoutes: React.FC = () => {
    return (
        <Routes>
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route element={<Layout />}>
                { routes.map(({ id, path, element }) => (
                    <Route key={ id } element={ element } path={ path } />
                )) }
            </Route>
        </Routes>
    )
}

export default PathRoutes