import React from 'react';

function Card(props) {
    return (
        <>
            <div className="w-screen md:p-6">
                <section>
                    <h3 className="text-5xl text-[#1CAAD9] font-bold leading-tight tracking-tight text-center pt-20">Pickup</h3>
                    <p className='mb-24 text-center'>Foto sampah daur ulangmu, upload, kolektor sampah terdekat akan menjemput, menimbang dan membayar sampahmu.</p>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/kertas.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Kertas</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/plastik.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Plastik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/aluminium.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Aluminium</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/kaca.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Kaca</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/elektronik.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Elektronik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/besi.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">Besi dan Logam</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/kompos.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Elektronik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/limbah.svg' />
                                <h5 className="text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Limbah</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >
                                    Pilih
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='px-12 mt-16'>
                        <form className=''>
                            <p className='text-xl my-4'>Upload Gambar</p>
                            <input type='file'></input>
                            <p className='text-xl my-4'>Informasi Penjemputan</p>
                            <input className='border' type='text'></input>
                            <p className='my-4'>Alamat</p>
                            <input className='border' type='text'></input>
                            <p className='my-4'>Tanggal dan Jam</p>
                            <input type='date'></input>
                            <p className='my-4'>Informasi Tambahan</p>
                            <input className='border' type='text'></input> <br></br>
                            <button className='my-4 p-2 rounded bg-cyan-500 text-white'>Pesan Sekarang</button>
                        </form>
                    </div>
                </section>
            </div>



        </>



    );
}

export default Card;
