import { useSelector } from "react-redux";

export default function FournisseurCards() {
    const {kpis } = useSelector(state=>state.fournisseur)
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light-primary shadow-none">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="round rounded bg-primary d-flex align-items-center justify-content-center">
                                    <i
                                        className="cc BTC text-white fs-7"
                                        title="BTC"
                                    ></i>
                                </div>
                                <h6 className="mb-0 ms-3">Fournisseur Achat</h6>
                                <div className="ms-auto text-primary d-flex align-items-center">
                                    <i className="ti ti-trending-up text-primary fs-6 me-1"></i>
                                    <span className="fs-2 fw-bold"></span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    {kpis?.fournisseur_achat}
                                </h3>
                                <span className="fw-bold">$1,015.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light-danger shadow-none">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="round rounded bg-danger d-flex align-items-center justify-content-center">
                                    <i
                                        className="cc ETH text-white fs-7"
                                        title="ETH"
                                    ></i>
                                </div>
                                <h6 className="mb-0 ms-3">ETH</h6>
                                <div className="ms-auto text-danger d-flex align-items-center">
                                    <i className="ti ti-trending-up text-danger fs-6 me-1"></i>
                                    <span className="fs-2 fw-bold">
                                        + 3.20%
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    0.5620
                                </h3>
                                <span className="fw-bold">$2,110.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light-success shadow-none">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="round rounded bg-success d-flex align-items-center justify-content-center">
                                    <i
                                        className="cc LTC text-white fs-7"
                                        title="LTC"
                                    ></i>
                                </div>
                                <h6 className="mb-0 ms-3">LTC</h6>
                                <div className="ms-auto text-info d-flex align-items-center">
                                    <i className="ti ti-trending-down text-success fs-6 me-1"></i>
                                    <span className="fs-2 fw-bold text-success">
                                        + 3.20%
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">1.200</h3>
                                <span className="fw-bold">$1,100.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light-warning shadow-none">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="round rounded bg-warning d-flex align-items-center justify-content-center">
                                    <i
                                        className="cc XRP text-white fs-7"
                                        title="XRP"
                                    ></i>
                                </div>
                                <h6 className="mb-0 ms-3">XRP</h6>
                                <div className="ms-auto text-info d-flex align-items-center">
                                    <i className="ti ti-trending-down text-warning fs-6 me-1"></i>
                                    <span className="fs-2 fw-bold text-warning">
                                        + 2.20%
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">1.150</h3>
                                <span className="fw-bold">$2,150.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
