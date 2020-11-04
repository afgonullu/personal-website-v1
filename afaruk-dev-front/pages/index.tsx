import Link from "next/link"
import React from "react"
import SiteNavbar from "./components/SiteNavbar/SiteNavbar"
import SectionHero from "./components/SectionHero/SectionHero"
import SectionPortfolio from "./components/SectionPortfolio/SectionPortfolio"
import { Container, Row, Col } from "react-bootstrap"
import { getAllPosts, getFeaturedPostsByTag } from "./api/ghost"

type Post = {
  title: string
  slug: string
}

export const getStaticProps = async ({ params }) => {
  const posts = await getFeaturedPostsByTag("blog")
  return {
    props: { posts },
    revalidate: 10,
  }
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <SectionHero></SectionHero>
      <SectionPortfolio></SectionPortfolio>
      <Container>
        <Row>
          <Col>
            <h2>Latest Posts</h2>
            <ul>
              {posts.map((post, index) => {
                return (
                  <li key={post.slug}>
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Home
