import React from "react"
import SiteNavbar from "./components/SiteNavbar/SiteNavbar"
import SectionHero from "./components/SectionHero/SectionHero"
import SectionProjects from "./components/SectionProjects/SectionProjects"
import SectionAbout from "./components/SectionAbout/SectionAbout"
import SectionWritings from "./components/SectionWritings/SectionWritings"
import SectionContact from "./components/SectionContact/SectionContact"
import SectionServices from "./components/SectionServices/SectionServices"
import SiteFooter from "./components/SiteFooter/SiteFooter"
import { getFeaturedPostsByTag } from "./api/ghost"

export type Post = {
  title: string
  slug: string
  tags: [{ name: string }]
  custom_excerpt: string
  html: string
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
      <SectionProjects portfolioPosts={portfolioPosts}></SectionProjects>
      <SectionAbout></SectionAbout>
      <SectionWritings blogPosts={blogPosts}></SectionWritings>
      <SectionServices></SectionServices>
      <SectionContact></SectionContact>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Home

{
  /* <Container>
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
      </Container> */
}
