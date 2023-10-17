import Navbar from '@/components/navbar'
import { useSession } from 'next-auth/react';
import NavbarLogin from '@/components/navbarLogin';
import Contact from '@/components/contact/index'
import Footer from '@/components/footer';

export default function Kontak() {
    const { data: session } = useSession();
    return (
        <main>
            {session ? <NavbarLogin /> : <Navbar />}
            <Contact />
            <Footer />
        </main>
    )
}
