import { Link } from "react-router-dom";
import logo from "../assets/dist/images/logos/castcastlefood2.svg";
export default function SideBar() {
  return (
      <>
          <aside className="left-sidebar">
              {/* <!-- Sidebar scroll--> */}
              <div>
                  {/* <div className="brand-logo d-flex align-items-center justify-content-between">
                      <a href="./index.html" className="text-nowrap logo-img">
                          <img
                              src={logo}
                              className="dark-logo"
                              style={{ width: "120px", height: "auto" }} // Adjust the width and height as needed
                              alt=""
                          />
                          <img
                              // src={logo}
                              className="light-logo"
                              style={{ width: "120px", height: "auto" }} // Adjust the width and height as needed
                              alt=""
                          />
                      </a>
                      <div
                          className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
                          id="sidebarCollapse"
                      >
                          <i className="ti ti-x fs-8 text-muted"></i>
                      </div>
                  </div> */}

                  {/* <!-- Sidebar navigation--> */}
                  <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                      <ul id="sidebarnav">
                          <li className="brand-logo d-flex align-items-center justify-content-between">
                              <a
                                  href="./index.html"
                                  className="text-nowrap logo-img"
                              >
                                  <img
                                      src={logo}
                                      className="dark-logo"
                                      style={{ width: "120px", height: "auto" }} // Adjust the width and height as needed
                                      alt=""
                                  />
                                  <img
                                      // src={logo}
                                      className="light-logo"
                                      style={{ width: "120px", height: "auto" }} // Adjust the width and height as needed
                                      alt=""
                                  />
                              </a>
                          </li>{" "}
                          <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">Home</span>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/"
                                  exact
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-aperture"></i>
                                  </span>
                                  <span className="hide-menu">Dashboard</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/supplier"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-shopping-cart"></i>
                                  </span>
                                  <span className="hide-menu">Fournisseur</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/caisse"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-currency-dollar"></i>
                                  </span>
                                  <span className="hide-menu">Caisse</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/employees"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-user-circle"></i>
                                  </span>
                                  <span className="hide-menu">Employés</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/category"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-clipboard"></i>
                                  </span>
                                  <span className="hide-menu">Categories</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/groups"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-briefcase"></i>
                                  </span>
                                  <span className="hide-menu">Groupe</span>
                              </Link>
                          </li>
                          <li className="sidebar-item">
                              <a
                                  className="sidebar-link has-arrow"
                                  href="#"
                                  aria-expanded="false"
                              >
                                  <span className="d-flex">
                                      <i className="ti ti-package"></i>
                                  </span>
                                  <span className="hide-menu">Stock</span>
                              </a>
                              <ul
                                  aria-expanded="false"
                                  className="collapse first-level"
                              >
                                  <li className="sidebar-item">
                                      <Link
                                          to="/stock"
                                          className="sidebar-link"
                                          aria-expanded="false"
                                      >
                                          <span>
                                              <i className="ti ti-package"></i>
                                          </span>
                                          <span className="hide-menu">
                                              Stock
                                          </span>
                                      </Link>
                                  </li>
                                  <li className="sidebar-item">
                                      <Link
                                          to="/stockout"
                                          className="sidebar-link"
                                          aria-expanded="false"
                                      >
                                          <span>
                                              <i className="ti ti-package"></i>
                                          </span>
                                          <span className="hide-menu">
                                              Stock Sortie
                                          </span>
                                      </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className="sidebar-item">
                              <Link
                                  to="/product"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-server"></i>
                                  </span>
                                  <span className="hide-menu">Produits</span>
                              </Link>
                          </li>
                      </ul>
                  </nav>
              </div>
          </aside>
      </>
  );
}
