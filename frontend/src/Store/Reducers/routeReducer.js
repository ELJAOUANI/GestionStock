// rootReducer.js

import { combineReducers } from "redux";
import authReducer from '../Slices/authSlice'
import fournisseurReducer from '../Slices/fourniseur/fournisseurSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    fournisseur : fournisseurReducer
});

export default rootReducer;
