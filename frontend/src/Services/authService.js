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

// Function to check authentication
export const check_auth = async () => {
    try {
        const res = await axiosClient.post("/auth/check-authentication");
        return res.data;
    } catch (e) {
        console.error(e);
    }
};
