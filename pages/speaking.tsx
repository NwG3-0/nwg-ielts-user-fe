import { Footer } from '@components/layouts/Footer'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const SpeakingPage = dynamic(() => import('@components/screens/Speaking').then((mod) => mod.SpeakingPage), {
  ssr: false,
})
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <SpeakingPage />
      <Footer />
    </div>
  )
}

export default Home
