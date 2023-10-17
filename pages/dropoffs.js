import Navbar from '@/components/navbar';
import NavbarLogin from '@/components/navbarLogin';
import { useSession } from 'next-auth/react';
import Buttons from '@/components/pickup/button'
import MapComponent from '@/components/pickup/maps'
import Hero from '@/components/hero';
import Solution from '@/components/solution';
import Footer from '@/components/footer';

export default function Dropoff() {
    const { data: session } = useSession();
    return (
        <main>
            {session ? <NavbarLogin /> : <Navbar />}
            <Hero/>
            <h3 className="text-5xl text-[#1CAAD9] font-bold leading-tight tracking-tight text-center pt-20">Drop Off</h3>
            <p className='mb-10 text-center'>Antar langsung sampahmu ke <i>Recycling Center</i> terdekat.</p>
            <Buttons />
            <MapComponent />
            <Solution />
            <Footer />
        </main >
    )
}
