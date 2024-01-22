//import Carousel from "./Carousel";

import useAuth from "../hooks/useAuth";
import Header from "./Header";
import SideBar from "./SideBar";
//import SideBaree from "./SideBaree";
import { Navigate, Outlet } from "react-router-dom";

export default function Main() {
const auth = useAuth() ;
  if (!auth.token) {
      return <Navigate to="/login" />;
  }
    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-theme="blue_theme"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <SideBar />
                <div className="body-wrapper">
                    <Header />
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
