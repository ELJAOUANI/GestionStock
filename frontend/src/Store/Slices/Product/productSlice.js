import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        kpis: [],
        productById: [],
        productByIdCategory: [],
    },
    reducers: {
        setData: (state, action) => {
            state.products = action.payload.products;
            console.log("sssslice", state.products);
        },
        setKpis: (state, action) => {
            state.kpis = action.payload.kpis;
            console.log("sssslice", state.kpis);
        },
        setproductByIdCategory: (state, action) => {
            state.productByIdCategory = action.payload;
            console.log("sssslice", state.kpis);
        },
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload.products];
        },
        setProductById: (state, action) => {
            state.productById = action.payload.product;
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (prod) => prod.id !== action.payload
            );
        },
    },
});
export const productActions = productSlice.actions; 
export default productSlice.reducer;
