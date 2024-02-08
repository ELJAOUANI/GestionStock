import { dashboardActions } from "../../Store/Slices/Dashboard/dashboardSlice";
import { getDashboard } from "./dashboardService";

export const getDashboardTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getDashboard();
            console.log(response)
            if (response.status === 200) {
                const {  kpis } = response.data;
                console.log('from thunk',kpis)
          
                dispatch(dashboardActions.setData({ kpis: kpis }));
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
