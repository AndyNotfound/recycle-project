const Hero = () => {
    return (
        <>
            <div className='h-custom bg-sky-500 text-white px-14 pt-32'>
                <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                    <div className="mb-12 lg:mb-0">
                        <h2 className="my-12 text-5xl font-bold leading-tight tracking-tight">
                            Platform Unggulan <br />
                            <span className="text-success dark:text-success-400">
                                Untuk Distribusi Sampah
                            </span>
                        </h2>
                        <p className='text-lg mb-10'>Mengelola aset sampah Anda. Menyebarkan pengalaman terkait sampah.<br></br>
                            Berkolaborasi dengan yang lain. Memamerkan usaha Anda. Membeli dan <br></br>
                            menjual model pengelolaan sampah.</p>
                        <div className="button-container flex justify-end w-min text-white">
                            <button className="w-24 mr-1  h-11 px-4 bg-cyan-400 rounded">REGISTER</button>
                            <button className="w-24 h-11 px-4 bg-yellow-400 rounded">LOGIN</button>
                        </div>
                    </div>
                    <div className="mb-12 lg:mb-0">

                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero