import Navbar from '@/components/navbar'
import Hero from '@/components/blog/hero'
import Container from '@/components/blog/container'
import Article from '@/components/blog/article'

export default function Blog() {
    return (
        <main>
            <Navbar />
            <div className='p-28'>
                <Hero />
                <Container />
                <Article />
            </div>
        </main >
    )
}
