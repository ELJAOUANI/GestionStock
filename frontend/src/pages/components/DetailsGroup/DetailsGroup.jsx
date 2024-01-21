import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  getGroupEmpTh  } from "../../../Services/EmployeesGroup/EmployeesGrpServiceTh";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";
export default function DetailsGroup() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const employeeGroup = useSelector(
        (state) => state.employeeGroups.employeeGroups
    );
    console.log("data", employeeGroup);
    const [employeeGroupData, setEmployeeGroupData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            await dispatch(getGroupEmpTh());
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        // Filter all entries with the matching group_id
        const groupEntries = employeeGroup.filter(
            (group) => group.group_id === parseInt(id)
        );

        // Map the employee names from the filtered entries
        const employeeNames = groupEntries.map((entry) => entry.employees);

        // Update state with the found data
        setEmployeeGroupData(employeeNames);
    }, [employeeGroup, id]);
    
         console.log('typeof' , typeof employeeGroupData);
    return (
        <>
            {/* <div>
                {isLoading ? (
                    <p>Loading employee data...</p>
                ) : employeeGroupData.length > 0 ? (
                    <div>
                        <p>Group ID: {id}</p>
                        <p>Employee Names:</p>
                        <ul>
                            {employeeGroupData.map((employeeName, index) => (
                                <li key={index}>{employeeName}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No employee data found for the group.</p>
                )}
            </div> */}
            <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                    <thead>
                        <tr className="text-muted fw-semibold">
                            <th scope="col" className="ps-0">
                                Name
                            </th>
                            <th scope="col">Poste</th>
                            <th scope="col">Salaire</th>
                            <th scope="col">City</th>
                            <th scope="col">Date D`embauche</th>
                        </tr>
                    </thead>
                    <tbody className="border-top">
                        {isLoading ? (
                            <tr>
                                <td colSpan="4">Loading employee data...</td>
                            </tr>
                        ) : employeeGroupData &&
                          employeeGroupData.length > 0 ? (

                           employeeGroupData.map(
                                (employee, index) => (
                                    <tr key={index}>
                                        <td className="ps-0">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6 className="fw-semibold mb-1">
                                                        {employee.name}
                                                    </h6>
                                                    <p className="fs-2 mb-0 text-muted">
                                                        {employee.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 fs-3">
                                                {employee.poste}
                                            </p>
                                        </td>

                                        <td>
                                            <p className="fs-3 text-dark mb-0">
                                                {employee.city}
                                            </p>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">
                                                {employee.salaire} DH
                                            </p>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">
                                                {employee.hire_date}
                                            </p>
                                        </td>
                                    </tr>
                                )
                            )
                        ) : (
                            <tr>
                                <td colSpan="4">
                                    No employee data found for the group.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
