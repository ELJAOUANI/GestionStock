import { stockActions } from "../../Store/Slices/Stock/StockSlice";
import { stockSortieActions } from "../../Store/Slices/Stock/StockSortieSlice";
import { GetAllSortie, getStock, sortieStock } from "./stockService";

export const getStockTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getStock();

            if (response.status === 200) {
                const { stock } = response.data;

                dispatch(stockActions.setStock({ stock: stock }));
              
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const getAllStockSortieTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await GetAllSortie();

            if (response.status === 200) {
                const { stockSorties } = response.data;
                console.log("thuuuuuuuuuuuuuuunk", stockSorties);

                dispatch(
                    stockSortieActions.setData({
                        stockSorties: stockSorties
                    })
                );
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const sortieStockTh = (requestData) => {
    return async (dispatch,_) => {
        try {
            const response = await sortieStock(requestData);
            if (response.status === 200) {
                dispatch(getStockTh())
                }
            return response;
        } catch (e) {
            console.error("Stockout operation failed:", e);
           
        }
    };
};