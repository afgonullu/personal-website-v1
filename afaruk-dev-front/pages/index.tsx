import Link from "next/link"
import React from "react"
import SiteNavbar from "./components/SiteNavbar/SiteNavbar"
import SectionHero from "./components/SectionHero/SectionHero"
import { Container, Row, Col } from "react-bootstrap"

const { CONTENT_API_KEY, BLOG_URL } = process.env

type Post = {
  title: string
  slug: string
}

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tag:blog`
  ).then((res) => res.json())

  console.log(res)
  const titles = res.posts

  return titles
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()
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
