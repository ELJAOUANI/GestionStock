import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Employee from '../pages/components/employer/Employee' 
import { Error404 } from "../pages/error/Error";
import Main from "../pages/Main";
import GuestLayout from "../pages/components/GuestLayout/GuestLayout";
import Dashboard from "../pages/components/Dashboard";
import Fournisseur from "../pages/components/Fournisseur/Fournisseur";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/employees",
                element: <Employee />,
            },
            {
                path: "/supplier",
                element: <Fournisseur />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/*",
        element: <Error404 />,
    },
]);

export default router;