import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@components/layouts/Header/index').then((mod) => mod.Header), {
  ssr: false,
})
const Post = dynamic(() => import('@components/screens/Post/index').then((mod) => mod.Post), {
  ssr: false,
})
const PostPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Post />
    </div>
  )
}

export default PostPage
