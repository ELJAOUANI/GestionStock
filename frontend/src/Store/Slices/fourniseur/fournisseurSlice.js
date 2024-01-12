import { createSlice } from "@reduxjs/toolkit";

const fournisseurSlice = createSlice({
    name : 'fournisseur',
    initialState : {
        fournisseurs : null ,
        kpis : null 
    },
    reducers:{
        setFournisseurs : (state , action )=>{
            state.fournisseurs = action.payload.fournisseurs
        } ,
        setKpis : (state , action)=>{
            state.kpis = action.payload.kpis

        }
    }
})

export const fournisseurActions = fournisseurSlice.actions 
export default fournisseurSlice.reducer;