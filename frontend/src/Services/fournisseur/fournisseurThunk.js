import { fournisseurActions } from "../../Store/Slices/fourniseur/fournisseurSlice";
import { getData } from "./fournisseurService";

export const getdataThunk = () =>{
    return async (dispatch,__)=>{
        try{
            const response = await getData()

            
       console.log(response.data)
     if(response.status === 200){
                const { kpis , fournisseurs} = response.data
                      dispatch(
                       fournisseurActions.setFournisseurs({
                           fournisseurs : fournisseurs, // Corrected token assignment
                
                       })) 
                       dispatch(fournisseurActions.setKpis({
                        kpis : kpis
                       })
                      )
            return response

         }
         
        }catch(e){
            console.error("fetching failed:", e);
    }

}
}


