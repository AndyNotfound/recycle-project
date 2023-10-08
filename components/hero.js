import React from 'react'

const hero = () => {
    return (
        <div className='h-custom bg-sky-500 text-white px-14 pt-44'>
            <h1 className='text-5xl mb-10'>Platform Unggulan <br></br> Untuk Distribusi Sampah</h1>
            <p className='text-lg mb-10'>Mengelola aset sampah Anda. Menyebarkan pengalaman terkait sampah.<br></br>
                Berkolaborasi dengan yang lain. Memamerkan usaha Anda. Membeli dan <br></br>
                menjual model pengelolaan sampah.</p>
            <div>
                <div className="button-container flex justify-end w-min text-white">
                    <button className="w-24 mr-1  h-11 px-4 bg-cyan-400 rounded">REGISTER</button>
                    <button className="w-24 h-11 px-4 bg-yellow-400 rounded">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default hero