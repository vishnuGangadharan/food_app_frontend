

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'
import { signUpSchema } from '../utils/validatios/Signup'
import { signUp } from '../api/user'
import { Link , useNavigate} from 'react-router-dom'
const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
        },
        mode: "onTouched"
    });
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await signUp(data)

            if (response?.status == 200) {
                toast.success(response.data.message)
                navigate('/login')
            }

        } catch (error) {
            console.log(error);

        }
    }

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?ga=GA1.1.985132408.1720016698&semt=ais_hybrid')",
    }}
  >
    <div className="rounded-lg shadow-xl p-8 w-full max-w-md bg-white/30 backdrop-blur-md">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Create an Account
      </h2>
      <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            name="name"
           {...register('name')}
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            name="phone"
             type="tel"
             {...register('phone')}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            name="email"
             type="email"
           {...register('email')}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
           {...register('password')}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        <button
          type="submit"
          className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
         <Link to="/login"
          className="text-green-600 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  </div>

  )
}

export default Signup



