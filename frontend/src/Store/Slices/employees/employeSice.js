import { createSlice } from "@reduxjs/toolkit";

const employeSlice = createSlice({
    name: "employe",
    initialState: {
        employe: null,
        kpis: null,
    },
    reducers: {
        setEmploye: (state, action) => {
            state.employe = action.payload.employe
        
        },
        setKpis : (state , action)=>{
                state.kpis = action.payload.kpis
        }
    },
});
export const employeActions = employeSlice.actions
export default employeSlice.reducer 