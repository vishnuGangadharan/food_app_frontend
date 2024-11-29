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
            console.log('ffff', data);

            const response = await login(data)
            console.log('....', response);
            if (response?.status == 200) {
                dispatch(setUserInfo(response.data.data))
                toast.success(response.data.message)
                navigate('/')

            }

        } catch (error) {
            console.log('Error:', error);

        }
    };



    return (
        <div className="flex justify-center  absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            <div className="bg-blue-600 sm:w-[30%] p-8 sm:p-12 rounded-3xl shadow-2xl text-center backdrop-filter backdrop-blur-sm bg-opacity-5 border border-blue-500">
                <h2 className='text-white mb-5 font-semibold text-3xl'>Login</h2>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        {...register("email")}
                        className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
              hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md'
                        placeholder='Email'

                    />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    <input
                        type="password"
                        {...register("password")}
                        className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
              hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md'
                        placeholder='Password'
                        autoComplete="off"
                    />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    <div className="mt-5 self-center w-[50%]">
                        <button
                            type="submit"
                            className="bg-gradient-to-tr mt-2 mb-3 font-semibold from-pink-500 to-yellow-500 text-white shadow-lg w-full py-3 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <span className='text-white mt-3 '>don't have a account ?
                    <Link to='/signup' className='text-blue hover:font-semibold hover:text-green-700 m-5 cursor-pointer' >SignUp</Link> </span>
            </div>
        </div>
    )
}

export default Login
