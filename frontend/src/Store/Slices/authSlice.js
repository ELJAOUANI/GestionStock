import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        user: JSON.parse(localStorage.getItem("user")) || "",
    },

    reducers: {
        setData: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            if (state.token) {
                localStorage.setItem("token", state.token);
            } else {
                localStorage.removeItem("token");
            }
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout: (state) => {
            state.token = "",
             state.user = "";
        },
    },
});
export const authAction = authSlice.actions;
export default authSlice.reducer