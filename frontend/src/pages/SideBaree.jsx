 import { NavLink } from "react-router-dom";
import logo from "../assets/dist/images/logos/castcastlefood2.svg";


export default function SideBaree() {
    const sidebarStyles = {
    leftSidebar: {
        height: "100vh", // Set the height to 100% of the viewport height
        overflowY: "auto", // Enable vertical scrolling if needed
    },
    scrollSidebar: {
        height: "100%", // Set the height to 100% of the parent container
        overflowY: "auto", // Enable vertical scrolling if needed
    },
};
  return (
      <>
          <aside className="left-sidebar" style={sidebarStyles.leftSidebar}>
              {/* <!-- Sidebar scroll--> */}
              <div>
                  {/* <div className="brand-logo d-flex align-items-center justify-content-between">
                      <a href="/" className="text-nowrap logo-img">
                          <img
                              src={logo}
                              className="dark-logo"
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
                  </div> */}
                  {/* <!-- Sidebar navigation--> */}

                  <nav
                      className="sidebar-nav scroll-sidebar"
                      data-simplebar
                      style={sidebarStyles.scrollSidebar}
                  >
                      <ul id="sidebarnav">
                          <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">Home</span>
                          </li>
                           <div className="brand-logo d-flex align-items-center justify-content-between">
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
                          </div>{" "}

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
                              <NavLink
                                  to="/caisse"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-currency-dollar"></i>
                                  </span>
                                  <span className="hide-menu">Caisse</span>
                              </NavLink>
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
                          </li>
                          <li className="sidebar-item">
                              <NavLink
                                  to="/groups"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-briefcase"></i>
                                  </span>
                                  <span className="hide-menu">Groupe</span>
                              </NavLink>
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
                                      <NavLink
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
                                      </NavLink>
                                  </li>
                                  <li className="sidebar-item">
                                      <NavLink
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
                                      </NavLink>
                                  </li>
                              </ul>
                          </li>
                          <li className="sidebar-item">
                              <NavLink
                                  to="/product"
                                  className="sidebar-link"
                                  aria-expanded="false"
                              >
                                  <span>
                                      <i className="ti ti-server"></i>
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
// import { NavLink } from "react-router-dom";
// import logo from "../assets/dist/images/logos/castcastlefood2.svg";

// export default function SideBaree() {
//     const sidebarStyles = {
//         leftSidebar: {
//             height: "100vh",
//             overflowY: "auto",
//             backgroundColor: "#28334E",
//         },
//         scrollSidebar: {
//             height: "100%",
//             overflowY: "auto",
//         },
//         logo: {
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "20px",
//         },
//         sidebarLink: {
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 20px",
//             color: "#BAC5D6",
//             textDecoration: "none",
//             transition: "all 0.3s ease-in-out",
//         },
//         sidebarIcon: {
//             marginRight: "15px",
//             fontSize: "20px",
//         },
//         activeLink: {
//             backgroundColor: "#394867",
//         },
//     };

//     return (
//         <aside className="left-sidebar" style={sidebarStyles.leftSidebar}>
//             <div style={sidebarStyles.logo}>
//                 <NavLink to="/" className="text-nowrap logo-img">
//                     <img src={logo} className="dark-logo" width="180" alt="" />
//                 </NavLink>
//                 <div
//                     className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
//                     id="sidebarCollapse"
//                 >
//                     <i className="ti ti-x fs-8 text-muted"></i>
//                 </div>
//             </div>

//             <nav
//                 className="sidebar-nav scroll-sidebar"
//                 data-simplebar
//                 style={sidebarStyles.scrollSidebar}
//             >
//                 <ul id="sidebarnav">
//                     {/* Your menu items here */}
//                     <li className="nav-small-cap">
//                         <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
//                         <span className="hide-menu">Home</span>
//                     </li>

//                     <li className="sidebar-item">
//                         <NavLink
//                             to="/"
//                             exact
//                             className="sidebar-link"
//                             style={sidebarStyles.sidebarLink}
//                             activeClassName="active"
//                         >
//                             <i
//                                 className="ti ti-aperture"
//                                 style={sidebarStyles.sidebarIcon}
//                             ></i>
//                             <span className="hide-menu">Dashboard</span>
//                         </NavLink>
//                     </li>

//                     {/* ... Other menu items ... */}

//                     <li className="sidebar-item">
//                         <NavLink
//                             to="/stock"
//                             className="sidebar-link has-arrow"
//                             style={sidebarStyles.sidebarLink}
//                             activeClassName="active"
//                         >
//                             <i
//                                 className="ti ti-package"
//                                 style={sidebarStyles.sidebarIcon}
//                             ></i>
//                             <span className="hide-menu">Stock</span>
//                         </NavLink>
//                         <ul className="collapse first-level">
//                             <li className="sidebar-item">
//                                 <NavLink
//                                     to="/stock"
//                                     className="sidebar-link"
//                                     style={sidebarStyles.sidebarLink}
//                                     activeClassName="active"
//                                 >
//                                     <i
//                                         className="ti ti-package"
//                                         style={sidebarStyles.sidebarIcon}
//                                     ></i>
//                                     <span className="hide-menu">Stock</span>
//                                 </NavLink>
//                             </li>
//                             <li className="sidebar-item">
//                                 <NavLink
//                                     to="/stockout"
//                                     className="sidebar-link"
//                                     style={sidebarStyles.sidebarLink}
//                                     activeClassName="active"
//                                 >
//                                     <i
//                                         className="ti ti-package"
//                                         style={sidebarStyles.sidebarIcon}
//                                     ></i>
//                                     <span className="hide-menu">
//                                         Stock Sortie
//                                     </span>
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </li>

//                     {/* ... Other menu items ... */}
//                 </ul>
//             </nav>
//         </aside>
//     );
// }

