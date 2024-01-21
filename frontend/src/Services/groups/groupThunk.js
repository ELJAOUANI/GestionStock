
import { affecteEmployeesToGrp, deleteGroup, getGroup, storeGroupe } from "./groupService";
import { groupActions } from "../../Store/Slices/groups/groupSlice";
export const getGroupTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getGroup();

            if (response.status === 200) {
                const { group } = response.data;

                dispatch(groupActions.setData({ group: group }));
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const storeGroupeTh = (data) => {
    return async (dispatch, _) => {
        try {
            const response = await storeGroupe(data);

            if (response.status === 200) {
                const {group} = response.data
              dispatch(groupActions.addGroup({ group : group}));
               return response.data
            }

          
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};



export const affecteEmployeesToGrpTH = (groupid,data) => {
    return async (dispatch, _) => {
        try {
            const response = await affecteEmployeesToGrp(groupid, data);

            if (response.status === 200) {
       dispatch(groupActions.affecterGrp({ groupid, data }));
            }
            return response ;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const deleteGroupTh = (groupid) => {
    return async (dispatch, _) => {
        try {
            const response = await deleteGroup(groupid);

            if (response.status === 200) {
                console.log(response.data)
                dispatch(groupActions.deleteGroupe(groupid));
            }

            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};

