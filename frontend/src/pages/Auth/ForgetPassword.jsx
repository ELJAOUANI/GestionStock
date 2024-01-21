import { Link } from "react-router-dom";
import loginSecurit from "../../assets/dist/images/backgrounds/login-security.svg"

import { resetPasswordTH } from "../../Services/authThunk";
import { useRef } from "react";
import { useDispatch } from "react-redux";
export default function ForgetPassword() {
    const dispatch = useDispatch()
   const emailInputRef = useRef(null);
      const customStyle = {
          height: "calc(100vh - 80px)",
      };
const handleSubmit = (e) =>{
    try{
    const emailValue = emailInputRef.current.value;
       e.preventDefault()
       console.log(emailValue)
        dispatch(resetPasswordTH(emailValue))

    }catch(e){
        console.log(e)
    }
    

}
    
  return (
      <>
          <div className="position-relative overflow-hidden radial-gradient min-vh-100">
              <div className="position-relative z-index-5">
                  <div className="row">
                      <div className="col-lg-6 col-xl-8 col-xxl-9">
                          <a
                              href="./index.html"
                              className="text-nowrap logo-img d-block px-4 py-9 w-100"
                          >
                              <img
                                  //   src="../../dist/images/logos/dark-logo.svg"
                                  width="180"
                                  alt=""
                              />
                          </a>
                          <div
                              className="d-none d-lg-flex align-items-center justify-content-center"
                              style={customStyle}
                          >
                              <img
                                  src={loginSecurit}
                                  alt=""
                                  className="img-fluid"
                                  width="500"
                              />
                          </div>
                      </div>
                      <div className="col-lg-6 col-xl-4 col-xxl-3">
                          <div className="card mb-0 shadow-none rounded-0 min-vh-100 h-100">
                              <div className="d-flex align-items-center w-100 h-100">
                                  <div className="card-body">
                                      <div className="mb-5">
                                          <h2 className="fw-bolder fs-7 mb-3">
                                              Forgot your password?
                                          </h2>
                                          <p className="mb-0 ">
                                              Please enter the email address
                                              associated with your account and
                                              We will email you a link to reset
                                              your password.
                                          </p>
                                      </div>
                                      <form>
                                          <div className="mb-3">
                                              <label
                                                  htmlFor="exampleInputEmail1"
                                                  className="form-label"
                                              >
                                                  Email address
                                              </label>
                                              <input
                                                  type="email"
                                                  className="form-control"
                                                  id="exampleInputEmail1"
                                                  aria-describedby="emailHelp"
                                                  ref={emailInputRef}
                                              />
                                          </div>
                                          <button
                                              href="javascript:void(0)"
                                              className="btn btn-primary w-100 py-8 mb-3"
                                              onClick={(e) => handleSubmit(e)}
                                          >
                                              Forgot Password
                                          </button>
                                          <Link
                                              to={"/login"}
                                              className="btn btn-light-primary text-primary w-100 py-8"
                                          >
                                              Back to Login
                                          </Link>
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
