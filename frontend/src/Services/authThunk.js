import { authAction } from "../Store/Slices/authSlice";
import axiosClient from "../api/axios";
import { login, resetPassword } from "./authService";

const loginTh = (data) => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch, _) => {
        try {
            const response = await login(data);
            if (response.status === 200) {
                   const { token, user } = response.data;
                   dispatch(
                       authAction.setData({
                           token: token, // Corrected token assignment
                           user: user,
                       })
                   );
            }
            return response;
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
};
export const logoutTh =()=>{
    return async (dispatch, _)=>{
     try{
    const res = await axiosClient.post('/logout')
        if(res.status === 200){
            dispatch(authAction.logout())
               localStorage.removeItem("token");
               localStorage.removeItem("user");
        }
     
        return res 
    }catch(e){
        console.error(e) ;

    }
}
}

export const resetPasswordTH = (data) => {
    return async (dispatch,_) => {
        try {
    const response = await dispatch(resetPassword(data));
    return response;
        } catch (e) {
            console.error(e);
        }
    };
};
export default loginTh;
