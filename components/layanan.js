import React from 'react'

const layanan = () => {
    return (
        <div className="relative mx-auto bg-white p-12 h-80 w-11/12 rounded -mt-28 mb-32 flex justify-around shadow-xl">
            <div className="home-features__item border rounded p-2">
                <img width="220" height="120" loading="lazy" className="home-features__image rounded" src="https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <h2 className="home-features__title mt-4 text-center">
                    Pick Up
                </h2>
            </div>
            <div className="home-features__item border rounded p-2">
                <img width="220" height="120" loading="lazy" className="home-features__image rounded" src="https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <h2 class="home-features__title mt-4 text-center">
                    Drop Off
                </h2>
            </div>
            <div className="home-features__item border rounded p-2">
                <img width="220" height="120" loading="lazy" className="home-features__image rounded" src="https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <h2 class="home-features__title mt-4 text-center">
                    Reward
                </h2>
            </div>
        </div>
    )
}

export default layanan