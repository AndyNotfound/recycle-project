import React from 'react'

const formReg = () => {
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
                        <h1 className="px-12 text-3xl font-semibold mb-4 ">Daftar Akun</h1>
                        <form className='px-12'>
                                {/*Name input*/}
                                <div className="mb-4">
                                    <label
                                       htmlFor="name" className="block text-base text-gray-600"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                        autoComplete="off"
                                    />
                                    
                                </div>
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
                            {/*Number input*/}
                            <div className="mb-4">
                                    <label
                                       htmlFor="telepon" className="block text-base text-gray-600"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        id="telepon"
                                        name="telepon"
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
                            {/* daftar button */}
                            <div className="text-center lg:text-left flex justify-center w-full">
                                <button
                                    type="button"
                                    className="w-full inline-block rounded-full bg-blue-400 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Daftar
                                </button>


                            </div>
                            {/* Register link */}
                            <p className="mb-0 mt-10 pt-1 text-sm font-semibold text-center">
                                Already have a account?
                                <a
                                    href="#!"
                                    className="text-blue-400 transition duration-150 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-400"
                                >
                                    Log In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default formReg