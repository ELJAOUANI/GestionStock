import axiosClient from "../../api/axios";
export const getData = async () => {
  try {
      const response = await axiosClient.get("/fournisseur/index");
      return response; 
  } catch (error) {
    console.log(error)
  }
};
