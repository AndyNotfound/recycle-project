import Navbar from '@/components/navbar'
import Hero from '@/components/blog/hero'
import Box from '@/components/blog/article'

export default function Blog() {
    return (
        <main>
            <Navbar />
            <div className='p-28'>
                <Hero />
                <Box />
            </div>
        </main >
    )
}
