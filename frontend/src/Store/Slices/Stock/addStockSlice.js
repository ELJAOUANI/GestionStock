import { createSlice } from "@reduxjs/toolkit";

const entriesStockSlice = createSlice({
    name: "entriesStock",
    initialState: {
        entriesStock: [],
    },
    reducers: {
        setStock: (state, action) => {
            state.entriesStock = action.payload.stockEntries;
        },
        addStock :(state , action)=>{
            state.entriesStock = [
                ...state.entriesStock,
                action.payload.stockadded,
            ];
        }
    },
});
export const entriesStockAction = entriesStockSlice.actions; 
export default entriesStockSlice.reducer; 