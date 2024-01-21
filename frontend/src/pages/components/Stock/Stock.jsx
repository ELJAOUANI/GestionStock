import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import {
    deleteProductTh,
} from "../../../Services/Product/productThunk";


import { getStockTh } from "../../../Services/stock/stockThunk";
import EmployeCards from "../employer/EmployeCards";

import SortieStock from "./SortieStock";

export default function Stock() {
    const { stock } = useSelector((state) => state.stock);
    console.log(stock)
  

    const [loading, setLoading] = useState(true);


    const dispatch = useDispatch();

    const fetchData = async () => {
        setLoading(true);
        await dispatch(getStockTh());

        setLoading(false);
    };
    useEffect(() => {
    
        // dispatch(getCategoryTh());
        // dispatch(getdataThunk()); //fournisseur data
        fetchData();
    }, [dispatch]);
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
                <SortieStock />
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
                                    stock &&
                                    stock.map((data, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{data.name}</td>

                                            <td>{data.available_stock}</td>
                                         

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
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
