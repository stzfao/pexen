import React, { useEffect } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { UserAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { signInWithGoogle, user } = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='flex flex-col background-blur-sm  p-10 rounded-2xl w-full sm:w-96'>
            <div className='flex justify-center'>
                <span className='text-3xl font-bold text-center'>Get started with your test, fast.</span>
            </div>
            <div className='flex justify-center '>
                <div className='border-2 w-40 border-indigo-400 mt-8 m-12'></div>
            </div>

            {user?.email ?
                <button onClick={() => { navigate("/submitimage") }} className='flex flex-wrap items-center justify-center rounded-full p-4 mx-4  bg-blue-50 hover:bg-transparent duration-50 hover:outline hover:outline-slate-200 duration-100'>
                    <span className='p-2 text-lg'>Register your face</span>
                </button>
                : <div className='flex flex-wrap justify-center'>
                    <button onClick={handleGoogleSignin} className='flex flex-wrap items-center justify-center rounded-full p-4 px-6 mx-4  bg-blue-50 hover:bg-transparent duration-50 hover:outline hover:outline-slate-200 duration-100'>
                        <span className='p-2'>
                            <FaGoogle />
                        </span>
                        <span className='p-2 text-lg'>Sign in with Google</span>
                    </button>
                    <div className='flex justify-center p-4 text-slate-600 text-center'>
                        <span>Sign in with the account <a href='/about'><u>you received your test link at.</u></a></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login;