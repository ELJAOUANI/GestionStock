import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getbyProIdTh } from "../../../../Services/Product/productThunk";
//import { useParams } from "react-router-dom";
export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { productById } = useSelector((state) => state.product);
    console.log( productById);
    // const [employeeGroupData, setEmployeeGroupData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);

        try {
        const  res =   await dispatch(getbyProIdTh(id));
            return res
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    // useEffect(() => {
    //     // Filter all entries with the matching group_id
    //     const groupEntries = employeeGroup.filter(
    //         (group) => group.group_id === parseInt(id)
    //     );

    //     // Map the employee names from the filtered entries
    //     const employeeNames = groupEntries.map((entry) => entry.employees);

    //     // Update state with the found data
    //     setEmployeeGroupData(employeeNames);
    // }, [employeeGroup, id]);

    // console.log("typeof", typeof employeeGroupData);
    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                    <thead>
                        <tr className="text-muted fw-semibold">
                            <th scope="col" className="ps-0">
                                Name
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col">Fournisseur</th>
                            <th scope="col">Created by</th>
                            <th scope="col">Created_at</th>
                        </tr>
                    </thead>
                    <tbody className="border-top">
                        {isLoading ? (
                            <tr>
                                <td align="text-center" colSpan={5}>Loading Product data...</td>
                            </tr>
                        ) : productById ? (
                            <tr>
                                <td className="ps-0">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6 className="fw-semibold mb-1">
                                                {productById.name}
                                            </h6>
                                            <p className="fs-2 mb-0 text-muted">
                                                {productById.category?.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0 fs-3">
                                        {productById.price}
                                    </p>
                                </td>

                                <td>
                                    <p className="fs-3 text-dark mb-0">
                                        {
                                            productById.fournisseur
                                                ?.name_fournisseur
                                        }
                                    </p>
                                </td>
                                <td>
                                    <p className="fs-3 text-dark mb-0">
                                        {productById.created_by}
                                    </p>
                                </td>
                                <td>
                                    <p className="fs-3 text-dark mb-0">
                                        {productById.created_at &&
                                            new Date(
                                                productById.created_at
                                            ).toLocaleDateString()}
                                    </p>
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="4">
                                    No Products data found for the group.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
