import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic<any>(() => import('@components/layouts/Header').then((mod) => mod.Header), {
  ssr: false,
})
const HomePage = dynamic<any>(() => import('@components/screens/Home').then((mod) => mod.HomePage), {
  ssr: false,
})
const Footer = dynamic<any>(() => import('@components/layouts/Footer').then((mod) => mod.Footer), {
  ssr: false,
})
const MenuWeb = dynamic<any>(() => import('@components/layouts/MenuWeb').then((mod) => mod.MenuWeb), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MenuWeb />
      <HomePage />
      <Footer />
    </>
  )
}

export default Home
