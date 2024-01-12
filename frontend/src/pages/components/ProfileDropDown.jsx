import { useState } from "react";
import Avatar from "@/assets/img/user-1.jpg";
import useAuth from "@/core/hooks/use-auth";
import { Icon } from "@/ui";
import { useAppDispatch } from "@/core";
import { authActionThunk } from "@/redux/app";

export const ProfileDropDown = () => {
    const [show, setShow] = useState(false);
    const auth = useAuth();
    const dispatch = useAppDispatch();

    const logout = async () => {
        await dispatch(authActionThunk.logout());
    };

    return (
        <li className="nav-item dropdown">
            <a
                href="#"
                className={`nav-link ${show && "show"}`}
                onClick={() => setShow(!show)}
                data-bs-toggle="dropdown"
            >
                <div className="d-flex align-items-center">
                    <div className="user-profile-img">
                        <img
                            src={Avatar}
                            className="rounded-circle"
                            height={35}
                            width={35}
                        />
                    </div>
                </div>
            </a>
            <div
                className={`dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up ${
                    show && "show"
                }`}
                aria-labelledby="drop1"
                data-bs-popper="static"
            >
                <div className="profile-dropdown position-relative">
                    <div className="simplebar-wrapper">
                        <div className="simplebar-height-auto-observer-wrapper"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div
                            className="simplebar-offset"
                            style={{ right: 0, bottom: 0 }}
                        >
                            <div
                                className="simplebar-content-wrapper"
                                tabIndex={0}
                                role="region"
                                style={{
                                    height: "auto",
                                    overflow: "hidden scroller",
                                }}
                            >
                                <div
                                    className="simplebar-content"
                                    style={{ padding: 0 }}
                                >
                                    <div className="py-3 px-7 pb-0">
                                        <h5 className="mb-0 fs-5 fw-semibold">
                                            User Profile
                                        </h5>
                                    </div>
                                    {/* profile information */}
                                    <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                        <img
                                            src={Avatar}
                                            className="rounded-circle"
                                            width={80}
                                            height={80}
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <h5 className="mb-1 fs-3">
                                                {" "}
                                                BILLAL{" "}
                                            </h5>
                                            <span className="mb-1 d-block text-dark">
                                                {" "}
                                                Admin{" "}
                                            </span>
                                            <p className="mb-0 d-flex text-dark align-items-center gap-2">
                                                <Icon
                                                    name="majesticons:mail-line"
                                                    size={15}
                                                />
                                                {auth.user?.email}
                                            </p>
                                        </div>
                                    </div>
                                    {/* profile details */}
                                    <div className="message-body">
                                        <a className="py-8 px-7 mt-8 d-flex align-items-center">
                                            <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                                <Icon
                                                    name="line-md:account"
                                                    size={30}
                                                />
                                            </span>
                                            <div className="w-75 d-inline-block v-middle ps-3">
                                                <h6 className="mb-1 bg-hover-primary fw-semibold">
                                                    My Profile
                                                </h6>
                                                <p className="d-block text-dark">
                                                    Account Settings
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    {/* log out section */}
                                    <div className="d-grid py-4 px-7 pt-8">
                                        <button
                                            onClick={logout}
                                            className="btn btn-outline-primary"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
// height: auto; overflow: hidden scroll;
