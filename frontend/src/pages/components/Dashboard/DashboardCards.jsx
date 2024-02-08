import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardTh } from "../../../Services/dashboard/dashboardThunk";

export default function DashboardCards() {
    const {kpis} = useSelector((state)=>state.dashboard)
    const dispatch = useDispatch()
    console.log('kpiiis' , kpis)
    useEffect(()=>{
       dispatch(getDashboardTh())
    },[])
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
                              <h6 className="mb-0 ms-3">Total Fournisseur</h6>
                              <div className="ms-auto text-primary d-flex align-items-center">
                                  <i className="ti ti-trending-up text-primary fs-6 me-1"></i>
                                 
                              </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4">
                              <h3 className="mb-0 fw-semibold fs-7">
                                  {kpis.total_fournisseur}
                              </h3>
                            
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
                              <h6 className="mb-0 ms-3">Total Produits</h6>
                              <div className="ms-auto text-danger d-flex align-items-center">
                                  <i className="ti ti-trending-up text-danger fs-6 me-1"></i>
                                
                              </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4">
                              <h3 className="mb-0 fw-semibold fs-7">
                                  {" "}
                                  {kpis.total_products}
                              </h3>
                             
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
                              <h6 className="mb-0 ms-3">Stock Entries</h6>
                              <div className="ms-auto text-info d-flex align-items-center">
                                  <i className="ti ti-trending-down text-success fs-6 me-1"></i>
                               
                              </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4">
                              <h3 className="mb-0 fw-semibold fs-7">
                                  {" "}
                                  {kpis.stock_entries}
                              </h3>
                            
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
                              <h6 className="mb-0 ms-3">Total Employees</h6>
                              <div className="ms-auto text-info d-flex align-items-center">
                                  <i className="ti ti-trending-down text-warning fs-6 me-1"></i>
                               
                              </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4">
                              <h3 className="mb-0 fw-semibold fs-7">
                                  {kpis.total_employe}
                              </h3>
                            
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
