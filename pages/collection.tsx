import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const Collection = dynamic(() => import('@components/screens/Collection/index').then((mod) => mod.Collection), {
  ssr: false,
})
const Footer = dynamic(() => import('@components/layouts/Footer/index').then((mod) => mod.Footer), {
  ssr: false,
})
const PostPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Collection />
      <Footer />
    </div>
  )
}

export default PostPage
