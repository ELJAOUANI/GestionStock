import axiosClient from "../../api/axios";

export const getStock = async () => {
    try {
        const response = await axiosClient.get("/stock/get");
        return response;
    } catch (e) {
        console.error(e);
    }
};
export const sortieStock = async (data) => {
    try {
        const response = await axiosClient.post("/product/stockout",data);
        return response;
    } catch (e) {
        console.error(e);
    }
};
export const GetAllSortie = async () => {
    try {
        const response = await axiosClient.get("/stock/getstocksorties");
        console.log("ddddddddddddddddd", response);
        return response;
        
    } catch (e) {
        
        console.error(e);
    }
};


