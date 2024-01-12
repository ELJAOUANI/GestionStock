export default function newFournisseur() {
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
                        Ajouter Un Fournisseur
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
                    <div className="modal-dialog modal-dialog-scrollable modal-lg">
                        <div className="modal-content">
                            <div className="modal-header d-flex align-items-center">
                                <h4 className="modal-title" id="myModalLabel">
                                    Add New Contact
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
                                                type="text"
                                                className="form-control"
                                                placeholder="Type name"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Raison social{" "}
                                                    <span className="text-danger font-18">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Entrez le nom de fournisseur"
                                                    type="text"
                                                    tabIndex="0"
                                                    id="nameEx"
                                                    autoFocus
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Designation"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Age"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Date of joining"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Salary"
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div
                                                className="
                                    fileupload
                                    btn btn-danger btn-rounded
                                    waves-effect waves-light
                                    btn-sm
                                  "
                                            >
                                                <span>
                                                    <i className="ion-upload m-r-5"></i>
                                                    Upload Contact Image
                                                </span>
                                                <input
                                                    type="file"
                                                    className="upload"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </from>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-info waves-effect"
                                    data-bs-dismiss="modal"
                                >
                                    Save
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
