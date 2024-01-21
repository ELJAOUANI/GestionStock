import { employeActions } from "../../Store/Slices/employees/employeSice";
import { getEmploye } from "./employeService";
export const getEmployeTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getEmploye();
            if (response.status === 200) {
                const { employe, kpis } = response.data;
                dispatch(employeActions.setEmploye({ employe: employe }));
                dispatch(employeActions.setKpis({ kpis: kpis }));
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
