import { useSelector } from "react-redux";


export default function EmployeCards() {
    const {kpis} = useSelector((state)=>state.employe)

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
                                <h6 className="mb-0 ms-3">Total Employees</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    {kpis?.total_employe}
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
                                <h6 className="mb-0 ms-3">Masse Salariale</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    {kpis?.masse_salarial}
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
                                <h6 className="mb-0 ms-3">employés payés </h6>
                              
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    {kpis?.employee_payee}
                                </h3>
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
                                <h6 className="mb-0 ms-3">
                                    Employés non payés
                                </h6>
                           
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h3 className="mb-0 fw-semibold fs-7">
                                    {kpis?.employee_payee}
                                </h3>
                                <span className="fw-bold">
                                    {kpis?.employee_no_payee}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
