import  { useState } from "react";
import { Icon } from "@/ui";

export const NotificationDropDown = () => {
    const [show, setShow] = useState(false);
    return (
        <li className="nav-item dropdown">
            <a
                href="#"
                className={`nav-link nav-icon-hover ${show && "show"}`}
                onClick={() => setShow(!show)}
                aria-expanded="true"
                data-bs-toggle="dropdown"
                id="drop2"
            >
                <Icon name="basil:notification-on-outline" size={20} />
                <div className="notification bg-primary rounded-circle"></div>
            </a>
            <div
                className={`dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up ${
                    show && "show"
                }`}
                aria-labelledby="drop1"
                data-bs-popper="static"
            >
                <div className="d-flex align-items-center justify-content-between py-3 px-7">
                    <h5 className="mb-0 fs-5 fw-semibold"> Notification</h5>
                    <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                        0 New
                    </span>
                </div>
                <div className="message-body"></div>
            </div>
        </li>
    );
};
