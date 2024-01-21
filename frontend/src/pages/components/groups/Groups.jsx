import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getgrpTh } from "../../../Services/grp/grpThunk";
import { deleteGroupTh, getGroupTh } from "../../../Services/groups/groupThunk";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NewGroup from "./NewGoup";
import { Link } from "react-router-dom";
import AffectationGroup from "./AffectationGroup";


export default function Groups() {
     const { group } = useSelector((state) => state.group);
     const [loading, setLoading] = useState(true);
     const dispatch = useDispatch();
const Loading = () => {
    return (
        <tr>
            <td
                colSpan={4}
                style={{ textAlign: "center", verticalAlign: "middle" }}
            >
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </td>
        </tr>
    );
};
   
     useEffect(() => {
          const fetchData = async () => {
              try {

                  // Dispatch your action to get data
                  await dispatch(getGroupTh());

                  // Set loading to false after data has been loaded
                  setLoading(false);
              } catch (error) {
                  // Handle errors if needed
                  console.error("Error fetching data:", error);
                  setLoading(false);
              }
          };
        fetchData()

     }, [dispatch]);
      const [startDate, setStartDate] = useState(null);
      const [endDate, setEndDate] = useState(null);

      const filterGroupsByDate = (group) => {
          const groupDate = new Date(group.created_at);
          return (
              (!startDate || groupDate >= startDate) &&
              (!endDate || groupDate <= endDate)
          );
      };

    const handleDelete = (e,id)=>{
        e.preventDefault()
        dispatch(deleteGroupTh(id))
    }

  return (
      <>
          <div className="card">
              <div className="d-flex justify-content-end">
                  <div>
                      <AffectationGroup />
                  </div>
                  <div>
                      <NewGroup />
                  </div>
              </div>
              <div className="border-bottom title-part-padding">
                  <h4 className="card-title mb-0">Liste Des Groupes</h4>
              </div>

              <div className="d-flex justify-content-end">
                  <div>
                      <label className="form-label">Start Date:</label>
                      <DatePicker
                          className="form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          placeholderText="Select start date"
                      />
                  </div>

                  <div>
                      <label className="form-label">End Date:</label>
                      <DatePicker
                          className="form-control"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          placeholderText="Select end date"
                      />
                  </div>
              </div>

              <div className="card-body">
                  <div className="table-responsive">
                      <table
                          id="demo-foo-addrow"
                          className="
                        table table-bordered
                        m-t-30
                        table-hover
                        contact-list
                      "
                          data-paging="true"
                          data-paging-size="7"
                      >
                          <thead>
                              <tr>
                                  <th>No</th>
                                  <th>Name</th>
                                  <th>Date De Creation</th>
                                  <th>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              {loading ? (
                                  <Loading />
                              ) : (
                                  group
                                      .filter(filterGroupsByDate)
                                      .map((grp, key) => (
                                          <tr key={key}>
                                              <td>{key + 1}</td>
                                              <td>{grp.name}</td>
                                              <td>
                                                  {new Date(
                                                      grp.created_at
                                                  ).toLocaleDateString()}
                                              </td>
                                              <td className="text-center">
                                                  <div
                                                      className="btn-group"
                                                      role="group"
                                                      aria-label="Basic example"
                                                  >
                                                      <button
                                                          onClick={(e) =>
                                                              handleDelete(
                                                                  e,
                                                                  grp.id
                                                              )
                                                          }
                                                          type="button"
                                                          className="btn btn-sm btn-danger"
                                                          data-bs-target="#delete-modal"
                                                          data-bs-toggle="modal"
                                                      >
                                                          <i className="ti ti-trash-filled"></i>
                                                      </button>
                                                      <button
                                                          className="btn btn-sm btn-warning"
                                                          data-bs-target="#update-modal"
                                                          data-bs-toggle="modal"
                                                      >
                                                          <i className="ti ti-pencil"></i>
                                                      </button>
                                                      <Link
                                                          to={`/emp_groups/${grp.id}`}
                                                      >
                                                          <button
                                                              type="button"
                                                              className="btn btn-sm btn-primary"
                                                          >
                                                              <i className="ti ti-eye"></i>
                                                          </button>
                                                      </Link>
                                                  </div>
                                              </td>
                                          </tr>
                                      ))
                              )}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </>
  );
}
