import React, { useState } from 'react';
import styles from "@/styles/pickup.module.css";

const PopupForm = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='box'>
            <button onClick={openPopup} className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Pilih</button>
            
            {isPopupOpen && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <div className='flex justify-end'>
                            <button onClick={closePopup} className="text-black text-2xl bg-slate-100 border-2 rounded-full">
                        &times;
                        </button>
                        </div>
                        <form action="/" method="post">
                            <div className="flex flex-col">
                                <label
                                    className="mb-1 text-sm text-gray-900 text-start"
                                    htmlFor="gambar"
                                >
                                    Upload Gambar
                                </label>
                                <input
                                    className="border py-2 px-3 text-grey-800"
                                    type="file"
                                    name="gambar"
                                    id="gambar"
                                />
                            </div>
                            <h1 className="block w-full text-start text-gray-800 text-base font-bold mt-5 mb-3">
                                Informasi Penjemputan
                            </h1>
                            <div className="flex flex-col mb-4">
                                <label
                                    className="mb-1 text-sm text-gray-900 text-start"
                                    htmlFor="alamat"
                                >
                                    Alamat
                                </label>
                                <textarea
                                    id="alamat"
                                    name="alamat"
                                    className="border py-2 px-3 text-grey-800"
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-1 text-sm text-gray-900 text-start" htmlFor="waktu">
                                    Tanggal dan Jam
                                </label>
                                <input
                                    className="border py-2 px-3 text-grey-800"
                                    type="date"
                                    name="waktu"
                                    id="waktu"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label
                                    className="mb-1 text-sm text-gray-900 text-start"
                                    htmlFor="info"
                                >
                                    Informasi Tambahan
                                </label>
                                <textarea
                                    id="info"
                                    name="info"
                                    className="border py-2 px-3 text-grey-800"
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <button
                                className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-sm mx-auto p-2 rounded-lg"
                                type="submit"
                            >
                                Pesan Sekarang
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupForm;
