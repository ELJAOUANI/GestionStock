import { productActions } from '../../Store/Slices/Product/productSlice'
import { deleteProduct, getProduct, getProductByCategoryId, getbyProId, storeProduct } from "./ProductService"


export const getProductThunk = () => {
    return async (dispatch, _) => {
        try {
            const response = await getProduct();

            if (response.status === 200) {
                const { products, kpis } = response.data; 
        

                dispatch(productActions.setData({ products: products }));
                dispatch(productActions.setKpis({ kpis: kpis }));
                
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const getbyProIdTh = (id) => {
    return async (dispatch, _) => {
        try {
            const response = await getbyProId(id);
      

            if (response.status === 200) {
                const { product } = response.data;
                dispatch(productActions.setProductById({ product: product }));
              

            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const storeProductTh = (data) => {
    return async (dispatch, _) => {
        try {
            const response = await storeProduct(data);

            if (response.status === 201) {
                const { products } = response.data;
                console.log(products)
                dispatch(productActions.addProduct({ products: products }));
              
                return response.data;
            }
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const deleteProductTh = (id) => {
    return async (dispatch, _) => {
        try {
            const response = await deleteProduct(id);

            if (response.status === 200) {
                console.log(response.data);
                dispatch(productActions.deleteProduct(id));
            }

            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};

export const getProductByCategoryIdTh = (id) => {
    return async (dispatch, _) => {
        try {
            const response = await getProductByCategoryId(id);

            if (response.status === 200) {
              
                dispatch(productActions.setproductByIdCategory(response.data.products ));
     
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};