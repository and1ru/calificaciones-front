import { createBrowserRouter } from "react-router-dom";
import { NotasPage } from "../pages/Grades/Grades";
import { RootPage } from "../pages/Root/Root";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Class } from "../pages/Class/Class";
import { CreateSchool } from "../pages/CreateSchool/CreateSchool";
import { CreateSubject } from "../pages/CreateSubject/CreateSubject";
import { CreateGroup } from "../pages/CreateGroup/CreateGroup";
import { CreateUser } from "../pages/CreateUser/CreateUser";
import { CreateBranch } from "../pages/CreateBranch/CreateBranch";

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
            {
                path: "create_school",
                element: <CreateSchool />
            },
            {
                path: "create_user",
                element: <CreateUser />
            },
            {
                path: "create_subject",
                element: <CreateSubject />
            },
            {
                path: "create_group",
                element: <CreateGroup />
            },
            {
                path: "create_branch",
                element: <CreateBranch />
            }
        ]
    },

])