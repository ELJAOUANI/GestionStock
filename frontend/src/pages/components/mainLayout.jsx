import Carousel from "../Carousel";
import Header from "../Header";
import SideBaree from "../SideBaree";

export default function MainLayout() {
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
                <SideBaree />
                <div className="body-wrapper">
                    <Header />

                    <div className="container-fluid">
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    );
}
