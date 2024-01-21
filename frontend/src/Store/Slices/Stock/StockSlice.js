import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
        stock: [],
        kpis: null,
        
    },
    reducers: {
        setStock: (state, action) => {
            state.stock = action.payload.stock;
            
        },
        setKpis: (state, action) => {
            state.kpis = action.payload.kpis;
        },
        addToStock: (state, action) => {
            state.stock = [...state.stock, ...action.payload.stock];
        },
        updateProductStock: (state, action) => {
            const updatedProduct = action.payload.product;
            state.stock = state.stock.map((product) =>
                product.id === updatedProduct.id
                    ? {
                          ...product,
                          details: {
                              ...product.details,
                              current_stock: updatedProduct.current_stock,
                          },
                      }
                    : product
            );
        },
    },
});

export const stockActions = stockSlice.actions;
export default stockSlice.reducer;
