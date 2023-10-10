import React from 'react'

const layanan = () => {
    return (
        <>
            {/* Container for demo purpose */}
            <div className="container bg-white border rounded my-24 mx-auto md:p-8 relative md:-mt-24">
                {/* Section: Design Block */}
                <section className="text-center">
                    <div className="grid lg:grid-cols-3 lg:gap-x-12 gap-8">
                        <div className="mb-16 lg:mb-0 h-64 min-h-full">
                            <div className="flex justify-center items-center h-full rounded-lg bg-white border dark:bg-neutral-700">
                                <h3 className="text-2xl font-bold text-primary dark:text-primary-400">
                                    Pick Up
                                </h3>
                            </div>
                        </div>
                        <div className="mb-16 lg:mb-0 h-64 min-h-full">
                            <div className="flex justify-center items-center h-full rounded-lg bg-white border dark:bg-neutral-700">
                                <h3 className="text-2xl font-bold text-primary dark:text-primary-400">
                                    Drop Off
                                </h3>
                            </div>
                        </div>
                        <div className="mb-16 lg:mb-0 h-64 min-h-full">
                            <div className="flex justify-center items-center h-full rounded-lg bg-white border dark:bg-neutral-700">
                                <h3 className="text-2xl font-bold text-primary dark:text-primary-400">
                                    Reward
                                </h3>
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

export default layanan