import { createBrowserRouter } from "react-router-dom";
import { NotasPage } from "../pages/Grades/Grades";
import { RootPage } from "../pages/Root/Root";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Class } from "../pages/Class/Class";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "/private/",
        element: <RootPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "clase/:id",
                element: <Class />
            },
            {
                path: "subject/:id",
                element: <NotasPage />
            },
        ]
    },

])