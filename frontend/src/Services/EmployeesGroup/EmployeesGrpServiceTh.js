import { employeesGroupAction } from "../../Store/Slices/EmployeesGroup/EmployeesGrpoups";
import { getGroupEmp, getGroupEmployeeById } from "./EmployeesGrpService";

export const getGroupEmpTh = () => {
    return async (dispatch, _) => {
        try {
            const response = await getGroupEmp();

            if (response.status === 200) {
                const { employeeGroups } = response.data;

                dispatch(
                    employeesGroupAction.setEmployeeGroups({
                        employeeGroups: employeeGroups,
                    })
                );
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};
export const getGroupEmpByIdTh = (id) => {
    return async (dispatch, _) => {
        try {
            const response = await getGroupEmployeeById(id);

            if (response.status === 200) {
                const { employeeGroups } = response.data;

                dispatch(
                    employeesGroupAction.setEmployeeGroups({
                        employeeGroups: employeeGroups,
                    })
                );
            }
            return response;
        } catch (e) {
            console.error("fetching failed:", e);
        }
    };
};