import { authAction } from "../Store/Slices/authSlice";
import { login } from "./authService";

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

export default loginTh;
