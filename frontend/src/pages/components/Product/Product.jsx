import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import EmployeCards from "../employer/EmployeCards";
import {
    deleteProductTh,
    getProductThunk,
} from "../../../Services/Product/productThunk";
import NewProduct from "./newProduct";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import { getdataThunk } from "../../../Services/fournisseur/fournisseurThunk";

export default function Product() {
    const { products } = useSelector((state) => state.product);
    const { kpis } = useSelector((state) => state.product);

    const [loading, setLoading] = useState(true);
    console.log(kpis);

    const dispatch = useDispatch();

    const fetchData = async () => {
        setLoading(true);
        await dispatch(getProductThunk());

        setLoading(false);
    };
    useEffect(() => {
        dispatch(getCategoryTh());
        dispatch(getdataThunk()); //fournisseur data
        fetchData();
    }, []);
    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteProductTh(id));
    };
    return (
        <>
            <EmployeCards />
            <div className="card">
                <div className="border-bottom title-part-padding">
                    <h4 className="card-title mb-0">Liste Des Produits</h4>
                </div>
                <NewProduct />
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
                                    <th>Categorie</th>
                                    <th>Prix</th>
                                    <th>Fournisseur</th>
                                   
                                    <th>Actions</th>
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
                                    products.map((data, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{data?.name}</td>
                                            <td>{data.category?.name}</td>
                                            <td>{data.price}</td>

                                            <td>
                                                {
                                                    data.fournisseur
                                                        ?.name_fournisseur
                                                }
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
                                                    <Link to={`/product/${data.id}`}>
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
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
