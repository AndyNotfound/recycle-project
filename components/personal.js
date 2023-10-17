import React from 'react'

const personal = () => {
    return (
        <div className='bg-white pt-28 px-6 mb-16'>
            <h1 className="text-2xl font-semibold mb-8 text-center">Personal Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src='/assets/personal_image.svg' />
                </div>
                <form className=''>
                    <h2 className='mb-2'>Info Akun</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className='mr-2'>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    NAMA PANGGILAN
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    NOMOR TELEPON
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    NAMA
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    EMAIL
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label
                                htmlFor="name" className="block text-base text-gray-600"
                            >
                                ALAMAT
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />

                        </div>
                    </div>
                    <h2 className='mb-2'>Social</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className='mr-2'>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    FACEBOOK
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name" className="block text-base text-gray-600"
                                >
                                    INSTAGRAM
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />

                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className="h-8 px-4 bg-gray-900 rounded-full text-white leading-8 mr-4">Submit</button>
                        <div className='flex justify-center items-center'>
                            <img src='/assets/x.svg' className='h-6 w-6' />
                            <button className="h-8 pr-4 leading-8">Clear All</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default personal