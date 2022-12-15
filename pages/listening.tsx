import { Footer } from '@components/layouts/Footer'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const ListeningPage = dynamic(() => import('@components/screens/Listening').then((mod) => mod.ListeningPage), {
  ssr: false,
})
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <ListeningPage />
      <Footer />
    </div>
  )
}

export default Home
