
export default function employe() {
  return (
     <>
        <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Contact Emplyee list</h4>
                </div>
                <div className="card-body">

                  <div className="table-responsive">
                    <table
                      id="demo-foo-addrow"
                      className="
                        table table-bordered
                        m-t-30
                        table-hover
                        contact-list
                      "
                      data-paging="true"
                      data-paging-size="7"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Role</th>
                          <th>Age</th>
                          <th>Joining date</th>
                          <th>Salery</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-4.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Genelia Deshmukh</a
                            >
                          </td>
                          <td>genelia@gmail.com</td>
                          <td>+123 456 789</td>
                          <td><span className="badge bg-danger">Designer</span></td>
                          <td>23</td>
                          <td>12-10-2014</td>
                          <td>$1200</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-5.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Arijit Singh</a
                            >
                          </td>
                          <td>arijit@gmail.com</td>
                          <td>+234 456 789</td>
                          <td><span className="badge bg-info">Developer</span></td>
                          <td>26</td>
                          <td>10-09-2014</td>
                          <td>$1800</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-6.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Govinda jalan</a
                            >
                          </td>
                          <td>govinda@gmail.com</td>
                          <td>+345 456 789</td>
                          <td>
                            <span className="badge bg-success">Accountant</span>
                          </td>
                          <td>28</td>
                          <td>1-10-2013</td>
                          <td>$2200</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-7.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Hritik Roshan</a
                            >
                          </td>
                          <td>hritik@gmail.com</td>
                          <td>+456 456 789</td>
                          <td><span className="badge bg-dark">HR</span></td>
                          <td>25</td>
                          <td>2-10-2023</td>
                          <td>$200</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-8.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              John Abraham</a
                            >
                          </td>
                          <td>john@gmail.com</td>
                          <td>+567 456 789</td>
                          <td><span className="badge bg-danger">Manager</span></td>
                          <td>23</td>
                          <td>10-9-2015</td>
                          <td>$1200</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-1.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Pawandeep kumar</a
                            >
                          </td>
                          <td>pawandeep@gmail.com</td>
                          <td>+678 456 789</td>
                          <td>
                            <span className="badge bg-warning">Chairman</span>
                          </td>
                          <td>29</td>
                          <td>10-5-2013</td>
                          <td>$1500</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-2.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Ritesh Deshmukh</a
                            >
                          </td>
                          <td>ritesh@gmail.com</td>
                          <td>+123 456 789</td>
                          <td><span className="badge bg-danger">Designer</span></td>
                          <td>35</td>
                          <td>05-10-2012</td>
                          <td>$3200</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-2.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Salman Khan</a
                            >
                          </td>
                          <td>salman@gmail.com</td>
                          <td>+234 456 789</td>
                          <td><span className="badge bg-info">Developer</span></td>
                          <td>27</td>
                          <td>11-10-2014</td>
                          <td>$1800</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-3.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Govinda jalan</a
                            >
                          </td>
                          <td>govinda@gmail.com</td>
                          <td>+345 456 789</td>
                          <td>
                            <span className="badge bg-success">Accountant</span>
                          </td>
                          <td>18</td>
                          <td>12-5-2023</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-4.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Sonu Nigam</a
                            >
                          </td>
                          <td>sonu@gmail.com</td>
                          <td>+456 456 789</td>
                          <td><span className="badge bg-dark">HR</span></td>
                          <td>36</td>
                          <td>18-5-2009</td>
                          <td>$4200</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-5.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Varun Dhawan</a
                            >
                          </td>
                          <td>varun@gmail.com</td>
                          <td>+567 456 789</td>
                          <td><span className="badge bg-danger">Manager</span></td>
                          <td>43</td>
                          <td>12-10-2010</td>
                          <td>$5200</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-6.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Genelia Deshmukh</a
                            >
                          </td>
                          <td>genelia@gmail.com</td>
                          <td>+123 456 789</td>
                          <td><span className="badge bg-danger">Designer</span></td>
                          <td>23</td>
                          <td>12-10-2014</td>
                          <td>$1200</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-7.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Arijit Singh</a
                            >
                          </td>
                          <td>arijit@gmail.com</td>
                          <td>+234 456 789</td>
                          <td><span className="badge bg-info">Developer</span></td>
                          <td>26</td>
                          <td>10-09-2014</td>
                          <td>$1800</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-8.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Govinda jalan</a
                            >
                          </td>
                          <td>govinda@gmail.com</td>
                          <td>+345 456 789</td>
                          <td>
                            <span className="badge bg-success">Accountant</span>
                          </td>
                          <td>28</td>
                          <td>1-10-2013</td>
                          <td>$2200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="card">
                <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Row Toggler</h4>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-3">
                    Create your table with Toggle Footable
                  </h6>
                  <div className="table-responsive">
                    <table
                      id="demo-foo-row-toggler"
                      className="table table-bordered"
                      data-bs-toggle-column="first"
                    >
                      <thead>
                        <tr>
                          <th data-breakpoints="xs">ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th data-breakpoints="xs sm">Mobile No</th>
                          <th data-breakpoints="xs">Job Title</th>
                          <th data-breakpoints="all" data-title="DOB">
                            Date of Birth
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-expanded="true">
                          <td>1</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-4.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Genelia Deshmukh</a
                            >
                          </td>
                          <td>genelia@gmail.com</td>
                          <td>+123 112 789</td>
                          <td><span className="badge bg-danger">Designer</span></td>
                          <td>February 26th 1966</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-8.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Shraddha Kapoor</a
                            >
                          </td>
                          <td>gov12inda@gmail.com</td>
                          <td>+345 456 125</td>
                          <td>
                            <span className="badge bg-success">Accountant</span>
                          </td>
                          <td>February 26th 1966</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-1.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Akshay Kumar</a
                            >
                          </td>
                          <td>g12enelia@gmail.com</td>
                          <td>+154 456 789</td>
                          <td>
                            <span className="badge bg-warning">Developer</span>
                          </td>
                          <td>February 26th 1966</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-6.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Genelia Deshmukh</a
                            >
                          </td>
                          <td>abc@gmail.com</td>
                          <td>+123 456 163</td>
                          <td><span className="badge bg-danger">Designer</span></td>
                          <td>March 29th 1966</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-5.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Steve Jobs</a
                            >
                          </td>
                          <td>shraddha@gmail.com</td>
                          <td>+123 420 789</td>
                          <td>
                            <span className="badge bg-success"
                              >Theme Developer</span
                            >
                          </td>
                          <td>September 22nd 1964</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-4.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Anil Kapoor</a
                            >
                          </td>
                          <td>gamw12@gmail.com</td>
                          <td>+123 960 789</td>
                          <td><span className="badge bg-dark">Designer</span></td>
                          <td>August 4th 1991</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-3.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Priyank Deshmukh</a
                            >
                          </td>
                          <td>shr123@gmail.com</td>
                          <td>+123 456 700</td>
                          <td><span className="badge bg-danger">Hacker</span></td>
                          <td>November 20th 1979</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <a href="javascript:void(0)" className="link"
                              ><img
                                src="../../dist/images/profile/user-2.jpg"
                                alt="user"
                                width="40"
                                className="rounded-circle"
                              />
                              Genelia Deshmukh</a
                            >
                          </td>
                          <td>developer@gmail.com</td>
                          <td>+123 700 789</td>
                          <td>
                            <span className="badge bg-success">Designer</span>
                          </td>
                          <td>April 7th 1969</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="card">
                <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Accordion Footable</h4>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-3">
                    Create your table with Accordion Footable
                  </h6>
                  {/* <!-- Accordian --> */}
                  <div className="accordion" id="accordionTable">
                    <div className="card m-b-5">
                      <div className="card-header" id="heading1">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link link "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#col1"
                            aria-expanded="true"
                            aria-controls="col1"
                          >
                            Collapsible Group Item #1
                          </button>
                        </h5>
                      </div>
                      <div
                        id="col1"
                        className="collapse show"
                        aria-labelledby="heading1"
                        data-parent="#accordionTable"
                      >
                        <div className="card-body">
                          <div className="table-responsive">
                            <table
                              id="demo-foo-accordion"
                              className="
                                table table-bordered
                                m-b-0
                                toggle-arrow-tiny
                              "
                              data-filtering="true"
                              data-paging="true"
                              data-sorting="true"
                              data-paging-size="5"
                            >
                              <thead>
                                <tr className="footable-filtering">
                                  <th data-bs-toggle="true">First Name</th>
                                  <th>Last Name</th>
                                  <th data-hide="phone">Job Title</th>
                                  <th data-hide="all">DOB</th>
                                  <th data-hide="all">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading2">
                        <h5 className="mb-0">
                          <button
                            className="
                              btn btn-link
                              collapsed
                              link
                              
                            "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#col2"
                            aria-expanded="false"
                            aria-controls="col2"
                          >
                            Collapsible Group Item #2
                          </button>
                        </h5>
                      </div>
                      <div
                        id="col2"
                        className="collapse"
                        aria-labelledby="heading2"
                        data-parent="#accordionTable"
                      >
                        <div className="card-body">
                          <div className="table-responsive">
                            <table
                              id="demo-foo-accordion2"
                              className="
                                table table-bordered
                                m-b-0
                                toggle-arrow-tiny
                              "
                              data-filtering="true"
                              data-paging="true"
                              data-sorting="true"
                              data-paging-size="5"
                            >
                              <thead>
                                <tr className="footable-filtering">
                                  <th data-bs-toggle="true">First Name</th>
                                  <th>Last Name</th>
                                  <th data-hide="phone">Job Title</th>
                                  <th data-hide="all">DOB</th>
                                  <th data-hide="all">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Isidra</td>
                                  <td>Boudreaux</td>
                                  <td>Traffic Court Referee</td>
                                  <td>22 Jun 1972</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Shona</td>
                                  <td>Woldt</td>
                                  <td>Airline Transport Pilot</td>
                                  <td>3 Oct 1981</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Granville</td>
                                  <td>Leonardo</td>
                                  <td>
                                    Business Services Sales Representative
                                  </td>
                                  <td>19 Apr 1969</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Easer</td>
                                  <td>Dragoo</td>
                                  <td>Drywall Stripper</td>
                                  <td>13 Dec 1977</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maple</td>
                                  <td>Halladay</td>
                                  <td>Aviation Tactical Readiness Officer</td>
                                  <td>30 Dec 1991</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maxine</td>
                                  <td>
                                    <a href="javascript:void(0)">Woldt</a>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)"
                                      >Business Services Sales Representative</a
                                    >
                                  </td>
                                  <td>17 Oct 1987</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lorraine</td>
                                  <td>Mcgaughy</td>
                                  <td>Hemodialysis Technician</td>
                                  <td>11 Nov 1983</td>
                                  <td>
                                    <span className="badge bg-dark">Disabled</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lizzee</td>
                                  <td>
                                    <a href="javascript:void(0)">Goodlow</a>
                                  </td>
                                  <td>Technical Services Librarian</td>
                                  <td>1 Nov 1961</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td>Judi</td>
                                  <td>Badgett</td>
                                  <td>Electrical Lineworker</td>
                                  <td>23 Jun 1981</td>
                                  <td>
                                    <span className="badge bg-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lauri</td>
                                  <td>Hyland</td>
                                  <td>Blackjack Supervisor</td>
                                  <td>15 Nov 1985</td>
                                  <td>
                                    <span className="badge bg-danger"
                                      >Suspended</span
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="card">
                <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Pagination Footable</h4>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-3">
                    Create your table with Paginated Footable
                  </h6>
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-page-size="10"
                    >
                      10
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-page-size="20"
                    >
                      20
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-page-size="30"
                    >
                      30
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="demo-foo-pagination"
                      className="table table-bordered toggle-arrow-tiny"
                      data-sorting="true"
                      data-paging="true"
                      data-paging-size="5"
                    >
                      <thead>
                        <tr>
                          <th data-bs-toggle="true">First Name</th>
                          <th>Last Name</th>
                          <th data-hide="phone">Job Title</th>
                          <th data-hide="all">DOB</th>
                          <th data-hide="all">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Isidra</td>
                          <td>Boudreaux</td>
                          <td>Traffic Court Referee</td>
                          <td>22 Jun 1972</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Shona</td>
                          <td>Woldt</td>
                          <td>Airline Transport Pilot</td>
                          <td>3 Oct 1981</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Granville</td>
                          <td>Leonardo</td>
                          <td>Business Services Sales Representative</td>
                          <td>19 Apr 1969</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Easer</td>
                          <td>Dragoo</td>
                          <td>Drywall Stripper</td>
                          <td>13 Dec 1977</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Maple</td>
                          <td>Halladay</td>
                          <td>Aviation Tactical Readiness Officer</td>
                          <td>30 Dec 1991</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Maxine</td>
                          <td><a href="javascript:void(0)">Woldt</a></td>
                          <td>
                            <a href="javascript:void(0)"
                              >Business Services Sales Representative</a
                            >
                          </td>
                          <td>17 Oct 1987</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lorraine</td>
                          <td>Mcgaughy</td>
                          <td>Hemodialysis Technician</td>
                          <td>11 Nov 1983</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lizzee</td>
                          <td><a href="javascript:void(0)">Goodlow</a></td>
                          <td>Technical Services Librarian</td>
                          <td>1 Nov 1961</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Judi</td>
                          <td>Badgett</td>
                          <td>Electrical Lineworker</td>
                          <td>23 Jun 1981</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Lauri</td>
                          <td>Hyland</td>
                          <td>Blackjack Supervisor</td>
                          <td>15 Nov 1985</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Isidra</td>
                          <td>Boudreaux</td>
                          <td>Traffic Court Referee</td>
                          <td>22 Jun 1972</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Shona</td>
                          <td>Woldt</td>
                          <td>Airline Transport Pilot</td>
                          <td>3 Oct 1981</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Granville</td>
                          <td>Leonardo</td>
                          <td>Business Services Sales Representative</td>
                          <td>19 Apr 1969</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Easer</td>
                          <td>Dragoo</td>
                          <td>Drywall Stripper</td>
                          <td>13 Dec 1977</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Maple</td>
                          <td>Halladay</td>
                          <td>Aviation Tactical Readiness Officer</td>
                          <td>30 Dec 1991</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Maxine</td>
                          <td><a href="javascript:void(0)">Woldt</a></td>
                          <td>
                            <a href="javascript:void(0)"
                              >Business Services Sales Representative</a
                            >
                          </td>
                          <td>17 Oct 1987</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lorraine</td>
                          <td>Mcgaughy</td>
                          <td>Hemodialysis Technician</td>
                          <td>11 Nov 1983</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lizzee</td>
                          <td><a href="javascript:void(0)">Goodlow</a></td>
                          <td>Technical Services Librarian</td>
                          <td>1 Nov 1961</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Judi</td>
                          <td>Badgett</td>
                          <td>Electrical Lineworker</td>
                          <td>23 Jun 1981</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Lauri</td>
                          <td>Hyland</td>
                          <td>Blackjack Supervisor</td>
                          <td>15 Nov 1985</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Isidra</td>
                          <td>Boudreaux</td>
                          <td>Traffic Court Referee</td>
                          <td>22 Jun 1972</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Shona</td>
                          <td>Woldt</td>
                          <td>Airline Transport Pilot</td>
                          <td>3 Oct 1981</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Granville</td>
                          <td>Leonardo</td>
                          <td>Business Services Sales Representative</td>
                          <td>19 Apr 1969</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Easer</td>
                          <td>Dragoo</td>
                          <td>Drywall Stripper</td>
                          <td>13 Dec 1977</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Maple</td>
                          <td>Halladay</td>
                          <td>Aviation Tactical Readiness Officer</td>
                          <td>30 Dec 1991</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Maxine</td>
                          <td><a href="javascript:void(0)">Woldt</a></td>
                          <td>
                            <a href="javascript:void(0)"
                              >Business Services Sales Representative</a
                            >
                          </td>
                          <td>17 Oct 1987</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lorraine</td>
                          <td>Mcgaughy</td>
                          <td>Hemodialysis Technician</td>
                          <td>11 Nov 1983</td>
                          <td><span className="badge bg-dark">Disabled</span></td>
                        </tr>
                        <tr>
                          <td>Lizzee</td>
                          <td><a href="javascript:void(0)">Goodlow</a></td>
                          <td>Technical Services Librarian</td>
                          <td>1 Nov 1961</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Judi</td>
                          <td>Badgett</td>
                          <td>Electrical Lineworker</td>
                          <td>23 Jun 1981</td>
                          <td><span className="badge bg-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Lauri</td>
                          <td>Hyland</td>
                          <td>Blackjack Supervisor</td>
                          <td>15 Nov 1985</td>
                          <td>
                            <span className="badge bg-danger">Suspended</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="card">
                <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Add & Remove Rows</h4>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-3">
                    You can add or remove rows with Footable
                  </h6>
                  <div className="table-responsive">
                    <table
                      id="footable-addrow"
                      className="table"
                      data-paging="true"
                      data-filtering="true"
                      data-sorting="true"
                      data-editing="true"
                      data-state="true"
                    ></table>
                  </div>
                  {/* <!-- Start Popup Model --> */}
                  <div
                    className="modal fade"
                    id="editor-modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="editor-title"
                  >
                    <div className="modal-dialog" role="document">
                      <htmlForm className="modal-content htmlForm-horizontal" id="editor">
                        <div className="modal-header d-flex align-items-center">
                          <h4 className="modal-title" id="editor-title">Add Row</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="htmlForm-group mb-3 required row">
                            <label
                              htmlFor="firstName"
                              className="col-sm-3 control-label"
                              >First Name</label
                            >
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="htmlForm-control"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="htmlForm-group mb-3 required row">
                            <label htmlFor="lastName" className="col-sm-3 control-label"
                              >Last Name</label
                            >
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="htmlForm-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="htmlForm-group mb-3 row">
                            <label htmlFor="jobTitle" className="col-sm-3 control-label"
                              >Job Title</label
                            >
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="htmlForm-control"
                                id="jobTitle"
                                name="jobTitle"
                                placeholder="Job Title"
                              />
                            </div>
                          </div>
                          <div className="htmlForm-group mb-3 row">
                            <label htmlFor="dob" className="col-sm-3 control-label"
                              >Date of Birth</label
                            >
                            <div className="col-sm-9">
                              <input
                                type="date"
                                className="htmlForm-control"
                                id="dob"
                                name="dob"
                                placeholder="Date of Birth"
                              />
                            </div>
                          </div>
                          <div className="htmlForm-group mb-3 row">
                            <label htmlFor="status" className="col-sm-3 control-label"
                              >Status</label
                            >
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="htmlForm-control"
                                id="status"
                                name="status"
                                placeholder="Status Here"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">
                            Save changes
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </htmlForm>
                    </div>
                  </div>
                  {/* <!-- End Popup Model --> */}
                </div>
              </div>
            </div>
          </div>
    </>
    
  );
}
