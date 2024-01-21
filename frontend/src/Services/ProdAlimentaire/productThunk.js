import { productActions } from "../../Store/Slices/PRoduct/productSlice";
import { getProduct } from "./ProductService";

export const getProductThunk = () => {
    return async (dispatch, _) => {
        try {
            const response = await getProduct();

            if (response.status === 200) {
                const { data } = response.data;

                dispatch(productActions.setData({ data: data }));
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
