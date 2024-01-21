import { createSlice } from "@reduxjs/toolkit";

const stockSortieSlice = createSlice({
    name: "stockSortie",
    initialState: {
        stockSortie: [],
    },
    reducers: {
        setData: (state, action) => {
            state.stockSortie = action.payload.stockSorties;
            console.log("hello frome store stockSortie", state.stockSortie);
        },
    },
});
export const stockSortieActions = stockSortieSlice.actions
export default stockSortieSlice.reducer 