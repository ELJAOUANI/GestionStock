import { stockActions } from "../../Store/Slices/Stock/StockSlice";
import { stockSortieActions } from "../../Store/Slices/Stock/StockSortieSlice";
import { entriesStockAction } from "../../Store/Slices/Stock/addStockSlice";
import { GetAllSortie, getAllEntries, getStock, getStockSortieById, sortieStock, stockEntries, updateStockSortie} from "./stockService";

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
export const getStockSortieByIdTh = (requestData) => {
    return async (dispatch, _) => {
        try {
            const response = await getStockSortieById(requestData);
            if (response.status === 200) {
                const { stockksortiie } = response.data;
                dispatch(
                    stockActions.setStockById({
                        stockksortiie: stockksortiie,
                    })
                );
            }
            return response;
        } catch (e) {
            console.error("Stockout operation failed:", e);
        }
    };
};
export const stockEntriesTh = (data) => {
    return async (dispatch, _) => {
        try {
            const response = await stockEntries(data);
            if (response.status === 200) {
              const {result} =response.data
              dispatch(entriesStockAction.addStock({result :result}));
            }
            return response;
        } catch (e) {
            console.error("Stockout operation failed:", e);
        }
    };
};
export const getAllEntriesTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getAllEntries();
            if (response.status === 200) {
                
                const { stock_entries } = response.data;
                dispatch(
                    entriesStockAction.setStock({ stockEntries: stock_entries })
                );
            }
            return response;
        } catch (e) {
            console.error("Stockout operation failed:", e);
        }
    };
};


export const updateStockSortieTh = (id, data) => {
    return async (dispatch, _) => {
        try {
            const response = await updateStockSortie(id , data);
            if (response.status === 200) {
                const { updatedData } = response.data;
                console.log("updaate", updatedData);

                dispatch(stockSortieActions.updateData(updatedData));
            }
     
            return response;
        } catch (e) {
            console.error("Stockout operation failed:", e);
        }
    };
};