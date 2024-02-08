import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import {
    getStockSortieByIdTh,
    updateStockSortieTh,
} from "../../../Services/stock/stockThunk";
import { getGroupTh } from "../../../Services/groups/groupThunk";
import { getProductByCategoryIdTh } from "../../../Services/Product/productThunk";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

export default function EditeStockSortie() {
    const { category } = useSelector((state) => state.category);
    const { productByIdCategory } = useSelector((state) => state.product);
    const { group } = useSelector((state) => state.group);
    const { itemId } = useSelector((state) => state.stock);
    const [selectedGroupOption, setSelectedGroupOption] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [formData, setFormData] = useState({
        category_id: "",
    });

    const options = group.map((group) => ({
        value: group.id,
        label: group.name,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryTh());
        dispatch(getGroupTh());

        // Fetch existing data when component mounts
        if (itemId) {
            fetchExistingData(itemId);
        }
    }, [dispatch, itemId]);

 const fetchExistingData = async (id) => {
     try {
         const response = await dispatch(getStockSortieByIdTh(id));

         if (
             response.status === 200 &&
             response.data &&
             Array.isArray(response.data.stockksortiie) &&
             response.data.stockksortiie.length > 0
         ) {
             const existingData = response.data.stockksortiie;

             const selectedGroup = options.find(
                 (group) => group.value === existingData[0].group_id
             );

             setSelectedGroupOption(selectedGroup);
             setFormData({
                 category_id: existingData[0].category_id,
             });
             setSelectedProducts(
                 existingData.map((entry) => ({
                     product_id: entry.product.id,
                     quantity: entry.quantity,
                     group_id: entry.group_id,
                     name: entry.product.name,
                 }))
             );
         } else {
             console.error("Invalid response format:", response);
         }
     } catch (error) {
         console.error("Error fetching existing data:", error);
     }
 };

    const fetchProductsByCategory = async (categoryId) => {
        await dispatch(getProductByCategoryIdTh(categoryId));
    };
const handleProductsChange = (selectedList) => {
    const newSelectedProducts = selectedList.map((item) => ({
        product_id: item.value,
        quantity: 0,
        group_id: selectedGroupOption?.value,
        name: item.label,
    }));

    setSelectedProducts((prevProducts) => [
        ...prevProducts,
        ...newSelectedProducts,
    ]);
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

    const handleSubmit = async () => {
      

        try {
            const response = await dispatch(
                updateStockSortieTh(itemId ,{
                    products: selectedProducts,
                    group_id: selectedGroupOption?.value,
                })
            );

            console.log(response.data.message);
        } catch (error) {
            console.error(error.response?.data?.error || "An error occurred");
        }
    };

    return (
        <>
            <div className="card-body">
                <div
                    id="editStock"
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
                                        <div>
                                            <Select
                                                options={options}
                                                value={selectedGroupOption}
                                                onChange={
                                                    handleSelectedGroupChange
                                                }
                                                isSearchable={true}
                                                placeholder="Search and select a group..."
                                            />
                                            {selectedGroupOption && (
                                                <div>
                                                    <p>
                                                        You selected:{" "}
                                                        {
                                                            selectedGroupOption.label
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                        </div>
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
                                            <label
                                                htmlFor="productMultiselect"
                                                className="form-label"
                                            >
                                                Select Products
                                            </label>
                                            <Multiselect
                                                id="productMultiselect"
                                                options={productByIdCategory?.map(
                                                    (item) => ({
                                                        label: item.name,
                                                        value: item.id,
                                                    })
                                                )}
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
                                        { selectedProducts.map((product) => (
                                                <div
                                                    key={product.product_id}
                                                    className="mb-3"
                                                >
                                                    <label
                                                        htmlFor={`quantity-${product.product_id}`}
                                                        className="form-label"
                                                    >
                                                        Quantity for{" "}
                                                        {product.name}
                                                    </label>
                                                    <div className="input-group">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name={`quantity-${product.product_id}`}
                                                            value={
                                                                product.quantity
                                                            }
                                                            onChange={(e) =>
                                                                handleProductQuantityChange(
                                                                    product.product_id,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                units
                                                            </span>
                                                        </div>
                                                    </div>
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
