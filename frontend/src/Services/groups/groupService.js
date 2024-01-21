import axiosClient from "../../api/axios";

export const getGroup = async () => {
    try {
        const response = await axiosClient.get("/group/get");
        return response;
    } catch (e) {
        console.log(e);
    }
};
export const storeGroupe = async (data) => {
    try {
        const response = await axiosClient.post("/group/store", data);
        return response;
    } catch (e) {
        console.log(e);
    }
};
export const affecteEmployeesToGrp = async (groupid , data) => {
    try {
        const response = await axiosClient.post(
            `group/assign/${groupid}`,
            data
        );
        return response;
    } catch (e) {
        console.log(e);
    }
};
export const deleteGroup = async (groupid) => {
    try {
        const response = await axiosClient.delete(
            `group/delete/${groupid}`
        );
        return response;
    } catch (e) {
        console.log(e);
    }
};

