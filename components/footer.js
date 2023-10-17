import React from 'react'

const footer = () => {
    return (
        <div>
            <footer className='flex flex-col bg-slate-200'>
                <div className='text-2xl font-semibold mb-6 ml-28 pt-7'>
                    <h1>RECYCLE</h1>
                </div>
                <div className='container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4'>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mb-2 font-medium'>Kontak Kami</h2>
                        <div className='flex flex-col space-y-2'>
                            <p>Recycle@gmail.com</p>
                            <p>+628-6789-2342-23</p>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mb-2 font-medium'>Layanan</h2>
                        <div className='flex flex-col space-y-2'>
                            <a href='#'>Pick Up</a>
                            <a href='#'>Drop Off</a>
                            <a href='#'>Event</a>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mb-2 font-medium'>Solusi Kami</h2>
                        <div className='flex flex-col space-y-2'>
                            <a href='#'>For Everyone</a>
                            <a href='#'>For Business</a>
                            <a href='#'>For Corporate</a>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mb-2 font-medium'>Recycling</h2>
                        <div className='flex flex-col space-y-2'>
                            <a href='#'>Layanan</a>
                            <a href='#'>Blog</a>
                            <a href='#'>Dashboard</a>
                        </div>
                    </div>
                    <div className='flex justify-start items-center mb-5'>
                        <a href='#'>
                            <img src="assets/facebook.svg" className="mr-2 h-9"></img>
                        </a>
                        <a href='#'>
                            <img src="assets/github2.svg" className="mr-2 h-10"></img>
                        </a>
                        <a href='#'>
                            <img src="assets/twitter.svg" className="mr-2 h-8"></img>
                        </a>
                        <a href='#'>
                            <img src="assets/instagram.svg" className="mr-2 h-8"></img>
                        </a>
                    </div>
                </div>
                <div className='grid justify-center pt-6 lg:justify-between'>
                    <div className='border border-0 flex justify-start items-center mb-8 ml-28 mt-10'>
                        <img src="assets/language.svg" className="mr-2 h-6"></img>
                        <select className='bg-slate-200'>
                            <option value={1}>Indonesia</option>
                            <option value={2}>English</option>
                        </select>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13 mr-20">
                        <span className="dark:text-gray-400 flex items-center justify-end">Copyright © 2023. Enigma.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer