import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const WordTest = dynamic(() => import('@components/screens/Examination/WordTest').then((mod) => mod.WordTest), {
  ssr: false,
})
const Footer = dynamic(() => import('@components/layouts/Footer/index').then((mod) => mod.Footer), {
  ssr: false,
})
const PostPage: NextPage = () => {
  return (
    <div>
      <Header />
      <WordTest />
      <Footer />
    </div>
  )
}

export default PostPage
