import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Header = dynamic<any>(() => import('@components/layouts/Header').then((mod) => mod.Header), {
  ssr: false,
})
const Post = dynamic<any>(() => import('@components/screens/Post').then((mod) => mod.Post), {
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
