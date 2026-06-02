import { RouterProvider } from "react-router-dom"
import { routes } from "./app-router"

export const AppRouterProvider = () => {
    return(
        <RouterProvider router={routes}/>
    )
}