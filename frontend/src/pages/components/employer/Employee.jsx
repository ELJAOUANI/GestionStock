import { useDispatch, useSelector } from "react-redux";
import NewEmployee from "./NewEmployee";
import { useEffect } from "react";
import { getEmployeTh } from "../../../Services/employe/employeThunk";
import EmployeCards from "./EmployeCards";

export default function Employee() {
    const { employe } = useSelector((state)=>state.employe);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getEmployeTh())
    },[])
    return (
        <>
            <EmployeCards />
            <div className="card">
                <div className="border-bottom title-part-padding">
                    <h4 className="card-title mb-0">Liste Des Employes</h4>
                </div>
                <NewEmployee />
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employe
                                    ? employe.map((employe, key) => (
                                          <tr key={key}>
                                              <td>1</td>
                                              <td>{employe.name}</td>
                                              <td>{employe.email}</td>
                                              <td>{employe.phone_number}</td>

                                              <td>
                                                  <span className="badge bg-danger">
                                                      {employe.poste}
                                                  </span>
                                              </td>
                                              <td>{employe.date_of_birth}</td>
                                              <td>{employe.hire_date}</td>

                                              <td>{employe.salaire}</td>
                                              <td className="text-end">
                                                  <div
                                                      className="btn-group"
                                                      role="group"
                                                      aria-label="Basic example"
                                                  >
                                                      <button
                                                          type="button"
                                                          className="btn btn-sm btn-danger"
                                                          data-bs-target="#delete-modal"
                                                          data-bs-toggle="modal"
                                                      >
                                                          <i className="ti ti-trash-filled"></i>
                                                      </button>
                                                      <button
                                                          type="button"
                                                          className="btn btn-sm btn-warning"
                                                          data-bs-target="#update-modal"
                                                          data-bs-toggle="modal"
                                                      >
                                                          <i className="ti ti-pencil"></i>
                                                      </button>
                                                      <button
                                                          type="button"
                                                          className="btn btn-sm btn-primary"
                                                      >
                                                          <i className="ti ti-eye"></i>
                                                      </button>
                                                  </div>
                                              </td>
                                          </tr>
                                      ))
                                    : ""}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
