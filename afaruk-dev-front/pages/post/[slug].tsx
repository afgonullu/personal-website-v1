import Link from "next/link"
// import styles from "../../styles/Home.module.scss"
import { useRouter } from "next/router"

const { CONTENT_API_KEY, BLOG_URL } = process.env

type Post = {
  title: string
  html: string
  slug: string
}

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,reading_time,html`
  ).then((res) => res.json())

  const posts = res.posts

  return posts[0]
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
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
