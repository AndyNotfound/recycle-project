import React from 'react'

const hero = () => {
    return (
        <div className='h-screen bg-sky-500 text-white px-14 pt-44'>
            <h1 className='text-5xl mb-10'>Platform Unggulan <br></br> Untuk Distribusi Sampah</h1>
            <p className='text-lg mb-10'>Mengelola aset sampah Anda. Menyebarkan pengalaman terkait sampah.<br></br>
                Berkolaborasi dengan yang lain. Memamerkan usaha Anda. Membeli dan <br></br>
                menjual model pengelolaan sampah.</p>
            <div>
                <div className="button-container flex justify-end w-min text-white">
                    <button className="mr-1 flex items-center h-8 px-4 bg-cyan-400 rounded">REGISTER</button>
                    <button className="flex items-center h-8 px-4 bg-yellow-400 rounded">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default hero