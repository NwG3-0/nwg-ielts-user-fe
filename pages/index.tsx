import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const HomePage = dynamic(() => import('@components/screens/Home/index').then((mod) => mod.HomePage), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}

export default Home
