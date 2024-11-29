import React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";


const SignUp = lazy(()=> import("../pages/Signup"))
const Login = lazy(()=> import("../pages/Login"))
const Home = lazy(()=> import("../pages/Home"))
const CategoryDishes = lazy(()=> import("../pages/CategoryDishes"))

const userRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dishes/:category" element={<CategoryDishes />} />

      </Routes>
    </Suspense>

  )
}

export default userRoutes
