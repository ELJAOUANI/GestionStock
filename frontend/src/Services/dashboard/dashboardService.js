import axiosClient from "../../api/axios";

export const getDashboard = async () => {
    try {
        const response = await axiosClient.get("/dashboard/get");
        return response;
    } catch (e) {
        console.log(e);
    }
};
