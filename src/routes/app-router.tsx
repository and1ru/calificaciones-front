import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { DashboardPage } from "../pages/dashboard-page";
import { ClasePage } from "../pages/clase-page";
import { NotasPage } from "../pages/notas-page";
import { AnotacionPage } from "../pages/anotacion-page";
import { VerAnotacionPage } from "../pages/ver-anotacion-page";
import { RegisterPage } from "../pages/register-page";
import { RootPage } from "../pages/root";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <HomePage />
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "register",
        element: <RegisterPage />
    },
    {
        path: "/private/",
        element: <RootPage />,
        children: [
            {
                path: "dashboard",
                element: <DashboardPage />
            },
            {
                path: "clase/:id",
                element: <ClasePage />
            },
            {
                path: "notas/:id",
                element: <NotasPage />
            },
            {
                path: "anotacion",
                element: <AnotacionPage />
            },
            {
                path: "ver-anotacion",
                element: <VerAnotacionPage />
            }
            
        ]
    },

])