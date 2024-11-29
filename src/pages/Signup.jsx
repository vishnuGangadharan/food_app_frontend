import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'
import { signUpSchema } from '../utils/validatios/Signup'
import { signUp } from '../api/user'
import { Link } from 'react-router-dom'
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


    const onSubmit = async (data) => {
        console.log(data);
        try {
            console.log(data);
            const response = await signUp(data)
            console.log('resd', response);

            console.log('....', response?.data.message);
            if (response?.status == 200) {
                toast.success(response.data.message)
                navigate('/otp', {
                    state: {
                        email: data.email,
                        name: data.name,
                        phone: data.phone,
                        password: data.password
                    }
                })
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="flex justify-center absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="bg-blue-600 sm:w-[30%] p-8 sm:p-12 rounded-3xl shadow-2xl text-center backdrop-filter backdrop-blur-sm bg-opacity-5 border border-blue-500">
                <h2 className="text-white mb-5 font-semibold text-3xl">Sign Up</h2>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="name"
                        {...register('name')}
                        className="mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md"
                        placeholder="Name"
                        type="text"
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <input
                        name="email"
                        type="email"
                        {...register('email')}
                        className="mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md"
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <input
                        name="phone"
                        type="tel"
                        {...register('phone')}
                        className="mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md"
                        placeholder="Phone"
                    />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className="mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md"
                        placeholder="Password"
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <div className="mt-5 self-center w-[50%]">
                        <button
                            type="submit"
                            className="bg-gradient-to-tr mt-2 mb-3 font-semibold from-pink-500 to-yellow-500 text-white shadow-lg w-full py-3 rounded-full"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <span className="text-white mt-3">
                    Already have an account?
                    <Link to="/login" className="text-blue hover:font-semibold hover:text-green-700 m-5">Login</Link>
                </span>
            </div>
        </div>

    )
}

export default Signup
