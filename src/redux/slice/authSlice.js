import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const getStoredUserInfo= ()=>{
    const storedUserInfo = localStorage.getItem('userInfo');
    try{
        return storedUserInfo ? JSON.parse(storedUserInfo) : null
    } catch(error){
        console.log("Error in parsing stored user info",error);
        localStorage.removeItem("userInfo");
        return null
    }
}


const initialState = {
    userInfo : getStoredUserInfo()
}


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUserInfo :(state,action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },
        logoutUser: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo")

        }
    }
})


export const { setUserInfo, logoutUser } = userSlice.actions
export default userSlice.reducer