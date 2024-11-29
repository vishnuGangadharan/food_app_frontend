


import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'
import { login } from '../api/user'
import { loginSchema } from '../utils/validatios/Signup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../redux/slice/authSlice'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onTouched'
    });



    const onSubmit = async (data) => {
        try {

            const response = await login(data)
            if (response?.status == 200) {
                localStorage.setItem('token',response.data.token)
                dispatch(setUserInfo(response.data.data))
                toast.success(response.data.message)
                navigate('/')

            }

        } catch (error) {
            console.log('Error:', error);

        }
    };


  return (
    <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?ga=GA1.1.985132408.1720016698&semt=ais_hybrid')",
      }}
    >
      <div className="rounded-2xl shadow-xl p-8 w-full max-w-md bg-white/30 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Welcome Back!
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
                type="password"
               {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to='/signup' 
            className="text-green-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
