const Contact = () => {
    return (
        <div className='bg-white pt-32'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="ml-12 mb-10">
                    <h1 className="text-2xl font-semibold mb-4 ">Kontak Kami</h1>
                    <div className="flex justify-start items-center mb-3">
                        <img src="assets/maps.svg" className="mr-2 h-10"></img>
                        <p>Indonesia</p>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                        <img src="assets/email.svg" className="mr-2 h-10"></img>
                        <p>Recycle@gmail.com</p>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                        <img src="assets/telepon.svg" className="mr-2 h-8"></img>
                        <p>+62 86789234223</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32660010.756335795!2d95.84273815131432!3d-2.2222474753839583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1697458081904!5m2!1sid!2sid"
                        width={500}
                        height={600}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="h-screen">
                    <div className="px-12">
                        <h1 className="text-2xl font-semibold mb-4 ">Hubungi Kami</h1>
                        <p className="mb-8">Kami selalu senang menerima pesan dari anda</p>
                    </div>
                    <form className='px-12'>
                        {/*Name input*/}
                        <div className="mb-4">
                            <label
                                htmlFor="name" className="block text-base text-gray-600"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />

                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base text-gray-600">
                                Alamat Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        {/*Number input*/}
                        <div className="mb-4">
                            <label
                                htmlFor="telepon" className="block text-base text-gray-600"
                            >
                                Nomor Telepon
                            </label>
                            <input
                                type="tel"
                                id="telepon"
                                name="telepon"
                                className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="pesan" className="block text-base text-gray-600"
                            >
                                Pesan
                            </label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                className="w-full border-solid border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            ></textarea>
                        </div>
                        <div className="text-center lg:text-left flex justify-end w-full">
                            <button
                                type="button"
                                className="w-2/12 inline-block rounded-lg bg-blue-400 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init=""
                                data-te-ripple-color="light"
                            >
                                Kirim
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact