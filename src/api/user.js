import Api from "../utils/axios";
import errorHandler from "./error";



export const signUp  = async (userData) => {
    try {        
        const response = await Api.post('/userAuth/signup', userData);
        return response;
        
    } catch (error) {
        const err = error
        errorHandler(err);
    }
}


export const login= async(userData) => {
    try {
        const response = await Api.post("/userAuth/login", userData);
        return response;

    } catch (error) {
        const err = error;
        errorHandler(err);
    }
}