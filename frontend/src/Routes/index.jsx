import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Employee from '../pages/components/employer/Employee' 
import { Error404 } from "../pages/error/Error";
import Main from "../pages/Main";
import GuestLayout from "../pages/components/GuestLayout/GuestLayout";
import Dashboard from "../pages/components/Dashboard";
import Fournisseur from "../pages/components/Fournisseur/Fournisseur";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Groups from "../pages/components/groups/Groups";
import DetailsGroup from "../pages/components/DetailsGroup/DetailsGroup";

import Product from "../pages/components/Product/Product";
import CategoryCards from "../pages/components/CategoryCards/CategoryCards";
import Details from "../pages/components/Product/DetailProduct/Details";
import Stock from "../pages/components/Stock/Stock";

import GetStock from "../pages/components/StockSortie/GetStock";

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
            {
                path: "/category",
                element: <CategoryCards />,
            },
            {
                path: "/groups",
                element: <Groups />,
            },
            {
                path: "/emp_groups/:id",
                element: <DetailsGroup />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/product/:id",
                element: <Details />,
            },
            {
                path: "/stock",
                element: <Stock />,
            },
            {
                path: "/stockout",
                element: <GetStock />,
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
            {
                path: "/reset-password",
                element: <ForgetPassword />,
            },
        ],
    },
    {
        path: "/*",
        element: <Error404 />,
    },
]);

export default router;