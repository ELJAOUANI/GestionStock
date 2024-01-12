import { useEffect, useState } from "react";
import logo from "../../assets/dist/images/logos/castcastlefood2.svg";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

//import { authAction, login } from '../../Store/Slices/authSlice';
import loginTh from "../../Services/authThunk";
import useAuth from "../../hooks/useAuth";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [loader, setState] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
     const auth = useAuth();

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.currentTarget.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.currentTarget.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setState(true);
            const payload = {
                email,
                password,
            };
            const response = await dispatch(loginTh(payload));
            console.log("heey", response);
            if (response.status === 200) {
                navigate("/");
            } else if (response.status === 401) {
                setMessage(response.data.message);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setState(false);
        }
    };
     useEffect(() => {
         if (!auth) {
             navigate("/login");
         }
     }, []);

    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="row justify-content-center w-100">
                            <div className="col-md-8 col-lg-6 col-xxl-3">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <a
                                            href="#"
                                            className="text-nowrap logo-img text-center d-block mb-5 w-100"
                                        >
                                            <img
                                                src="../../dist/images/logos/dark-logo.svg"
                                                width="180"
                                                alt=""
                                            />
                                        </a>
                                        <div className="row justify-content-center">
                                            <div className="col-12 text-center">
                                                <img
                                                    src={logo}
                                                    alt=""
                                                    className="img-fluid mb-3"
                                                    width="50"
                                                    height="50"
                                                />
                                                <h2 className="mb-3">
                                                    Welcome to CastleFood System
                                                </h2>
                                            </div>
                                        </div>

                                        <form>
                                            {message && (
                                                <div className="btn btn-primary">
                                                    <p>{message}</p>
                                                </div>
                                            )}
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleInputEmail1"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    required
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="exampleInputPassword1"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={
                                                        handlePasswordChange
                                                    }
                                                    required
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <a
                                                    className="text-primary fw-medium"
                                                    href="./authentication-forgot-password.html"
                                                >
                                                    Forgot Password ?
                                                </a>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                    className="btn btn-primary w-100 py-8 mb-4 rounded-2 position-relative d-flex justify-content-center"
                                                    disabled={loader}
                                                >
                                                    {loader && (
                                                        <span
                                                            className="spinner-border spinner-border-sm me-2"
                                                            role="status"
                                                            aria-hidden="true"
                                                        ></span>
                                                    )}
                                                    Sign In
                                                </button>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center">
                                                <p className="fs-4 mb-0 fw-medium">
                                                    New to Modernize?
                                                </p>
                                                <a
                                                    className="text-primary fw-medium ms-2"
                                                    href="./authentication-register.html"
                                                >
                                                    Create an account
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
