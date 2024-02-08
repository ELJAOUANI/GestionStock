import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
        stock: [],
        kpis: null,
        loading: false,
        itemId: null,
        stockById :[]
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
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setSortieId: (state, action) => {
            state.itemId = action.payload;
        },
        setStockById: (state, action) => {
            state.stockById = action.payload.stockksortiie;
        },
    },
});

export const stockActions = stockSlice.actions;
export default stockSlice.reducer;
