import Navbar from '@/components/navbar'
import { useSession } from 'next-auth/react';
import Personal from '@/components/personal';

export default function Pickup() {
    const { data: session } = useSession();
    return (
        <main>
            {session ? <NavbarLogin /> : <Navbar />}
            <Personal />
        </main >
    )
}
