import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic<any>(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const PostCreate = dynamic<any>(() => import('@components/screens/Post/PostCreate').then((mod) => mod.PostCreate), {
  ssr: false,
})
const Footer = dynamic<any>(() => import('@components/layouts/Footer/index').then((mod) => mod.Footer), {
  ssr: false,
})

const PostCreatePage: NextPage = () => {
  return (
    <>
      <Header />
      <PostCreate />
      <Footer />
    </>
  )
}

export default PostCreatePage
