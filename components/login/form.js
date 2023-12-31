import React from 'react'

import { useSession, signIn, signOut } from "next-auth/react"

const form = () => {
    return (
        <div className='h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='bg-cyan-500 h-screen flex justify-center hidden md:flex'>
                    <img
                        src="assets/logo.svg"
                        className="w-full"
                        alt="Logo image"
                    />
                </div>
                <div className='bg-white h-screen py-40 flex justify-center items-center'>
                    <div className='w-full'>
                        <h1 className="px-12 text-3xl font-semibold mb-4">Log In</h1>
                        <form className='px-12'>
                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-base text-gray-600">
                                    Alamat Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />
                            </div>
                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-base text-gray-600">
                                    Password
                                </label>
                                <div className="relative flex">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:border-blue-500"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 flex items-center justify-end">
                                {/*Forgot password link*/}
                                <a href="#!">Forgot password?</a>
                            </div>
                            {/* Login button */}
                            <div className="text-center lg:text-left flex justify-center w-full">
                                <button
                                    type="button"
                                    className="w-full inline-block rounded-full bg-blue-400 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Login
                                </button>


                            </div>
                            {/* Separator between social media sign in and email/password sign in */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    OR
                                </p>
                            </div>
                            {/* Sign in section*/}
                            <div className="flex flex-row items-center justify-center">
                                <button
                                    type="button"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    <img
                                        src="assets/google.svg"
                                        className="mx-auto h-7 w-7"
                                    />
                                </button>
                                {/*Github */}
                                <button
                                    type="button"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    {/*Github*/}
                                    <img
                                        src="assets/github.svg"
                                        className="mx-auto h-8 w-8"
                                    />
                                </button>

                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <button className="inline-block h-8 px-4 bg-cyan-400 rounded text-white leading-8" onClick={() => signIn()}>Anohter...</button>
                            </div>
                            {/* Register link */}
                            <p className="mb-0 mt-10 pt-1 text-sm font-semibold text-center">
                                Don't have an account?
                                <a
                                    href="#!"
                                    className="text-blue-400 transition duration-150 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-400"
                                >
                                    Register
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default form