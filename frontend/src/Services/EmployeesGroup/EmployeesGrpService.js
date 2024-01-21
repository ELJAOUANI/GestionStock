import axiosClient from "../../api/axios";

export const getGroupEmp = async () => {
    try {
        const response = await axiosClient.get("/group_emp/index");
        console.log(response)
        return response;
    } catch (e) {
        console.log(e);
    }
};
export const getGroupEmployeeById = async (id) => {
    try {
        const response = await axiosClient.get(`/group_emp/getGroupEmployee/${id}`);
        return response;
    } catch (e) {
        console.log(e);
    }
};
