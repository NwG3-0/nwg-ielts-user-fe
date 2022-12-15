import { Footer } from '@components/layouts/Footer'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const ReadingPage = dynamic(() => import('@components/screens/Reading').then((mod) => mod.ReadingPage), {
  ssr: false,
})
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <ReadingPage />
      <Footer />
    </div>
  )
}

export default Home
