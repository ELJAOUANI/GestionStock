import axiosClient from "../api/axios";

// Function to perform login
export const login = async (data) => {
    try {
        const response = await axiosClient.post("/auth/login", data);
        return response;
    } catch (e) {
        console.error(e);
    }
};

export const resetPassword = async (data) => {
    try {
        const response = await axiosClient.post("/auth/forget-password", data);
        return response;
    } catch (e) {
        console.error(e);
    }
};
