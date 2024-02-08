import axiosClient from "../../api/axios";

export const getStock = async () => {
    try {
        const response = await axiosClient.get("/stock/get");
        return response;
    } catch (e) {
        console.error(e);
    }
};
export const getStockSortieById = async (id) => {
    try {
        const response = await axiosClient.get(`/stock/${id}`);
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
        return response;
        
    } catch (e) {
        
        console.error(e);
    }
};
export const getAllEntries = async () => {
    try {
        const response = await axiosClient.get("/stock/entries");

        return response;
    } catch (e) {
        console.error(e);
    }
};


export const  updateStockSortie = async (id,data) => {
    try {
        const response = await axiosClient.put(
            `/stock/updateStock/${id}`,
            data
        );
        return response;
    } catch (e) {
        console.error(e);
    }
};



export const stockEntries = async (data) => {
    try {
        const response = await axiosClient.post("/stock/store", data);
        console.log("stockEntries", response);
        return response;
    } catch (e) {
        console.error(e);
    }
};




