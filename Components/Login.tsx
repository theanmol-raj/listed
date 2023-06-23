'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

type Props = {}

function Login({}: Props) {
  return (
    <div className='flex w-full h-screen'>
            <div className=' md:w-1/3 lg:w-1/4 xl:w-2/5 hidden md:flex justify-center items-center flex-grow'>
                <h1 className=' text-white font-monty font-bold md:text-5xl lg:text-6xl xl:text-7xl'>Board.</h1>
            </div>
            <div className='md:w-2/3 w-full text-black lg:w-3/4 xl:w-3/5 bg-[#f5f5f5] flex justify-center items-center flex-grow '>
                <div className=' w-full max-w-sm'>
                    <h2 className=' font-bold text-4xl font-monty mb-1' >Sign In</h2>
                    <h3 className=' font-lato text-base'>Sign in to your account</h3>
                    <div className=' flex pt-7 space-x-6'>
                        <button onClick={() => signIn('google')} className=' rounded-[10px] flex items-center text-xs font-monty px-5 py-2 w-full bg-white space-x-1 '>
                            <img className=' w-[14px] aspect-square' src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
                            <span>Sign In with Google</span>
                        </button>
                        <button className=' rounded-[10px] flex items-center text-xs font-monty px-5 py-2 w-full bg-white space-x-1 '>
                            <img className=' w-[14px] aspect-square' src="https://img.icons8.com/office/16/mac-os.png" alt="google-logo"/>
                            <span>Sign In with Apple</span>
                        </button>
                    </div>
                    <div className=' bg-white rounded-[10px] mt-6'>
                        <div className=' p-[30px] flex flex-col space-y-[20px]'>
                            <div>
                                <h3 className=' font-lato text-base'>Email address</h3>
                                <input className='rounded-[10px] w-full mt-[10px] py-[10px] px-4 bg-[#f5f5f5]' />
                            </div>
                            <div >
                                <h3 className=' font-lato text-base'>Password</h3>
                                <input className='rounded-[10px] w-full mt-[10px] py-[10px] px-4 bg-[#f5f5f5]' />
                            </div>
                            <div >
                                <h3 className=' font-lato text-base text-[#346bd4]'>Forgot Password?</h3>
                            </div>
                            <div >
                                <button className='rounded-[10px] text-base font-monty font-bold w-full text-white bg-black py-2'>Sign In</button>
                            </div>

                        </div>

                    </div>
                    <p className=' text-[#858585] font-lato pt-[20px] text-centerar'>Don’t have an account? <a className=' text-[#346bd4]'>Register here</a></p>
                </div>

            </div>
        </div>
  )
}

export default Login