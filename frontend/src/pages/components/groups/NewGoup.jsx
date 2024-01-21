import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEmployeTh } from "../../../Services/employe/employeThunk";
import { storeGroupeTh } from "../../../Services/groups/groupThunk";
export default function NewGroup() {


    const [isLoading, setIsLoading] = useState(false);
     const [groupName, setGroupName] = useState("");
     const [validationError, setValidationError] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
         if (!groupName) {
             setValidationError("Le nom du groupe est requis.");
             return;
         }
        setIsLoading(true);
        try {
            // Add your form validation logic if needed
            if (!groupName.trim()) {
                // Handle the case where the group name is empty
                console.log("Group name is required");
                return;
            }

            // Dispatch the Redux action with the form data
            await dispatch(storeGroupeTh({name: groupName }));

            // Optionally, you can reset the form or perform other actions after submission
       
                setGroupName("");
                setValidationError("");
         
                
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
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
                        data-bs-target="#add-newgrp"
                    >
                        Ajouter un Groupe
                    </button>
                </div>
                {/* <!-- Add Contact Popup Model --> */}
                <div
                    id="add-newgrp"
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
                                    Ajouter Un nouveau Groupe
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
                                        <div className="col-md-12 mb-3">
                                            <input
                                                value={groupName}
                                                onChange={(e) =>
                                                    setGroupName(e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                placeholder="Nom du Groupe"
                                            />
                                            {validationError && (
                                                <div className="text-danger">
                                                    {validationError}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </from>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="btn btn-info waves-effect"
                                   // data-bs-dismiss="modal"
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

{
    /* <div className="mb-3">
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
</div>; */
}
