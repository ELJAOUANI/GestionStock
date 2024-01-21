import axiosClient from "../../api/axios";

export const getCategory = async () => {
    try {
        const response = await axiosClient.get("/category/get");
        return response;
    } catch (e) {
        console.log(e);
    }
};
