import axios from "axios";
import Api from "../utils/axios";
import errorHandler from "./error";


export const category  = async () => {
    try {        
        const response = await axios.get('www.themealdb.com/api/json/v1/1/categories.php');
        return response;
        
    } catch (error) {
        const err = error
        errorHandler(err);
    }
}


