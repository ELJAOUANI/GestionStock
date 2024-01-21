import axiosClient from "../../api/axios"

export const getProduct = async ()=>{
   try{
     const response = await axiosClient.get("/product/get");
    return response 
   }catch(e){
    console.error(e)
   }
}

export const getbyProId = async (id) => {
    try {
        const response = await axiosClient.get(`/product/get/${id}`);
        return response;
    } catch (e) {
        console.error(e);
    }
};


export const storeProduct = async (data) => {
    try {
        const response = await axiosClient.post("/product/store", data);
       return response
    } catch (error) {
        console.error("Error while storing product:", error);
        throw error;
    }
};
export const deleteProduct = async (id) => {
    try {
        const response = await axiosClient.delete(`/product/delete/${id}`);
        return response;
    } catch (e) {
        console.error(e);
    }
};
export const getProductByCategoryId = async (categoryId) => {
    try {
        const response = await axiosClient.get(
            `/product/getcate?category_id=${categoryId}`
        );
        console.log(response.data);
        return response;
    } catch (e) {
        console.error(e);
    }
};