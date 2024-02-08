// rootReducer.js

import { combineReducers } from "redux";
import authReducer from "../Slices/authSlice";
import fournisseurReducer from "../Slices/fourniseur/fournisseurSlice";
import employeReducer from "../Slices/employees/employeSice";
import categoryReducer from "../Slices/Category/categorySlice";
import groupReducer from "../Slices/groups/groupSlice";
import employeeGroupsReducer from "../Slices/EmployeesGroup/EmployeesGrpoups";
import productReducer from "../Slices/Product/productSlice";
import stockReducer from "../Slices/Stock/StockSlice"
import stockSortieReducer from "../Slices/Stock/StockSortieSlice"
import entriesStockReducer from "../Slices/Stock/addStockSlice";
import dashboardReducer from "../Slices/Dashboard/dashboardSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    fournisseur: fournisseurReducer,
    employe: employeReducer,
    category: categoryReducer,
    group: groupReducer,
    employeeGroups: employeeGroupsReducer,
    product: productReducer,
    stock: stockReducer,
    stockSortie: stockSortieReducer,
    entriesStock: entriesStockReducer,
    dashboard: dashboardReducer
});

export default rootReducer;
