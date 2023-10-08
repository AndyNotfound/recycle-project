import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faBottleWater } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const jenis_sampah = () => {
    return (
        <div className="home-configurator bg-cyan-100">
            <div className="home__section home-configurator__features-section --light-blue">
                <div className="static-page__container px-10 py-20">
                    <h2 className="home__title text-center text-4xl text-cyan-500">
                        JENIS SAMPAH
                    </h2>
                    <p className='text-center'>Telusuri Ragam Sampah yang Kami Proses ulang.</p>
                    <div className="grid grid-cols-2 gap-4 mt-16 px-32">
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faFileLines} className="text-5xl text-blue-500" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Kertas
                            </p>
                            <p className="text-slate-500">
                                Koran, Buku Bekas, Kertas Putih/HVS, Kertas Warna/Duplek, Kertas Buram, Karton, Dll
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faBottleWater} className="text-5xl text-blue-500" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Plastik
                            </p>
                            <p className="text-slate-500">
                                Gelas Plastik, Botol Plastik, Perabot Plastik, Mainan Palstik, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Aluminium
                            </p>
                            <p className="text-slate-500">
                                Alma Tipis, Alma Tebal, Kaleng Bekas, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faLayerGroup} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Kaca
                            </p>
                            <p className="text-slate-500">
                                Botol Kaca, Gelas, Piring Kaca, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faFileLines} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Elektronik
                            </p>
                            <p className="text-slate-500">
                                TV, Laptop, Mesin Cuci, Kulkas, Kipas Angin, Handphone, AC, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faFileLines} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Besi dan Logam
                            </p>
                            <p className="text-slate-500">
                                Besi, Baja, Kuningan, Tembaga, Timah, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faFileLines} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Kompos
                            </p>
                            <p className="text-slate-500">
                                Limbah Tanaman, Sampah Rumah Tangga, Sisa Makanan, Dll.
                            </p>
                        </div>
                        <div className="flex items-center flex-col m-5 text-center">
                            <div className="logo mb-1 bg-white w-20 h-20 flex justify-center items-center rounded-full shadow-inner">
                                <FontAwesomeIcon icon={faFileLines} className="text-5xl" />
                            </div>
                            <p className="text-2xl mb-1 font-semibold">
                                Limbah Bahan Berbahaya dan Beracun
                            </p>
                            <p className="text-slate-500">
                                Obat Nyamuk/Pestisida, Oli Bekas, Minyak Jelanta, Sisa Tinta, Batu Baterai, Dll.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default jenis_sampah