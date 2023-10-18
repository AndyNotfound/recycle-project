import Hero from '@/components/hero'
import Navbar from '@/components/navbar';
import NavbarLogin from '@/components/navbarLogin';
import Solution from '@/components/solution'
import { useSession } from 'next-auth/react';
import Card from '@/components/pickup/sampah'
import Footer from '@/components/footer';

export default function Pickup() {
    const { data: session } = useSession();
    return (
        <main>
            {session ? <NavbarLogin /> : <Navbar />}
            <Hero />
            <Card />
            <Solution />
            <Footer />
        </main >
    )
}
