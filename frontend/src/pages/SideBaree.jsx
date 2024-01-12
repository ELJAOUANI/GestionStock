 import { NavLink } from "react-router-dom";
import logo from "../assets/dist/images/logos/castcastlefood2.svg";
export default function SideBaree() {
  return (
      <>
          <aside className="left-sidebar">
              {/* <!-- Sidebar scroll--> */}
              <div>
                  <div className="brand-logo d-flex align-items-center justify-content-between">
                      <a href="./index.html" className="text-nowrap logo-img">
                          <img
                              src={logo}
                              className="dark-logo"
                              width="180"
                              alt=""
                          />
                          <img
                              src="../assets/dist/images/logos/light-logo.svg"
                              className="light-logo"
                              width="180"
                              alt=""
                          />
                      </a>
                      <div
                          className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
                          id="sidebarCollapse"
                      >
                          <i className="ti ti-x fs-8 text-muted"></i>
                      </div>
                  </div>
                  {/* <!-- Sidebar navigation--> */}

                  <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                      <ul id="sidebarnav">
                          <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">Home</span>
                          </li>

                          <li className="sidebar-item">
                              <NavLink
                                  to="/"
                                  exact
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-aperture"></i>
                                  </span>
                                  <span className="hide-menu">Dashboard</span>
                              </NavLink>
                          </li>
                          <li className="sidebar-item">
                              <NavLink
                                  to="/supplier"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-shopping-cart"></i>
                                  </span>
                                  <span className="hide-menu">Fournisseur</span>
                              </NavLink>
                          </li>
                          <li className="sidebar-item">
                              <a
                                  href="./index3.html"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-currency-dollar"></i>
                                  </span>
                                  <span className="hide-menu">Caisse</span>
                              </a>
                          </li>
                          <li className="sidebar-item">
                              <NavLink
                                  to="/employees"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-user-circle"></i>
                                  </span>
                                  <span className="hide-menu">Employés</span>
                              </NavLink>
                          </li>
                          <li className="sidebar-item">
                              <NavLink
                                  to="/category"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-clipboard"></i>
                                  </span>
                                  <span className="hide-menu">Categories</span>
                              </NavLink>
                              <NavLink
                                  to="/products"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-briefcase"></i>
                                  </span>
                                  <span className="hide-menu">Produits</span>
                              </NavLink>
                          </li>
                      </ul>
                  </nav>
                  {/* <!-- End Sidebar navigation --> */}
              </div>
              {/* <!-- End Sidebar scroll--> */}
          </aside>
      </>
  );
}
