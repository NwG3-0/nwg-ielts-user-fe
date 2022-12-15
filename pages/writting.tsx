import { Footer } from '@components/layouts/Footer'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const WrittingPage = dynamic(() => import('@components/screens/Writting').then((mod) => mod.WrittingPage), {
  ssr: false,
})
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <WrittingPage />
      <Footer />
    </div>
  )
}

export default Home
