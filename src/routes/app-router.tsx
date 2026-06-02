import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { DashboardPage } from "../pages/dashboard-page";
import { ClasePage } from "../pages/clase-page";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <HomePage/>
    },
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "dashboard",
        element: <DashboardPage/>
    },
    {
        path: "clase/:id",
        element: <ClasePage/>
    }
])