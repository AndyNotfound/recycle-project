import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Jenis_sampah from '@/components/jenis_sampah'
import Solution from '@/components/solution'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Jenis_sampah />
      <Solution />
    </main>
  )
}
