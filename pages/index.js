import Navbar from '@/components/navbar';
import NavbarLogin from '@/components/navbarLogin';
import { useSession } from 'next-auth/react';
import Hero from '@/components/hero'
import Jenis_sampah from '@/components/jenis_sampah'
import Solution from '@/components/solution'
import Footer from '@/components/footer';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      {session ? <NavbarLogin /> : <Navbar />}
      <Hero />
      <Jenis_sampah />
      <Solution />
      <Footer />
    </main>
  )
}
