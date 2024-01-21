import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : "category" ,
    initialState : {
        category : null
    } , 
    reducers : {
        setData :(state , action)=>{
            state.category = action.payload.category
        }
    }
})
export const categoryActions = categorySlice.actions
export default  categorySlice.reducer 