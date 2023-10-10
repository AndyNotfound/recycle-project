import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Layanan from '@/components/layanan'
import Jenis_sampah from '@/components/jenis_sampah'
import Solution from '@/components/solution'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Layanan />
      <Jenis_sampah />
      <Solution />
    </main>
  )
}
