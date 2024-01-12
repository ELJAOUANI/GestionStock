import { useEffect, useState } from "react";
import NewEmployee from "../employer/NewEmployee";
import { getdataThunk } from "../../../Services/fournisseur/fournisseurThunk";
import { useDispatch, useSelector } from "react-redux";
import FournisseurCards from "./fournisseurCards";


export default function Fournisseur() {
    const dispatch = useDispatch();
    const [loading , setLoading] = useState('')
   
    useEffect(() => {

      (dispatch(getdataThunk()));
    }, []);

    
    const {fournisseurs } = useSelector(state=>state.fournisseur)


    return (
        <>
            <FournisseurCards />
            <div className="card">
                <div className="border-bottom title-part-padding">
                    <h4 className="card-title mb-0">Liste Des Fournisseurs</h4>
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
                                {fournisseurs ? (
                                    fournisseurs.map((fr, key) => (
                                        <tr key={key}>
                                            <td>1</td>
                                            <td>{fr.name_fournisseur}</td>
                                            <td>{fr.email}</td>
                                            <td>{fr.phone_no_1}</td>
                                            <td>
                                                <span className="badge bg-danger">
                                                    {fr.type}
                                                </span>
                                            </td>
                                            <td>{fr.ville}</td>
                                            <td>
                                                {new Date(
                                                    fr.created_at
                                                ).toLocaleDateString()}
                                            </td>
                                            <td>{fr.m_paiment}</td>
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
                                ) : (
                                    <loading />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
