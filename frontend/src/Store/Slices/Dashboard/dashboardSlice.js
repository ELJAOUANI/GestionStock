import { createSlice } from "@reduxjs/toolkit";


const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        kpis: [],
    },
    reducers: {
        setData: (state, action) => {
            state.kpis = action.payload.kpis;
        },
    },
});
export const dashboardActions = dashboardSlice.actions 
export default dashboardSlice.reducer