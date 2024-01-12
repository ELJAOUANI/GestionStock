import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/routeReducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer, // Correct the nesting here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
