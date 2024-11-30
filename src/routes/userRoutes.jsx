import React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import Spinner from '../components/Spinner';

const SignUp = lazy(()=> import("../pages/Signup"))
const Login = lazy(()=> import("../pages/Login"))
const Home = lazy(()=> import("../pages/Home"))
const CategoryDishes = lazy(()=> import("../pages/CategoryDishes"))
const Review = lazy(()=> import("../pages/Review"))
const UserLogout = lazy(()=> import("../protectRoutes/UserLogout"))
const UserLogin = lazy(()=> import("../protectRoutes/UserLogin"))
const ProfilePage =  lazy(()=> import("../pages/Profile"))


const userRoutes = () => {
  return (
    <Suspense fallback={ <Spinner/>}>
      <Routes>
      <Route element={<UserLogout/>}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<UserLogin/>}>
        <Route path="/" element={<Home />} />
        <Route path="/dishes/:category" element={<CategoryDishes />} />
        <Route path="/review" element={<Review />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Route>
      </Routes>
    </Suspense>

  )
}

export default userRoutes
