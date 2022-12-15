import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const PostCreate = dynamic(() => import('@components/screens/Post/PostCreate').then((mod) => mod.PostCreate), {
  ssr: false,
})
const Footer = dynamic(() => import('@components/layouts/Footer/index').then((mod) => mod.Footer), {
  ssr: false,
})
const PostCreatePage: NextPage = () => {
  return (
    <div>
      <Header />
      <PostCreate />
      <Footer />
    </div>
  )
}

export default PostCreatePage
