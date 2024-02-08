import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import { getProductByCategoryIdTh } from "../../../Services/Product/productThunk";
import { stockEntriesTh } from "../../../Services/stock/stockThunk";
import { getdataThunk } from "../../../Services/fournisseur/fournisseurThunk";

export default function AddStock() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { productByIdCategory } = useSelector((state) => state.product);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [error, setError] = useState(null);
  const { fournisseurs } = useSelector((state) => state.fournisseur);

  const fetchProductsByCategory = async (categoryId) => {
    await dispatch(getProductByCategoryIdTh(categoryId));
  };

  const [formData, setFormData] = useState({
    category_id: "",
    price: "",
    purchase_date: "",
    quantity: "",
    fournisseur_id: "",
    bonImage: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      bonImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productId =
        selectedProducts.length > 0 ? selectedProducts[0].value : null;

      if (!productId) {
        throw new Error("Please select a product.");
      }

      const { quantity, purchase_date, price, fournisseur_id, bonImage } =
        formData;

      const formDataToSend = new FormData();
      formDataToSend.append("product_id", productId);
      formDataToSend.append("quantity", quantity);
      formDataToSend.append("purchase_date", purchase_date);
      formDataToSend.append("price", price);
      formDataToSend.append("fournisseur_id", fournisseur_id);
      formDataToSend.append("image", bonImage);

      const response = await dispatch(stockEntriesTh(formDataToSend));

      if (response && response.status === 201) {
        setFormData({
            category_id: "",
            price: "",
            purchase_date: "",
            productId: "",
            fournisseur_id: "",
            quantity: "",
            bonImage: null,
        });
        
        setError(null);

        console.log(response.data.message);
      } else {
        setError(
          response.data.error || "Une erreur s'est produite lors de l'ajout du stock"
        );
      }
    } catch (error) {
      setError(error.message || "An unexpected error occurred.");
      console.error(error.message);
    }
  };

  const handleSelectedProductChange = (selectedOption) => {
    setSelectedProducts(selectedOption ? [selectedOption] : []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "category_id") {
      fetchProductsByCategory(value);
    }
  };

  useEffect(() => {
    dispatch(getCategoryTh());
    dispatch(getdataThunk());
  }, []);

  return (
      <>
          <div className="card-body">
              <div className="d-flex justify-content-end">
                  <button
                      type="button"
                      className="btn btn-info btn-rounded m-t-10 mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#entriesStock"
                  >
                      Ajouter un stock
                  </button>
              </div>
              <div
                  id="entriesStock"
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
                                  Ajouter un Stock
                              </h4>
                              <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                              ></button>
                          </div>
                          <div className="modal-body">
                              <form className="form-horizontal form-material">
                                  <div className="form-group">
                                      <div className="mb-3">
                                          <select
                                              className="form-select"
                                              aria-label="Default select example"
                                              defaultValue=""
                                              name="category_id"
                                              value={formData.category_id}
                                              onChange={handleChange}
                                          >
                                              <option disabled value="">
                                                  Categories
                                              </option>
                                              {category?.map((item) => (
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
                                          <select
                                              className="form-select"
                                              aria-label="Default select example"
                                              defaultValue=""
                                              name="fournisseur_id"
                                              value={formData.fournisseur_id}
                                              onChange={handleChange}
                                          >
                                              <option disabled value="">
                                                  Fournisseur
                                              </option>
                                              {fournisseurs?.map((item) => (
                                                  <option
                                                      key={item.id}
                                                      value={item.id}
                                                  >
                                                      {item.name_fournisseur}
                                                  </option>
                                              ))}
                                          </select>
                                      </div>
                                      <div className="mb-3">
                                          <label
                                              htmlFor="productSelect"
                                              className="form-label"
                                          >
                                              Select Product
                                          </label>
                                          <Select
                                              id="productSelect"
                                              options={productByIdCategory?.map(
                                                  (item) => ({
                                                      label: item.name,
                                                      value: item.id,
                                                  })
                                              )}
                                              value={selectedProducts[0]}
                                              onChange={
                                                  handleSelectedProductChange
                                              }
                                              isSearchable={true}
                                              placeholder="Search and select a product..."
                                          />
                                      </div>
                                      <div className="mb-3">
                                          <label
                                              htmlFor="price"
                                              className="form-label"
                                          >
                                              Prix unitaire
                                          </label>
                                          <input
                                              type="number"
                                              className="form-control"
                                              id="price"
                                              name="price"
                                              value={formData.price}
                                              onChange={handleChange}
                                              placeholder="Enter price"
                                          />
                                      </div>
                                      <div className="mb-3">
                                          <label
                                              htmlFor="quantity"
                                              className="form-label"
                                          >
                                              Quantity
                                          </label>
                                          <input
                                              type="number"
                                              className="form-control"
                                              id="quantity"
                                              name="quantity"
                                              value={formData.quantity}
                                              onChange={handleChange}
                                              placeholder="Enter quantity"
                                          />
                                      </div>
                                      <div className="mb-3">
                                          <label
                                              htmlFor="purchase_date"
                                              className="form-label"
                                          >
                                              Date d`achat
                                          </label>
                                          <input
                                              type="date"
                                              className="form-control"
                                              id="purchase_date"
                                              name="purchase_date"
                                              value={formData.purchase_date}
                                              onChange={handleChange}
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
                                                  Upload bon D`achat/livraison
                                              </span>
                                              <input
                                                  type="file"
                                                  className="upload"
                                                  name="image"
                                                  onChange={handleImageChange}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button
                                  type="button"
                                  onClick={(e) => handleSubmit(e)}
                                  className="btn btn-info waves-effect"
                               
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
                              {error && (
                                  <div className="text-danger">{error}</div>
                              )}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

