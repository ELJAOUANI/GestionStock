import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteProductTh } from "../../../Services/Product/productThunk";

import { getAllStockSortieTh } from "../../../Services/stock/stockThunk";
import EmployeCards from "../employer/EmployeCards";

import SortieStock from "./GetStock";

export default function GetStock() {


      const dispatch = useDispatch();
      const { stockSortie } = useSelector((state) => state.stockSortie);

 

    const fetchData = async () => {
        // setLoading(true);
        await dispatch(getAllStockSortieTh());

        //  setLoading(false);
    };
    useEffect(() => {
        // dispatch(getCategoryTh());
        // dispatch(getdataThunk()); //fournisseur data
        fetchData();
    }, [dispatch]);
    // const handleDelete = (e, id) => {
    //     e.preventDefault();
    //     dispatch(deleteProductTh(id));
    //};
    return (
        <>
            {/* <EmployeCards />
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
                                    stockSortie &&
                                    stockSortie.map((data, key) => (
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
            </div> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Group</th>
                        {/* Add other table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {stockSortie.map((stockSortieGroup, index) => (
                        <tr key={index}>
                            <td>{stockSortieGroup.date}</td>
                            <td>
                                <ul>
                                    {stockSortieGroup.sorties.map(
                                        (sortie, subIndex) => (
                                            <li key={subIndex}>
                                                {sortie.product.name}-{" "}
                                                {sortie.product.quantity}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {stockSortieGroup.sorties.map(
                                        (sortie, subIndex) => (
                                            <li key={subIndex}>
                                                {sortie.group.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </td>
                            {/* Add other table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
