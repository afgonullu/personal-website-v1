import Link from "next/link"
import React from "react"
import SiteNavbar from "./components/SiteNavbar/SiteNavbar"
import SectionHero from "./components/SectionHero/SectionHero"
import SectionPortfolio from "./components/SectionPortfolio/SectionPortfolio"
import { Container, Row, Col } from "react-bootstrap"
import { getFeaturedPostsByTag } from "./api/ghost"

type Post = {
  title: string
  slug: string
}

export const getStaticProps = async ({ params }) => {
  const blogPosts = await getFeaturedPostsByTag("blog")
  const portfolioPosts = await getFeaturedPostsByTag("portfolio")
  return {
    props: { blogPosts, portfolioPosts },
    revalidate: 10,
  }
}

const Home: React.FC<{ blogPosts: Post[]; portfolioPosts: Post[] }> = (
  props
) => {
  const { blogPosts, portfolioPosts } = props

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <SectionHero></SectionHero>
      <SectionPortfolio></SectionPortfolio>
      <Container>
        <Row>
          <Col>
            <h2>Latest Blog Posts</h2>
            <ul>
              {blogPosts.map((post, index) => {
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
          <Col>
            <h2>Latest Portfolio Posts</h2>
            <ul>
              {portfolioPosts.map((post, index) => {
                return (
                  <li key={post.slug}>
                    <Link
                      href="/portfolio/[slug]"
                      as={`/portfolio/${post.slug}`}
                    >
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
