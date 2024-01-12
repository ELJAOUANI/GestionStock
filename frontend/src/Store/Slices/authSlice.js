import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
initialState: {
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
},


    reducers: {
        setData: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = !!state.token;
            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user));
            console.log("store", state.user);
        },
    },
});
export const authAction = authSlice.actions;
export default authSlice.reducer