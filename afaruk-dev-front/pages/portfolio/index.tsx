import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Container } from "react-bootstrap"

export const getStaticProps = async ({ params }) => {
  const posts = await getPostsByTag("portfolio")
  console.log(posts)
  return {
    props: { posts },
    revalidate: 10,
  }
}

const Portfolio: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <Container>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>Portfolio Home</h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={post.slug}>
                <Link href="portfolio/[slug]" as={`/portfolio/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Portfolio
