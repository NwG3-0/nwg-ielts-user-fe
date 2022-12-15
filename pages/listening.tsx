import { Footer } from '@components/layouts/Footer'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic<any>(() => import('@components/layouts/Header').then((mod) => mod.Header), {
  ssr: false,
})
const ListeningPage = dynamic<any>(() => import('@components/screens/Listening').then((mod) => mod.ListeningPage), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ListeningPage />
      <Footer />
    </>
  )
}

export default Home
