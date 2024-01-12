import  { useEffect, useState } from "react";
import { Icon } from "@/ui";
import { ProfileDropDown } from ".";
import { NotificationDropDown } from "./notification-dropdown";
import Logo from "@/assets/img/light-logo.svg";

// interface Props {
//     open: boolean;
//     handleOpen: () => void;
//}
export const Header  = () => {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`app-header ${scrollY > 10 && "fixed-header p-3"}`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link sidebartoggler nav-icon-hover ms-n3"
                            role="button"
                            onClick={handleOpen}
                        >
                            <Icon name="ion:menu" size={25} />
                        </a>
                    </li>
                </ul>
                <div className="d-block d-lg-none">
                    <img src={Logo} className="dark-logo" width={180} alt="" />
                </div>
                <div
                    role="button"
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                    className="d-block d-lg-none"
                >
                    <Icon name="tabler:dots" size={25} />
                </div>
                <div
                    className={`collapse navbar-collapse justify-content-end ${
                        openSubMenu && "show"
                    }`}
                >
                    <div className="d-flex align-items-center justify-content-between">
                        <div
                            role="button"
                            onClick={() => setOpenSubMenu(!openSubMenu)}
                            className="d-block d-lg-none"
                        >
                            <Icon name="ep:close-bold" size={25} />
                        </div>
                        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                            <NotificationDropDown />
                            <ProfileDropDown />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
