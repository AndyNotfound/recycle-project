import Navbar from '@/components/navbar'
import Buttons from '@/components/pickup/button'
import MapComponent from '@/components/pickup/maps'

export default function Pickup() {
    return (
        <main>
            <Navbar />
            <h3 className="text-5xl text-[#1CAAD9] font-bold leading-tight tracking-tight text-center pt-20">Drop Off</h3>
            <p className='mb-10 text-center'>Antar langsung sampahmu ke <i>Recycling Center</i> terdekat.</p>
            <Buttons />
            <MapComponent />
        </main >
    )
}
