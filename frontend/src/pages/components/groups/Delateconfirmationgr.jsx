export default function DeleteConfirmationgr({ modalId, confirmDelete }) {
    return (
        <>
            <div
                className="modal fade"
                id="al-danger-alertgr"
                tabIndex="-1"
                aria-labelledby="vertical-center-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-sm">
                    <div className="modal-content modal-filled bg-light-danger">
                        <div className="modal-body p-4">
                            <div className="text-center text-danger">
                                <i className="ti ti-hexagon-letter-x fs-7"></i>
                                <h4 className="mt-2"> Confirmation</h4>
                                <p className="mt-3">
                                    Are you sure you want to delete this
                                    group?
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-light my-2"
                                    data-bs-dismiss="modal"
                                    onClick={confirmDelete}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
