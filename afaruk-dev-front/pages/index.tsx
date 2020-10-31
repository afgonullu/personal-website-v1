import Head from "next/head"
// import styles from "../styles/Home.module.scss"
import Link from "next/link"
import { Container, Row, Col, Button } from "react-bootstrap"

const { CONTENT_API_KEY, BLOG_URL } = process.env

type Post = {
  title: string
  slug: string
}

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time`
  ).then((res) => res.json())

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
    <Container>
      <Row>
        <Col>
          <h1>Hello, I am A Faruk Gonullu</h1>
          <ul>
            {posts.map((post, index) => {
              return (
                <li key={post.slug}>
                  <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col>
          <Button primary>Deneme</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
