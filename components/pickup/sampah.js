import React from 'react';
import PopupForm from '../popupForm';

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
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/plastik.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Plastik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/aluminium.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Aluminium</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/kaca.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Kaca</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/elektronik.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Elektronik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/besi.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">Besi dan Logam</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/kompos.svg' />
                                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Elektronik</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                        <div className="rounded-md bg-primary-100 p-4 text-primary flex items-center  min-w-min">
                            <div className='flex flex-col items-center w-2/5'>
                                <img className='w-12' src='/assets/limbah.svg' />
                                <h5 className="text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Limbah</h5>
                            </div>
                            <div className=' flex justify-center max-h-10 items-center w-3/5'>
                                    <PopupForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
