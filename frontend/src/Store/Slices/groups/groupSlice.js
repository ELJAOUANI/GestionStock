import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: "group",
    initialState: {
        group: [],
        groupid: null,
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.group = action.payload.group;
        },
        affecterGrp: (state, action) => {
            state.groupid = action.payload.groupid;
            state.data = action.payload.data;
        },
        addGroup: (state, action) => {
             state.group = [...state.group, action.payload.group];
        },
        deleteGroupe: (state, action) => {
            state.group = state.group.filter(
                (group) => group.id !== action.payload
                
          
            )
            console.log(state.group);
                  
        },
    },
});
export const groupActions = groupSlice.actions;
export default groupSlice.reducer;
