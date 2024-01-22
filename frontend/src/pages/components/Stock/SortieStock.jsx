import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import { sortieStockTh } from "../../../Services/stock/stockThunk";
import { getGroupTh } from "../../../Services/groups/groupThunk";
import { getProductByCategoryIdTh } from "../../../Services/Product/productThunk";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

export default function SortieStock() {
  const { category } = useSelector((state) => state.category);
  const { productByIdCategory } = useSelector((state) => state.product);
  const { group } = useSelector((state) => state.group);

  const [selectedGroupOption, setSelectedGroupOption] = useState(null);

  const options = group.map((group) => ({
    value: group.id,
    label: group.name,
  }));

  // Local state
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formData, setFormData] = useState({
    category_id: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryTh());
    dispatch(getGroupTh());
  }, [dispatch]);

  const fetchProductsByCategory = async (categoryId) => {
    await dispatch(getProductByCategoryIdTh(categoryId));
  };

  const handleProductsChange = (selectedList) => {
    setSelectedProducts(
      selectedList.map((item) => ({
        product_id: item.value,
        quantity: 0,
        group_id: selectedGroupOption?.value,
        name: item.label,
      }))
    );
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

  const handleProductQuantityChange = (productId, newQuantity) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleSelectedGroupChange = (selectedOption) => {
    setSelectedGroupOption(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(
        sortieStockTh({
          products: selectedProducts,
          group_id: selectedGroupOption?.value,
        })
      );

      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <>
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-info btn-rounded m-t-10 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#sortiestock"
          >
            Sortie Stock
          </button>
        </div>
        <div
          id="sortiestock"
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
                  Sortie Stock
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
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Select
                        options={options}
                        value={selectedGroupOption}
                        onChange={handleSelectedGroupChange}
                        isSearchable={true}
                        placeholder="Search and select a group..."
                      />
                      {selectedGroupOption && (
                        <div>
                          <p>You selected: {selectedGroupOption.label}</p>
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="productMultiselect"
                        className="form-label"
                      >
                        Select Products
                      </label>
                      <Multiselect
                        id="productMultiselect"
                        options={productByIdCategory?.map((item) => ({
                          label: item.name,
                          value: item.id,
                        }))}
                        displayValue="label"
                        onSelect={handleProductsChange}
                        onRemove={handleProductsChange}
                        value={selectedProducts}
                        placeholder="Select products"
                        isClearable
                        isSearchable={true}
                        searchablePlaceholder="Type to search..."
                      />
                    </div>
                    {selectedProducts.map((product) => (
                      <div key={product.product_id} className="mb-3">
                        <label
                          htmlFor={`quantity-${product.product_id}`}
                        >
                          Quantity for {product.name}
                        </label>
                        <input
                          type="number"
                          name={`quantity-${product.product_id}`}
                          value={product.quantity}
                          onChange={(e) =>
                            handleProductQuantityChange(
                              product.product_id,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e)}
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
          </div>
        </div>
      </div>
    </>
  );
}
