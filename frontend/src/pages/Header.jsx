import { useSelector } from "react-redux";
import logo from '../assets/dist/images/profile/user-1.jpg';
import actSet from "../assets/dist/images/svgs/icon-account.svg";

export default function Header() {

    
 const userState = useSelector((state) => state.auth.user);

  // Check if the user state is not null
  if (userState !== null) {
  console.log('dt kayana' , userState.name)
  } else {
     console.log("dt makaynach");
  }
    return (
        <>
            {/* <!--  Header Start --> */}
            <header className="app-header">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link sidebartoggler nav-icon-hover ms-n3"
                                id="headerCollapse"
                                href="javascript:void(0)"
                            >
                                <i className="ti ti-menu-2"></i>
                            </a>
                        </li>
                    </ul>

                    <div className="d-block d-lg-none">
                        <img
                            src="../../dist/images/logos/dark-logo.svg"
                            className="dark-logo"
                            width="180"
                            alt=""
                        />
                        <img
                            src="../../dist/images/logos/light-logo.svg"
                            className="light-logo"
                            width="180"
                            alt=""
                        />
                    </div>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="p-2">
                            <i className="ti ti-dots fs-7"></i>
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <div className="d-flex align-items-center justify-content-between">
                            <a
                                href="javascript:void(0)"
                                className="nav-link d-flex d-lg-none align-items-center justify-content-center"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobilenavbar"
                                aria-controls="offcanvasWithBothOptions"
                            >
                                <i className="ti ti-align-justified fs-7"></i>
                            </a>
                            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link nav-icon-hover"
                                        href="javascript:void(0)"
                                        id="drop2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="../../dist/images/svgs/icon-flag-en.svg"
                                            alt=""
                                            className="rounded-circle object-fit-cover round-20"
                                        />
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link nav-icon-hover"
                                        href="javascript:void(0)"
                                        id="drop2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="ti ti-bell-ringing"></i>
                                        <div className="notification bg-primary rounded-circle"></div>
                                    </a>
                                    <div
                                        className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                                        aria-labelledby="drop2"
                                    >
                                        <div className="d-flex align-items-center justify-content-between py-3 px-7">
                                            <h5 className="mb-0 fs-5 fw-semibold">
                                                Notifications
                                            </h5>
                                            <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                                                5 new
                                            </span>
                                        </div>
                                        <div
                                            className="message-body"
                                            data-simplebar
                                        >
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src={logo}
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        Roman Joined the Team!
                                                    </h6>
                                                    <span className="d-block">
                                                        Congratulate him
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src="../../dist/images/profile/user-2.jpg"
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        New message
                                                    </h6>
                                                    <span className="d-block">
                                                        Salma sent you new
                                                        message
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src="../../dist/images/profile/user-3.jpg"
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        Bianca sent payment
                                                    </h6>
                                                    <span className="d-block">
                                                        Check your earnings
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src="../../dist/images/profile/user-4.jpg"
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        Jolly completed tasks
                                                    </h6>
                                                    <span className="d-block">
                                                        Assign her new tasks
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src="../../dist/images/profile/user-5.jpg"
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        John received payment
                                                    </h6>
                                                    <span className="d-block">
                                                        $230 deducted from
                                                        account
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="py-6 px-7 d-flex align-items-center dropdown-item"
                                            >
                                                <span className="me-3">
                                                    <img
                                                        src={logo}
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width="48"
                                                        height="48"
                                                    />
                                                </span>
                                                <div className="w-75 d-inline-block v-middle">
                                                    <h6 className="mb-1 fw-semibold">
                                                        Roman Joined the Team!
                                                    </h6>
                                                    <span className="d-block">
                                                        Congratulate him
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="py-6 px-7 mb-1">
                                            <button className="btn btn-outline-primary w-100">
                                                {" "}
                                                See All Notifications{" "}
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link pe-0"
                                        href="javascript:void(0)"
                                        id="drop1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="user-profile-img">
                                                <img
                                                    src={logo}
                                                    className="rounded-circle"
                                                    width="35"
                                                    height="35"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </a>
                                    <div
                                        className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                                        aria-labelledby="drop1"
                                    >
                                        <div
                                            className="profile-dropdown position-relative"
                                            data-simplebar
                                        >
                                            <div className="py-3 px-7 pb-0">
                                                <h5 className="mb-0 fs-5 fw-semibold">
                                                    User Profile
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                                <img
                                                    src={logo}
                                                    className="rounded-circle"
                                                    width="80"
                                                    height="80"
                                                    alt=""
                                                />
                                                <div className="ms-3">
                                                    <h5 className="mb-1 fs-3">
                                                        {userState &&
                                                            userState.name}
                                                    </h5>
                                                    <span className="mb-1 d-block text-dark">
                                                        Designer
                                                    </span>
                                                    <p className="mb-0 d-flex text-dark align-items-center gap-2">
                                                        <i className="ti ti-mail fs-4"></i>{" "}
                                                        {userState &&
                                                            userState.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="message-body">
                                                <a
                                                    href="./page-user-profile.html"
                                                    className="py-8 px-7 mt-8 d-flex align-items-center"
                                                >
                                                    <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                                        <img
                                                            src={actSet}
                                                            alt=""
                                                            width="24"
                                                            height="24"
                                                        />
                                                    </span>
                                                    <div className="w-75 d-inline-block v-middle ps-3">
                                                        <h6 className="mb-1 bg-hover-primary fw-semibold">
                                                            {" "}
                                                            My Profile{" "}
                                                        </h6>
                                                        <span className="d-block text-dark">
                                                            Account Settings
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="d-grid py-4 px-7 pt-8">
                                                <a
                                                    href="./authentication-login.html"
                                                    className="btn btn-outline-primary"
                                                >
                                                    Log Out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!--  Header End --> */}
        </>
    );
}
