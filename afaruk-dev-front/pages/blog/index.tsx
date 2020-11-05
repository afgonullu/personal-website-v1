import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import { getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Container } from "react-bootstrap"

export const getStaticProps = async ({ params }) => {
  const posts = await getPostsByTag("blog")
  return {
    props: { posts },
    revalidate: 10,
  }
}

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <Container>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>Blog Home</h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={post.slug}>
                <Link href="blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </React.Fragment>
  )
}

export default Blog
