import axiosClient from "../../api/axios"

export  const getEmploye = async ()=>{
    try{
      const  response = await axiosClient.get('/employe/get')
        return response
    }catch(e){
        console.log(e)

    }
}