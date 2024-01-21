// employeeGroupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const employeeGroupSlice = createSlice({
    name: "employeeGroups",
    initialState: {
        employeeGroups: [],
    },
    reducers: {
        setEmployeeGroups: (state, action) => {
            state.employeeGroups = action.payload.employeeGroups;
          
        },
    },
});

export const employeesGroupAction = employeeGroupSlice.actions;
export default employeeGroupSlice.reducer;
