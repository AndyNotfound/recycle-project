const Hero = () => {
    return (
        <>
            <div className='h-120vh bg-sky-500 text-white px-14 pb-32 relative top-14 flex'>
                <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                    <div className="mb-12 lg:mb-0">
                        <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">
                            Platform Unggulan <br />
                            <span className="text-success dark:text-success-400">
                                Untuk Distribusi Sampah
                            </span>
                        </h2>
                        <p className='text-lg mb-10'>Mengelola aset sampah Anda. Menyebarkan pengalaman terkait sampah.<br></br>
                            Berkolaborasi dengan yang lain. Memamerkan usaha Anda. Membeli dan <br></br>
                            menjual model pengelolaan sampah.</p>
                        <div className="button-container flex justify-end w-min text-white">
                            <button className="w-40 mr-1  h-11 px-4 bg-cyan-400 rounded">JOIN FOR FREE</button>
                            <button className="w-40 h-11 px-4 bg-yellow-400 rounded">SEE PLANS</button>
                        </div>
                    </div>
                    <div className="mb-12 lg:mb-0 flex justify-end">
                        <img src="assets/hero2.svg" style={{ height: '500px' }} />
                    </div>
                </div>
            </div>
            <div className="min-h-64 container bg-white border rounded my-24 mx-auto md:p-8 relative md:-mt-12">
                {/* Section: Design Block */}
                <section className="text-center h-full">
                    <div className="h-full grid lg:grid-cols-3 lg:gap-x-12 gap-8">
                        <div className="border-solid border-2 flex justify-center rounded-lg bg-white dark:bg-neutral-700 text-left">
                            <div className="p-6 flex items-center flex-col justify-center">
                                <div className='mb-4'>
                                    <img src="assets/1.svg" />
                                </div>
                                <h5 className="text-center text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                    Drop Off
                                </h5>
                            </div>
                        </div>
                        <div className="border-solid border-2 flex justify-center rounded-lg bg-white dark:bg-neutral-700 text-left">
                            <div className="p-6 flex flex-col items-center justify-center">
                                <div className='mb-4'>
                                    <img src="assets/2.svg" />
                                </div>
                                <h5 className="text-center text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                    Pick Up
                                </h5>
                            </div>
                        </div>
                        <div className="border-solid border-2 flex justify-center rounded-lg bg-white dark:bg-neutral-700 text-left rounded">
                            <div className="p-6 flex flex-col items-center justify-center">
                                <div className='mb-4'>
                                    <img src="assets/3.svg" />
                                </div>
                                <h5 className="text-center text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                    Reward
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    )
}

export default Hero