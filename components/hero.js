import Anchor from "./anchor"
import styles from '@/styles/home.module.css'

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
            <Anchor additionalStyles={styles.anchor}/>
        </>
    )
}

export default Hero