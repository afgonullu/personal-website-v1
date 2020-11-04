import Link from "next/link"
import { useRouter } from "next/router"
import { getSinglePost } from "../api/ghost"

type Post = {
  title: string
  html: string
  slug: string
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { post },
    revalidate: 10,
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default Post
