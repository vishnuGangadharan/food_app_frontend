import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/authSlice'
const store = configureStore({
    reducer:{
        authUser : userReducer
    }
})

export default store