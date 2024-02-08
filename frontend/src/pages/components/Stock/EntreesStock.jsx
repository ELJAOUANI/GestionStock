import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteProductTh } from "../../../Services/Product/productThunk";

import { getAllEntriesTh } from "../../../Services/stock/stockThunk";
import EmployeCards from "../employer/EmployeCards";
import DeleteConfirmation from "../Product/DeleteConfirmation";
import AddStock from "./addStock";

export default function EntreesStock() {
    const { entriesStock } = useSelector((state) => state.entriesStock);

    const [deletingItemId, setDeletingItemId] = useState(null);

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const fetchData = async () => {
        setLoading(true);
        await dispatch(getAllEntriesTh());

        setLoading(false);
    };
    useEffect(() => {
        // dispatch(getCategoryTh());
        // dispatch(getdataThunk()); //fournisseur data
        fetchData();
    }, [dispatch]);
    const handleDelete = (e, id) => {
        e.preventDefault();
        setDeletingItemId(id);
    };
    return (
        <>
            <EmployeCards />
            <div className="card">
                <div className="border-bottom title-part-padding">
                    <h4 className="card-title mb-0">Stock Entree</h4>
                </div>
                <AddStock />
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            id="demo-foo-addrow"
                            className="
                        table table-bordered
                        m-t-30
                        table-hover
                        contact-list
                        text-center
                      "
                            data-paging="true"
                            data-paging-size="7"
                        >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>prix unitaire</th>
                                    <th>Date D`achat</th>
                                    <th>Creer Le</th>
                                    <th>Bon D`achat</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td align="text-center" colSpan={7}>
                                            Chargement en cours..
                                        </td>
                                    </tr>
                                ) : (
                                    entriesStock &&
                                    entriesStock.map((data, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{data.product?.name}</td>
                                            <td>{data.quantity}</td>
                                            <td>{data.price}</td>
                                            <td>{data.purchase_date}</td>
                                            <td>
                                                {new Date(
                                                    data.created_at
                                                ).toLocaleDateString()}
                                            </td>
                                            <td>
                                                <img
                                                    src={`/storage/bon_achats/${data.image_path}`}
                                                    alt={data.id}
                                                />
                                            </td>
                                            <td>
                                                {data.price * data.quantity}
                                            </td>
                                            <td className="">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Basic example"
                                                >
                                                    <button
                                                        onClick={(e) =>
                                                            handleDelete(
                                                                e,
                                                                data.id
                                                            )
                                                        }
                                                        type="button"
                                                        className="btn btn-sm btn-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#al-danger-alert"
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
                                                    <Link
                                                        to={`/product/${data.id}`}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-primary"
                                                        >
                                                            <i className="ti ti-eye"></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            <DeleteConfirmation
                                confirmDelete={() =>
                                    dispatch(deleteProductTh(deletingItemId))
                                }
                            />
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
