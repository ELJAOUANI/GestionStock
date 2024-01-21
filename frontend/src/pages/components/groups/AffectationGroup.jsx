import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeTh } from "../../../Services/employe/employeThunk";
import { Multiselect } from "multiselect-react-dropdown";
import { affecteEmployeesToGrpTH } from "../../../Services/groups/groupThunk";
export default function AffectationGroup() {
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [formData, setFormData] = useState({
        groupName: "", // Updated state to hold the selected group ID
        // Other form fields...
    });
    const [isLoading, setIsLoading] = useState(false);
    const { group } = useSelector((state) => state.group);
    const { employe } = useSelector((state) => state.employe);
    const dispatch = useDispatch();
    const handleEmployeesChange = (selectedList) => {
        setSelectedEmployees(selectedList.map((item) => item.value));
    };
    const groupid = formData.groupName;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const success = await dispatch(
            affecteEmployeesToGrpTH(groupid, {
                employeeIds: selectedEmployees,
            })
        );
        console.log("Selected Group ID:", formData.groupName);
        console.log("Selected Employees:", selectedEmployees);
        if (success) {
            // Handle success if needed
            console.log("Request successful");
        } else {
            // Handle error if needed
            console.log("Request failed");
        }
        setIsLoading(false);
    };
    const handleGroupChange = (e) => {
        setFormData({
            ...formData,
            groupName: e.target.value,
        });
    };

    useEffect(() => {
        dispatch(getEmployeTh());
    }, []);
    return (
        <>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-info btn-rounded m-t-10 mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#add-contact"
                    >
                        Affecter
                    </button>
                </div>
                {/* <!-- Add Contact Popup Model --> */}
                <div
                    id="add-contact"
                    className="modal fade in"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-scrollable modal-lg max-height">
                        <div className="modal-content">
                            <div className="modal-header d-flex align-items-center">
                                <h4 className="modal-title" id="myModalLabel">
                                    Affecter Les employes dens un groupe
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <from className="form-horizontal form-material">
                                    <div className="form-group">
                                        <div className="mb-3">
                                            <select
                                                onChange={handleGroupChange}
                                                className="form-select"
                                                value={formData.groupName}
                                                aria-label="Default select example"
                                            >
                                                <option value="" disabled>
                                                    Group Name
                                                </option>
                                                {group?.map((item) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="employeeMultiselect"
                                                className="form-label"
                                            >
                                                Select Participants
                                            </label>
                                            <Multiselect
                                                id="employeeMultiselect"
                                                options={employe?.map(
                                                    (item) => ({
                                                        label: item.name,
                                                        value: item.id,
                                                    })
                                                )}
                                                displayValue="label"
                                                onSelect={handleEmployeesChange}
                                                onRemove={handleEmployeesChange}
                                                value={selectedEmployees}
                                                placeholder="Select participants"
                                                isClearable
                                                isSearchable={true}
                                                searchablePlaceholder="Type to search..."
                                            />
                                        </div>
                                    </div>
                                </from>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="btn btn-info waves-effect"
                                    data-bs-dismiss="modal"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Loading..." : "Submit"}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-default waves-effect"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>
            </div>
        </>
    );
}

{/* <div className="mb-3">
    <select
        className="form-select"
        aria-label="Default select example"
        multiple
    >
        <option value="-" disabled>
            Les participants
        </option>
        {employe?.map((item) => (
            <option key={item.id} value={item.id}>
                {item.first_name + " " + item.last_name}
            </option>
        ))}
    </select>
</div>; */}
