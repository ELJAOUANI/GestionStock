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
                                    Ajouter Un Fournisseur
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="modal-body p-0 m-0">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Raison social
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
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Ville{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entrez la ville de fournisseur"
                                                        type="text"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Adresse email de
                                                        fournisseur
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="nameEx"
                                                        className="form-control"
                                                        placeholder="Entre l'adresse email de fournisseur"
                                                        type="email"
                                                        tabIndex="0"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Numéro de téléphone fixe
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entre le numéro de téléphone fixe"
                                                        type="number"
                                                        min="10"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Nom de commercial{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="nameEx"
                                                        className="form-control"
                                                        placeholder="Entre le nom de commercial"
                                                        type="text"
                                                        tabIndex="0"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Numéro de téléphone de
                                                        commercial
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entre le numéro de téléphone de commercial"
                                                        type="number"
                                                        min="10"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Adresse email de
                                                        commercial
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entre l'email de commercial"
                                                        type="email"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                       
                                                        required
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Méthode de paiement{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="exampleFormControlSelect1"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="-">
                                                            Choisis une option
                                                        </option>
                                                        <option value="Cash">
                                                            Cash
                                                        </option>
                                                        <option value="Virement">
                                                            Virement
                                                        </option>
                                                        <option value="Chéque">
                                                            Chéque
                                                        </option>
                                                        <option value="Effet">
                                                            Effet
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Statut{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="exampleFormControlSelect1"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="-">
                                                            Choisis une option
                                                        </option>
                                                        <option value="1">
                                                            Validé
                                                        </option>
                                                        <option value="0">
                                                            En Attente
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Type{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="exampleFormControlSelect1"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="-">
                                                            Choisis une option
                                                        </option>
                                                        <option value="achat">
                                                            Achat
                                                        </option>
                                                        <option value="transport">
                                                            Transport
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Délai de paiement{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entre l'email de commercial"
                                                        type="number"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Adresse{" "}
                                                        <span className="text-danger font-18">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Entrez l'adresse de fournisseur"
                                                        type="text"
                                                        tabIndex="0"
                                                        id="nameEx"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="modal-footer p-0 m-0">
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                            // v-if="message != null"
                                        >
                                            <span className="message-error">
                                                {" "}
                                                {{ message }}{" "}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-label-outline-dark"
                                            data-bs-dismiss="modal"
                                        >
                                            Fermer
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-primary me-0"
                                        >
                                            <span v-if="isLoading" className="d-flex align-items-center">
                    <div className="spinner-border spinner-border-sm text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </span>
                                            <span v-else> Terminer</span>
                                        </button>
                                    </div> */}
                                </form>
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
