import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import {
    deleteProductTh,
} from "../../../Services/Product/productThunk";


import { getStockTh } from "../../../Services/stock/stockThunk";
import EmployeCards from "../employer/EmployeCards";

import SortieStock from "./SortieStockModal";
import DeleteConfirmation from "../Product/DeleteConfirmation";

export default function Stock() {
  const { stock } = useSelector((state) => state.stock);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const fetchData = async () => {
      try {
          setLoading(true);
          const response = await dispatch(getStockTh());
          if (response.status === 200) {
              const { stock } = response.data;
              // Update stock and alert based on the fetched data
              setAlertBasedOnStock(stock);
          }
      } catch (error) {
          console.error("Fetching data failed:", error);
      } finally {
          setLoading(false);
      }
  };

  const setAlertBasedOnStock = (newStock) => {
      const outOfStockProducts = newStock.filter(
          (data) => data.available_stock === 0
      );
      if (outOfStockProducts.length > 0) {
          const productNames = outOfStockProducts
              .map((product) => product.name)
              .join(", ");
          setAlertMessage(
              `Les produits suivants sont en rupture de stock: ${productNames}`
          );
      } else {
          setAlertMessage("");
      }
  };

  useEffect(() => {
      fetchData();
  }, [dispatch]); // Fetch data on component mount or when needed, not on stock change

  useEffect(() => {
      // Update alert based on the stock
      setAlertBasedOnStock(stock);
  }, [stock]);

  const handleDelete = (e, id) => {
      e.preventDefault();
      setDeletingItemId(id);
  };
    return (
        <>
            {alertMessage && (
                <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                >
                    {alertMessage}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            )}
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
