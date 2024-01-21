import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import { getdataThunk } from "../../../Services/fournisseur/fournisseurThunk";
import { storeProductTh } from "../../../Services/Product/productThunk";

export default function NewProduct() {
    const {category} = useSelector(state=>state.category)
    const { fournisseurs } = useSelector((state) => state.fournisseur);
    const [formData, setFormData] = useState({
        name: "",
        category_id: "",
        supplier_id: "",
        price: "",
        quantity: "",
        description: "",
        created_by: JSON.parse(localStorage.getItem("user")).id,
    });
    const handleChange = (e)=>{
        const {name , value} = e.target
        setFormData((prevData)=>({
            ...prevData, 
            [name]:value
        }))
    }
const handleSubmit = async(e) => {
    e.preventDefault();
  await dispatch(storeProductTh(formData));
    setFormData({
        name: "",
        category_id: "",
        supplier_id: "",
        price: "",
        quantity: "",
        description: "",
        created_by: JSON.parse(localStorage.getItem("user")).id,
    });
};
console.log(formData)


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategoryTh());
        dispatch(getdataThunk()); //fournisseur function

    },[])





    return (
        <>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-info btn-rounded m-t-10 mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#newProduct"
                    >
                        Ajouter un produit
                    </button>
                </div>
                {/* <!-- Add Contact Popup Model --> */}
                <div
                    id="newProduct"
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
                                    Ajouter nouveau Produit
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
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                            />
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
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                defaultValue=""
                                                name="supplier_id"
                                                value={formData.supplier_id}
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

                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Price"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Quantite"
                                                name="quantity"
                                                value={formData.quantity}
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
                                                    Upload bon de
                                                    commande/livraison
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
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>
            </div>
        </>
    );
}

{
    /* <div className="mb-3">
    <select
        className="form-select"
        aria-label="Default select example"
       
    >
        <option value="-" disabled>
            Les participants
        </option>
        {category?.map((item) => (
            <option key={item.id} value={item.id}>
                {item.first_name + " " + item.last_name}
            </option>
        ))}
    </select>
</div>; */
}
