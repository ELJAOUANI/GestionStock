import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
 
import { Link} from 'react-router-dom'


import { getAllStockSortieTh } from "../../../Services/stock/stockThunk";


export default function GetStock() {
 const [loading, setLoading] = useState(true);

      const dispatch = useDispatch();
      const { stockSortie } = useSelector((state) => state.stockSortie);
      console.log('from get stock ',stockSortie);

 

    const fetchData = async () => {
       
        await dispatch(getAllStockSortieTh());

          setLoading(false);
    };
    useEffect(() => {
        // dispatch(getCategoryTh());
        // dispatch(getdataThunk()); //fournisseur data
        fetchData();
    }, [dispatch]);
    const handleDelete = (e) => {
   e.preventDefault();
        
    };
    return (
        <>
        

            <div className="card">
                <div className="border-bottom title-part-padding">
                    <h4 className="card-title mb-0">Liste De Stock Affecter</h4>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            id="demo-foo-addrow"
                            className="table table-bordered m-t-30 table-hover contact-list text-center"
                            data-paging="true"
                            data-paging-size="7"
                        >
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Group</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td align="text-center" colSpan={4}>
                                            Chargement en cours...
                                        </td>
                                    </tr>
                                ) : (
                                    stockSortie.map(
                                        (stockSortieGroup, index) => (
                                            <tr key={index}>
                                                <td>{stockSortieGroup.date}</td>
                                                <td>
                                                    <ul>
                                                        {stockSortieGroup.sorties.map(
                                                            (
                                                                sortie,
                                                                subIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                >
                                                                    {
                                                                        sortie
                                                                            .product
                                                                            .name
                                                                    }{" "}
                                                                    - Sortie
                                                                    Quantity:{" "}
                                                                    {
                                                                        sortie.quantity
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        {stockSortieGroup.sorties.map(
                                                            (
                                                                sortie,
                                                                subIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                >
                                                                    {
                                                                        sortie
                                                                            .group
                                                                            ?.name
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </td>
                                           
                                                <td>
                                                    <div
                                                        className="btn-group"
                                                        role="group"
                                                        aria-label="Basic example"
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                handleDelete()
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
                                                        <Link to={`/product/}`}>
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
                                        )
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
