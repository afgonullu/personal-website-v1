import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import { useRouter } from "next/router"
// import { getPostsByTag } from "../api/ghost"

type Post = {
  title: string
  html: string
  slug: string
}

export const getStaticProps = async ({ params }) => {
  //   const posts = await getPostsByTag("blog")
  const text = "hello"
  return {
    props: { text },
    revalidate: 10,
  }
}

const Post: React.FC<{ text: string }> = (props) => {
  const { text } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <div>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>Workflow</h1>
        {/* <ul>
        {posts.map((post, index) => {
          return (
            <li key={post.slug}>
              <Link href="blog/[slug]" as={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul> */}
      </div>
    </React.Fragment>
  )
}

export default Post
