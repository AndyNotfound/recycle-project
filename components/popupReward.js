import React, { useState } from 'react';
import styles from "@/styles/pickup.module.css";

const PopupReward = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='box'>
            <button onClick={openPopup} className="inline-block rounded bg-[#1CAAD9] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#1CAAD9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#1CAAD9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#1CAAD9] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Tukar
            </button>

            {isPopupOpen && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <div className='flex justify-end'>
                            <button onClick={closePopup} className="text-black text-2xl bg-slate-100 border-2 rounded-full">
                                &times;
                            </button>
                        </div>
                        <div className='pl-4'>
                            <h1 className="block w-full text-start text-gray-800 text-xl font-bold mb-3">
                                Keterangan Voucher
                            </h1>
                            <div className="flex flex-col mb-4">
                                <p className='font-semibold'>VOUCHER PULSA</p>
                                <p>PULSA REGULER 5000</p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <p className='font-semibold'>MASA BERLAKU</p>
                                <p>7 HARI DARI  TANGGAL PENUKARAN  JAM 00:00 </p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <p className='font-semibold'>KETERANGAN</p>
                                <p>PULSA DAPAT DIGUNAKAN KE SEMUA OPERATOR</p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <p className='font-semibold'>SYARAT DAN KETENTUAN</p>
                                <ol className="list-decimal pl-6">
                                    <li>Hanya Berlaku 1 Kali Penukaran setiap minggu.</li>
                                    <li>Pihak kami dapat menghapus voucer tanpa pemberitahuan.</li>
                                    <li>Satu voucer hanya untuk satu kali penukaran.</li>
                                    <li>Jika masa berlaku habis maka akan di hapus dan akan mendapat pemberitahuan dari sistem kami.</li>
                                </ol>
                            </div>
                            <div className='flex justify-end'>
                                <p>Stok 1000</p>
                            </div>
                            <div className='flex justify-end'>
                            <div className='text-xl font-bold'>
                                <p>729 Poin</p>
                                </div>
                            <button
                                className="bg-teal-400 hover:bg-teal-600 text-white uppercase text-sm ml-auto mr-0 p-2 rounded-lg"
                                type="submit"
                            >
                                800 Poin
                            </button>
                            </div>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupReward;
