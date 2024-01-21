
import {  categoryActions} from "../../Store/Slices/Category/categorySlice"
import { getCategory } from "./categoryService";
export const getCategoryTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getCategory();
          
            if (response.status === 200) {
                const { category } = response.data;
           
                dispatch(categoryActions.setData({ category :category}));
               
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
