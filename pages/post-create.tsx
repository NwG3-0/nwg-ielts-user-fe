import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const PostCreate = dynamic(() => import('@components/screens/Post/PostCreate').then((mod) => mod.PostCreate), {
  ssr: false,
})
const PostCreatePage: NextPage = () => {
  return (
    <div>
      <Header />
      <PostCreate />
    </div>
  )
}

export default PostCreatePage
